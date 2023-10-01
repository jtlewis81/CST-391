import React from 'react';
import './Card.css';
const Card = (props) => {
    return (
        <div className="card" style={{ width: '12rem' }}>
            <img src={ props.imgURL } className="card-img-top" alt="title"/>
            <div className="card-body">
                <h5 className="card-title">{ props.albumTitle }</h5>
                <p className="card-text">{ props.albumDescription }</p>
                <div className="card-text note">Year Released: { props.year }</div><br/>
                <button href='#' className="btn btn-primary">{ props.buttonText }</button>
            </div>
        </div>
    );
}

export default Card;