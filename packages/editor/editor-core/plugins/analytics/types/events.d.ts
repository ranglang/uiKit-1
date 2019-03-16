import { Dispatch } from '../../../event-dispatcher';
import { EVENT_TYPE } from './enums';
import { UIEventPayload } from './ui-events';
import { FormatEventPayload } from './format-events';
import { SubstituteEventPayload } from './substitute-events';
import { InsertEventPayload } from './insert-events';
import { NodeEventPayload } from './node-events';
declare type AEP<Action, ActionSubject, ActionSubjectID, Attributes, EventType> = {
    action: Action;
    actionSubject: ActionSubject;
    actionSubjectId?: ActionSubjectID;
    attributes?: Attributes;
    eventType: EventType;
};
export declare type UIAEP<Action, ActionSubject, ActionSubjectID, Attributes> = AEP<Action, ActionSubject, ActionSubjectID, Attributes, EVENT_TYPE.UI>;
export declare type TrackAEP<Action, ActionSubject, ActionSubjectID, Attributes> = AEP<Action, ActionSubject, ActionSubjectID, Attributes, EVENT_TYPE.TRACK>;
export declare type AnalyticsEventPayload = UIEventPayload | FormatEventPayload | SubstituteEventPayload | InsertEventPayload | NodeEventPayload;
export declare type AnalyticsDispatch = Dispatch<{
    payload: AnalyticsEventPayload;
    channel?: string;
}>;
export {};
