import {ToggleEnglish, ToggleNepali} from '@store/slices/localize';
import {AddToast, DeleteToast} from '@store/slices/toasts';
import {store} from '../store';

const {dispatch} = store;

export const dispatchAddToast = (type: string, message: string, id: string | number) => {
  dispatch(AddToast({type, message, id}));
};

export const dispatchDeleteToast = (id: string | number) => {
  dispatch(DeleteToast(id));
};

export const dispatchToggleEnglish = () => {
  dispatch(ToggleEnglish());
};

export const dispatchToggleNepali = () => {
  dispatch(ToggleNepali());
};
