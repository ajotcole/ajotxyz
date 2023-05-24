import styles from './navigation.module.scss';
import { Box, HStack } from '@chakra-ui/react';

export const Naviagtion = () => {
  return (
    <>
      <HStack className={styles.navigationContainer}>
        <Box className={styles.centerItem}>
          <a href="/" className={styles.fontLogo}>
            ajot.xyz
          </a>
        </Box>
      </HStack>
    </>
  );
};
