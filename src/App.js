import React from 'react';
import './App.css';
import Routes from './routes/MainRoutes';
import withClearCache from './ClearCache';

const ClearCacheComponent = withClearCache(MainApp);

function App() {
  return <ClearCacheComponent />;
}

function MainApp() {
  return (
    <Routes />
  );
}

export default App;
