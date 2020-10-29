import React, { useState } from 'react';
import { UploadImage } from './components/UploadImage';
import { Uploading } from './components/Uploading';
import { UploadSuccess } from './components/UploadSuccess';
import { fileUpload } from './helpers/fileUpload';

export const ImageUploader = () => {

    const [uploading, setUploading] = useState(false);
    const [url, setUrl] = useState('');

    const handleFileChange = async(e) => {
        const file = e.target.files[0];
        if(file) {
            const fileUrl = await fileUpload(file);
            setUploading(true);
            setUrl(fileUrl);
        }
        setUploading(false);
    };

    console.log(!!url);

    return (
        <div className="container">
            { 
                uploading === false && !!url === false
                    ? <UploadImage handleFileChange={ handleFileChange }/> 
                    : (url === true ? <UploadSuccess /> : <Uploading />)
            }
            {/*<Uploading />*/}
            <UploadSuccess />
        </div>
    );
};
