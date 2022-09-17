import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import counterReducer from './Redux/CounterSlice';
import todoReducer from './Redux/TodoSlice';
import menuReducer from './Redux/MenuSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        todos: todoReducer,
        menu: menuReducer
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;