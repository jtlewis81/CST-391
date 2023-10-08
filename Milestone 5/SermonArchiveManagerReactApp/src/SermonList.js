import React from 'react';
import SermonData from './SermonData';
import { useNavigate } from 'react-router-dom';
import './SermonList.css';

const SermonList = (props) => {
    
    const handleSelectionOne = (id, uri) => {
        console.log('Selected Sermon ID is ' + id);
        props.onClick(id, navigator, uri);
    };

    console.log('props sermonList', props);

    const navigator = useNavigate();

    const sermons = props.sermonList.map((sermon) => {
        return (
            <SermonData
              key={sermon.id}
              id={sermon.id}
              title={sermon.title}
              speaker={sermon.speaker}
              date={sermon.date}
              series={sermon.series}
              reference={sermon.reference}
              filepath={sermon.filepath}
              onClick={handleSelectionOne}
            />
        );
    });

    return (
        <div className="listTable">
            <table>
                <thead>
                    <tr>
                        <th>Title</th><th>Speaker</th><th>Date</th><th>Series</th><th>Reference</th><th>File Path</th><th/><th/>
                    </tr>
                </thead>
                <tbody>
                    { sermons }
                </tbody>
            </table>
        </div>
    );
};

export default SermonList;