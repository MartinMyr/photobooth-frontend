import React from "react";
import ReactWebcam from "react-webcam";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const WebcamCapture = () => {
    const webcamRef = React.useRef(null);
    const [imgSrc, setImgSrc] = React.useState(null);
    const capture = React.useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImgSrc(imageSrc);
    }, [webcamRef, setImgSrc]);
    const print = () => {
        fetch('127.0.0.1/print-image', {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify({"imgSrc": imgSrc})
        })
    }

    return (
        <>
            <ReactWebcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
            />
            <Row>
                <Col>
                    <Button onClick={capture} size="lg" variant="secondary">Ta kort</Button>
                </Col>
                <Col className={imgSrc ? '' : 'd-none'}>
                    <Button onClick={print} size="lg" variant="secondary">Skriv ut</Button>
                </Col>
            </Row>
        </>
    );
};

export default WebcamCapture;