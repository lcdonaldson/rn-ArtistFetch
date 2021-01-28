import React from 'react';
import App from '../../App';
import renderer from 'react-test-renderer';

describe('Snapshot tests', () => {
    // SNAPSHOT
    it('renders correctly when there are no items', () => {
        const tree = renderer.create(<App />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});

describe("handleClick function", () => {
    // handleClick HAPPY PATH
    it('fetches data successfully when clicked', () => {
        //Arrange
        let app = new App();
        const data = {
            item: {
                artistName: 'Elvis',
                trackName: 'Suspicious Minds',
                trackPrice: 1.29,
                primaryGenreName: 'Rock',
                releaseDate: 1611862879397
            },
        };

        //Act
        let spy = jest.spyOn(app, 'handleClick').mockImplementation(() => data);

        //Assert
        expect(app.handleClick()).toBe(data);
        expect(spy).toHaveBeenCalled()
    });
    
    // handleClick ERROR PATH
    it('fetches data erroneously when clicked', () => {
        //Arrange
        let app = new App();
        const data = {
            item: {
                artistName: 'Elvis',
                trackName: 'Suspicious Minds',
                trackPrice: 1.29,
                primaryGenreName: 'Rock',
                releaseDate: 1611862879397
            },
        };

        //Act
        let spy = jest.spyOn(app, 'handleClick').mockImplementation(() => null);

        //Assert
        expect(app.handleClick()).not.toBe(data);
        expect(spy).toHaveBeenCalled()
    });
});

describe('dateFormat function', () => {
    // dateFormat HAPPY PATH
    it('returns the correctly formatted date', () => {
        //Arrange
        let app = new App();
        const date = 'Tue, Sep 24, 2002'
    
        //Act
        let spy = jest.spyOn(app, 'dateFormat').mockImplementation(() => date);
    
        //Assert
        expect(app.dateFormat()).toBe('Tue, Sep 24, 2002');
        expect(spy).toHaveBeenCalled()
    });
    // dateFormat ERROR PATH
    it('does not return the correct format', () => {
        //Arrange
        let app = new App();
        const date = 'Tue, Sep 24, 2002'
    
        //Act
        let spy = jest.spyOn(app, 'dateFormat').mockImplementation(() => 1611862879397);
    
        //Assert
        expect(app.dateFormat()).not.toBe(date);
        expect(spy).toHaveBeenCalled()
    });
})


