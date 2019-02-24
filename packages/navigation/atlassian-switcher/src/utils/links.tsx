import * as React from 'react';

import DiscoverFilledGlyph from '@atlaskit/icon/glyph/discover-filled';
import SettingsGlyph from '@atlaskit/icon/glyph/settings';
import PeopleGlyph from '@atlaskit/icon/glyph/people-group';

import ConfluenceIcon from '@atlaskit/logo/dist/esm/ConfluenceLogo/Icon';
import JiraSoftwareIcon from '@atlaskit/logo/dist/esm/JiraSoftwareLogo/Icon';
import JiraServiceDeskIcon from '@atlaskit/logo/dist/esm/JiraServiceDeskLogo/Icon';
import JiraCoreIcon from '@atlaskit/logo/dist/esm/JiraCoreLogo/Icon';
import AtlassianIcon from '@atlaskit/logo/dist/esm/AtlassianLogo/Icon';
import { LicenseInformationDataStructure } from '../providers/types';
import jiraOpsLogo from './assets/jira-ops-logo';
import { CustomLink, RecentContainer } from '../types';
import WorldIcon from '@atlaskit/icon/glyph/world';
import { createIcon, createImageIcon } from './icon-themes';

enum ProductActivationStatus {
  ACTIVE = 'ACTIVE',
  DEACTIVATED = 'DEACTIVATED',
}

enum ProductKey {
  CONFLUENCE = 'confluence.ondemand',
  JIRA_CORE = 'jira-core.ondemand',
  JIRA_SOFTWARE = 'jira-software.ondemand',
  JIRA_SERVICE_DESK = 'jira-servicedesk.ondemand',
  JIRA_OPS = 'jira-incident-manager.ondemand',
}

interface StringDict {
  [index: string]: string;
}

export type SwitcherItemType = {
  key: string;
  label: string;
  Icon: React.ComponentType<any>;
  href: string;
};

export type RecentItemType = SwitcherItemType & {
  type: string;
  description: string;
};

export type SuggestedProductItemType = SwitcherItemType | null;

export const OBJECT_TYPE_TO_LABEL_MAP: StringDict = {
  'jira-project': 'Jira project',
  'confluence-space': 'Confluence space',
};

export const PRODUCT_DATA_MAP: {
  [productKey: string]: {
    label: string;
    Icon: React.ComponentType<any>;
    href: string;
  };
} = {
  [ProductKey.CONFLUENCE]: {
    label: 'Confluence',
    Icon: createIcon(ConfluenceIcon, { size: 'small' }),
    href: '/wiki',
  },
  [ProductKey.JIRA_CORE]: {
    label: 'Jira Core',
    Icon: createIcon(JiraCoreIcon, { size: 'small' }),
    href: '/secure/BrowseProjects.jspa?selectedProjectType=business',
  },
  [ProductKey.JIRA_SOFTWARE]: {
    label: 'Jira Software',
    Icon: createIcon(JiraSoftwareIcon, { size: 'small' }),
    href: '/secure/BrowseProjects.jspa?selectedProjectType=software',
  },
  [ProductKey.JIRA_SERVICE_DESK]: {
    label: 'Jira Service Desk',
    Icon: createIcon(JiraServiceDeskIcon, { size: 'small' }),
    href: '/secure/BrowseProjects.jspa?selectedProjectType=service_desk',
  },
  [ProductKey.JIRA_OPS]: {
    label: 'Jira Ops',
    Icon: createIcon(jiraOpsLogo, { size: 'small' }),
    href: '/secure/BrowseProjects.jspa?selectedProjectType=ops',
  },
};

export const getObjectTypeLabel = (type: string): string => {
  return OBJECT_TYPE_TO_LABEL_MAP[type] || type;
};

export const getFixedProductLinks = (): SwitcherItemType[] => [
  {
    key: 'people',
    label: 'People',
    Icon: createIcon(PeopleGlyph),
    href: `/people`,
  },
  {
    key: 'home',
    label: 'Atlassian Home',
    Icon: createIcon(AtlassianIcon, { size: 'small' }),
    href: `/home`,
  },
];

export const getProductLink = (productKey: string): SwitcherItemType => ({
  key: productKey,
  ...PRODUCT_DATA_MAP[productKey],
});

export const getProductIsActive = (
  { products }: LicenseInformationDataStructure,
  productKey: string,
): boolean =>
  products.hasOwnProperty(productKey) &&
  products[productKey].state === ProductActivationStatus.ACTIVE;

export const getProductLinks = (
  licenseInformationData: LicenseInformationDataStructure,
): SwitcherItemType[] => {
  const majorJiraProducts = [
    ProductKey.JIRA_SOFTWARE,
    ProductKey.JIRA_SERVICE_DESK,
    ProductKey.JIRA_OPS,
  ];
  const activeProductKeys: string[] = [
    ProductKey.JIRA_CORE,
    ...majorJiraProducts,
    ProductKey.CONFLUENCE,
  ].filter((productKey: string) =>
    getProductIsActive(licenseInformationData, productKey),
  );

  if (
    activeProductKeys.indexOf(ProductKey.JIRA_CORE) === -1 &&
    (activeProductKeys.indexOf(ProductKey.JIRA_SOFTWARE) !== -1 ||
      activeProductKeys.indexOf(ProductKey.JIRA_SERVICE_DESK) !== -1 ||
      activeProductKeys.indexOf(ProductKey.JIRA_OPS) !== -1)
  ) {
    activeProductKeys.unshift(ProductKey.JIRA_CORE);
  }

  const productLinks = activeProductKeys.map((productKey: string) =>
    getProductLink(productKey),
  );

  return [...productLinks, ...getFixedProductLinks()];
};

export const getAdministrationLinks = (
  cloudId: string,
  isAdmin: boolean,
): SwitcherItemType[] => {
  const adminBaseUrl = isAdmin ? `/admin/s/${cloudId}` : '/trusted-admin';
  return [
    {
      key: 'discover-applications',
      label: 'Discover more',
      Icon: createIcon(DiscoverFilledGlyph, { size: 'medium' }),
      href: `${adminBaseUrl}/billing/addapplication`,
    },
    {
      key: 'administration',
      label: 'Administration',
      Icon: createIcon(SettingsGlyph, { size: 'medium' }),
      href: adminBaseUrl,
    },
  ];
};

export const getSuggestedProductLink = (
  licenseInformationData: LicenseInformationDataStructure | null,
): SuggestedProductItemType => {
  if (!licenseInformationData) {
    return null;
  }
  if (!getProductIsActive(licenseInformationData, ProductKey.CONFLUENCE)) {
    return getProductLink(ProductKey.CONFLUENCE);
  }
  if (
    !getProductIsActive(licenseInformationData, ProductKey.JIRA_SERVICE_DESK)
  ) {
    return getProductLink(ProductKey.JIRA_SERVICE_DESK);
  }
  return null;
};

export const getCustomLinkItems = (
  list: Array<CustomLink>,
): SwitcherItemType[] =>
  list.map(customLink => ({
    key: customLink.key,
    label: customLink.label,
    Icon: createIcon(WorldIcon),
    href: customLink.link,
  }));

export const getRecentLinkItems = (
  list: Array<RecentContainer>,
): RecentItemType[] =>
  list.map(customLink => ({
    key: customLink.objectId,
    label: customLink.name,
    Icon: createImageIcon(customLink.iconUrl),
    href: customLink.url,
    type: customLink.type,
    description: getObjectTypeLabel(customLink.type),
  }));
