import React from 'react';
import './App.css';
import Quote from './components/Quote'

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <Quote />
        <p className="text-center">
          -- Webstyle.com --
        </p>
      </div>
    </LanguageProvider>
  );
}

export default App;
