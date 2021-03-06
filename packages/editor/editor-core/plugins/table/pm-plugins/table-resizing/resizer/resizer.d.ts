import { Node as PMNode } from 'prosemirror-model';
import { EditorView } from 'prosemirror-view';
import ResizeState from './resizeState';
import ColumnState from './columnState';
export interface ResizerConfig {
    minWidth: number;
    maxSize: number;
    node: PMNode;
    start: number;
}
export default class Resizer {
    tableElem: HTMLTableElement;
    colgroupChildren: HTMLCollection;
    minWidth: number;
    node: PMNode;
    currentState: ResizeState;
    private constructor();
    /**
     * Create resizer from given DOM element
     */
    static fromDOM(view: EditorView, tableElem: HTMLTableElement, config: ResizerConfig): Resizer;
    /**
     * Applies a resize state to the DOM. Does NOT update state.
     */
    apply(state: ResizeState): void;
    /**
     * Applies the column resize state to the DOM, and sets it for future use.
     */
    update(state: ResizeState): void;
    /**
     * Resize a given column by an amount from the current state and return the new state.
     *
     * You can then either:
     * - #apply() this new state to the DOM while dragging resize handles,
     * - or #update() the resizer state when resizing is finished (typically when the user releases the resize handle)
     * @param {number} col The column index to resize
     * @param {number} amount Delta of pixels to resize by. Can be positive or negative.
     */
    resize(col: number, amount: number): ResizeState;
    /**
     * Scale the table to a given size, update state and DOM and return the new state.
     * @param {number} newSize the table new size
     */
    scale(newSize: number): ResizeState;
    getCol(colIdx: number): ColumnState;
}
