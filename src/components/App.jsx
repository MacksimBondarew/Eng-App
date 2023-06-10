import { Routes, Route } from 'react-router';
import { SharedLayout } from './sharedLayout/SharedLayout';
import { Home } from 'pages/Home';
import { Quiz } from 'pages/Quiz';


export const App = () => {

    return (
        <>
            <Routes>
                <Route path='/' element={<SharedLayout />}>
                    <Route index element={<Home
                        />
                    }
                    />
                    <Route path='/quiz' element={<Quiz />} />
                </Route>
            </Routes> 
        </>
    );
};
