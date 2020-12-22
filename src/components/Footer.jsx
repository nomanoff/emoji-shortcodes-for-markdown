import React from 'react';

function Footer(){

    let currentYear = new Date();

    return <footer>
        <p> &copy; ali adam {currentYear.getFullYear()}</p>
    </footer>
}

export default Footer; 