import { Action, Dispatch } from 'redux';
import { isHidePopupAction } from '../actions/hidePopup';
import { State } from '../domain';
import { PopupUploadEventEmitter } from '../../components/popup';

export default (eventEmitter: PopupUploadEventEmitter) => () => (
  next: Dispatch<State>,
) => (action: Action) => {
  if (isHidePopupAction(action)) {
    eventEmitter.emitClosed();
  }
  return next(action);
};
