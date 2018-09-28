import React from 'react';
import laundry from '../assets/images/laundry.png';
function Home(){
  return(
    <div>
      <img src={laundry} />
      <h3>Outstanding Personal and Commercial Laundry Service</h3>
      <p>We are Jamshedpur’s most experienced and longest operating laundry service! Your items are handled according to our 10-Point Quality Care System.  Our comprehensive services and competitive pricing make Jamshedpur Laundry Service</p>
      <style jsx>{`
        img {
          max-width: 100%;
          margin-left: 200px;
        }
        h3, p {
          text-align: center;
        }
      `}</style>
      <style global jsx>{`
        body {
          background-color: white;
        }
      `}</style>
    </div>
  );
}

export default Home;
