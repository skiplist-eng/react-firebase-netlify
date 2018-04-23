import {hotjar} from 'react-hotjar';

export default class Hotjar {
    constructor() {
        this._hotjar = hotjar;
        this.hotjarID = process.env.REACT_APP_HJID;
        this.hotjarSnippetVersion = process.env.REACT_APP_HJSV;
        hotjar.initialize(this.hotjarID, this.hotjarSnippetVersion);
    }
}
