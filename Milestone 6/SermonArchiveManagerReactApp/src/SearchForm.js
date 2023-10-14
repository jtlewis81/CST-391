import React, { useState } from "react";
import './SermonList.css';

const SearchForm = (props) => {
    const [inputText, setInputText] = useState("");
    
    const handleChangeInput = (event) => {
        setInputText(event.target.value);
        console.log(inputText);
    };
    
    const handleFormSubmit = (event) => {
        event.preventDefault();
        props.onSubmit(inputText);
    };
    
    return (
        <>
            <form className="search-box" onSubmit={handleFormSubmit}>
                <div className="form-group">
                    <div>
                        <label htmlFor="search-term">Search:</label>
                    </div>
                    <div>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="by title"
                            onChange={handleChangeInput}
                        />
                    </div>
                </div>
            </form>
        </>  
    );
};

export default SearchForm;