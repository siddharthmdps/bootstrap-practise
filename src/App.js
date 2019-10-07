import React from 'react';
import classes from './App.module.css';
import Layout from './Components/Layout/Layout';
import Profile from './Container/Profile/Profile';

function App() {
  return (
    <div className="App">
      <Layout>
        <Profile />
      </Layout>
    </div>
  );
}

export default App;
