import {fetchUsers, fetchUsersFailure, fetchUsersStart, fetchUsersSuccess} from './UsersList.actions';

describe('usersList.actions', () => {
	let mockDispatch = jest.fn();

	beforeEach(() => {
		fetch.resetMocks();
		mockDispatch = jest.fn();
	});

	describe('fetchUsers()', () => {
		let mockAmount = 50;

		beforeEach(() => {
			fetch.mockResponseOnce(JSON.stringify({}));
		});

		it('should notify about fetch start', () => {
			fetchUsers(mockAmount)(mockDispatch)
				.then(() => {
					expect(mockDispatch).toHaveBeenCalledWith(fetchUsersStart());
				});
		});

		it('should fetch users', () => {
			fetchUsers(mockAmount)(mockDispatch);

			expect(fetch.mock.calls[0][0]).toContain(`per_page=${mockAmount}`);
		});

		describe('when successfully fetched', () => {
			let mockUsers = [{
				login: 'user'
			}];

			beforeEach(() => {
				fetch.mockResponseOnce(JSON.stringify(mockUsers));
			});

			it('should initiate process of storing users', () => {
				fetchUsers(mockAmount)(mockDispatch)
					.then(() => {
						expect(mockDispatch).toHaveBeenCalledWith(fetchUsersSuccess(mockUsers));
					});
			});
		});

		describe('when failed to fetch', () => {
			beforeEach(() => {
				fetch.mockRejectOnce();
			});

			it('should notify about failure', () => {
				fetchUsers(mockAmount)(mockDispatch)
					.then(() => {
						expect(mockDispatch).toHaveBeenCalledWith(fetchUsersFailure());
					});
			});
		});
	});
});