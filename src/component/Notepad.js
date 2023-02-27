import React, { Component } from 'react';
import './Notepad.css';

class Notepad extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            bold: false,
            italic: false,
            video: ''
        };
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleBoldClick = this.handleBoldClick.bind(this);
        this.handleItalicClick = this.handleItalicClick.bind(this);
        this.handleVideoChange = this.handleVideoChange.bind(this);
        this.handleAddVideoClick = this.handleAddVideoClick.bind(this);
        this.handleDeleteVideoClick = this.handleDeleteVideoClick.bind(this);
    }
    handleTextChange(event) {
        this.setState({ text: event.target.value});
    }
    handleBoldClick() {
        this.setState({ bold: !this.state.bold});
    }
    handleItalicClick() {
        this.setState({ italic: !this.state.italic});
    }
    handleVideoChange(event) {
        this.setState({ video: event.target.value});
    }
    handleAddVideoClick() {
        if(this.state.video !== '') {
            let newtext = this.state.text;
            newtext += '<video src="' + this.state.video + '"></video>'
            this.setState({text: newtext, video: ''});
        }
    }
    handleDeleteVideoClick() {
        let newtext = this.state.text;
        newtext = newtext.replace(/<video.*?\/video>/g, '');
        this.setState({ text: newtext});
    }

    render() {
        const textstyle = {
            fontweight: this.state.bold ? 'bold' : 'normal',
            fontstyle: this.state.italic ? 'italic' : 'normal'
        };

        return (
            <div className='App'>
            <div className='notepad'>
                <div className='controls'>
                    <button onClick={this.handleBoldClick}>Bold</button>
                    <button onClick={this.handleItalicClick}>Italic</button>
                    <input type="text" placeholder='Enter Video Url' value={this.state.video} onChange={this.handleVideoChange} />
                    <button onClick={this.handleAddVideoClick}>Add Video</button>
                    <button onClick={this.handleDeleteVideoClick}>Delete Video</button>
                </div>
                <div className='text' style={textstyle}>
                    <textarea value={this.state.text} onChange={this.handleTextChange}></textarea>
                </div>
            </div>

        </div>
        );
    }
}


export default Notepad;