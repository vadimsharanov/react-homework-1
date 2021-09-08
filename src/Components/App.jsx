import React from 'react';
import trains from './Data.js';
import Vaizdelis from './Vaizdelis.jsx';

function App(props) {

    return (
        <div className="container ">
            {trains.map((traukinys, i ) =><Vaizdelis
            key={i} img={traukinys.img} desc={traukinys.desc} >
            </Vaizdelis>)}

        </div>

    )
}

export default App