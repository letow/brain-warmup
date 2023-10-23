import { Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import Kawashima from './pages/Kawashima/Kawashima';
import MainPage from './pages/MainPage/MainPage';
import Stroop from './pages/Stroop/Stroop';
import { Suspense } from 'react';

const App = () => {
    return (
        <div className="App">
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/kawashima" element={<Kawashima />} />

                    <Route path="/stroop" element={<Stroop />} />

                    <Route path="/" element={<MainPage />} />

                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
