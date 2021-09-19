import React from 'react';
import Web1 from './Web1.js';
import Web2 from './Web2.js';
import Web3 from './Web3.js';
import Web4 from './Web4.js';
import "./bootstrap.css";


function App () {
    return(
        <div>
            <h2 className="text-center">Test App</h2>
            <div className="container-fluid">
                <section>
                    <Web1/>
                    <Web2/>
                    <Web3/>
                    <Web4/>
                </section>
            </div>
        </div>

    )

}
export default App;