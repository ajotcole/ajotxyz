import { Panel, PanelType, Stack } from '@fluentui/react';
import { useBoolean } from '@fluentui/react-hooks';
import dsgvoText from '../../assets/dsgvo';

import styles from './footer.module.scss';
export const Footer = () => {
  const [isOpen, { setTrue: openPanel, setFalse: dismissPanel }] = useBoolean(false);

  return (
    <footer className={styles.footerContainer}>
      <Stack className={styles.contentContainer}>
        <Stack.Item className={styles.contentSection} align="center">
          <div className={styles.imprint} onClick={() => openPanel()}>
            Impressum
          </div>
        </Stack.Item>
        <Stack.Item className={styles.copyrightName} align="center">
          © 2021 ajot.xyz
        </Stack.Item>
      </Stack>
      <Panel isLightDismiss isOpen={isOpen} onDismiss={dismissPanel} type={PanelType.medium} headerText="Impressum">
        <div dangerouslySetInnerHTML={{ __html: dsgvoText }} />
      </Panel>
    </footer>
  );
};
