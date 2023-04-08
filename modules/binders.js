import { inputElement } from './selectors.js';
import { composeInputAndDataFetch } from './composer.js';
// import speechCapturer from './voice-commands.js';

inputElement.addEventListener('change', composeInputAndDataFetch);
// recognition.addEventListener("result", speechCapturer);