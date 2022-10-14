import React, {useState} from "react";
import ReactWebcam from "react-webcam";
import Button from 'react-bootstrap/Button';
import Countdown from './Countdown';

import '../styles/webcamcapture.scss';

const WebcamCapture = () => {
    const webcamRef = React.useRef(null);
    const [imgSrc, setImgSrc] = React.useState(null);
    const [showAnimation, setShowAnimation] = React.useState(false);
    const [DisplayCountdown, setDisplayCountdown] = useState(false)

    const capture = React.useCallback(() => {
        setShowAnimation(true);
        setTimeout(() => {
            setShowAnimation(false);
        }, 1000);

        setDisplayCountdown(false);
        const imageSrc = webcamRef.current.getScreenshot();
        setImgSrc(imageSrc);
    }, [webcamRef, setImgSrc]);
    const print = () => {
        const img = imgSrc;
        fetch('127.0.0.1/print-image', {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify({"imgSrc": img})
        })

        resetCapturedImg();
    }
    const showCountdown = () => {
        resetCapturedImg();
        setDisplayCountdown(true);
    }

    const resetCapturedImg = () => {
        setImgSrc(null);
    }

    return (
        <>
            {
                DisplayCountdown === true &&
                <Countdown onDoneCallback={capture}></Countdown>
            }
            <div className={`layer ${showAnimation ? "animate d-block" : "d-none"}`}></div>
            <div className="webcam-capture-component">
                <div className="media-wrapper">
                    <ReactWebcam
                        audio={false}
                        ref={webcamRef}
                        screenshotFormat="image/jpeg"
                    />
                    <img className={imgSrc ? "" : "d-none"} src={imgSrc}/>
                </div>

                <div className="buttons">
                    <Button onClick={showCountdown} size="lg" variant="secondary">Ta kort</Button>
                    <Button className={imgSrc ? "" : "d-none"} onClick={print} size="lg" variant="secondary">Skriv ut</Button>
                </div>
            </div>
        </>
    );
};

export default WebcamCapture;