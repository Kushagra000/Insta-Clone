import { Avatar, Box, Button, Flex, Skeleton, SkeletonCircle, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import useFollowUser from '../../hooks/useFollowUser'

const PostHeader = ({post , creatorProfile}) => {
  const {handleFollowUser,isFollowing ,isUpdating}=useFollowUser(post.createdBy);
  return (
    <Flex justifyContent={'space-between'} alignItems={'center'} width={'fulll'} mb={2}>
        <Flex alignItems={'center'} gap={2}>
        {creatorProfile ? (<Link to={`/${creatorProfile.username}`}>
            <Avatar src={creatorProfile.profilePicURL} alt='User profile pic' size={'sm'}/>
          </Link>):(
            <SkeletonCircle size={10}/>
          )}
          
            <Flex fontSize={12} fontWeight={'bold'} gap={2}>
            {creatorProfile ? (<Link to={`/${creatorProfile.username}`}>
            {creatorProfile.username} 
            </Link>):(
              <Skeleton w={'100px'} height={'10px'}/>
            )}
            <Box color={'gray.500'}>
            · 1w
            </Box>
            
            </Flex>
        </Flex>
        {/* Follow /Unfollow Button */}
        <Box
        cursor={'pointer'}
        >
            <Button
              size={"xs"}
              bg={'transparent'}
             fontSize={12} 
            color={'blue.500'} 
            fontWeight={"bold"} 
            _hover={{
                color:"white"
            }}
            onClick={handleFollowUser}
            isLoading={isUpdating}
            transition={"0.2s ease-in-out"}
            >{isFollowing?"Unfollow":"Follow"}</Button>
        </Box>
    </Flex>
  )
}

export default PostHeader