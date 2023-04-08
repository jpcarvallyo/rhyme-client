// import fetchData from './search.js';

// let recognition = new window.webkitSpeechRecognition();

const speechCapturer = (e) => {

	let msg = e.results[e.results.length - 1][0].transcript.trim();
	console.log(msg)
	// fetchData(msg);
	// recognition.stop();

};

// recognition.addEventListener("result", speechCapturer);
export default speechCapturer;