import React from 'react';

const OneAlbum = (props) => {
    return (
        <div className='container'>
            <h2>Album Details for { props.album.title }</h2>
            <div className='row'>
                <div className='col col-sm-5'>
                    <div className='card'>
                        <img
                            src={ props.album.image }
                            className='card-img-top'
                            alt={ props.album.title }
                        />
                        <div className='card-body'>
                            <h5>{ props.album.title }</h5>
                            <p className='card-text'>{ props.album.description }</p>
                            <div className='list-group'>
                                <li>Album Tracks go here</li>
                            </div>
                            <br />
                            <a href='/#' className='btn btn-primary'>
                                Edit
                            </a>
                        </div>
                    </div>
                </div>
                <div className='col col-sm-7'>
                    <div className='card'>
                        <p>Select a track to display the lyrics here</p>
                    </div>
                    <div className='card'>
                        <p>YouTube link goes here</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OneAlbum;