import ReactGA from 'react-ga';

export default class GoogleAnalytics {
    constructor() {
        this.gaTrackingNumber = process.env.REACT_APP_GA_TRACKING_NUMBER;
        ReactGA.initialize(this.gaTrackingNumber);
    }
}
