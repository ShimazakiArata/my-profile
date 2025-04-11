import React from 'react';
import Header from './components/header';

function App() {
  return (
    <div>
      <Header />
      <main className="p-6">
        <h2 className="text-2xl">Welcome!</h2>
        <p>This is your site content.</p>
      </main>
    </div>
  );
}

export default App;
