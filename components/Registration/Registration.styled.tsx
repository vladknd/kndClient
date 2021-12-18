import styled from "styled-components"
import { colors } from "../../styles/variables"

export const MainContainer = styled.div`

`
export const Section1 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${colors.headerBg};
    height: 100vh;
`
export const Logo = styled.img`
    height: 150px;

    @media only screen and (min-width: 768px) {
        height: 300px;
    }

    @media only screen and (min-width: 1000px) {
        height: 400px;
    }
`
export const Section2 = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: ;
    align-items: center;
    background-color: ${colors.headerBg};
    height: 100vh;
`
export const RegistrationDisclaimer = styled.div`
    display: grid;
    /* flex-direction: column;
    justify-content: center;
    align-items: center; */
    grid-template-rows: 1fr 4fr; 
    margin-top: 30px;
    width: 70%;
    height: 80%;
    border-radius: 15px;
    background-color: ${colors.bg};

    @media only screen and (min-width: 600px) {
        height: 60%;
    }

    @media only screen and (min-width: 970px) {
        height: 50%;
    }
`
export const DisclaimerHeader = styled.h1`
    font-family: "Chomsky";
    font-size: 40px;    
    margin: 20px 0px 0px 0px;
    justify-self: center;
    @media only screen and (min-width: 768px) {
        font-size: 60px; 
    }
`
export const DisclaimerText = styled.p`
    font-family: "Carrois";
    font-size: 18px;
    margin-top: 20px;
    padding: 5px 30px 10px 30px;
    text-indent: 30px;
    @media only screen and (min-width: 768px) {
        padding: 5px 100px 10px 100px;
    }
`
export const ContentContainer = styled.section`
    display: flex;
    background-color: ${colors.bg};
    height: 100vh;
`
export const JoinButton = styled.button`
    font-size: 30px;
    padding: 3px 20px;
    margin-top: 30px;
    margin-bottom: 20px;
    width: 120px;
    justify-self: center;
    font-family: "";
    background-color: ${colors.bg};
    border: 2px solid black;
    border-radius: 0;
    &&:hover {
        background-color: rgb(221, 221, 221, 0.67);
    }
    &&:active {
        background-color: ${colors.bg};
    }

`