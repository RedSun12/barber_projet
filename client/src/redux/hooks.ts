/* eslint-disable @typescript-eslint/no-explicit-any */
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { RootState } from './store';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

type DispatchFunc = () => ThunkDispatch<RootState, any, AnyAction>;

export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
