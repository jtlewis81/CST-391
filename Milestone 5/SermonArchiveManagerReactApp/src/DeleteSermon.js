import React from 'react';
import dataSource from './dataSource';
import { useNavigate } from 'react-router-dom';

const DeleteSermon = (props) => {

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log("submit");
        
        deleteSermon(props.sermon.id);
    };

    const deleteSermon = async (id) => {
        let response;
        try{
            response = await dataSource.delete('/sermons/' + id);
        } catch {
            console.log('[ ERROR ] :: Cannot save new sermon!');
        }
        
        console.log('deleted sermon id ' + id);
        console.log('response', response.data);

        props.onEditSermon(navigate);
    }

    const navigate = useNavigate();

    const handleCancel = () => {
        navigate("/");
    };

    return (
        <div align="center">
            <h3>Are you sure you want to delete { props.title } ?</h3>
            <br />
            <form onSubmit={ handleFormSubmit }>
                <button type="button" className="btn btn-light" onClick={ handleCancel }>Cancel</button>
                <button type="submit" className="btn btn-primary btn-float-right">Submit</button>
            </form>
            
        </div>
    );
}

export default DeleteSermon;