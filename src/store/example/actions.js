import { action } from 'typesafe-actions';
import * as ExampleActionTypes from './types';

export const fetchRequest = () => action(ExampleActionTypes.FETCH_REQUEST)
export const fetchSuccess = (data) => action(ExampleActionTypes.FETCH_SUCCESS, data)
export const fetchError = (message) => action(ExampleActionTypes.FETCH_ERROR, message)