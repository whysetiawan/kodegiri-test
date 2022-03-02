import photoReducer from '../../src/redux/slices/photo';

describe('Photo Reducer', () => {
  const mockInitialState = {
    isLoading: false,
    isError: false,
    errorMessage: '',
    photos: [],
  };

  it('should return the initial state', () => {
    expect(
      photoReducer(undefined, {
        type: undefined,
      }),
    ).toEqual(mockInitialState);
  });
});
