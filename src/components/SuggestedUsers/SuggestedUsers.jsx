import { Box, Flex, Text, VStack, Link } from '@chakra-ui/react'
import React from 'react'
import SuggestedHeader from './SuggestedHeader'
import SuggestedUser from './SuggestedUser'
import useGetSuggestedUsers from '../../hooks/useGetSuggestedUsers'

const SuggestedUsers = () => {
   const {isLoading, suggestedUsers} =  useGetSuggestedUsers();
   if(isLoading) return null;
   console.log("Hello")
   return (
    <VStack py={8} px={6} gap={4}>
    <SuggestedHeader/>
   <Flex alignItems={'center'} justifyContent={'space-between'} w={'full'}>
   <Text fontSize={12} fontWeight={'bold'} color={'gray.500'}>
    Suggested for you
   </Text>

   <Text fontSize={12} fontWeight={'bold'} _hover={{color:'gray.400'}} cursor={'pointer'}>
    See All
   </Text>

   </Flex>
   {suggestedUsers.map(user=>(
    <SuggestedUser user={user} key={user.id}/>
   ))}


   <Box
    fontSize={12} color={'gray.500'} mt={5} alignSelf={'start'}
   >
        © 2024 Build by{" "}
        <Link href='https://www.linkedin.com/in/kushagra-awasthi-205a55212/' target='_blank' color={'blue.500'} fontSize={14}>Kushagra Awasthi</Link>
        </Box> 
    </VStack>
  )
}

export default SuggestedUsers