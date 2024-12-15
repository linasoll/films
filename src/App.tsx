import React from 'react';
import './App.css';
import Stars from './components/stars.tsx';

const App: React.FC = () => {
    return (
        <div>
            <h1>Рейтинг фильма</h1>
            <h2>1 звезда</h2>
            <Stars count={1} />
            <h2>3 звезды</h2>
            <Stars count={3} />
            <h2>5 звезд</h2>
            <Stars count={5} />
            <h2>Больше 5 звезд</h2>
            <Stars count={7} />
            <h2>Не число</h2>
            <Stars count={"nfdlnlvf"} />
        </div>
    );
};

export default App;
