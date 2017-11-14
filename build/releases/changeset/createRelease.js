const semver = require('semver');

/*
  This flattens an array of Version objects into one object that can be used to create the changelogs
  and the publish commit messages.

  Dependents will be calculated and added to releases, then final versions will be calculated.

  It's output will look like

  {
    releases: [{
      name: 'package-a',
      version: '2.0.0',                // actual version being released
      commits: ['fc4229d'],            // filtered to ones for this pkg
                                       // (used in changelogs)
      dependencies: ['package-c']      // list of dependencies that will need to be updated
    },
    {
      name: 'package-b'
      version: '1.1.0',
      commits: ['fc4229d'],           // these would be the commits that caused bumps
      dependencies: ['package-a']
    },
    {
      name: 'package-c'
      version: '1.0.1',
      commits: ['fc4229d'],
      dependencies: ['package-b']
    }]

    changesets: [<Changeset>] // References to all the changesets used to build Release
                              // to be able to look up summary and release notes
                              // information when building changelogs
  }
*/

function getCurrentVersion(packageName, allPackages) {
  return allPackages.find(pkg => pkg.name === packageName).config.version;
}

// returns which bump type is bigger (bumpA can be undefined)
function maxBumpType(bumpA, bumpB) {
  if (bumpA === 'major' || bumpB === 'major') return 'major';
  if (bumpA === 'minor' || bumpB === 'minor') return 'minor';
  if (bumpA === 'patch' || bumpB === 'patch') return 'patch';
  return 'none';
}

// Takes an array of Changesets and returns a flat list of actual releases with only one entry per
// package. i.e [{ name:'', type:'', commits: ['', ''], dependencies: []}, ]
function flattenReleases(changesets) {
  const flattened = [];
  const combined = [];

  changesets.forEach(changeset => {
    changeset.releases.forEach(release => {
      combined.push({
        name: release.name,
        type: release.type,
        commit: changeset.commit,
      });
    });

    changeset.dependents.forEach(dependent => {
      combined.push({
        name: dependent.name,
        type: dependent.type,
        commit: changeset.commit,
      });
    });
  });

  combined.forEach(release => {
    const { name, type, commit } = release;
    const foundBefore = flattened.find(pkg => pkg.name === name);

    if (!foundBefore) {
      flattened.push({ name, type, commits: [commit] });
    } else {
      foundBefore.type = maxBumpType(foundBefore.type, type);
      foundBefore.commits.push(commit);
    }
  });

  return flattened;
}

function createRelease(changesets, allPackages) {
  // First, combine all the changeset.releases into one useful array
  const flattenedReleases = flattenReleases(changesets);

  // Then add in the dependents to the releases
  // const allReleases = addDependentReleases(flattenedReleases)

  const allReleases = flattenedReleases
    // do not update none packages
    .filter(release => release.type !== 'none')
    // get the current version for each package
    .map(release => ({
      ...release,
      version: getCurrentVersion(release.name, allPackages),
    }))
    // update to new version for each package
    .map(release => ({
      ...release,
      version: semver.inc(release.version, release.type),
    }))
    // strip out type field
    .map(({ type, ...rest }) => rest);

  return {
    releases: allReleases,
    changesets,
  };
}

module.exports = createRelease;
