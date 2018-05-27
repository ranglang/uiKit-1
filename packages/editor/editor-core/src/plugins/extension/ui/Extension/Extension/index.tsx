import * as React from 'react';
import { Component } from 'react';
import { Node as PmNode } from 'prosemirror-model';
import { EditorView } from 'prosemirror-view';
import { MacroProvider } from '../../../../macro';
import { Wrapper, Header, Content, ContentWrapper } from './styles';
import { Overlay } from '../styles';
import ExtensionLozenge from '../Lozenge';
import { pluginKey as widthPluginKey } from '../../../../width';
import {
  akEditorFullPageMaxWidth,
  akEditorWideLayoutWidth,
} from '@atlaskit/editor-common';
import WithPluginState from '../../../../../ui/WithPluginState';

export interface Props {
  node: PmNode;
  macroProvider?: MacroProvider;
  onClick: (event: React.SyntheticEvent<any>) => void;
  handleContentDOMRef: (node: HTMLElement | null) => void;
  onSelectExtension: () => void;
  children?: React.ReactNode;
  view: EditorView;
}

export default class Extension extends Component<Props, any> {
  calcWidth = (layout, containerWidth: number) => {
    switch (layout) {
      case 'full-width':
        return `${containerWidth}px`;
      case 'wide':
        return `${akEditorWideLayoutWidth}px`;
      default:
        return 'inherit';
    }
  };

  render() {
    const {
      node,
      onClick,
      handleContentDOMRef,
      onSelectExtension,
      children,
      view,
    } = this.props;

    const hasBody = node.type.name === 'bodiedExtension';
    const hasChildren = !!children;

    return (
      <WithPluginState
        editorView={view}
        plugins={{
          width: widthPluginKey,
        }}
        render={({ width }) => {
          return (
            <Wrapper
              data-layout={node.attrs.layout}
              onClick={onClick}
              className={`extension-container ${hasBody ? '' : 'with-overlay'}`}
              style={{
                width: this.calcWidth(node.attrs.layout, width),
                maxWidth:
                  width <= akEditorFullPageMaxWidth ? '100%' : `${width}px`,
              }}
            >
              <Overlay className="extension-overlay" />
              <Header
                contentEditable={false}
                onClick={onSelectExtension}
                className={hasChildren ? 'with-children' : ''}
              >
                {children ? children : <ExtensionLozenge node={node} />}
              </Header>
              {hasBody && (
                <ContentWrapper>
                  <Content
                    innerRef={handleContentDOMRef}
                    className="extension-content"
                  />
                </ContentWrapper>
              )}
            </Wrapper>
          );
        }}
      />
    );
  }
}
