import React from 'react';
import '../CSS/episode.css'

// const Episode = ({ description, appleLink, spotifyLink, imgURL }) => {
class Episode extends React.Component {
    state = {
        addEllipsis: false,

    }
    truncate = (str, n, useWordBoundary) => {
        if(str.length <= n) {return str};
        const subString = str.substr(0, n-1);
        this.setState({ addEllipsis: true })
        return (useWordBoundary ? subString.substr(0, subString.lastIndexOf(' ')) : subString)
    }

    componentDidMount(){
        this.setState({ text: this.truncate(this.props.description, 200, 'yes') })
    }

    expand = () => {
        this.setState({
            text: this.props.description,
            addEllipsis: false
        })
    }

    render(){
        const { appleLink, spotifyLink, imgURL } = this.props;

        return (
            <>
                <div className="episode-card">
                    <img className='episode-thumbnail' src={imgURL} alt={imgURL} />
                    <p className="episode-description" >{this.state.text}{this.state.addEllipsis ? <span id="readmore" onClick={() => this.expand()}>... See More...</span> : ''}</p>
                    <div className="episode-links" >
                        <a href={appleLink}>
                            <i className="fab fa-apple"></i>
                        </a>
                        <a href={spotifyLink}>
                            <i className="fab fa-spotify"></i>
                        </a>
                    </div>
                </div>
            </>
        )
    }
}

export default Episode;
