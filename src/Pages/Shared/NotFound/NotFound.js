import React from 'react';
import PageNotFound from '../../../images/404-error-page-not-found.jpg';
 
const NotFound = () => {
    return (
        <div style={{textAlign:'center', margin:'30px'}}>
            <img src={PageNotFound} alt=""></img>
        </div>
    );
};

export default NotFound;