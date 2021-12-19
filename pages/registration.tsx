//#------------------GLOBAL-IMPORTS------------------#
import { useState } from 'react'
import { NextPage } from 'next'
import NextLink from 'next/link'
//-------------------ICONS:
import { AiOutlineDownCircle } from 'react-icons/ai'
//-------------------MUI:
import TextField from '@mui/material/TextField'
import { alpha, styled } from '@mui/material/styles'
//#------------------LOCAL-IMPORTS------------------#
//-------------------STYLED-COMPONENTS:
import { 
    MainContainer,
    Container,
    Header, 
    HeaderContainer,
    Divider,
    FormContainer,
    SignButton
} from '../components/Registration/Registration.styled'
//-------------------IMAGES:
// import Knd from "../public/KND.svg"
const Input = styled(TextField)({
    '& input:valid + fieldset': {
        borderColor: 'black',
        borderWidth: 2,
    },
    color: 'black',
    margin: '20px',
    height: "30px"
})

const Welcome = () => {
    const [welcome, setWelcome] =  useState(true)

    return (
        <MainContainer>
            <Container>
                <HeaderContainer>
                    <Divider/>
                        <Header>
                            Registration
                        </Header>
                    <Divider/>
                    
                    
                </HeaderContainer>
                <FormContainer>
                        <Input
                            id="firstName" 
                            label="First name" 
                            variant="standard" 
                            color="primary"
                        />
                        <Input
                            id="lastName" 
                            label="Last name" 
                            variant="standard" 
                            color="primary"
                        />
                        <Input
                            id="username" 
                            label="Username" 
                            variant="standard" 
                            color="primary"
                        />
                        <Input
                            id="email" 
                            label="Email" 
                            variant="standard" 
                            color="primary"
                        />
                        <Input
                            id="password" 
                            label="Password" 
                            variant="standard" 
                            color="primary"
                            type="password"
                        />
                        
                    </FormContainer>
                    <SignButton>SIGN UP</SignButton>
            </Container>
        </MainContainer>
    )
}

export default Welcome