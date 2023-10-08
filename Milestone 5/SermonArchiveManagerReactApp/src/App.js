import React, { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import SearchSermon from './SearchSermon';
import EditSermon from './EditSermon';
import DeleteSermon from './DeleteSermon';
import dataSource from './dataSource';

function App() {
  const [searchPhrase, setSearchPhrase] = useState('');
  const [sermonList, setSermonList] = useState([]);
  const [selectedSermon, setSelectedSermon] = useState(0);

  let refresh = false;

  const loadSermons = async () => {
    const response = await dataSource.get('/sermons');
    setSermonList(response.data);
  }

  useEffect(() => { loadSermons(); }, [refresh]);

  const updateSearchResults = async (phrase) => {
    setSearchPhrase(phrase);
    console.log('phrase is ' + phrase);
    if (phrase === '') {
      loadSermons();
    }
    else
    {
      const response = await dataSource.get('sermons/search/title/' + phrase);
      setSermonList(response.data);
    }
  };

  const updateSingleSermon = (id, navigate, uri) => {
    console.log('Update Single Sermon = ', id);
    console.log('Update Single Sermon = ', navigate);
    var indexNumber = 0;
    for (var i = 0; i < sermonList.length; i++) {
      if (sermonList[i].id === id) indexNumber = i;
    }
    setSelectedSermon(indexNumber);
    let path = uri + indexNumber;
    console.log('path', path);
    navigate(path);
  };

  console.log('sermonList', sermonList);

  const renderedList = sermonList.filter((sermon) => {
    if (sermon.title.includes(searchPhrase) ||
        sermon.reference.includes(searchPhrase) ||
        searchPhrase === '') {
      return true;
    }
    return false;
  });

  console.log('renderedList', renderedList);

  const onEditSermon = (navigate) => {
    loadSermons();
    navigate("/");
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={ <SearchSermon updateSearchResults={updateSearchResults} sermonList={renderedList} updateSingleSermon={updateSingleSermon}/> } />
        <Route exact path='/new' element={ <EditSermon onEditSermon={onEditSermon}/> } />
        <Route exact path='/edit/:sermonId' element={ <EditSermon onEditSermon={onEditSermon} sermon={sermonList[selectedSermon]} updateSingleSermon={updateSingleSermon}/> } />
        <Route exact path='/delete/:sermonId' element={ <DeleteSermon onEditSermon={onEditSermon} sermon={sermonList[selectedSermon]} /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;