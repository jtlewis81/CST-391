import React, { useState } from 'react';
import dataSource from './dataSource';
import { useNavigate } from 'react-router-dom';

const EditAlbum = (props) => {
    let sermon = {
        title: '',
        speaker: '',
        date: '',
        series: '',
        reference: '',
        filepath: '',
    };

    let newSermonCreation = true;

    if(props.sermon) {
        sermon = props.sermon;
        newSermonCreation = false;
    }

    const [title, setTitle] = useState(sermon.title);
    const [speaker, setSpeaker] = useState(sermon.speaker);
    const [date, setDate] = useState(sermon.date);
    const [series, setSeries] = useState(sermon.series);
    const [reference, setReference] = useState(sermon.reference);
    const [filepath, setFilepath] = useState(sermon.filepath);
    
    const navigate = useNavigate();

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log("submit");
        const editedSermon = {
            id: sermon.id,
            title: title,
            speaker: speaker,
            date: date,
            series: series,
            reference: reference,
            filepath: filepath,
        };
        console.log(editedSermon);
        saveSermon(editedSermon);
    };

    const saveSermon = async (sermon) => {
        let response;
        if (newSermonCreation){
            try{
                response = await dataSource.post('/sermons', sermon);
            } catch {
                console.log('[ ERROR ] :: Cannot save new sermon!');
            }
        } else {
            try{
                response = await dataSource.put('/sermons', sermon);
            } catch {
                console.log('[ ERROR ] :: Cannot save new sermon!');
            }
        }
        console.log(response);
        props.onEditSermon(navigate);
    };

    const handleCancel = () => {
        navigate("/");
    };

    const updateTitle = (event) => { setTitle(event.target.value); };
    const updateSpeaker = (event) => { setSpeaker(event.target.value); };
    const updateDate = (event) => { setDate(event.target.value); };
    const updateSeries = (event) => { setSeries(event.target.value); };
    const updateReference = (event) => { setReference(event.target.value); };
    const updateFilepath = (event) => { setFilepath(event.target.value); };

    // Speaker and Series inputs below need changed to dropdowns

    return (
        <div className='container'>
            <form onSubmit={ handleFormSubmit }>
                <h1 align="center">{newSermonCreation ? "Create" : "Edit"} Sermon</h1>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" id="title"
                        placeholder={newSermonCreation ? "Enter Title" : props.sermon.title}
                        onChange={ updateTitle }
                    />
                    <label htmlFor="speaker">Speaker</label>
                    <input type="text" className="form-control" id="speaker"
                        placeholder={newSermonCreation ? "Enter Speaker" : props.sermon.speaker}
                        onChange={ updateSpeaker }
                    />
                    <label htmlFor="date">Date</label>
                    <input type="text" className="form-control" id="date"
                        placeholder={newSermonCreation ? "Enter Date" : props.sermon.date}
                        onChange={ updateDate }
                    />
                    <label htmlFor="series">Series</label>
                    <input type="text" className="form-control" id="series"
                        placeholder={newSermonCreation ? "Enter Series" : props.sermon.series}
                        onChange={ updateSeries }
                    />
                    <label htmlFor="reference">Reference</label>
                    <input type="text" className="form-control" id="reference"
                        placeholder={newSermonCreation ? "Enter Reference" : props.sermon.reference}
                        onChange={ updateReference }
                    />
                    <label htmlFor="filename">Filepath</label>
                    <input type="text" className="form-control" id="filename"
                        placeholder={newSermonCreation ? "Enter Filename" : props.sermon.filepath}
                        onChange={ updateFilepath }
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