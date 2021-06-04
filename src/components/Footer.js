import { Text } from '@chakra-ui/react';

function Footer() {
  return (
    <footer className="container mx-auto py-2">
      <Text fontSize="xs">
        {new Date().getFullYear()} &copy; Mimikyu Records
      </Text>
    </footer>
  );
}

export default Footer;
