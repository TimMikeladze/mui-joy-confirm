import { useContext } from 'react';
import ConfirmContext from './ConfirmContext';
import { UseConfirmHook } from './types';

const useConfirm: UseConfirmHook = () => {
  const confirm = useContext(ConfirmContext);
  return confirm;
};

export default useConfirm;
