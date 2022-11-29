import React from 'react'
import './Services.css';
import search from './images/search.png';
import bloodBank from './images/bloodBank.png';

function Services() {
  return (
    <div>
      <section>
        <div className='container'>
        <h1 className='services'>Our Services</h1>
        </div>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-3 card1'>
                    <img src={search} alt='' ></img>
                    <h2>Search for Donors</h2>
                </div>
                <div className='col-md-3 card1'>
                    <img src={bloodBank} alt=''></img>
                     <h2>Find Blood Bank</h2>
                </div>
                <div className='col-md-3 card1'>
                    <img src={search} alt=''></img>
                    <h2>Search Hospital</h2>
                </div>
                <div className='col-md-3 card1'>
                    <img src={search} alt=''></img>
                    <h2>Donate Now</h2>
                </div>
            </div>
        </div>
      </section>

    </div>
  )
}

export default Services;
