import React from 'react';
import './pages.css';

const DonatePage = () => {
  return (
    <div className="page-container donate-page">
      <section className="page-section">
        <div className="section-content">
          <h1>Support Our Mission</h1>
          <p className="section-description">
            Your donation helps us bridge the digital divide and provide educational opportunities 
            to underserved communities.
          </p>
          
          <div className="donation-options">
            <div className="donation-card">
              <h3>One-Time Donation</h3>
              <p>Make a single contribution to support our programs.</p>
              <div className="donation-amounts">
                <button className="donation-btn">$25</button>
                <button className="donation-btn">$50</button>
                <button className="donation-btn">$100</button>
                <button className="donation-btn">$250</button>
                <button className="donation-btn">Custom</button>
              </div>
              <button className="btn btn-primary donate-submit">Donate Now</button>
            </div>
            
            <div className="donation-card">
              <h3>Monthly Giving</h3>
              <p>Become a sustaining supporter with a monthly donation.</p>
              <div className="donation-amounts">
                <button className="donation-btn">$10/mo</button>
                <button className="donation-btn">$25/mo</button>
                <button className="donation-btn">$50/mo</button>
                <button className="donation-btn">Custom</button>
              </div>
              <button className="btn btn-primary donate-submit">Subscribe</button>
            </div>
          </div>
          
          <div className="impact-section">
            <h2>Your Impact</h2>
            <div className="impact-grid">
              <div className="impact-card">
                <h3>$25</h3>
                <p>Provides internet access for one student for a month</p>
              </div>
              <div className="impact-card">
                <h3>$100</h3>
                <p>Funds one digital literacy workshop for 10 participants</p>
              </div>
              <div className="impact-card">
                <h3>$250</h3>
                <p>Supplies a refurbished laptop for a student in need</p>
              </div>
              <div className="impact-card">
                <h3>$1,000</h3>
                <p>Creates a community tech hub serving dozens of families</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DonatePage; 