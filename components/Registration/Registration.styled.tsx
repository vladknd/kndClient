import styled from "styled-components"
import { colors } from "../../styles/variables"

export const MainContainer = styled.div`

`
export const Section1 = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${colors.headerBg};
    height: 100vh;
`

export const Section2 = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${colors.headerBg};
    height: 100vh;
`
export const RegistrationDisclaimer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    width: 70%;
    height: 48%;
    border-radius: 15px;
    background-color: ${colors.bg};
`
export const DisclaimerHeader = styled.h1`
    font-family: "Chomsky";
    font-size: 60px;    
    margin: 20px 0px 0px 0px;
`
export const DisclaimerText = styled.p`
    font-family: "Carrois";
    font-size: 18px;
    margin-top: 20px;
    padding: 5px 100px 10px 100px;
    text-indent: 40px;
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