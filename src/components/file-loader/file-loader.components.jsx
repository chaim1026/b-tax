import React from 'react';
import { connect } from 'react-redux';
import './file-loader.styles.css';
import { getLoadedFile } from '../../redux/loaded-file/loaded-file.actions';


const FileLoader = ({ getLoadedFile }) => {

    const onInputChange = async (e) => {
        const reader = new FileReader();
        reader.readAsText(e.target.files[0]);
        reader.onload = async (e) => {
            const text = (e.target.result)
            getLoadedFile(text);
        };
    }

    return (
        <div className='file-loader'>  
            <label className='input-label'>Upload File Here:</label>
            <input
                className='file-input'
                type='file' 
                name='file'
                onChange={onInputChange}
            />
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    getLoadedFile: loadedFile => dispatch(getLoadedFile(loadedFile))
})

export default connect(null, mapDispatchToProps)(FileLoader);