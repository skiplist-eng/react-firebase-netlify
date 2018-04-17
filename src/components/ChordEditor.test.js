import React from 'react';
import {shallow} from 'enzyme';
import ChordEditor from './ChordEditor';


describe('<ChordEditor />', () => {
    it('renders an editor area', () => {
        const editor = shallow(<ChordEditor/>);
        expect(editor.find('textarea').length).toEqual(1);
    });

    it('renders an output area', () => {
        const editor = shallow(<ChordEditor/>);
        expect(editor.find('div.chord-output').length).toEqual(1);
    });

    it('renders the defaullt chord chart output', () => {
        const editor = shallow(<ChordEditor/>);
        const expectedOutput =
            '<div class="column"><div class="chord"></div><div class="lyrics">Type some lyrics here </div></div>';

        const realOutput = editor.find('div.chord-output').html();

        expect(realOutput.includes(expectedOutput)).toEqual(true);
    });

    it('renders the chord chart output', () => {
        const editor = shallow(<ChordEditor/>);
        editor.setState({value: '[B]new [Am]Lyrics'});
        const expectedOutput =
            '<div class="column"><div class="chord">B</div><div class="lyrics">new </div></div>' +
            '<div class="column"><div class="chord">Am</div><div class="lyrics">Lyrics </div></div>';

        const realOutput = editor.find('div.chord-output').html();

        expect(realOutput.includes(expectedOutput)).toEqual(true);
    });

});
