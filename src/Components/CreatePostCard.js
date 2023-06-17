import { ChakraProvider, Box, Flex, Avatar, Textarea, IconButton, Text } from '@chakra-ui/react';
import { HiPhotograph, HiFilm, HiBriefcase, HiPencilAlt } from 'react-icons/hi';

function CreatePostCard() {
  return (
    <ChakraProvider>
      <Box p={4} borderWidth="1px" borderRadius="md" boxShadow="md" maxWidth="520px" margin="0 auto">
        <Flex alignItems="center" mb={4}>
          <Avatar size="sm" name="Your Name" src="https://e0.pxfuel.com/wallpapers/355/72/desktop-wallpaper-cartoon-boy-iphone-cute-cartoon-boys-thumbnail.jpg" mr={2} />
          <Textarea
            placeholder="What's on your mind?"
            resize="none"
            borderRadius="md"
            border="1px"
            borderColor="gray.200"
            p={2}
            _focus={{ borderColor: 'teal.500' }}
          />
        </Flex>
        <Flex justifyContent="space-around">
          <IconButton icon={<HiPhotograph />} aria-label="Photo" variant="ghost" colorScheme="teal" size="sm" />
          <Text ml={1}>Photo</Text>
          <IconButton icon={<HiFilm />} aria-label="Video" variant="ghost" colorScheme="teal" size="sm" ml={2} />
          <Text ml={1}>Video</Text>
          <IconButton icon={<HiBriefcase />} aria-label="Job" variant="ghost" colorScheme="teal" size="sm" ml={2} />
          <Text ml={1}>Job</Text>
          <IconButton icon={<HiPencilAlt />} aria-label="Write Article" variant="ghost" colorScheme="teal" size="sm" ml={2} />
          <Text ml={1}>Write Article</Text>
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default CreatePostCard;