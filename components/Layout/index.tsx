//#------------------GLOBAL-IMPORTS------------------#
//#------------------LOCAL-IMPORTS------------------#
//-------------------STYLED-COMPONENTS:
import { LayoutContainer } from "./Layout.styled"
//-------------------COMPONENTS:
import HeaderComponent from "../Header/HeaderComponent"

const Layout = () => {
    return (
        <>
        {/* <div>HELLO</div> */}
        <LayoutContainer>
            <HeaderComponent/>  
        </LayoutContainer>
        </>
        
    )
}

export default Layout