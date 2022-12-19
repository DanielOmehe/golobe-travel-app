import { Fragment } from "react"
import { Airplane, Bed } from "../icons"
import { Find, Link } from "."
import { Logo } from "."
const NavBarComponent = ({variant})=>{
    return(
        <Fragment>
            <nav className={variant}>
                <div className="frame">
                <div className="booking">
                        <Find variant='flights' >
                            <Airplane />
                            <Link
                            url='/flights'
                            variant='flight'
                            > Find Flights </Link>
                        </Find>            
                        <Find variant='hotels'>
                            <Bed />
                            <Link
                            url='/hotels'
                            variant='hotel'
                            > Find Hotels </Link>
                        </Find>
                    </div>
                    <Logo> <img src="/images/navbarLogo.png" /> </Logo>
                </div>
                <div className="register">
                    <Link variant='login' url='/login'>Login</Link>
                    <Link variant='signup' url='/signup'>Sign Up</Link>
                </div>
            </nav>

            <style jsx>{`
                .landing-page-nav{
                    height: 96px;
                    width: 100%;
                    padding: 24px 32px 24px 32px;
                    justify-content: space-between;
                    display: flex;
                    align-items: center;
                    background: transparent;
                    color: white;
                }
                .frame{
                    height: 36px;
                    width: 714.3529663085938px;  
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }
                .booking{
                    height: 24px;
                    width: 242px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    font-weight: 600;
                }
                .register{
                    height: 48px;
                    width: 177px;
                    display: flex;
                    align-items: center;                    
                    justify-content: space-between;
                }
            `}</style>
        </Fragment>
    )
}

export default NavBarComponent