import { EmojiProvider } from '@findable/emoji';
import { emoji } from '@findable/util-data-test';
import * as React from 'react';
import { ConnectedReactionsView } from '../src';
import { ReactionsExampleWrapper } from './examples-util';

const { getEmojiResource } = emoji.storyData;
const demoAri = 'ari:cloud:owner:demo-cloud-id:item/1';
const containerAri = 'ari:cloud:owner:demo-cloud-id:container/1';

export default function Example() {
  return (
    <ReactionsExampleWrapper>
      {store => (
        <div>
          <p>This is a message with some reactions</p>
          <ConnectedReactionsView
            store={store}
            containerAri={containerAri}
            ari={demoAri}
            emojiProvider={getEmojiResource() as Promise<EmojiProvider>}
          />
        </div>
      )}
    </ReactionsExampleWrapper>
  );
}
