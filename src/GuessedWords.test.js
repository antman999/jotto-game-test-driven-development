import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr, checkProps } from '../test/testUtils';
import GuessedWords from './GuessedWords';

const defaultProps = {
	guessedWords: [{ guessedWord: 'train', letterMatchCount: 3 }],
};
const setup = (props = {}) => {
	const setupProps = { ...defaultProps, ...props };
	return shallow(<GuessedWords {...setupProps} />);
};

test('should not throw warnings with expected props', () => {
	checkProps(GuessedWords, defaultProps);
});
