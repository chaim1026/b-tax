import React from 'react';
import { connect } from 'react-redux';
import './file-output.styles.css';


const FileOutput = ({ loadedFile }) => (
    <div className='file-output'>
        <p className='loaded-file'>{loadedFile}</p>
    </div>
);

const mapStateToProps = (state) => ({
    loadedFile: state.loadedFile.loadedFile
})

export default connect(mapStateToProps)(FileOutput);