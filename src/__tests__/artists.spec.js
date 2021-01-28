
import React from 'react';
import Artists from '../../src/components/Artists';
import renderer from 'react-test-renderer';

describe('Snapshot tests', () => {
    // SNAPSHOT
    it('renders correctly when there are no items', () => {
        const tree = renderer.create(<Artists />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});



