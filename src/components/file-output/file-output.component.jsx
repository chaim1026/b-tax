import React from 'react';
import { connect } from 'react-redux';
import './file-output.styles.css';


const FileOutput = ({ loadedFile }) => {
    console.log(loadedFile);
    return (
        <div className='file-output'>
            {loadedFile.map((row, index) => (
                <p className='loaded-file' key={index}>{row}</p>
            ))}
        </div>
    )
};

const mapStateToProps = (state) => ({
    loadedFile: state.loadedFile.loadedFile
});

export default connect(mapStateToProps)(FileOutput);