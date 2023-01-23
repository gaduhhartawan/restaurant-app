import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => (
  <div className='app__newsletter'>
    <div className="app__newsletter-heading">
      <SubHeading title='Newsletter' />
      <h1 className="headtext__cormorant">Subscribe to Our Newsletter</h1>
      <div className="p__opensans">And Never Miss Latest Updates</div>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="email" placeholder="Enter your email address"/>
      <button type='button' className="custom__button">Subscribe</button>
    </div>
  </div>
);

export default Newsletter;
