/**
 * Inspired by analytics-web-react
 */
import { GasPayload } from '@findable/analytics-gas-types';
import Logger from '../helpers/logger';
import { UIAnalyticsEventInterface } from '@findable/analytics-next-types';
declare const _default: (event: UIAnalyticsEventInterface, logger: Logger) => GasPayload | null;
/**
 * This util exists to convert the Atlaskit event format into the analytics platform format.
 *
 * Atlaskit event format:
 * event {
 *      payload: {
 *          ...attributesFromLowestPointInTheTree
 *      },
 *      context: [{
 *          ...attributesFromHighestPointInTheTree
 *      }, {
 *          ...attributesFromSecondHighestPointInTheTree
 *      }]
 * }
 *
 * Analytics platform event format:
 *  event {
 *      type: @findable/analytics-gas-types.EventType
 *      payload {
 *          ...mandatoryAttributesBasedOnEventType
 *          attributes: {
 *              ...arbitraryAttributes
 *          }
 *      }
 *  }
 */
export default _default;
