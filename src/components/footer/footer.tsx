import {
  Box,
  Center,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Spacer,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import dsgvoText from '../../assets/dsgvo';

import styles from './footer.module.scss';
export const Footer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // TODO let dsgvo text come from strapi

  return (
    <footer
      className={styles.footerContainer}
      style={{
        backgroundColor: useColorModeValue('#46494c', '#242d36'),
        width: '100%',
      }}
    >
      <Flex>
        <Spacer />
        <Center>
          <Text
            onClick={onOpen}
            style={{
              color: '#fff',
              textTransform: 'uppercase',
              fontFamily: 'Karla',
              letterSpacing: '2px',
              fontSize: '12px',
              cursor: 'pointer',
            }}
          >
            Impressum / Imprint
          </Text>
          <Text
            style={{
              color: '#fff',
              margin: '15px 10px',
              textTransform: 'uppercase',
              fontFamily: 'Karla',
              letterSpacing: '2px',
              fontSize: '12px',
            }}
          >
            © 2023 ajot.xyz
          </Text>
        </Center>
        <Spacer />
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Impressum</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div dangerouslySetInnerHTML={{ __html: dsgvoText }} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </footer>
  );
};
