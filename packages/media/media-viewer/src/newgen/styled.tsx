// StyledComponentClass and React types are imported to prevent a typescript error caused by inferred types sourced
// from external modules - https://github.com/styled-components/styled-components/issues/1063#issuecomment-320344957
// @ts-ignore: unused variable
// prettier-ignore
import styled, { StyledComponentClass } from 'styled-components';
// @ts-ignore: unused variable
// prettier-ignore
import { HTMLAttributes, VideoHTMLAttributes, ImgHTMLAttributes, ComponentClass, ClassAttributes } from 'react';

export const Positioner = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  display: flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: space-between;
  z-index: 500;
  pointer-events: none;
`;

export const ErrorMessage = styled.div`
  width: 100%;
  text-align: center;
`;

export const Img: ComponentClass<ImgHTMLAttributes<{}>> = styled.img`
  max-width: 100%;
  margin: auto;
  pointer-events: auto;
`;

export const Video: ComponentClass<VideoHTMLAttributes<{}>> = styled.video`
  max-width: 100%;
  margin: auto;
  pointer-events: auto;
`;

export const PDFWrapper = styled.div`
  margin: auto;
`;
