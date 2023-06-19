import React from 'react';
import TopBar from './Components/TopBar';
import HomeImage from './Components/HomeImage';
import StoreListings from './Components/StoreListings';


function App() {
  return (
    <div className="App">
      <TopBar />
      <HomeImage />
      <StoreListings />
      {/* Add other components here */}
    </div>
  );
}

export default App;
