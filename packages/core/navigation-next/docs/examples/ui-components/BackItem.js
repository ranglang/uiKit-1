// @flow

import React, { Component } from 'react';

import { colors } from '@findable/theme';
import IssuesIcon from '@findable/icon/glyph/issues';
import { JiraWordmark } from '@findable/logo';
import {
  BackItem,
  GoToItem,
  HeaderSection,
  NavigationProvider,
  MenuSection,
  withNavigationViewController,
  ViewController,
  Wordmark,
} from '../../../src';

import { CONTENT_NAV_WIDTH } from '../../../src/common/constants';

const SectionWrapper = props => (
  <div
    css={{
      backgroundColor: colors.N20,
      marginTop: '8px',
      overflow: 'hidden',
      overflowX: 'hidden',
      position: 'relative',
      width: `${CONTENT_NAV_WIDTH}px`,
    }}
    {...props}
  />
);

const RootMenu = ({ className }: { className: string }) => (
  <div className={className}>
    <GoToItem
      before={IssuesIcon}
      goTo="issues"
      text="Issues"
      testKey="product-item-issues"
    />
  </div>
);

const IssuesMenu = ({ className }: { className: string }) => (
  <div className={className}>
    <BackItem goTo="root" />
  </div>
);

const VIEWS = {
  root: RootMenu,
  issues: IssuesMenu,
};

const Noop = () => null;

class ViewRegistry extends Component<{
  navigationViewController: ViewController,
}> {
  componentDidMount() {
    const { navigationViewController } = this.props;
    Object.keys(VIEWS).forEach(viewId => {
      navigationViewController.addView({
        id: viewId,
        type: 'product',
        getItems: () => [],
      });
    });
    navigationViewController.setView('issues');
  }

  render() {
    return null;
  }
}

const ProductNavigation = ({
  navigationViewController: {
    state: { activeView },
  },
}: {
  navigationViewController: ViewController,
}) => {
  const CurrentMenu = activeView ? VIEWS[activeView.id] : Noop;
  const id = (activeView && activeView.id) || undefined;
  const parentId =
    activeView && activeView.id === 'issues' ? 'root' : undefined;

  return (
    <SectionWrapper>
      <HeaderSection>
        {({ className }) => (
          <div className={className}>
            <Wordmark wordmark={JiraWordmark} />
          </div>
        )}
      </HeaderSection>
      <MenuSection id={id} parentId={parentId}>
        {CurrentMenu}
      </MenuSection>
    </SectionWrapper>
  );
};

const ConnectedProductNavigation = withNavigationViewController(
  ProductNavigation,
);

const ConnectedViewRegistry = withNavigationViewController(ViewRegistry);

export default () => (
  <NavigationProvider>
    <SectionWrapper>
      <ConnectedViewRegistry />

      <ConnectedProductNavigation />
    </SectionWrapper>
  </NavigationProvider>
);
