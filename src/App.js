import React from 'react';
import Header from './Components/Header';
import Searcher from './Components/Searcher';
import List from './Components/List';

function App() {

  return (
    <div className="App">
        <Header/>
        <br/><br/>
        <Searcher/>
        <br/><br/>
        <List/>
        <br/>
    </div>
  );
}

export default App;
