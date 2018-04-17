import React from 'react';
import {shallow} from 'enzyme';
import ChordEditor from './ChordEditor';


describe('<ChordEditor />', () => {
    it('renders an editor area', () => {
        const editor = shallow(<ChordEditor song={{chordpro: ""}}/>);
        expect(editor.find('textarea').length).toEqual(1);
    });

    it('renders an output area', () => {
        const editor = shallow(<ChordEditor song={{chordpro: ""}}/>);
        expect(editor.find('div.chord-output').length).toEqual(1);
    });

    it('renders the chord chart output', () => {
        const editor = shallow(<ChordEditor song={{chordpro: "[B]New [Am]Lyrics"}}/>);
        const expectedOutput =
            '<div class="column"><div class="chord">B</div><div class="lyrics">New </div></div>' +
            '<div class="column"><div class="chord">Am</div><div class="lyrics">Lyrics </div></div>';

        const realOutput = editor.find('div.chord-output').html();

        expect(realOutput.includes(expectedOutput)).toEqual(true);
    });

    it('calls update song when a text area changes', () => {
        let theSong;
        const update = (song) => {
            theSong = song;
        };
        const editor = shallow(<ChordEditor song={{chordpro: "[B]New [Am]Lyrics"}} updateSong={update}/>);

        editor.find('textarea').simulate("change", {target: {value: "[B]New [Am]Lyrics "}});

        expect(theSong).toEqual({chordpro: "[B]New [Am]Lyrics "});
    });

});
