import React from 'react';
import './Landing.css';

const Landing = () => {
    return (
        <div>
            <div style={{ textAlign: 'center' }}>
                <h1>
                    FeedBag
            </h1>
                We <span style={{ fontWeight: 'bold' }}>value</span> your customer Feedbacks!
        </div>
            <div className="landingImage">
                <img
                    src="https://raw.githubusercontent.com/addy4/Image-Processing/master/.github/images/undraw_Wishlist_re_m7tv.png"
                    alt="landingImageTag"
                />
            </div>
        </div>
    )
}

export default Landing;