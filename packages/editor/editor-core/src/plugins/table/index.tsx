import * as React from 'react';
import { tableEditing } from 'prosemirror-tables';
import { createTable } from 'prosemirror-utils';
import TableIcon from '@findable/icon/glyph/editor/table';
import { tableCellMinWidth } from '@findable/editor-common';
import { table, tableCell, tableHeader, tableRow } from '@findable/adf-schema';

import LayoutButton from './ui/LayoutButton';
import { EditorPlugin } from '../../types';
import WithPluginState from '../../ui/WithPluginState';
import { messages } from '../insert-block/ui/ToolbarInsertBlock';
import { PluginConfig, PermittedLayoutsDescriptor } from './types';
import { createPlugin, pluginKey } from './pm-plugins/main';
import { keymapPlugin } from './pm-plugins/keymap';
import {
  createPlugin as createFlexiResizingPlugin,
  pluginKey as tableResizingPluginKey,
} from './pm-plugins/table-resizing';
import { getToolbarConfig } from './toolbar';
import { ColumnResizingPlugin } from './types';
import FloatingContextualMenu from './ui/FloatingContextualMenu';
import { isLayoutSupported } from './utils';
import {
  addAnalytics,
  ACTION,
  ACTION_SUBJECT,
  ACTION_SUBJECT_ID,
  INPUT_METHOD,
  EVENT_TYPE,
} from '../analytics';

export const HANDLE_WIDTH = 6;

export const pluginConfig = (tablesConfig?: PluginConfig | boolean) => {
  const config =
    !tablesConfig || typeof tablesConfig === 'boolean' ? {} : tablesConfig;
  return config.advanced
    ? {
        allowBackgroundColor: true,
        allowColumnResizing: true,
        allowHeaderColumn: true,
        allowHeaderRow: true,
        allowMergeCells: true,
        allowNumberColumn: true,
        stickToolbarToBottom: true,
        permittedLayouts: 'all' as PermittedLayoutsDescriptor,
        allowControls: true,
        ...config,
      }
    : config;
};

const tablesPlugin = (options?: PluginConfig | boolean): EditorPlugin => ({
  nodes() {
    return [
      { name: 'table', node: table },
      { name: 'tableHeader', node: tableHeader },
      { name: 'tableRow', node: tableRow },
      { name: 'tableCell', node: tableCell },
    ];
  },

  pmPlugins() {
    return [
      {
        name: 'table',
        plugin: ({
          props: { allowTables, appearance, allowDynamicTextSizing },
          eventDispatcher,
          dispatch,
          portalProviderAPI,
        }) => {
          return createPlugin(
            dispatch,
            portalProviderAPI,
            eventDispatcher,
            pluginConfig(allowTables),
            appearance,
            allowDynamicTextSizing,
          );
        },
      },
      {
        name: 'tablePMColResizing',
        plugin: ({
          dispatch,
          props: { allowTables, allowDynamicTextSizing },
        }) => {
          const { allowColumnResizing } = pluginConfig(allowTables);
          return allowColumnResizing
            ? createFlexiResizingPlugin(dispatch, {
                handleWidth: HANDLE_WIDTH,
                cellMinWidth: tableCellMinWidth,
                dynamicTextSizing: allowDynamicTextSizing,
              } as ColumnResizingPlugin)
            : undefined;
        },
      },
      // Needs to be lower priority than prosemirror-tables.tableEditing
      // plugin as it is currently swallowing backspace events inside tables
      { name: 'tableKeymap', plugin: () => keymapPlugin() },
      { name: 'tableEditing', plugin: () => tableEditing() },
    ];
  },

  contentComponent({
    editorView,
    popupsMountPoint,
    popupsBoundariesElement,
    popupsScrollableElement,
    appearance,
  }) {
    return (
      <WithPluginState
        plugins={{
          pluginState: pluginKey,
          tableResizingPluginState: tableResizingPluginKey,
        }}
        render={({ pluginState, tableResizingPluginState }) => (
          <>
            <FloatingContextualMenu
              editorView={editorView}
              mountPoint={popupsMountPoint}
              boundariesElement={popupsBoundariesElement}
              targetCellPosition={pluginState.targetCellPosition}
              isOpen={pluginState.isContextualMenuOpen}
              pluginConfig={pluginState.pluginConfig}
            />
            {appearance === 'full-page' &&
              isLayoutSupported(editorView.state) && (
                <LayoutButton
                  editorView={editorView}
                  mountPoint={popupsMountPoint}
                  boundariesElement={popupsBoundariesElement}
                  scrollableElement={popupsScrollableElement}
                  targetRef={pluginState.tableFloatingToolbarTarget}
                  isResizing={
                    !!tableResizingPluginState &&
                    !!tableResizingPluginState.dragging
                  }
                />
              )}
          </>
        )}
      />
    );
  },

  pluginsOptions: {
    quickInsert: ({ formatMessage }) => [
      {
        title: formatMessage(messages.table),
        priority: 600,
        icon: () => <TableIcon label={formatMessage(messages.table)} />,
        action(insert, state) {
          const tr = insert(createTable(state.schema));
          return addAnalytics(tr, {
            action: ACTION.INSERTED,
            actionSubject: ACTION_SUBJECT.DOCUMENT,
            actionSubjectId: ACTION_SUBJECT_ID.TABLE,
            attributes: { inputMethod: INPUT_METHOD.QUICK_INSERT },
            eventType: EVENT_TYPE.TRACK,
          });
        },
      },
    ],
    floatingToolbar: getToolbarConfig,
  },
});

export default tablesPlugin;
