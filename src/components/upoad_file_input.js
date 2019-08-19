import React, { Component } from 'react';

export default class UploadInput extends React.Component {
    constructor() {
        super();
        this.onChange = this.onChange.bind(this);
        this.state = {
            files: [],
        };
    }

    onChange(e) {
        var files = e.target.files;
        console.log(files);
        var filesArr = Array.prototype.slice.call(files);
        console.log(filesArr);
        this.setState({ files: [...this.state.files, ...filesArr] });
    }

    removeFile(f) {
        this.setState({ files: this.state.files.filter(x => x !== f) });
    }

    render() {
        return (
            <div className="input-file">
                <label className="custom-file-upload">
                    <input type="file" multiple onChange={this.onChange} value={this.state.files} />
                    <i className="fa fa-cloud-upload" /> Attach
          </label>
                {this.state.files.map(x =>
                    <div key={x.name} className="file-preview" onClick={this.removeFile.bind(this, x)}>{x.name}</div>
                )}
            </div>
        );
    }
}
