import React from 'react';

export const UploadImage = () => {
    return (
        <div className="container-upload_image">
            <div className="title">
                <h1>Upload your image</h1>
                <p>File should be Jpeg, Png...</p>
            </div>
            <div className="drag-drop-img">
                <div className="img"></div>
                <div className="sentence-action">
                    <p>Drag & Drop your image here</p>
                </div>
            </div>
            <div className="choose-file">
                <p>Or</p>
                <button className="button-file">Choose a file</button>
            </div>
        </div>
    );
};
