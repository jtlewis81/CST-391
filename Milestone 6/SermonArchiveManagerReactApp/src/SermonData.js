import React from 'react';
import './SermonList.css';

const SermonData = (props) => {

    const handleButtonClick = (event, uri) => {
        console.log('ID clicked is ' + props.id);
        props.onClick(props.id, uri);
    }

    // this needs refactored to make the date appear as desired
    const formattedDate = (date) => {
        return date;
    }

    return (
        <>
            <tr>
                <td className='dataDisplay'>{ props.title }</td>
                <td className='dataDisplay'>{ props.speaker }</td>
                <td className='dataDisplay'>{ formattedDate(props.date) }</td>
                <td className='dataDisplay'>{ props.series }</td>
                <td className='dataDisplay'>{ props.reference }</td>
                <td className='dataDisplay'>{ props.filepath }</td>
                <td><button onClick={() => handleButtonClick(props.id, '/edit/')} className="btn btn-primary">Edit</button></td>
                <td><button onClick={() => handleButtonClick(props.id, '/delete/')} className="btn btn-danger">Delete</button></td>
            </tr>
        </>
    );
}

export default SermonData;