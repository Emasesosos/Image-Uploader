import React, { useRef } from 'react';
import checkCircle from './../assets/img/check_circle.svg';
import interestelar from './../assets/img/interestelar.jpg';

export const UploadSuccess = () => {

    const refInput = useRef('');

    const handleCopyLink = () => {

        // console.log(refInput.current.valueOf().value);
        refInput.current.select();
        document.execCommand("copy");

    };

    return (

        <div className="upload-success">
            <div className="success-icono">
                <img src={ checkCircle } alt="checkCircle"/>
            </div>
            <div className="success-title">
                <p>Upload Successfully!</p>
            </div>
            <div className="success-img">
                <img className="upload-image" src="https://res.cloudinary.com/emasesosos/image/upload/v1603983074/ucdkzlmc4qudgsdnrjzf.jpg" alt="interestelar"/>
            </div>
            <div className="success-link">
                <form action="">
                    <input 
                        type="text"
                        defaultValue="https://www.figma.com/file/NxbZm3CAovYh89dFXe7EOw/Image-Uploader?node-id=1%3A52"
                        name="link"
                        ref={ refInput }
                    />
                    <button className="link-btn" type="button" onClick={ handleCopyLink }>
                        Copy Link
                    </button>
                </form>
            </div>
        </div>
        
    );
};
