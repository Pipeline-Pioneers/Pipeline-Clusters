import React from 'react';
import './page-header.scss';
import videoBg from '../../assets/vid1.mp4';

// PageHeader component
const PageHeader = props => {
    return (
        <div className="page-header">
            {/* Background video */}
            <video className="page-header__video-bg" autoPlay loop muted>
                <source src={videoBg} type="video/mp4" />
            </video>
            {/* Header title */}
            <h2>{props.children}</h2>
        </div>
    );
}

export default PageHeader;
