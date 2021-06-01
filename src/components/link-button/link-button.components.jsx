import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './link-button.styles.css';


const LinkButton = ({loadedFile, to, btnText }) => {

    const showAlert = () => {
        if (!loadedFile) {
            alert('Please upload a file.')
        }
    }

    return (
        <div>
            <Link 
                className='custom-link' 
                to={to}
                onClick={() => showAlert()}
            >
                {btnText}
            </Link>
        </div>
    )
};

const mapStateToProps = (state) => ({
    loadedFile: state.loadedFile.loadedFile
});

export default connect(mapStateToProps)(LinkButton);