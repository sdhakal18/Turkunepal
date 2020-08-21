import React from 'react';
import './styles/App.scss';

import LeftContainer from './components/left-container/left-container';
import RightContainer from './components/right-container/right-container';

function App() {
  return (
    <div className="App">
      <LeftContainer />
      <RightContainer />
    </div>
  );
}

export default App;
