import { createContext, useContext } from 'react';

export interface IPopout {
	popout: JSX.Element | null;
	setPopout: any;
}

export const PopoutContext = createContext<IPopout>({} as IPopout);
export const PopoutProvider = PopoutContext.Provider;
export const usePopout = (): IPopout => useContext(PopoutContext);
