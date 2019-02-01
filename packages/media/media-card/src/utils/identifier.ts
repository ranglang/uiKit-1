import * as deepEqual from 'deep-equal';
import {
  FileIdentifier,
  Identifier,
  ExternalImageIdentifier,
} from '../root/domain';

export const isFileIdentifier = (
  identifier: Identifier,
): identifier is FileIdentifier => {
  return identifier.mediaItemType === 'file';
};

export const isExternalImageIdentifier = (
  identifier: Identifier,
): identifier is ExternalImageIdentifier => {
  return identifier.mediaItemType === 'external-image';
};

export const isDifferentIdentifier = (
  a: Identifier,
  b: Identifier,
): boolean => {
  if (isFileIdentifier(a) && isFileIdentifier(b)) {
    return (
      a.id !== b.id ||
      a.collectionName !== b.collectionName ||
      a.occurrenceKey !== b.occurrenceKey
    );
  } else {
    return !deepEqual(a, b);
  }
};
