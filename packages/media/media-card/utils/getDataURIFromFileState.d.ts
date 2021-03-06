import { FileState } from '@findable/media-core';
export interface FilePreview {
    src?: string;
    orientation?: number;
}
export declare const getDataURIFromFileState: (state: FileState) => Promise<FilePreview>;
