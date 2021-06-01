import React from 'react';
import { connect } from 'react-redux';
import './read-file.styles.css';
import FileLoader from '../../components/file-loader/file-loader.components';
import LinkButton from '../../components/link-button/link-button.components';


const ReadFile = ({ loadedFile }) => (
        <div>
            <p className='header'>FILE READER</p>
            <FileLoader />
            
            <LinkButton 
                to={loadedFile ? '/output' : ''} 
                btnText='Output' 
            />
        </div>
);

const mapStateToProps = (state) => ({
    loadedFile: state.loadedFile.loadedFile
});

export default connect(mapStateToProps)(ReadFile);