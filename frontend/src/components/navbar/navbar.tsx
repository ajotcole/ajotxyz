import { LockIcon, MoonIcon, SearchIcon, SunIcon } from '@chakra-ui/icons';
import { Badge, Button, Center, Flex, Heading, Spacer, Tooltip, useColorMode, useColorModeValue } from '@chakra-ui/react';

export const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      style={{
        borderBottom: '0.5px solid #d3d3d3',
        position: 'fixed',
        width: '100%',
        background: useColorModeValue('#fff', '#1A202C'),
        padding: '5px',
        zIndex: 99,
      }}
    >
      <Center>
        <Tooltip label="Search coming soon...">
          <Button isDisabled variant="ghost">
            <SearchIcon />
          </Button>
        </Tooltip>
        <Tooltip label="Close Circle Feed coming soon...">
          <Button isDisabled variant="ghost">
            <LockIcon />
          </Button>
        </Tooltip>
      </Center>
      <Spacer />
      <Center>
        <Heading
          style={{
            fontFamily: 'Karla',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            fontSize: '22px',
            cursor: 'pointer',
          }}
          onClick={() => window.open('/', '_self')}
        >
          ajot.xyz
        </Heading>
        {import.meta.env.VITE_STAGE !== 'prod' && (
          <Badge style={{ marginLeft: '5px' }} colorScheme="blue">
            {import.meta.env.VITE_STAGE}
          </Badge>
        )}
      </Center>
      <Spacer />
      <Center>
        <Button variant="ghost" onClick={toggleColorMode}>
          {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </Button>
      </Center>
    </Flex>
  );
};
