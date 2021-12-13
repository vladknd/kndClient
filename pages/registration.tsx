//#------------------GLOBAL-IMPORTS------------------#
import { NextPage } from "next"
//#------------------LOCAL-IMPORTS------------------#
//-------------------STYLED-COMPONENTS:
import { 
    RegistrationContainer,
    RegistrationDisclaimer
} from "../components/Registration/Registration.styled"
//-------------------IMAGES:
// import Knd from "../public/KND.svg"

const Registration = () => {
    return (
        <RegistrationContainer>
            <img src="./KND.svg" alt="" />
            <RegistrationDisclaimer>

            </RegistrationDisclaimer>
        </RegistrationContainer>
    )
}

export default Registration