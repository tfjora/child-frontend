import { createContext, useContext } from 'react';

export interface ITokenContext {
    token: string;
}

export const TokenContext = createContext<ITokenContext>('' as unknown as ITokenContext);

export const useTokenContext = (): ITokenContext => {
    return useContext<ITokenContext>(TokenContext);
};

export default useTokenContext;
