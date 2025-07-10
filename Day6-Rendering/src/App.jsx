import React, { useState } from 'react';
import './App.css';

function App() {
  const [selectedApp, setSelectedApp] = useState('');

  const appDescriptions = {
    WhatsApp: 'WhatsApp is a messaging app with secure chat, voice, and video calling.',
    Instagram: 'Instagram is a photo and video sharing social media platform.',
    YouTube: 'YouTube is a video streaming and sharing platform for all types of content.',
  };

  return (
    <div className="container">
      
      <header className="header">
        <h1>Mobile App Info Page</h1>
      </header>

      
      <main className="main">
        <h2>Select an App:</h2>
        <div className="buttons">
          {Object.keys(appDescriptions).map((app) => (
            <button key={app} onClick={() => setSelectedApp(app)}>
              {app}
            </button>
          ))}
        </div>

       
        {selectedApp && (
          <div className="description-box">
            <h3>{selectedApp}</h3>
            <p>{appDescriptions[selectedApp]}</p>
          </div>
        )}
      </main>

      
      <footer className="footer">
        <p>© 2025 Mobile App Info. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;




