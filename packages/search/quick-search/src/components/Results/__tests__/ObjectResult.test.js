// @flow
import React from 'react';
import { mount } from 'enzyme';
import Avatar from '@atlaskit/avatar';
import ObjectResult from '../ObjectResult';

describe('Object Result', () => {
  let resultWrapper;
  beforeEach(() => {
    resultWrapper = mount(
      <ObjectResult
        containerName=""
        resultId="testId"
        type="object"
        name="test"
      />,
    );
  });

  it('should render an avatar if `avatarUrl` is provided', () => {
    resultWrapper.setProps({ avatarUrl: 'not null' });
    expect(resultWrapper.find(Avatar)).toHaveLength(1);
  });

  it('should render an avatar if `avatarUrl` is not provided', () => {
    expect(resultWrapper.find(Avatar)).toHaveLength(1);
  });

  it('should render `name` prop', () => {
    const name = "Phillip Jacobs' Personal Space";
    resultWrapper.setProps({ name });
    expect(resultWrapper.text()).toEqual(expect.stringContaining(name));
  });

  it('should render lock icon on private room results', () => {
    resultWrapper.setProps({ isPrivate: true });
    expect(
      resultWrapper
        .find(Avatar)
        .at(0)
        .prop('status'),
    ).toBe('locked');
  });

  it('should pass null `status` prop to Avatar on non-private room results', () => {
    // No privacy prop supplied
    expect(
      resultWrapper
        .find(Avatar)
        .at(0)
        .prop('status'),
    ).toBe(null);
  });

  it('should render the `containerName` prop if no objectKey provided', () => {
    resultWrapper.setProps({ containerName: 'Burger Sling' });
    expect(resultWrapper.text()).toEqual(
      expect.stringContaining('Burger Sling'),
    );

    expect(resultWrapper.text()).not.toEqual(
      expect.stringContaining('· Burger Sling'),
    );
  });

  it('should render the `objectKey` and `containerName` prop together', () => {
    resultWrapper.setProps({
      objectKey: 'KFC-11',
      containerName: 'Burger Sling',
    });
    expect(resultWrapper.text()).toEqual(
      expect.stringContaining('KFC-11 · Burger Sling'),
    );
  });
});
