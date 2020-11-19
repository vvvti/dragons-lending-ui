import React from 'react';
import dragonImage from '../../assets/dragon-eye.png';
import {
    Logo,
    StyledAvatar,
    StyledButton,
    StyledLogoContainer,
    StyledMenu,
    StyledNavbar,
    StyledNavLink,
    StyledText,
    StyledTitle,
} from './Navbar.styled';
import {ROUTES} from '../../helpers/routes';
import {useAuthContext} from '../../context/auth-context';

export const Navbar: React.FC = () => {
    const {isLoggedIn, logout} = useAuthContext();

    const handleButtonClick = () => {
        if (isLoggedIn) {
            logout();
        }
    };

    return (
        <StyledNavbar data-testid={'main-navbar'}>
            <StyledLogoContainer>
                <StyledNavLink to={ROUTES.HOME}>{<Logo src={dragonImage} alt="" />}</StyledNavLink>
                <StyledTitle to={ROUTES.LOANGRID}>Dragons lending</StyledTitle>
            </StyledLogoContainer>
            <StyledMenu>
                <StyledNavLink to={ROUTES.ABOUT}>ABOUT</StyledNavLink>
                <StyledNavLink to={ROUTES.CONTACT}>CONTACT</StyledNavLink>
                <StyledNavLink to={ROUTES.RULES}>RULES</StyledNavLink>
                <StyledNavLink to={ROUTES.PRIVACY}>PRIVACY</StyledNavLink>

                <StyledButton onClick={handleButtonClick}>
                    {isLoggedIn ? <StyledText>Logout</StyledText> : <StyledNavLink to={ROUTES.LOGIN}>Login</StyledNavLink>}
                </StyledButton>

                {isLoggedIn && (
                    <StyledNavLink to={ROUTES.USERACCOUNT}>
                        <StyledAvatar />
                    </StyledNavLink>
                )}
            </StyledMenu>
        </StyledNavbar>
    );
};
