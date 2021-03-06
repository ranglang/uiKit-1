// @flow
import {
  getExampleUrl,
  takeScreenShot,
} from '@findable/visual-regression/helper';

describe('Snapshot Test', () => {
  it('Announcement banner example should match production example', async () => {
    const url = getExampleUrl(
      'core',
      'banner',
      'announcementBanner',
      global.__BASEURL__,
    );
    const image = await takeScreenShot(global.page, url);
    //$FlowFixMe
    expect(image).toMatchProdImageSnapshot();
  });
});
