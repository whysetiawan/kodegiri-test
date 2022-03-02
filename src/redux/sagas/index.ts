import photoSaga from './photo';

export default function* rootSaga() {
  yield* photoSaga();
}
