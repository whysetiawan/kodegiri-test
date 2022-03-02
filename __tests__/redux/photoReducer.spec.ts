import photoReducer from '../../src/redux/slices/photo';

describe('Photo Reducer', () => {
  it('should return the initial state', () => {
    expect(
      photoReducer(undefined, {
        type: undefined,
      }),
    ).toEqual({
      isLoading: false,
      isError: false,
      errorMessage: '',
    });
  });
});
