import React, { useState } from 'react';
import { UploadImage } from './components/UploadImage';
import { Uploading } from './components/Uploading';
import { UploadSuccess } from './components/UploadSuccess';
import { fileUpload } from './helpers/fileUpload';
import Swal from 'sweetalert2';

export const ImageUploader = () => {

    const [uploading, setUploading] = useState(false);
    const [uploadSuccess, setUploadSuccess] = useState(false);
    const [url, setUrl] = useState('');

    const handleFileChange = async(e) => {

        const file = e.target.files[0];

        if(file) {

            const fileUrl = await fileUpload(file);

            if(fileUrl) {
                setUploading(true);
                setUrl(fileUrl);
                setTimeout(() => {
                    setUploading(false);
                }, 1000);
                setTimeout(() => {
                    setUploadSuccess(true);
                }, 1000);
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'No se pudo subir la Imagen!'
                  })
            }
            
        }
        
    };

    return (
        <div className="container">
            { !uploading && !uploadSuccess && (<UploadImage handleFileChange={ handleFileChange }/>) }
            { uploading && <Uploading /> }
            { uploadSuccess && <UploadSuccess url={ url } /> }
        </div>
    );

};
