import styled from 'styled-components';
import { akBorderRadius } from '@atlaskit/util-shared-styles';
import { HTMLAttributes, ComponentClass } from 'react';
import { CardDimensions, CardAppearance } from '../';
import { getCSSUnitValue } from '../utils/getCSSUnitValue';
import { BreakpointSizeValue, breakpointStyles } from '../utils/breakpoint';

export interface WrapperProps {
  dimensions?: CardDimensions;
  appearance?: CardAppearance;
  breakpointSize?: BreakpointSizeValue;
}

const getWrapperHeight = (dimensions?: CardDimensions) =>
  dimensions && dimensions.height
    ? `height: ${getCSSUnitValue(dimensions.height)}; max-height: 100%;`
    : '';

const getWrapperWidth = (dimensions?: CardDimensions) =>
  dimensions && dimensions.width
    ? `width: ${getCSSUnitValue(dimensions.width)}; max-width: 100%;`
    : '';

export const Wrapper: ComponentClass<
  HTMLAttributes<{}> & WrapperProps
> = styled.div`
  ${({ dimensions, breakpointSize = 'medium' }: WrapperProps) => {
    return `
      ${breakpointStyles({ breakpointSize })}
      ${getWrapperHeight(dimensions)}
      ${getWrapperWidth(dimensions)}
    `;
  }};
`;

export const InlinePlayerWrapper = styled.div`
  overflow: hidden;
  border-radius: ${akBorderRadius};
  position: relative;

  max-width: 100%;
  max-height: 100%;

  video {
    width: 100%;
    height: 100%;
  }
`;

InlinePlayerWrapper.displayName = 'InlinePlayerWrapper';
