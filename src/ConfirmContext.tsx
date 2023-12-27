import { createContext } from 'react';
import { ConfirmOptions } from './types';

export default createContext<(_options?: ConfirmOptions) => Promise<any>>(() =>
  Promise.resolve()
);
