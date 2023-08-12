import { createContext, useReducer } from 'react';
import modalReducer from './ModalReducer';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
    const initialState = {
        modalIsOpen: false,
        modalContent: null,
    };

    const [state, dispatch] = useReducer(modalReducer, initialState);

    return (
        <ModalContext.Provider
            value={{
                ...state,
                dispatch,
            }}
        >
            {children}
        </ModalContext.Provider>
    );
};

export default ModalContext;
