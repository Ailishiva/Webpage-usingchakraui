
import { ChakraProvider, Box, Flex, Spacer, Link, Avatar, IconButton, Image } from '@chakra-ui/react';
import { HiHome, HiOutlineHeart, HiOutlineSearch,HiOutlineChatAlt,  HiInformationCircle, HiOutlineMail, HiOutlineBell } from 'react-icons/hi';
import CreatePostCard from './Components/CreatePostCard';

function App() {
  return (
    <>
    <ChakraProvider>
      <Box bg="teal" p={4}>
        <Flex  alignItems="center" justify="center">
          <Box p="2">
          <Image src="https://cdn.dribbble.com/users/2592071/screenshots/7327591/logo-artboard_2_4x.png" width={20}/>
            {/* <Link href="#">Logo</Link> */}
          </Box>
          <Spacer />
          <Flex justify="space-between" width={550} color={'white'}>
          <Link href="#"><HiHome size={24} /></Link>
            <Link href="#"><HiOutlineSearch size={24} /></Link>
            <Link href="#"><HiOutlineChatAlt size={24} /></Link>
            <Link href="#"><HiOutlineHeart size={24} /></Link>
            <Link href="#"><HiInformationCircle size={24} /></Link>
            <Link href="#"><HiOutlineMail size={24} /></Link>
          </Flex>
          <Spacer />
          <Flex>
            <IconButton icon={<HiOutlineBell />} colorScheme="whiteAlpha" ml={2} />
            <Avatar src="https://e0.pxfuel.com/wallpapers/355/72/desktop-wallpaper-cartoon-boy-iphone-cute-cartoon-boys-thumbnail.jpg" borderRadius="50%" size="sm" ml={4} mt={1}/>
           
          </Flex>
        </Flex>
      </Box>
    </ChakraProvider>
    <CreatePostCard/>
    </>
  );
}

export default App;
