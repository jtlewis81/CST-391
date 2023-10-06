import React, { useState } from 'react';
import dataSource from './dataSource';
import { useNavigate } from 'react-router-dom';

const EditAlbum = (props) => {

    let album = {
        title: '',
        artist: '',
        description: '',
        year: '',
        image: '',
        tracks: [],
    };

    let newAlbumCreation = true;

    if(props.album) {
        album = props.album;
        newAlbumCreation = false;
    }

    const [title, setTitle] = useState(album.title);
    const [artist, setArtist] = useState(album.artist);
    const [description, setDescription] = useState(album.description);
    const [year, setYear] = useState(album.year);
    const [image, setImage] = useState(album.image);
    const navigate = useNavigate();

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log("submit");
        const editedAlbum = {
            albumId: album.albumId,
            title: title,
            artist: artist,
            description: description,
            year: year,
            image: image,
            tracks: [],
        };
        console.log(editedAlbum);
        saveAlbum(editedAlbum);
    }

    const saveAlbum = async (album) => {
        let response;
        if (newAlbumCreation){
            response = await dataSource.post('/albums', album);
        } else {
            response = await dataSource.put('/albums', album);
        }
        console.log(response);
        console.log(response.data);
        props.onEditAlbum(navigate);
    };

    const handleCancel = () => {
        navigate("/");
    };

    const updateTitle = (event) => { setTitle(event.target.value); };
    const updateArtist = (event) => { setArtist(event.target.value); };
    const updateDescription = (event) => { setDescription(event.target.value); };
    const updateYear = (event) => { setYear(event.target.value); };
    const updateImage = (event) => { setImage(event.target.value); };

    return (
        <div className='container'>
            <form onSubmit={ handleFormSubmit }>
                <h1>{newAlbumCreation ? "Create New" : "Edit"} Album</h1>
                <div className="form-group">
                    <label htmlFor="albumTitle">Title</label>
                    <input type="text" className="form-control" id="title"
                        placeholder={newAlbumCreation ? "Enter Album Title" : props.album.title}
                        onChange={ updateTitle }
                    />
                    <label htmlFor="albumArtist">Artist</label>
                    <input type="text" className="form-control" id="artist"
                        placeholder={newAlbumCreation ? "Enter Album Artist" : props.album.artist}
                        onChange={ updateArtist }
                    />
                    <label htmlFor="albumDescription">Description</label>
                    <textarea rows="5" className="form-control" id="description"
                        placeholder={newAlbumCreation ? "Enter Album Description" : props.album.description}
                        onChange={ updateDescription }
                    />
                    <label htmlFor="albumYear">Year</label>
                    <input type="text" className="form-control" id="year"
                        placeholder={newAlbumCreation ? "Enter Album Year" : props.album.year}
                        onChange={ updateYear }
                    />
                    <label htmlFor="albumImage">Image</label>
                    <input type="text" className="form-control" id="image"
                        placeholder={newAlbumCreation ? "Enter Album Image" : props.album.image}
                        onChange={ updateImage }
                    />
                </div>
                <br />
                <div>
                    <button type="button" className="btn btn-light" onClick={ handleCancel }>Cancel</button>
                    <button type="submit" className="btn btn-primary btn-float-right">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default EditAlbum;