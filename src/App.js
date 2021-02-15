import React from 'react';
import NavBar from './components/NavBar';
import Episodes from './components/Episodes';
import './CSS/App.css';

class App extends React.Component {
  render(){
    return (
      <>
        <NavBar />
        <div className='bannerimage'>
          <img src='https://images.unsplash.com/photo-1519638399535-1b036603ac77?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3578&q=80' alt='placeholder banner' />
        </div>
        <h1>REN Presents: The Beacon</h1>
        <Episodes />
      </>
    )
  }
}

export default App;
