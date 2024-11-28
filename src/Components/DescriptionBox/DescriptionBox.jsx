import React from 'react';
import './Description.css'

const DescriptionBox = () => {
  return (
    <div className='description'>
            <div className="description-navigator">
                <div className="description-nav-box">Description</div>
                <div className="description-nav-box fade">Reviews (122)</div>
            </div>
            <div className="description-description">
                <p>An e-commerce website is an online platform that facilitate buying and selling of products or services over the internet 
                    serves as a virtual marketplace where business and individual showcase their products, interact with customers, and conduct 
                    transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their 
                    conventional accessibility, and the global reach they offer.
                    </p>
            </div>
    </div>
  );
}

export default DescriptionBox;
