import { Auth, AuthContext, AuthProvider } from '@findable/media-core';
export declare const mediaPickerAuthProvider: (authEnvironment?: string) => (context?: AuthContext | undefined) => Promise<Auth>;
export declare const defaultMediaPickerAuthProvider: AuthProvider;
