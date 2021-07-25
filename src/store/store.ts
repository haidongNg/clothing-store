import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import {productReducer} from './reducers/index';
import {logger} from 'redux-logger';
export const store = configureStore({
  reducer: {
      product: productReducer,
  },
  middleware: [logger],
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
