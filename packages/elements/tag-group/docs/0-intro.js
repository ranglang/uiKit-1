// @flow
/* eslint-disable import/extensions, import/no-webpack-loader-syntax, global-require */
import React from 'react';
import { md, Example, Props } from '@atlaskit/docs';
import props from '!!extract-react-types-loader!../src/components/TagGroup';

export default md`
  A container around a [Tag](/components/tag) component that
  applies consistent styling to the collection of ties.

  ${<Example source={require('!!raw-loader!../examples/0-basic')} />}

  ${<Props props={props} />}
`;
