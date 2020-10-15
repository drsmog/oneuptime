import FyipeListiner from './listener';
import Util from './util';

class FyipeTracker {
    // constructor to set up global listeners
    #utilObj;
    #listenerObj;
    #eventId;
    #tags = [];
    #extras = [];
    #isWindow = false;
    constructor() {
        this._setEventId();
        this.#isWindow = typeof window !== 'undefined';
        this.#listenerObj = new FyipeListiner(
            this.getEventId(),
            this.#isWindow
        ); // Initialize Listener for timeline
        this.#utilObj = new Util();
        // set up error listener
        if (this.#isWindow) {
            this._setUpErrorListener();
        }
    }
    _setEventId() {
        this.#eventId = 'test1234';
    }
    getEventId() {
        return this.#eventId;
    }
    setTag(key, value) {
        this.#tags = { ...this.#tags, [key]: value };
    }
    // pass an array of tags
    setTags(tags) {
        tags.forEach(element => {
            if (element.key && element.value) {
                this.setTag(element.key, element.value);
            }
        });
    }
    _getTags() {
        return this.#tags;
    }
    setExtras(extras) {
        extras.forEach(element => {
            if (element.key && element.extra) {
                this.setExtra(element.key, element.extra);
            }
        });
    }

    setExtra(key, extra) {
        this.#extras = { ...this.#extras, [key]: extra };
    }
    // set up error listener
    _setUpErrorListener() {
        const _this = this;
        window.onerror = function(message, file, line, col, error) {
            const errorEvent = { message, file, line, col, error };

            const string = errorEvent.message
                ? errorEvent.message.toLowerCase()
                : errorEvent.toLowerCase();
            const substring = 'script error';
            if (string.indexOf(substring) > -1) {
                return; // third party error
            } else {
                // construct the error object
                const errorObj = _this.#utilObj._getErrorStackTrace(errorEvent);

                // log error event
                const content = {
                    message: errorObj.message,
                };
                _this.#listenerObj.logErrorEvent(content);

                // get device location and details
                // prepare to send to server
                _this.prepareErrorObject('error', errorObj);
            }
        };
    }
    addToTimeline(category, content, type) {
        const timeline = {
            category,
            data: {
                content,
            },
            type,
        };
        this.#listenerObj.logCustomTimelineEvent(timeline);
    }
    captureMessage(message) {
        this.prepareErrorObject('message', { message });
    }
    captureException(error) {
        // construct the error object
        const errorObj = this.#utilObj._getErrorStackTrace(error);
        this.prepareErrorObject('exception', errorObj);
    }
    prepareErrorObject(type, errorStackTrace) {
        // get current timeline
        const timeline = this.#listenerObj.getTimeline();
        const deviceDetails = this.#utilObj._getUserDeviceDetails();
        const tags = this._getTags();
        // get event ID
        // Temporary display the state of the error stack, timeline and device details when an error occur
        console.log({
            type,
            timeline,
            exception: errorStackTrace,
            deviceDetails,
            eventId: this.getEventId(),
            tags,
        });

        // generate a new event Id
        this._setEventId();
        // clear the timeline after a successful call to the server
        this.#listenerObj.clearTimeline(this.getEventId());
    }
}
export default FyipeTracker;
