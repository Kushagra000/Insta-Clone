import { Flex,ModalContent,ModalCloseButton ,ModalBody, GridItem, Modal, ModalOverlay, Image, Text, useDisclosure, Box, Avatar, Divider, VStack } from '@chakra-ui/react'
import {AiFillHeart } from 'react-icons/ai'
import {FaComment} from 'react-icons/fa'
import {MdDelete} from 'react-icons/md'
import Comment from '../Comment/Comment'
import PostFooter from '../FeedPosts/PostFooter'

const ProfilePost = ({img}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>

    <GridItem
    cursor={'pointer'}
    borderRadius={4}
    overflow={'hidden'}
    borderColor={'whiteAplha.300'}
    position={'relative'}
    aspectRatio={1/1}
    onClick={onOpen}
    >

    <Flex
      opacity={0}
      _hover={{opacity:1}}
      position={'absolute'}
      top={0}
      left={0}
      right={0}
      bottom={0}
      bg={'blackAlpha.700'}
      transition={'all 0.3s ease'}
      zIndex={1}
      justifyContent={'center'}>

      <Flex
        alignItems={'center'} justifyContent={'center'} gap={50}>
        <Flex>
          <AiFillHeart size={20}/>
          <Text fontWeight={'bold'} ml={2}>7</Text>
        </Flex>
        <Flex>
          <FaComment size={20}/>
          <Text fontWeight={'bold'} ml={2}>4</Text>
        </Flex>

      </Flex>

    </Flex>

    <Image src={img} alt='Profile post' w={'100%'} h={'100%'} objectFit={'cover'}/>
    </GridItem>

    <Modal isOpen={isOpen} onClose={onClose}
    isCentered={true}
    size={{base:'3xl',md:'5xl'}}
    >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody
          bg={'black'}
          pb={5}
          >
            <Flex gap={4} w={{base:'90%',sm:'70%',md:'full'}} mx={'auto'}>
            <Box borderRadius={4} overflow={'hidden'} border={'1px solid'} borderColor={'whiteAlpha.300'} flex={1.5}>
              <Image src={img} alt='Post'/>
            </Box>
            <Flex flex={1} flexDirection={'column'} px={10} display={{base:'none',md:'flex'}}>
              <Flex alignItems={'center'} justifyContent={'space-between'}>
              <Flex alignItems={'center'} gap={4}>
                <Avatar src='/profilepic.png' size={'sm'} name='Kushagra Awasthi'/>
                <Text fontWeight={'bold'} fontSize={12}>
                  _awa_sthi_
                </Text>
              </Flex>
              <Box
               _hover={{color:'red.600',bg:'whiteAlpha.300'}} borderRadius={4} p={1}>
                <MdDelete size={20} cursor='pointer'/>
              </Box>
              </Flex>
              <Divider my={4} bg={'gray.500'}/>
              <VStack w={'full'} alignItems={'start'} maxH={'350px'} overflowY={'auto'}>
                <Comment
                  createdAt='1d ago'
                  username='_awa_sthi_'
                  profilePic='/profilepic.png'
                  text={'First cmnt'}
                />
                <Comment
                  createdAt='1d ago'
                  username='Kashish1812_'
                  profilePic='/img1.png'
                  text={'scnd cmnt'}
                />
                <Comment
                  createdAt='1d ago'
                  username='Shashi_s21'
                  profilePic='/img2.png'
                  text={'Third cmnt'}
                />
                <Comment
                  createdAt='1d ago'
                  username='Shashi_s21'
                  profilePic='/img2.png'
                  text={'Third cmnt'}
                />
                <Comment
                  createdAt='1d ago'
                  username='Shashi_s21'
                  profilePic='/img2.png'
                  text={'Third cmnt'}
                />
                <Comment
                  createdAt='1d ago'
                  username='Shashi_s21'
                  profilePic='/img2.png'
                  text={'Third cmnt'}
                />
                <Comment
                  createdAt='1d ago'
                  username='Shashi_s21'
                  profilePic='/img2.png'
                  text={'Third cmnt'}
                />
                <Comment
                  createdAt='1d ago'
                  username='Shashi_s21'
                  profilePic='/img2.png'
                  text={'Third cmnt'}
                />
                <Comment
                  createdAt='1d ago'
                  username='Shashi_s21'
                  profilePic='/img2.png'
                  text={'Third cmnt'}
                />
                <Comment
                  createdAt='1d ago'
                  username='Shashi_s21'
                  profilePic='/img2.png'
                  text={'Third cmnt'}
                />
                <Comment
                  createdAt='1d ago'
                  username='Shashi_s21'
                  profilePic='/img2.png'
                  text={'Third cmnt'}
                />
                <Comment
                  createdAt='1d ago'
                  username='Shashi_s21'
                  profilePic='/img2.png'
                  text={'Third cmnt'}
                />
                <Comment
                  createdAt='1d ago'
                  username='Shashi_s21'
                  profilePic='/img2.png'
                  text={'Third cmnt'}
                />
                <Comment
                  createdAt='1d ago'
                  username='Shashi_s21'
                  profilePic='/img2.png'
                  text={'Third cmnt'}
                />
                <Comment
                  createdAt='1d ago'
                  username='Shashi_s21'
                  profilePic='/img2.png'
                  text={'Third cmnt'}
                />
              </VStack>
              <Divider my={4} bg={'gray.800'}/>
              <PostFooter isProfilePage={true}/>
            </Flex>
            </Flex>
            
            
          </ModalBody>

         
        </ModalContent>
      </Modal>
    </>
  )
}

export default ProfilePost