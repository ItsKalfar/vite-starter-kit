import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { ThunkDispatch, UnknownAction } from "@reduxjs/toolkit";

/* eslint-disable @typescript-eslint/no-explicit-any */
export type AppThunkDispatch = ThunkDispatch<IRootState, any, UnknownAction>;
export const useAppDispatch = () => useDispatch<AppThunkDispatch>();
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;
