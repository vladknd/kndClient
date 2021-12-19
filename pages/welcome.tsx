//#------------------GLOBAL-IMPORTS------------------#
import { useState } from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import NextLink from 'next/link'
//-------------------ICONS:
import { AiOutlineDownCircle } from 'react-icons/ai'
//#------------------LOCAL-IMPORTS------------------#
//-------------------STYLED-COMPONENTS:
import { 
    MainContainer,
    Section1,
    Section2,
    RegistrationDisclaimer,
    ContentContainer,
    DisclaimerHeader,
    DisclaimerText,
    JoinButton,
    Logo
} from "../components/Welcome/Welcome.styled"
//-------------------IMAGES:
// import Knd from "../public/KND.svg"

const Welcome = () => {
    const router = useRouter()
    const [welcome, setWelcome] =  useState(true)

    return (
        <>
        <Section1>
            <Logo src="./KND.svg" alt="knd"/>
            <NextLink href="#section2">
                <AiOutlineDownCircle
                    size={70}
                    // color="white"
                    style={{
                        marginTop: "80px",
                        // color: "white"
                    }}
                />
            </NextLink>
        </Section1>

        <Section2 id="section2">
            {welcome ? <RegistrationDisclaimer>
                    <DisclaimerHeader>
                        Congratulations
                    </DisclaimerHeader>
                    <DisclaimerText>
                        You have been granted an exclusive chance 
                        to join a secret community. You were chosen amongst many to be 
                        a part of group of highly talented individuals. In the community 
                        we support our members in various directions, helping them to find 
                        new opportunities, evolve and participate in unique events. <br/>In our society
                        you will grow and prosper 🖖🏼
                    </DisclaimerText>
                    <JoinButton
                        onClick={() => {
                            router.push('registration')
                        }}
                    >
                        JOIN
                    </JoinButton>
            </RegistrationDisclaimer> : null}
        </Section2>
        </>        
    )
}

export default Welcome