# @findable/analytics

## 5.0.0
- [major] [76299208e6](https://github.com/fnamazing/uiKit/commits/76299208e6):

  - Drop ES5 from all the flow modules

  ### Dropping CJS support in all @atlaskit packages

  As a breaking change, all @atlaskit packages will be dropping cjs distributions and will only distribute esm. This means all distributed code will be transpiled, but will still contain `import` and
  `export` declarations.

  The major reason for doing this is to allow us to support multiple entry points in packages, e.g:

  ```js
  import colors from `@findable/theme/colors`;
  ```

  Previously this was sort of possible for consumers by doing something like:

  ```js
  import colors from `@findable/theme/dist/esm/colors`;
  ```

  This has a couple of issues. 1, it treats the file system as API making internal refactors harder, we have to worry about how consumers might be using things that aren't *actually* supposed to be used. 2. We are unable to do this *internally* in @atlaskit packages. This leads to lots of packages bundling all of theme, just to use a single color, especially in situations where tree shaking fails.

  To support being able to use multiple entrypoints internally, we unfortunately cannot have multiple distributions as they would need to have very different imports from of their own internal dependencies.

  ES Modules are widely supported by all modern bundlers and can be worked around in node environments.

  We may choose to revisit this solution in the future if we find any unintended condequences, but we see this as a pretty sane path forward which should lead to some major bundle size decreases, saner API's and simpler package architecture.

  Please reach out to #fabric-build (if in Atlassian) or create an issue in [Design System Support](https://ecosystem.atlassian.net/secure/CreateIssue.jspa?pid=24670) (for external) if you have any questions or queries about this.

## 4.0.7
- Updated dependencies [58b84fa](https://github.com/fnamazing/uiKit/commits/58b84fa):
  - @findable/docs@6.0.0

## 4.0.6
- [patch] Adds missing implicit @babel/runtime dependency [b71751b](https://github.com/fnamazing/uiKit/commits/b71751b)

## 4.0.4
- [patch] update the dependency of react-dom to 16.4.2 due to vulnerability in previous versions read https://reactjs.org/blog/2018/08/01/react-v-16-4-2.html for details [a4bd557](https://github.com/fnamazing/uiKit/commits/a4bd557)
- [none] Updated dependencies [a4bd557](https://github.com/fnamazing/uiKit/commits/a4bd557)

## 4.0.3
- [patch] Updated dependencies [acd86a1](https://github.com/fnamazing/uiKit/commits/acd86a1)
  - @findable/docs@5.0.2

## 4.0.2
- [patch] Add a SSR test for every package, add react-dom and build-utils in devDependencies [7e331b5](https://github.com/fnamazing/uiKit/commits/7e331b5)
- [none] Updated dependencies [7e331b5](https://github.com/fnamazing/uiKit/commits/7e331b5)

## 4.0.1
- [patch] Move analytics tests and replace elements to core [49d4ab4](https://github.com/fnamazing/uiKit/commits/49d4ab4)
- [none] Updated dependencies [49d4ab4](https://github.com/fnamazing/uiKit/commits/49d4ab4)
  - @findable/docs@5.0.1

## 4.0.0

- [major] Updates to React ^16.4.0 [7edb866](https://github.com/fnamazing/uiKit/commits/7edb866)
- [major] Updated dependencies [563a7eb](https://github.com/fnamazing/uiKit/commits/563a7eb)
  - @findable/docs@5.0.0
- [major] Updated dependencies [7edb866](https://github.com/fnamazing/uiKit/commits/7edb866)
  - @findable/docs@5.0.0

## 3.0.6
- [patch] Fix $FlowFixMe and release packages [25d0b2d](https://github.com/fnamazing/uiKit/commits/25d0b2d)
- [none] Updated dependencies [25d0b2d](https://github.com/fnamazing/uiKit/commits/25d0b2d)

## 3.0.5
- [patch] Update changelogs to remove duplicate [cc58e17](https://github.com/fnamazing/uiKit/commits/cc58e17)
- [none] Updated dependencies [cc58e17](https://github.com/fnamazing/uiKit/commits/cc58e17)
  - @findable/docs@4.1.1

## 3.0.4
- [none] Updated dependencies [9d20f54](https://github.com/fnamazing/uiKit/commits/9d20f54)
  - @findable/docs@4.1.0

## 3.0.3
- [patch] Update readme's [223cd67](https://github.com/fnamazing/uiKit/commits/223cd67)
- [patch] Updated dependencies [223cd67](https://github.com/fnamazing/uiKit/commits/223cd67)
  - @findable/docs@4.0.1

## 3.0.2
- [patch] Updated dependencies [1e80619](https://github.com/fnamazing/uiKit/commits/1e80619)
  - @findable/docs@4.0.0

## 3.0.1
- [patch] Updated dependencies [d662caa](https://github.com/fnamazing/uiKit/commits/d662caa)
  - @findable/docs@3.0.4

## 3.0.0
- [major] Bump to React 16.3. [4251858](https://github.com/fnamazing/uiKit/commits/4251858)

## 2.4.5
- [patch] Add "sideEffects: false" to AKM2 packages to allow consumer's to tree-shake [c3b018a](https://github.com/fnamazing/uiKit/commits/c3b018a)

## 2.4.4
- [patch] updated the repository url to https://github.com/fnamazing/uiKit [1e57e5a](https://github.com/fnamazing/uiKit/commits/1e57e5a)

## 2.4.3
- [patch] updated repository url to atlassian/atlaskit [9fb2698](https://github.com/fnamazing/uiKit/commits/9fb2698)

## 2.4.2
- [patch] Packages Flow types for elements components [3111e74](https://github.com/fnamazing/uiKit/commits/3111e74)

## 2.4.1
- [patch] Fix clean props type [b0a2cf0](https://github.com/fnamazing/uiKit/commits/b0a2cf0)
- [patch] Add a typescript definition for clean props [88cc4be](https://github.com/fnamazing/uiKit/commits/88cc4be)

## 2.4.0
- [minor] Add React 16 support. [12ea6e4](https://github.com/fnamazing/uiKit/commits/12ea6e4)

## 2.3.5
- [patch] Added type fields to analytics package.json [286cfc4](https://github.com/fnamazing/uiKit/commits/286cfc4)

## 2.3.4
- [patch] Restored type exports in analytics [7a4a9d2](https://github.com/fnamazing/uiKit/commits/7a4a9d2)

## 2.3.3
- [patch] Migrated to the mk2 repo [eba7e6a](https://github.com/fnamazing/uiKit/commits/eba7e6a)

## 2.3.2 (2017-10-24)
* bug fix; update the cleanprops function ([e27ace3](https://bitbucket.org/atlassian/atlaskit/commits/e27ace3))

## 2.3.1 (2017-10-22)
* bug fix; update dependencies for react-16 ([077d1ad](https://bitbucket.org/atlassian/atlaskit/commits/077d1ad))

## 2.3.0 (2017-10-20)
* bug fix; lint fix. Remove bad comment. ([311ca12](https://bitbucket.org/atlassian/atlaskit/commits/311ca12))
* feature; support bubble events between react trees via the AnalyticsDelegate (issues closed: fs-1424) ([f6af591](https://bitbucket.org/atlassian/atlaskit/commits/f6af591))

## 2.2.2 (2017-10-17)
* bug fix; fix console errors ([aa2f97f](https://bitbucket.org/atlassian/atlaskit/commits/aa2f97f))

## 2.2.1 (2017-10-09)
* bug fix; added missing type definition file in package analytics build. ([24df127](https://bitbucket.org/atlassian/atlaskit/commits/24df127))

## 2.2.0 (2017-10-06)
* feature; analytics library support for passing decorated data to stores (issues closed: ak-3614) ([43e3314](https://bitbucket.org/atlassian/atlaskit/commits/43e3314))

## 2.1.0 (2017-10-05)
* feature; action/decision related analytics (issues closed: fs-1290) ([38ade4e](https://bitbucket.org/atlassian/atlaskit/commits/38ade4e))

## 2.0.0 (2017-09-13)
* breaking; AnalyticsListener and AnalyticsDecorator now only accepts one child and will throw an error if ([92f1b3f](https://bitbucket.org/atlassian/atlaskit/commits/92f1b3f))
* breaking; analyticsListener and AnalyticsDecorator now only accepts one child (issues closed: ak-2048) ([92f1b3f](https://bitbucket.org/atlassian/atlaskit/commits/92f1b3f))

## 1.1.2 (2017-09-05)
* bug fix; expose innerRef on WithAnalytics ([3f8a210](https://bitbucket.org/atlassian/atlaskit/commits/3f8a210))

## 1.1.1 (2017-08-11)
* bug fix; fix the theme-dependency ([db90333](https://bitbucket.org/atlassian/atlaskit/commits/db90333))

## 1.1.0 (2017-08-03)
* feature; allow analytics components to set a default analyticsId and analyticsData (issues closed: ak-3162) ([6c5ce68](https://bitbucket.org/atlassian/atlaskit/commits/6c5ce68))

## 1.0.3 (2017-07-31)
* bug fix; fixed analytics partial string match (issues closed: ak-3072) ([328a204](https://bitbucket.org/atlassian/atlaskit/commits/328a204))

## 1.0.1 (2017-07-25)
* fix; use class transform in loose mode in babel to improve load performance in apps ([fde719a](https://bitbucket.org/atlassian/atlaskit/commits/fde719a))

## 1.0.0 (2017-07-18)
* fix; correct entrypoint for ak:webpack:raw ([f76254f](https://bitbucket.org/atlassian/atlaskit/commits/f76254f))
* fix; remove anayticsDelay feature from initial scope ([dcd471c](https://bitbucket.org/atlassian/atlaskit/commits/dcd471c))
* feature; add analytics package ([19fda60](https://bitbucket.org/atlassian/atlaskit/commits/19fda60))
