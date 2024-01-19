import React from 'react';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Content from './components/Content';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div>
      <Menu />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
