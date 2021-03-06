# @findable/field-text-area

## 5.0.1
- Updated dependencies [9d5cc39394](https://github.com/fnamazing/uiKit/commits/9d5cc39394):
  - @findable/docs@7.0.1
  - @findable/analytics-next@4.0.1
  - @findable/theme@8.0.1
  - @findable/button@11.0.0

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

## 4.0.16
- [patch] [9b4a39c56a](https://github.com/fnamazing/uiKit/commits/9b4a39c56a):

  - Weakened FieldText & FieldTextArea autoComplete prop TypeScript definition to allow for more options than just 'on' or 'off'

## 4.0.15
- [patch] [1c8779d](https://github.com/fnamazing/uiKit/commits/1c8779d):

  - Changes to isLabelHidden behavour. Previously when isLabelHidden was true, a label with display none would be rendered. Now when isLabelHidden is true, no label element is rendered.

## 4.0.14
- Updated dependencies [58b84fa](https://github.com/fnamazing/uiKit/commits/58b84fa):
  - @findable/analytics-next@3.1.2
  - @findable/button@10.1.1
  - @findable/field-base@11.0.13
  - @findable/theme@7.0.1
  - @findable/docs@6.0.0

## 4.0.13
- Updated dependencies [d13242d](https://github.com/fnamazing/uiKit/commits/d13242d):
  - @findable/docs@5.2.3
  - @findable/button@10.0.4
  - @findable/field-base@11.0.12
  - @findable/theme@7.0.0

## 4.0.12
- Updated dependencies [6998f11](https://github.com/fnamazing/uiKit/commits/6998f11):
  - @findable/docs@5.2.1
  - @findable/analytics-next@3.1.1
  - @findable/theme@6.2.1
  - @findable/button@10.0.0

## 4.0.11
- [patch] [4035588"
d](https://github.com/fnamazing/uiKit/commits/4035588"
d):

  - Add isMonospaced prop

## 4.0.10
- [patch] Adds missing implicit @babel/runtime dependency [b71751b](https://github.com/fnamazing/uiKit/commits/b71751b)

## 4.0.9
- [patch] Adds sideEffects: false to allow proper tree shaking [b5d6d04](https://github.com/fnamazing/uiKit/commits/b5d6d04)

## 4.0.7
- [patch] Textfield and textarea components now play nicer with flex parents in IE [4e81369](https://github.com/fnamazing/uiKit/commits/4e81369)
- [none] Updated dependencies [4e81369](https://github.com/fnamazing/uiKit/commits/4e81369)

## 4.0.6
- [patch] Updated dependencies [df22ad8](https://github.com/fnamazing/uiKit/commits/df22ad8)
  - @findable/theme@6.0.0
  - @findable/field-base@11.0.5
  - @findable/button@9.0.6
  - @findable/docs@5.0.6

## 4.0.5
- [patch] Textfield and textarea now correctly show the invalid icon in Firefox and Edge. [4d5bcd9](https://github.com/fnamazing/uiKit/commits/4d5bcd9)
- [none] Updated dependencies [4d5bcd9](https://github.com/fnamazing/uiKit/commits/4d5bcd9)

## 4.0.4
- [patch] update the dependency of react-dom to 16.4.2 due to vulnerability in previous versions read https://reactjs.org/blog/2018/08/01/react-v-16-4-2.html for details [a4bd557](https://github.com/fnamazing/uiKit/commits/a4bd557)
- [none] Updated dependencies [a4bd557](https://github.com/fnamazing/uiKit/commits/a4bd557)
  - @findable/field-base@11.0.3
  - @findable/analytics-next@3.0.4
  - @findable/button@9.0.5
  - @findable/theme@5.1.3

## 4.0.3
- [patch] Updated dependencies [acd86a1](https://github.com/fnamazing/uiKit/commits/acd86a1)
  - @findable/button@9.0.4
  - @findable/theme@5.1.2
  - @findable/analytics-next@3.0.3
  - @findable/docs@5.0.2
  - @findable/field-base@11.0.2

## 4.0.2
- [patch] Add a SSR test for every package, add react-dom and build-utils in devDependencies [7e331b5](https://github.com/fnamazing/uiKit/commits/7e331b5)
- [none] Updated dependencies [7e331b5](https://github.com/fnamazing/uiKit/commits/7e331b5)
  - @findable/field-base@11.0.1
  - @findable/analytics-next@3.0.2
  - @findable/button@9.0.3
  - @findable/theme@5.1.1

## 4.0.1
- [patch] Move analytics tests and replace elements to core [49d4ab4](https://github.com/fnamazing/uiKit/commits/49d4ab4)
- [none] Updated dependencies [49d4ab4](https://github.com/fnamazing/uiKit/commits/49d4ab4)
  - @findable/analytics-next@3.0.1
  - @findable/button@9.0.2
  - @findable/docs@5.0.1

## 4.0.0
- [major] Provides analytics for common component interations. See the [Instrumented Components](https://atlaskit.atlassian.com/packages/core/analytics-next) section for more details. If you are using enzyme for testing you will have to use [our forked version of the library](https://atlaskit.atlassian.com/docs/guides/testing#we-use-a-forked-version-of-enzyme). [563a7eb](https://github.com/fnamazing/uiKit/commits/563a7eb)
- [major] Updates to React ^16.4.0 [7edb866](https://github.com/fnamazing/uiKit/commits/7edb866)
- [major] Updated dependencies [563a7eb](https://github.com/fnamazing/uiKit/commits/563a7eb)
  - @findable/field-base@11.0.0
  - @findable/analytics-next@3.0.0
  - @findable/button@9.0.0
  - @findable/theme@5.0.0
  - @findable/docs@5.0.0
- [major] Updated dependencies [7edb866](https://github.com/fnamazing/uiKit/commits/7edb866)
  - @findable/field-base@11.0.0
  - @findable/analytics-next@3.0.0
  - @findable/button@9.0.0
  - @findable/theme@5.0.0
  - @findable/docs@5.0.0

## 3.2.1
- [patch] Button should be a dev dependency [50ca31b](https://github.com/fnamazing/uiKit/commits/50ca31b)
- [none] Updated dependencies [50ca31b](https://github.com/fnamazing/uiKit/commits/50ca31b)

## 3.2.0
- [minor] Updated visual styles for textfield and textarea components to match latest ADG spec [37f5ea5](https://github.com/fnamazing/uiKit/commits/37f5ea5)
- [none] Updated dependencies [37f5ea5](https://github.com/fnamazing/uiKit/commits/37f5ea5)
  - @findable/field-base@10.2.0

## 3.1.2
- [patch] Fix $FlowFixMe and release packages [25d0b2d](https://github.com/fnamazing/uiKit/commits/25d0b2d)
- [none] Updated dependencies [25d0b2d](https://github.com/fnamazing/uiKit/commits/25d0b2d)
  - @findable/button@8.2.2

## 3.1.1
- [patch] Clean Changelogs - remove duplicates and empty entries [e7756cd](https://github.com/fnamazing/uiKit/commits/e7756cd)
- [none] Updated dependencies [e7756cd](https://github.com/fnamazing/uiKit/commits/e7756cd)
  - @findable/field-base@10.1.2
  - @findable/button@8.1.2
  - @findable/theme@4.0.4

## 3.1.0
- [minor] Textareas can be set to resize in only a single direction now [954d4b0](https://github.com/fnamazing/uiKit/commits/954d4b0)

## 3.0.4
- [patch] Fixed disabled field colour in Safari [b9f0068](https://github.com/fnamazing/uiKit/commits/b9f0068)
- [none] Updated dependencies [b9f0068](https://github.com/fnamazing/uiKit/commits/b9f0068)

## 3.0.3
- [none] Updated dependencies [9d20f54](https://github.com/fnamazing/uiKit/commits/9d20f54)
  - @findable/docs@4.1.0
  - @findable/theme@4.0.2
  - @findable/field-base@10.1.0
  - @findable/button@8.1.0

## 3.0.2
- [patch] Fixing documentation typo [c6bc90d](https://github.com/fnamazing/uiKit/commits/c6bc90d)

## 3.0.1
- [patch] Update readme's [223cd67](https://github.com/fnamazing/uiKit/commits/223cd67)
- [patch] Updated dependencies [223cd67](https://github.com/fnamazing/uiKit/commits/223cd67)
  - @findable/field-base@10.0.1
  - @findable/button@8.0.1
  - @findable/theme@4.0.1
  - @findable/docs@4.0.1

## 3.0.0
- [major] makes styled-components a peer dependency and upgrades version range from 1.4.6 - 3 to ^3.2.6 [1e80619](https://github.com/fnamazing/uiKit/commits/1e80619)
- [patch] Updated dependencies [1e80619](https://github.com/fnamazing/uiKit/commits/1e80619)
  - @findable/field-base@10.0.0
  - @findable/button@8.0.0
  - @findable/theme@4.0.0
  - @findable/docs@4.0.0

## 2.1.0
- [minor] Text fields and textareas now inherit their font-family correctly. [6859cf6](https://github.com/fnamazing/uiKit/commits/6859cf6)
- [none] Updated dependencies [6859cf6](https://github.com/fnamazing/uiKit/commits/6859cf6)

## 2.0.4
- [patch] Updated dependencies [d662caa](https://github.com/fnamazing/uiKit/commits/d662caa)
  - @findable/field-base@9.0.3
  - @findable/button@7.2.5
  - @findable/theme@3.2.2
  - @findable/docs@3.0.4

## 2.0.2
- [patch] Form package developer preview release [9b28847](https://github.com/fnamazing/uiKit/commits/9b28847)

## 2.0.1
- [patch] Remove unused dependencies [3cfb3fe](https://github.com/fnamazing/uiKit/commits/3cfb3fe)

## 2.0.0
- [major] Bump to React 16.3. [4251858](https://github.com/fnamazing/uiKit/commits/4251858)

## 1.2.2
- [patch] Remove unused util-readme dependency [ce75fdc](https://github.com/fnamazing/uiKit/commits/ce75fdc)

## 1.2.1
- [patch] Re-releasing due to potentially broken babel release [9ed0bba](https://github.com/fnamazing/uiKit/commits/9ed0bba)

## 1.2.0
- [minor] Update styled-components dependency to support versions 1.4.6 - 3 [ceccf30](https://github.com/fnamazing/uiKit/commits/ceccf30)

## 1.1.5
- [patch] More specific onChange event types in field-text-area [94c93eb](https://github.com/fnamazing/uiKit/commits/94c93eb)

## 1.1.4
- [patch] updated the repository url to https://github.com/fnamazing/uiKit [1e57e5a](https://github.com/fnamazing/uiKit/commits/1e57e5a)

## 1.1.3
- [patch] Packages Flow types for elements components [3111e74](https://github.com/fnamazing/uiKit/commits/3111e74)

## 1.1.2
- [patch] Change incorrect type info [ce915ea](https://github.com/fnamazing/uiKit/commits/ce915ea)

## 1.1.1
- [patch] Resolved low hanging flow errors in field-base field-text comment icon item and website, $ [007de27](https://github.com/fnamazing/uiKit/commits/007de27)

## 1.1.0
- [minor] Add React 16 support. [12ea6e4](https://github.com/fnamazing/uiKit/commits/12ea6e4)

## 1.0.5
- [patch] Fix version ranges on button/layer-manager [7e7a211](https://github.com/fnamazing/uiKit/commits/7e7a211)

## 1.0.4
- [patch] Migrated package to atlaskit-mk-2 [a1950a9](https://github.com/fnamazing/uiKit/commits/a1950a9)

## 1.0.3 (2017-11-21)
* bug fix; bumping internal dependencies to latest major versions ([aeebf29](https://bitbucket.org/atlassian/atlaskit/commits/aeebf29))

## 1.0.2 (2017-10-27)
* bug fix; rebuild stories ([7aa7337](https://bitbucket.org/atlassian/atlaskit/commits/7aa7337))

## 1.0.1 (2017-10-22)
* bug fix; update styled component dependency and react peerDep ([39f3286](https://bitbucket.org/atlassian/atlaskit/commits/39f3286))

## 1.0.0 (2017-10-20)
* breaking; Random break to bump to v1 ([d5ebc2e](https://bitbucket.org/atlassian/atlaskit/commits/d5ebc2e))
* breaking; update references to field-text ([d5ebc2e](https://bitbucket.org/atlassian/atlaskit/commits/d5ebc2e))
