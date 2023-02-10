import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.jsx';
import Navigation from './routes/navigation/navigation.jsx';
import Authentication from './routes/authentication/authentication';
import './index.css';

const Shop = () => {
  return <h1>Shop Page</h1>;
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="Shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
}

export default App;
