import React from 'react';
import SearchForm from './SearchForm';
import SermonList from './SermonList';
import { Link } from 'react-router-dom';

const SearchSermon = (props) => {
    return (
        <div>
            <div align="center" className='row'>
                <div className='col col-sm-9'>
                    <SermonList sermonList={ props.sermonList } onClick={ props.updateSingleSermon } />
                </div>
                <div className='col col-sm-3 formCol'>
                    <div className="createBtn">
                        <Link to='/new' className="btn btn-success">Create Sermon</Link>
                    </div>
                    <div>
                        <SearchForm onSubmit={ props.updateSearchResults } />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchSermon;