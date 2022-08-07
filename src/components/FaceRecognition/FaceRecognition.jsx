import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, boxes }) => {
    return (
        <div className='center ma trial1'>
            <div className='absolute mt2 trial2'>
                <img id='inputimage' alt='' src={imageUrl} width='500px' height='auto' />
                {boxes.length && boxes.map((box, index) => {
                    return <div key={index} className='bounding-box' 
                    style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}>
                    </div>;
                })}
            </div>
        </div>
    );
}

export default FaceRecognition;