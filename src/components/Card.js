import React from 'react';



const Card = (props) => {
    return (
        <div className ='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5 '>
            <img alt='robot' src={`https://robohash.org/${props.id}?size=200x200`} />
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
                <p>Zipcode: {props.zipcode}</p>
            </div>
        </div>
    );
}
export default Card