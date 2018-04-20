import {hotjar} from 'react-hotjar';

export default class Hotjar {
    constructor() {
        this.hotjarID = process.env.HJID;
        this.hotjarSnippetVersion = process.env.HJSV
    }

    initialize() {
        hotjar.initialize(this.hotjarID, this.hotjarSnippetVersion);
    }
}
