import React from 'react';

function Footer(){

    let currentYear = new Date();

    return <footer>
        <p> &copy; {currentYear.getFullYear()}  Ali Adam</p>
    </footer>
}

export default Footer; 