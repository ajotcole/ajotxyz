import { Box, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Stack, useDisclosure } from '@chakra-ui/react';
import dsgvoText from '../../assets/dsgvo';

import styles from './footer.module.scss';
export const Footer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // TODO let dsgvo text come from strapi

  return (
    <footer className={styles.footerContainer}>
      <Stack className={styles.contentContainer}>
        <Box className={styles.contentSection}>
          <div className={styles.imprint} onClick={onOpen}>
            Impressum
          </div>
        </Box>
        <Box className={styles.copyrightName}>© 2021 ajot.xyz</Box>
      </Stack>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Impressum</ModalHeader>
          <ModalCloseButton />
          <ModalBody></ModalBody>

          <div dangerouslySetInnerHTML={{ __html: dsgvoText }} />
        </ModalContent>
      </Modal>
    </footer>
  );
};
