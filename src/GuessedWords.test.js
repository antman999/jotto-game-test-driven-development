import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../test/testUtils';
import GuessedWords from './GuessedWords';

const defaultProps = {
	guessedWords: [{ guessedWords: 'train', letterMatchCount: 3 }],
};
const setup = (props = {}) => {
	const setupProps = { ...defaultProps, ...props };
	return shallow(<GuessedWords {...setupProps} />);
};

test('should not throw warnings with expected props', () => {
	checkProps(GuessedWords, defaultProps);
});

//describes are sections of where to test 
describe('If there are no words guessed', () => {
  let wrapper 
 //will run before each tests
  //just abstracting the wrapper 
  beforeEach(() => {
    wrapper = setup({guessedWords:[]})
  })
  test('should render without errors', () => {
   
    const component = findByTestAttr(wrapper, 'component-guessed-words')
    expect(component.length).toBe(1)
  })

  test('should render instructions to guess a word', () => {

    const component = findByTestAttr(wrapper, 'guest-instructions')
    expect(component.text().length).not.toBe(0)
  })
  
  
})

describe('If there are words guessed', () => {
  //we declare wrapper up here so it scopes 
  let wrapper 
  let guessedWords = [
		{ guessedWord: 'train', letterMatchCount: 3 },
		{ guessedWord: 'agile', letterMatchCount: 1 },
		{ guessedWord: 'party', letterMatchCount: 5 },
];
  
  beforeEach(() => {
    wrapper = setup({guessedWords})
  })
  test('should render without errors', () => {
    const component = findByTestAttr(wrapper, 'component-guessed-words')
    expect(component.length).toBe(1)
  })

  test('should render guessed words section', () => {
    const guessedWordsDiv = findByTestAttr(wrapper, 'guessed-words')
  })

  test('should display the correct number of guessed words ', () => {
    
  })
  
 
})

