import React from 'react';
import NavBar from './components/NavBar';
import Episodes from './components/Episodes';
import About from './components/About';
import Contact from './components/Contact';

class App extends React.Component {
  state = {
    currentTab: 'episodes'
  }

  setCurrentTab = (tab) => {
    this.setState({currentTab: tab})
  }

  render(){
    return (
      <>
        <NavBar setCurrentTab={this.setCurrentTab} />
        <div className='bannerimage'>
          <img src='https://images.unsplash.com/photo-1519638399535-1b036603ac77?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3578&q=80' alt='placeholder banner' />
        </div>
        <h1>REN Presents: The Beacon</h1>
        {this.state.currentTab === 'episodes' && <Episodes />}
        {this.state.currentTab === 'about' && <About description='asdfasdf' />}
        {this.state.currentTab === 'contact' && <Contact />}
      </>
    )
  }
}

export default App;
