import React, { memo } from 'react';
import logo from '../../assets/logo.svg'
const Logo = memo(() => {
    return (
        <img src={logo} className="App-logo" alt="logo" />
    );
});

export default Logo;