import styled from 'styled-components';
import { HTMLAttributes, ComponentClass, Component } from 'react';
import * as React from 'react';
import { CellSelection } from 'prosemirror-tables';
import { EditorView } from 'prosemirror-view';

import {
  Popup,
  TableLayout,
  tableBackgroundColorPalette,
  tableBackgroundBorderColors,
} from '@atlaskit/editor-common';
import RemoveIcon from '@atlaskit/icon/glyph/editor/remove';
import FullWidthIcon from '@atlaskit/icon/glyph/editor/media-full-width';
import CenterIcon from '@atlaskit/icon/glyph/editor/media-center';

import { PermittedLayoutsDescriptor } from '../../pm-plugins/main';
import { ToolbarButton, ToolbarButtonDanger, Separator } from './styles';
import AdvanceMenu from './AdvanceMenu';
import BackgroundColorMenu from './BackgroundColorMenu';
import DisplayOptionsMenu from './DisplayOptionsMenu';

// `Popup` doesn't work with -ve `offset` if it goes outside of the container hence the -ve margin
export const Toolbar: ComponentClass<HTMLAttributes<{}>> = styled.div`
  margin-top: -8px;
  background-color: white;
  border-radius: 3px;
  box-shadow: rgba(9, 30, 66, 0.31) 0 0 1px,
    rgba(9, 30, 66, 0.25) 0 4px 8px -2px;
  padding: 4px 8px;
  display: flex;

  & > div:last-child button {
    margin-right: 0;
  }
  & > div:first-child button {
    margin-left: 0;
  }
`;

export interface Props {
  editorView: EditorView;
  popupsMountPoint?: HTMLElement;
  popupsBoundariesElement?: HTMLElement;
  popupsScrollableElement?: HTMLElement;
  tableElement?: HTMLElement;
  tableActive?: boolean;
  tableLayout?: TableLayout;
  cellSelection?: CellSelection;
  allowMergeCells?: boolean;
  allowNumberColumn?: boolean;
  allowBackgroundColor?: boolean;
  allowHeaderRow?: boolean;
  allowHeaderColumn?: boolean;
  stickToolbarToBottom?: boolean;
  removeTable?: () => void;
  permittedLayouts?: PermittedLayoutsDescriptor;
  updateLayout?: (layoutName: TableLayout) => void;
}

export interface State {
  isOpen?: boolean;
}

type TableLayoutInfo = { [K in TableLayout]: any };

const tableLayouts: TableLayoutInfo = {
  default: {
    icon: CenterIcon,
    label: 'inline',
  },
  'full-width': {
    icon: FullWidthIcon,
    label: 'full width',
  },
};

export default class TableFloatingToolbar extends Component<Props, State> {
  state: State = {
    isOpen: false,
  };

  render() {
    const {
      popupsMountPoint,
      popupsBoundariesElement,
      popupsScrollableElement,
      tableElement,
      editorView,
      allowMergeCells,
      tableActive,
      tableLayout,
      allowNumberColumn,
      allowBackgroundColor,
      allowHeaderRow,
      allowHeaderColumn,
      stickToolbarToBottom,
    } = this.props;

    if (!tableElement || !tableActive) {
      return null;
    }

    let availableLayouts: TableLayout[] = [];
    if (this.props.permittedLayouts) {
      if (this.props.permittedLayouts === 'all') {
        availableLayouts = Object.keys(tableLayouts) as TableLayout[];
      } else {
        availableLayouts = this.props.permittedLayouts;
      }
    }

    const layoutButtons = Array.from(new Set(availableLayouts)).map(
      layoutName => {
        const label = `Change layout to ${tableLayouts[layoutName].label}`;
        const Icon = tableLayouts[layoutName].icon;
        const onClick = () => {
          this.props.updateLayout!(layoutName);
        };

        return (
          <ToolbarButton
            spacing="compact"
            selected={tableLayout === layoutName}
            onClick={this.props.updateLayout ? onClick : undefined}
            title={label}
            key={layoutName}
            iconBefore={<Icon label={label} />}
          />
        );
      },
    );

    return (
      <Popup
        offset={[0, 20]}
        target={tableElement}
        mountTo={popupsMountPoint}
        boundariesElement={popupsBoundariesElement}
        scrollableElement={popupsScrollableElement}
        stickToBottom={stickToolbarToBottom}
        alignY="bottom"
        alignX="center"
        ariaLabel="Table floating controls"
      >
        <Toolbar>
          {allowBackgroundColor && (
            <BackgroundColorMenu
              editorView={editorView}
              palette={tableBackgroundColorPalette}
              mountPoint={popupsMountPoint}
              borderColors={tableBackgroundBorderColors}
            />
          )}
          {(allowNumberColumn || allowHeaderRow || allowHeaderColumn) && (
            <DisplayOptionsMenu
              editorView={editorView}
              mountPoint={popupsMountPoint}
              allowNumberColumn={allowNumberColumn}
              allowHeaderRow={allowHeaderRow}
              allowHeaderColumn={allowHeaderColumn}
            />
          )}
          {allowMergeCells && (
            <AdvanceMenu
              editorView={editorView}
              mountPoint={popupsMountPoint}
              allowMergeCells={allowMergeCells}
            />
          )}
          {(allowBackgroundColor ||
            allowNumberColumn ||
            allowHeaderRow ||
            allowHeaderColumn ||
            allowMergeCells) && <Separator style={{ height: 'auto' }} />}
          {layoutButtons}
          {layoutButtons.length ? (
            <Separator style={{ height: 'auto' }} />
          ) : null}
          <ToolbarButtonDanger
            spacing="compact"
            onClick={this.props.removeTable}
            title="Remove table"
            iconBefore={<RemoveIcon label="Remove table" />}
          />
        </Toolbar>
      </Popup>
    );
  }
}
