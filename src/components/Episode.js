import React from 'react';

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
                <div className="mx-2">
                    <img src={imgURL} alt={imgURL} style={{width: '200px', height: '200px'}} />
                    <p>{this.state.text}{this.state.addEllipsis ? <span id="readmore" onClick={() => this.expand()}>...</span> : ''}</p>
                    <div>
                        <a href={appleLink}>Apple Link</a>
                        <a href={spotifyLink}>Spotify Link</a>
                    </div>
                </div>
            </>
        )
    }
}

export default Episode;
