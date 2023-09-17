import React, {useState} from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Dictaphone = () => {
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();

    const [p, setP] = useState("")

    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
    }

    return (
        <div>
            <p>Microphone: {listening ? 'on' : 'off'}</p>
            <button onMouseDown={SpeechRecognition.startListening}
                    onMouseOut={SpeechRecognition.stopListening}>Start</button>
            <button onClick={resetTranscript}>Reset</button>
            <p>{transcript ? transcript : ''}</p>
        </div>
    );
};
export default Dictaphone;