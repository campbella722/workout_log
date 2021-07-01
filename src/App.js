import React, { useState, useEffect } from "react";
import Sitebar from "./home/Navbar";
import Auth from "./auth/Auth";
import Headers from "./middleware/Headers";

app.use(cors())
const cors = require('cors')

function App() {

  const [sessionToken, setSessionToken] = useState('');

  useEffect(() => {
    if (localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'));
    }
  }, [])

  const updateToken = (newToken) => {
    localStorage.setItem('token', 'newToken');
    setSessionToken(newToken);
    console.log(sessionToken);
  }

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
  }


  return (
    <div >
      <Headers />
      <Sitebar clickLogout={clearToken}/>
      <Auth updateToken={updateToken}/>
    </div>
  );
}

export default App;
