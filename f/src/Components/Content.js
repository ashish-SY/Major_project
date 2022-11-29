import React from 'react'
import background from './images/background.png';
import './Content.css';

function Content() {
    return (
        <div>
           <section id='banner'>
               <div className='container'>
                <div className='row'>
                    <div className='col-md-6 find'>
                        <h1>#BE HERO</h1>
                        <h2>YOU DON'T TO BE A DOCTOR</h2>
                        <h2>TO SAVE LIFE</h2>
                        <button>FIND DONORS</button>
                    </div>
                    <div className="col-md-6 text-center">
                        <img src={background} alt=''></img>
                    </div>
                </div>
               </div>
           </section>
        </div>
    )
}

export default Content;
