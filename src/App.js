import './App.css';
import TripList from './components/TripList';
import { useState } from 'react'

function App() {
  const [showTrips, setShowTrips] = useState(true)

  return (
    <div className="App">
      <button onClick={() => setShowTrips(!showTrips)}>Hide Trips</button>
      {showTrips && <TripList />}
    </div>
  );
}

export default App;
