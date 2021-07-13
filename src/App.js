import React, { useState, useEffect } from "react";
import Sitebar from "./home/Navbar";
import Auth from "./auth/Auth";
import WorkoutIndex from "./workouts/WorkoutIndex";
// import Headers from "./middleware/Headers";

// app.use(cors())
// const cors = require('cors')

function App() {

  const [sessionToken, setSessionToken] = useState('');

  useEffect(() => {
    if (localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'));
    }
  }, [])

  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  }

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
  }
const protectedViews = () => {
  return (sessionToken === localStorage.getItem('token') ? <WorkoutIndex token={sessionToken}/>
  : <Auth updateToken={updateToken}/>)
}

  return (
    <div >
      {/* <Headers /> */}
      <Sitebar clickLogout={clearToken}/>
      {/* <Auth updateToken={updateToken}/> */}
      {protectedViews()}
    </div>
  );
}

export default App;
