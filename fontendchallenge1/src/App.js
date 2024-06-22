import React from 'react';
import CardGrid from './components/CardGrid';

function App() {
  return (
    <div className="App">
      <header className="bg-blue-500 p-4 text-white text-center">
        <h1>Card Application</h1>
      </header>
      <main className="p-4">
        <CardGrid />
      </main>
    </div>
  );
}

export default App;
