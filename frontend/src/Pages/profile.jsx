import React, {useEffect, useState } from 'react'
import Service from '../utils/http';
import {Avatar} from '@mantine/core';
import { Text } from '@mantine/core';
const service=new Service();
import { Stack } from '@mantine/core';
export default function Profile() {

    const [user, setUser]=useState({});

    async function getMyData(){
        try{
            let data=await service.get("user/me");
            setUser(data);
        }catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        getMyData();
    },[]);

  return (
    <div>
      {/* <Avatar src={user.avatar} alt="it is me"/> */}
      <Stack
      h={300}
      bg="var(--mantine-color-body)"
      align="center"
      justify="center"
      gap="md"
    >
      <Avatar color="cyan"  size='xl'>MK</Avatar>
      <Text size="xs">This is my profile page</Text>
      <Text size="md">{user._id}</Text>
      <Text tt="uppercase" fw={600}>{user.name}</Text>
      <Text fw={500}>{user.email}</Text>
    </Stack>
    </div>
  )
}
