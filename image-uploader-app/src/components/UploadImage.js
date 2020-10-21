import React from 'react';
import logo from './../assets/img/image.svg';

export const UploadImage = () => {

    const handlePictureClick = () => {
        document.querySelector('#fileSelector').click();
    };

    // const handleFileChange = (e) => {
    //     const file = e.target.files[0];
    //     if(file) {
    //         dispatch(startUploading(file));
    //     }
    // };

    return (
        <div className="container-upload_image">
            <div className="title">
                <h1>Upload your image</h1>
                <p>File should be Jpeg, Png...</p>
            </div>
            <div className="drag-drop-img">
                <div className="img">
                    <img src={logo} alt=""/>
                </div>
                <div className="sentence-action">
                    <p>Drag & Drop your image here</p>
                </div>
            </div>
            <div className="choose-file">
                <p>Or</p>
                <input 
                    id="fileSelector"
                    type="file"
                    name="file"
                    style={{display: 'none'}}
                    // onChange={ handleFileChange }
                />
                <button 
                    className="btn-upload-file"
                    onClick={ handlePictureClick }
                >
                    Choose a file
                </button>
            </div>
        </div>
    );
    
};
