import { Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import { Suspense } from 'react';
import { StroopAsync } from './pages/Stroop/Stroop.async';
import { KawashimaAsync } from './pages/Kawashima/Kawashima.async';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { AddSubtractAsync } from './pages/AddSubtract/AddSubtract.async';

const App = () => {
    return (
        <div className="App">
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/kawashima" element={<KawashimaAsync />} />

                    <Route path="/stroop" element={<StroopAsync />} />

                    <Route path="/addsub" element={<AddSubtractAsync />} />

                    <Route path="/" element={<MainPageAsync />} />

                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
