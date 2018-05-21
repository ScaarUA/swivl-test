import React from 'react';
import {shallow} from 'enzyme';
import App from './App';

describe('App', () => {
	let sut;

	beforeEach(() => {
		sut = shallow(<App />);
	});

	it('renders without crashing', () => {
		expect(sut.exists()).toBeTruthy();
	});
});
