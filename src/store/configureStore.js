import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'
import thunk from 'redux-thunk'

// `export default function configureStore(initialState) {
//   return createStore(
//     rootReducer,
//     initialState,
//     composeWithDevTools(
//       applyMiddleware(thunk, reduxImmutableStateInvariant())
//     )
//   )
// }

export default function configureStore(initialState) {
  const store =  createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(thunk, reduxImmutableStateInvariant())
    )
  );
  // store.dispatch(getCompanies())
  return store;

}
