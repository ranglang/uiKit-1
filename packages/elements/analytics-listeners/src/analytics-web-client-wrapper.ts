import { AnalyticsWebClient } from './types';
import {
  GasPayload,
  GasScreenEventPayload,
} from '@atlaskit/analytics-gas-types';
import Logger from './helpers/logger';

export const sendEvent = (
  logger: Logger,
  client?: AnalyticsWebClient | Promise<AnalyticsWebClient>,
) => (event: GasPayload | GasScreenEventPayload): void => {
  if (client) {
    const gasEvent = {
      ...event,
    };
    delete gasEvent.eventType;

    const withClient = (cb: (analyticsClient: AnalyticsWebClient) => void) => {
      if (client instanceof Promise) {
        client
          .then(cb)
          .catch(() =>
            logger.warn('AnalyticsWebClient instance could not be resolved'),
          );
      } else {
        cb(client);
      }
    };

    switch (event.eventType) {
      case 'ui':
        logger.debug('Sending UI Event via analytics client', gasEvent);
        withClient(client => client.sendUIEvent(gasEvent));
        break;

      case 'operational':
        logger.debug(
          'Sending Operational Event via analytics client',
          gasEvent,
        );
        withClient(client => client.sendOperationalEvent(gasEvent));
        break;

      case 'track':
        logger.debug('Sending Track Event via analytics client', gasEvent);
        withClient(client => client.sendTrackEvent(gasEvent));
        break;

      case 'screen':
        logger.debug('Sending Screen Event via analytics client', gasEvent);
        withClient(client => client.sendScreenEvent(gasEvent));
        break;

      default:
        logger.error(
          `cannot map eventType ${
            event.eventType
          } to an analytics-web-client function`,
        );
    }
  } else {
    logger.warn('AnalyticsWebClient instance is not provided');
  }
};
