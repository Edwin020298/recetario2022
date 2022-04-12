import React, { memo } from 'react';
import './H1.css'
const H1 = memo(({children}) => {
    return (
        <h1 className='customh1'>
            {children}
        </h1>
    );
});

export default H1;