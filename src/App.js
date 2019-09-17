import React, {useState} from 'react';
import Navbar from './Components/Navbar/Navbar';
import Auth from './Components/Auth/Auth';
import Pies from './Components/Pies/Pies';
import './App.css';

function App() {
const [token, setToken] = useState(undefined)

let storeSessionToken = (token) => {
  setToken(token)
}

  return (
    <div className="App">
      <Navbar />
      { token ? <Pies /> : <Auth tokenHandler={storeSessionToken} /> }
      {/* good for showing something based on logic, ternaries */}
      <h1>Pies</h1>
    </div>
  );
}

export default App;
