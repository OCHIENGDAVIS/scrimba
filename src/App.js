import React from 'react';
import './App.css';
import List from './components/List'
import Header from './components/Header'
import Footer from './components/Footer'
import MainContent from './components/MainContent'
function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
