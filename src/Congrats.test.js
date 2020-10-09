import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16'

import Congrats from './Congrats'

Enzyme.configure({ adapter: new EnzymeAdapter() })

test('renders without error', () => {
  
})

test('should render no text when the success prop is false ', () => {
  
})

test('should render non empty congrats message when the success prop is true', () => {
  
})

