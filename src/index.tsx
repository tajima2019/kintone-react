import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

(function () {
  kintone.events.on('app.record.index.show', function (event) {
    console.log('Hello, World!');

    let container = document.getElementById('app');
    if (!container) {
      container = document.createElement('div');
      container.id = 'app';
      document.body.appendChild(container);
    }

    const root = ReactDOM.createRoot(container);
    root.render(<App />);
  });
})();
