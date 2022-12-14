import { FontIcon, Panel, Stack, TooltipHost } from '@fluentui/react';
import styles from './navigation.module.scss';
import { useBoolean } from '@fluentui/react-hooks';
import { changedDate, versionNumber } from '../../index';

export const Naviagtion = () => {
  const [isOpen, { setTrue: openPanel, setFalse: dismissPanel }] = useBoolean(false);

  return (
    <>
      <Stack horizontal className={styles.navigationContainer} tokens={{ childrenGap: 10 }}>
        <Stack.Item align="center">
          <TooltipHost content="Coming soon...">
            <FontIcon className={styles.searchIcon} iconName="Search" />
          </TooltipHost>
        </Stack.Item>
        <Stack.Item className={styles.centerItem} grow={3} align="center">
          <a href="/" className={styles.fontLogo}>
            ajot.xyz
          </a>
        </Stack.Item>
        <Stack.Item align="center">
          <FontIcon onClick={openPanel} className={styles.icons} iconName="GlobalNavButton" />
        </Stack.Item>
      </Stack>
      <Panel isLightDismiss isOpen={isOpen} onDismiss={dismissPanel} closeButtonAriaLabel="Close" headerText="Soon to be Menu">
        <p>
          Version <b>{versionNumber}</b>
        </p>
        <p>
          Last Updated on <b>{changedDate}</b>
        </p>
      </Panel>
    </>
  );
};
