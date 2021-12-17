//#------------------GLOBAL-IMPORTS------------------#
import { NextPage } from 'next'
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
    JoinButton
} from "../components/Registration/Registration.styled"
//-------------------IMAGES:
// import Knd from "../public/KND.svg"

const Registration = () => {
    return (
        <MainContainer>
        <Section1>
            <img src="./KND.svg" alt="" height={520}/>
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
            <RegistrationDisclaimer>
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
                    <JoinButton>JOIN</JoinButton>
            </RegistrationDisclaimer>
        </Section2>
        </MainContainer>        
    )
}

export default Registration