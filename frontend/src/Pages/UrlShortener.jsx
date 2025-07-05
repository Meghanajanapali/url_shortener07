import React, {useState} from 'react'
import { Button, Container, TextInput } from '@mantine/core';
import { Text,Stack, Center  } from '@mantine/core';
import Service from '../utils/http';
const service=new Service();
export default function UrlShortener() {

    async function generateShortUrl(){
        try{
            let data=await service.post("s", input);
            setResponse(data);
        }catch(error){
            console.log(error);
        }
    }
    const [input,setInput] = useState(
        {
            "originalUrl": "",
            "expiresAt": "",
            "title": "",
            "customUrl":"",
        }
    );
    const [response, setResponse]=useState(null);
  return (
    
        <Container size={"xs"}>
            {response ? <>{service.getBaseURL() + "/api/s/"+ response.shortCode}</> :
            <Stack m="xl">
        <Text size="30px">Shorten Your Url here</Text>
        <TextInput required  label="Original url"
             onChange={(e)=>{
                setInput({...input, originalUrl: e.target.value})
             }}
        placeholder="enter url"/>
        <TextInput onChange={(e)=>{
                setInput({...input,  customUrl: e.target.value})
             }}   label="Customize url (Optional)" placeholder="enter url"/>
        <TextInput  onChange={(e)=>{
                setInput({...input, title: e.target.value})
             }} label="Title (Optional)" placeholder="enter url"/>
        <TextInput  onChange={(e)=>{
                setInput({...input, expiresAt: e.target.value})
             }} type ="date" label="Date of expiry (Optional)" placeholder="enter url"/>
        <Button disabled={input.originalUrl.length<5} onClick={()=>{generateShortUrl()}}>Generate Short URL</Button>
    </Stack>
        }
        </Container>
   
  )
}
