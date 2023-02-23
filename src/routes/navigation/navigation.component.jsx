import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";

import { ReactComponent as CrownLogo } from "../../assets/crown.svg"
import { NavigationContainer, LogoContainer, NavLinks, NavLink } from './navigation.styles';

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);

    const handleOnSignOut = async () => {
      await signOutUser();
    }

    return (
      <Fragment>
        <NavigationContainer>
            <LogoContainer to="/">
                <CrownLogo className="logo" />
            </LogoContainer>
            <NavLinks>
                <NavLink to="/shop">SHOP</NavLink>
                {
                    currentUser ? (<NavLink as='span' onClick={handleOnSignOut}>SIGN OUT</NavLink>) : (<NavLink to="/auth">SIGN IN</NavLink>)
                } 
                <CartIcon />
            </NavLinks>
            { isCartOpen && <CartDropdown /> }
        </NavigationContainer>
        <Outlet />
      </Fragment>
    )
  }

  export default Navigation;