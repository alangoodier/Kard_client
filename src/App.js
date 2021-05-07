import React from 'react';
import './App.css';
import Sidebar from './components/sidebar'

function App() {
  return (
    <div className="App">
      <div>
    <Sidebar width={300} height={"100vh"}>
          <h3>Welcome to Kard!</h3>
          <h3>Alan G</h3>
          <br></br>
          <button className="boards-button" type="submit">My Boards</button>
          <h2>New Project</h2>
          <h2>Logout</h2>
        </Sidebar>
      </div>
    </div>
  );
}

export default App;
