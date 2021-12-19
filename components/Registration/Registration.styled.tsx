import styled from 'styled-components'
import { colors } from '../../styles/variables'

export const MainContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${colors.headerBg};
    height: 100vh;
`

export const Container = styled.div`
    width: 70%;
    height: 80%;
    border-radius: 10px;
    background-color: ${colors.bg};

    display: grid;
    grid-template-rows: 1fr 5fr;
`

export const Header = styled.h1`
    font-family: "Chomsky";
    font-size: 30px;
    margin: 10px 28% 10px 25%;
    text-align: center;
    justify-self: center;

`
export const Divider = styled.div`
    width: 100%;
    height: 2px;    
    margin: 10px 0 0 0;
    background-color: black;

`
export const HeaderContainer = styled.div`
    height: 100px;

`

export const FormContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`
export const SignButton = styled.button`
    position: static;
    display: inline-block;
    font-size: 25px;
    width: 200px;
    height: 50px;
    background-color: ${colors.bg};
    color: black;
    border: 2px solid black;
    border-radius: 0;

    padding: 3px 20px;
    margin-top: 30px;
    margin-bottom: 20px;
    justify-self: center;
    
    &&:hover {
        background-color: rgb(221, 221, 221, 0.67);
    }
    &&:active {
        background-color: ${colors.bg};
    }

`