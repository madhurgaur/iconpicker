import IconPicker from "./components/IconPicker";
import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './components/App.css'
// import IconButton from './components/IconButton';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* <Route path="/" element={<IconButton />} /> */}
          <Route path="/" element={<IconPicker/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
