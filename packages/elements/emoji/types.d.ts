import { SyntheticEvent } from 'react';
import { messages } from './components/i18n';
import { CategoryId } from './components/picker/categories';
export declare type CategoryId = CategoryId;
export declare type RelativePosition = 'above' | 'below' | 'auto';
export interface Styles {
    [index: string]: any;
}
/**
 * Minimum information to defined an emoji is the shortName.
 * In order to uniquely define an emoji, the id should be included, and is
 * used in preference to shortName if provided, and has a matching emoji.
 * If not emoji can be found by id (e.g. a custom emoji has been removed),
 * fallback behaviour will be to attempt to find a matching emoji by shortName.
 */
export interface EmojiId {
    shortName: string;
    id?: string;
    fallback?: string;
}
export interface SpriteSheet {
    url: string;
    row: number;
    column: number;
    height: number;
    width: number;
}
export interface EmojiImageRepresentation {
    height: number;
    width: number;
}
export interface SpriteImageRepresentation extends EmojiImageRepresentation {
    x: number;
    y: number;
    xIndex: number;
    yIndex: number;
}
/**
 * Sprite representation exposed from the EmojiResource.
 */
export interface SpriteRepresentation extends SpriteImageRepresentation {
    sprite: SpriteSheet;
}
/**
 * Representation returned from a sprite service.
 */
export interface SpriteServiceRepresentation extends SpriteImageRepresentation {
    /** Should match a index in a SpriteSheets */
    spriteRef: string;
}
export interface ImageRepresentation extends EmojiImageRepresentation {
    imagePath: string;
}
export interface MediaApiRepresentation extends EmojiImageRepresentation {
    mediaPath: string;
}
export declare type EmojiRepresentation = SpriteRepresentation | ImageRepresentation | MediaApiRepresentation | undefined;
export interface EmojiDescription extends EmojiId {
    name?: string;
    order?: number;
    type: string;
    category: string;
    ascii?: string[];
    createdDate?: string;
    creatorUserId?: string;
    representation: EmojiRepresentation;
    altRepresentation?: EmojiRepresentation;
    searchable: boolean;
}
export interface EmojiDescriptionWithVariations extends EmojiDescription {
    skinVariations?: EmojiDescription[];
}
/**
 * Describes an emoji which is a variant of some base emoji. This is used when you want to promote the
 * skinVariations in an EmojiDescriptionWithVariations to represent them along side their base representations.
 */
export interface EmojiVariationDescription extends EmojiDescription {
    /** The id of the 'non-variant version of the emoji */
    baseId: string;
}
export declare type OptionalEmojiDescription = EmojiDescription | undefined;
export declare type OptionalEmojiDescriptionWithVariations = EmojiDescriptionWithVariations | undefined;
export declare type EmojiServiceRepresentation = SpriteServiceRepresentation | ImageRepresentation;
export interface EmojiServiceDescription {
    id: string;
    shortName: string;
    name?: string;
    order?: number;
    fallback?: string;
    ascii?: string[];
    createdDate?: string;
    creatorUserId?: string;
    type: string;
    category: string;
    representation: EmojiServiceRepresentation;
    altRepresentations?: AltRepresentations;
    searchable: boolean;
}
export interface EmojiServiceDescriptionWithVariations extends EmojiServiceDescription {
    skinVariations?: EmojiServiceDescription[];
}
export interface AltRepresentations {
    [key: string]: EmojiServiceRepresentation;
}
export interface SpriteSheets {
    [index: string]: SpriteSheet;
}
/**
 * An access token for emoji stored in the MediaApi
 * (indicated by urls beginning with the url of the token.)
 */
export interface MediaApiToken {
    url: string;
    clientId: string;
    jwt: string;
    collectionName: string;
    expiresAt: number;
}
export interface EmojiMeta {
    spriteSheets?: SpriteSheets;
    mediaApiToken?: MediaApiToken;
}
/**
 * The expected response from an Emoji service.
 */
export interface EmojiServiceResponse {
    emojis: EmojiServiceDescriptionWithVariations[];
    meta?: EmojiMeta;
}
export interface EmojiResponse {
    emojis: EmojiDescriptionWithVariations[];
    mediaApiToken?: MediaApiToken;
}
export interface CategoryDescription {
    id: string;
    name: keyof typeof messages;
    icon: any;
    order: number;
}
export interface OnToneSelected {
    (variation: number): void;
}
export interface OnEmojiEvent<T = any> {
    (emojiId: EmojiId, emoji: OptionalEmojiDescription, event?: SyntheticEvent<T>): void;
}
export interface OnCategory {
    (categoryId: CategoryId | null): void;
}
export declare enum SearchSort {
    None = 0,
    Default = 1,
    UsageFrequency = 2
}
export interface SearchOptions {
    skinTone?: number;
    limit?: number;
    sort?: SearchSort;
}
export interface EmojiSearchResult {
    emojis: EmojiDescription[];
    query?: string;
}
export declare type ToneSelection = number | undefined;
export interface EmojiUpload {
    name: string;
    shortName: string;
    filename: string;
    dataURL: string;
    width: number;
    height: number;
}
export interface User {
    id: string;
}
export declare type OptionalUser = User | undefined;
export declare type Message = React.ReactNode;
