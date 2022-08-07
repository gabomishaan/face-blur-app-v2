import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import logo_image from'./logo_image.png';

const Logo = () => {
	return(
		<div className='ma4 mt0'>
		<Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 80, width: 80 }} >
 			<div className="Tilt-inner pa3"> 
 				<img style={{paddingTop:'2px'}} alt='logo' src={logo_image}/>
 			</div>
		</Tilt>
		</div>
		);
}


export default Logo;