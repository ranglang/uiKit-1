import { BrowserTestCase } from '@findable/webdriver-runner/runner';
import Page from '@findable/webdriver-runner/wd-wrapper';
import {
  callNativeBridge,
  editor,
  editable,
  getBridgeOutput,
  skipBrowsers as skip,
} from '../_utils';

BrowserTestCase(
  `text-color.ts: Can change text color`,
  { skip: skip.concat('safari') },
  async (client: any) => {
    const browser = new Page(client);
    await browser.goto(editor.path);
    await browser.waitForSelector(editable);

    await browser.type(editable, 'Normal Text');
    await callNativeBridge(browser, 'setTextColor', '#008DA6');
    await browser.type(editable, 'Colorful text');

    const textColorPayloads = await getBridgeOutput(
      browser,
      'textFormatBridge',
      'updateTextColor',
    );
    expect(textColorPayloads).toMatchSnapshot();
  },
);
