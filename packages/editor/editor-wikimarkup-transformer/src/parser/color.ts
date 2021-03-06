import { normalizeHexColor } from '@findable/editor-common';

export function getEditorColor(attrs: {
  [key: string]: string;
}): string | null {
  const keys = Object.keys(attrs);
  return normalizeHexColor(keys[0]);
}
