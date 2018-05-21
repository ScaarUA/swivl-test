import React from 'react';
import {shallow} from 'enzyme';
import {UsersListContainer} from './UsersListContainer';
import UsersList from '../../components/UserList/UsersList';
import Preloader from '../../components/Preloader/Preloader';

describe('UsersListContainer', () => {
	let sut;
	let instance;
	let mockProps;

	beforeEach(() => {
		mockProps = {
			users: [],
			isFetching: false,
			fetchUsers: jest.fn()
		};
	});

	beforeEach(renderComponent);

	function renderComponent() {
		sut = shallow(<UsersListContainer {...mockProps} />);
		instance = sut.instance();
	}

	describe('componentDidMount()', () => {
		it('should fetch users', () => {
			expect(mockProps.fetchUsers).toHaveBeenCalled();
		});
	});

	describe('fetchUsers()', () => {
		let initialVisibleUsers;

		beforeEach(() => {
			initialVisibleUsers = sut.state('visibleUsers');

			instance.fetchUsers();
		});

		it('should fetch 25 more users', () => {
			expect(mockProps.fetchUsers).toHaveBeenCalledWith(initialVisibleUsers + 25);
		});

		it('should set state with new amount of visible users incremented by 25', () => {
			expect(sut.state('visibleUsers')).toEqual(initialVisibleUsers + 25);
		});
	});

	describe('render()', () => {
		describe('when there is no users present', () => {
			beforeEach(() => {
				mockProps.users = [];
				renderComponent();
			});

			it('should NOT display list of users', () => {
				expect(sut.find(UsersList).exists()).toBeFalsy();
			});
		});

		describe('when there is users present', () => {
			beforeEach(() => {
				mockProps.users = [{
					login: 'user1'
				}, {
					login: 'user2'
				}];
				renderComponent();
			});

			it('should display list of users', () => {
				expect(sut.find(UsersList).exists()).toBeTruthy();
			});

			describe('when users are fetching', () => {
				beforeEach(() => {
					mockProps.isFetching = true;
					renderComponent();
				});

				it('should show preloader', () => {
					expect(sut.find(Preloader).exists()).toBeTruthy();
				});
			});

			describe('when users are not fetching', () => {
				beforeEach(() => {
					mockProps.isFetching = false;
					renderComponent();
				});

				it('should NOT show preloader', () => {
					expect(sut.find(Preloader).exists()).toBeFalsy();
				});
			});
		});
	});
});