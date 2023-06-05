import * as React from 'react';
import { Outlet } from 'react-router';
import { NavLink } from 'react-router-dom';

export const SharedLayout = () => {

    return (
        <>
            <header>
                <nav>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/quiz' >Quiz</NavLink>
                </nav>
            </header>
            <Outlet />
        </>
    );
};
