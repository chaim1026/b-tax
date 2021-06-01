import React from 'react';
import FileOutput from '../../components/file-output/file-output.component';
import LinkButton from '../../components/link-button/link-button.components';


const Output = () => (
    <div>
        <p className='header'>OUTPUT</p>
        <FileOutput />

        <LinkButton to='/' btnText='Back' />
    </div>
);

export default Output;