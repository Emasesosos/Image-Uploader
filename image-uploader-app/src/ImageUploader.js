import React from 'react';
import { UploadImage } from './components/UploadImage';
import { Uploading } from './components/Uploading';
import { UploadSuccess } from './components/UploadSuccess';

export const ImageUploader = () => {
    return (
        <div className="container">
            <UploadImage />
            <Uploading />
            <UploadSuccess />
        </div>
    );
};
