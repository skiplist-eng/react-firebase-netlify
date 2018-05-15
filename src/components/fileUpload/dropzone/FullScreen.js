import React, {Component} from 'react';
import Dropzone from 'react-dropzone'

class FullScreen extends Component {
    constructor() {
        super();
        this.state = {
            accept: '',
            files: [],
            dropzoneActive: false
        }
    }

    onDragEnter() {
        this.setState({
            dropzoneActive: true
        });
    }

    onDragLeave() {
        this.setState({
            dropzoneActive: false
        });
    }

    onDrop(files) {
        let reader = new FileReader();
        reader.addEventListener("loadend", function (event) {
            console.log(event.target.result);
        });
        reader.readAsText(files[0]);

        this.setState({
            files,
            dropzoneActive: false
        });
    }

    applyMimeTypes(event) {
        this.setState({
            accept: event.target.value
        });
    }
    render() {
        const {accept, files, dropzoneActive} = this.state;
        const overlayStyle = {
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            padding: '2.5em 0',
            background: 'rgba(0,0,0,0.5)',
            textAlign: 'center',
            color: '#fff'
        };

        const filesList = files.map(
            f => <li>{f.name} - {f.size} bytes : {f.result}</li>
        );

        return (
            <Dropzone
                maxSize={5242880}
                multiple={false}
                disableClick
                style={{position: "relative"}}
                accept={accept}
                onDrop={this.onDrop.bind(this)}
                onDragEnter={this.onDragEnter.bind(this)}
                onDragLeave={this.onDragLeave.bind(this)}
            >
                {dropzoneActive && <div style={overlayStyle}>Drop files...</div>}
                <div>
                    <h1>Upload Files</h1>
                    <label htmlFor="mimetypes">Enter mime types you want to accept: </label>
                    <input
                        type="text"
                        id="mimetypes"
                        onChange={this.applyMimeTypes.bind(this)}
                    />

                    <h2>Dropped files</h2>
                    <ul>
                        {filesList}
                    </ul>

                </div>
            </Dropzone>
        );
    }
}

export default FullScreen;
