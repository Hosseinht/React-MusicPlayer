import React from 'react';
//Import Styles
import "./styles/app.scss"
//Adding Components
import Player from "./components/player";
import Song from "./components/song";

function App() {
    return (
        <div className="App">
            < Song/>
            < Player/>
        </div>
    );
}

export default App;
