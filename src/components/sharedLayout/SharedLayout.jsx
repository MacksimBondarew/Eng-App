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
                        width="40px"
                        height="40px"
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="#ffffff"
                    >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                            {' '}
                            <path
                                d="M13 31V17H21"
                                stroke="#ffffff"
                                stroke-width="4"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            ></path>{' '}
                            <path
                                d="M13 24H20.5"
                                stroke="#ffffff"
                                stroke-width="4"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            ></path>{' '}
                            <path
                                d="M13 31H20.5"
                                stroke="#ffffff"
                                stroke-width="4"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            ></path>{' '}
                            <path
                                d="M26 31L26 19"
                                stroke="#ffffff"
                                stroke-width="4"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            ></path>{' '}
                            <path
                                d="M26 31L26 24.5C26 22.0147 28.0147 20 30.5 20V20C32.9853 20 35 22.0147 35 24.5L35 31"
                                stroke="#ffffff"
                                stroke-width="4"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            ></path>{' '}
                            <rect
                                x="6"
                                y="6"
                                width="36"
                                height="36"
                                rx="3"
                                stroke="#ffffff"
                                stroke-width="4"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            ></rect>{' '}
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
