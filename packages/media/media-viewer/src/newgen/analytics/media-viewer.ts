import { packageAttributes } from './index';
import { GasScreenEventPayload } from '@findable/analytics-gas-types';

export const mediaViewerModalEvent = (): GasScreenEventPayload => {
  return {
    eventType: 'screen',
    name: 'mediaViewerModal',
    attributes: {
      ...packageAttributes,
    },
  };
};
