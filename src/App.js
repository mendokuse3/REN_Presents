import React from 'react';
import NavBar from './components/NavBar';
import Episodes from './components/Episodes';
import About from './components/About';
import Contact from './components/Contact';

import { getEpisodes, getBannerLogo, getHomePage } from './Queries/index';

class App extends React.Component {
  state = {
    currentTab: 'episodes',
    episodes: {},
    bannerLogo: {},
    aboutAndContact: {}
  }

  async componentDidMount(){
    const episodeData = await getEpisodes();
    const bannerLogoData = await getBannerLogo();
    const homePageData = await getHomePage();
    this.setState({
      episodes: episodeData,
      bannerLogo: bannerLogoData,
      aboutAndContact: homePageData
    })
    // console.log(episodeData)
  }

  setCurrentTab = (tab) => {
    this.setState({currentTab: tab})
  }

  render(){
    if(Object.entries(this.state.bannerLogo).length > 0){
      return (
        <>
          <div className="top-banner-section">
            {/* layer 1 image */}
            <div className='banner-image-div'>
              <img className='banner-image' src={this.state.bannerLogo.fields.bannerImage.fields.file.url} alt={this.state.bannerLogo.fields.bannerImage.fields.file.fileName} />
            </div>
            {/* Layer 2 gradient */}
            <div className='banner-overlay-div'></div>
            {/* Layer 3 Content */}
            <div className='banner-content-div'>
              <NavBar setCurrentTab={this.setCurrentTab} />
          <h1>REN Presents: The Beacon</h1>
            </div>
          </div>
          <div className="grid grid-cols-2">
            {this.state.currentTab === 'episodes' && <Episodes episodes={this.state.episodes.fields.episodes} />}
          </div>
  
          {this.state.currentTab === 'about' && <About data={this.state.aboutAndContact.fields.homepageSections[0].fields} />}
          {this.state.currentTab === 'contact' && <Contact data={this.state.aboutAndContact.fields.homepageSections[1].fields} />}
        </>
      )
    }
    return <div>Loading...</div>
  }
}

export default App;
