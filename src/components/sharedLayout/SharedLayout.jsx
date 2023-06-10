import { Icon } from '@chakra-ui/react';
import styled from '@emotion/styled';
import * as React from 'react';
import { Outlet } from 'react-router';
import { NavLink, Link } from 'react-router-dom';

export const SharedLayout = () => {
    return (
        <>
            <Header>
                <Link to="/">
                    <Icon
                        width="50px"
                        height="50px"
                        version="1.0"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512.000000 512.000000"
                        preserveAspectRatio="xMidYMid meet"
                    >
                        <g
                            transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                            fill='white'
                            stroke="none"
                        >
                            <path
                                d="M822 4674 c-29 -7 -79 -26 -110 -41 -75 -37 -188 -150 -224 -225 -61
-126 -58 -16 -58 -1848 0 -1832 -3 -1722 58 -1848 37 -77 141 -181 219 -221
130 -65 11 -61 1853 -61 1833 0 1726 -3 1850 58 75 36 179 142 219 220 65 129
61 10 61 1852 0 1832 3 1722 -58 1848 -36 75 -150 191 -222 225 -126 60 -19
57 -1855 56 -1421 0 -1688 -3 -1733 -15z m3384 -419 c68 -28 64 89 64 -1695 0
-1784 4 -1667 -64 -1695 -53 -22 -3239 -22 -3292 0 -68 28 -64 -89 -64 1695 0
1777 -4 1666 62 1695 50 22 3242 22 3294 0z"
                            />
                            <path
                                d="M1306 3505 c-21 -7 -54 -28 -73 -47 -65 -63 -64 -46 -61 -925 l3
-790 30 -48 c19 -30 45 -56 70 -69 39 -20 56 -21 490 -24 316 -2 462 1 491 9
155 42 205 239 91 357 -55 57 -93 62 -439 62 l-308 0 0 160 0 160 323 0 c292
0 326 2 362 19 161 75 168 311 10 382 -36 17 -71 19 -367 19 l-328 0 0 159 0
160 353 3 354 3 48 30 c65 40 95 97 95 179 -1 104 -53 182 -138 206 -23 6
-212 10 -502 10 -369 -1 -473 -4 -504 -15z"
                            />
                            <path
                                d="M2699 3295 c-57 -18 -113 -77 -129 -134 -7 -27 -10 -264 -8 -738 3
-686 3 -699 24 -738 62 -119 247 -141 344 -42 56 58 60 89 60 523 0 369 1 397
20 447 72 192 281 238 428 94 80 -78 82 -91 82 -541 0 -270 4 -404 12 -427 19
-58 49 -91 106 -117 124 -57 268 2 317 131 15 39 16 89 12 453 -4 451 -5 462
-72 593 -91 182 -226 300 -420 367 -72 25 -93 28 -210 28 -112 0 -140 -4 -206
-26 l-76 -25 -12 33 c-37 102 -159 155 -272 119z"
                            />
                        </g>
                    </Icon>
                </Link>
                <Nav>
                    <LinkActive to="/">Home</LinkActive>
                    <LinkActive to="/quiz">Quiz</LinkActive>
                </Nav>
            </Header>
            <Outlet />
        </>
    );
};

const Header = styled.header`
    display: flex;
    align-items: center;
    padding: 1rem;
    gap: 3rem;
    background-color: #3eb489;
    color: white;
    border-radius: 0 0 15px 15px;
`;

const Nav = styled.nav`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

const LinkActive = styled(NavLink)`
    font-size: 1.2rem;
    text-decoration: none;
    color: white;
    opacity: 0.8;
    transition: opacity 0.2s ease-in-out;
    &:hover {
        opacity: 1;
    }

    &.active {
        font-weight: bold;
        opacity: 1;
    }
`;

export const Authorization = styled.div`
    margin-left: auto;
    ${Link}:first-child {
        margin-right: 1rem;
    }
`;
