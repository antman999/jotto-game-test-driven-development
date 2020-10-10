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
 

    

  test('should render without errors', () => {
    const wrapper = setup({ guessedWords: [] })
    const component = findByTestAttr(wrapper, 'component-guessed-words')
    expect(component.length).toBe(1)
  })

  test('should render instructions to guess a word', () => {
   const wrapper = setup({ guessedWords: [] });
    const component = findByTestAttr(wrapper, 'guest-instructions')
    expect(component.text().length).not.toBe(0)
  })
  
  
})

describe('If there are words guessed', () => {
  
})

