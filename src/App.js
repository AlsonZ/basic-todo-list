import React from 'react';
import List from './list/list.js';
import './App.css';

function App() {
  return (
    <div className="lazyLoad-background">
      <div className="mid-res-background">
        <div className="high-res-background">
          <div className="body">
            <List/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
