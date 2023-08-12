const modalReducer = (state, action) => {
    switch (action.type) {
        case 'OPEN_MODAL':
            return {
                ...state,
                modalIsOpen: true,
                modalContent: action.payload,
            };
        case 'CLOSE_MODAL':
            return {
                ...state,
                modalIsOpen: false,
                modalContent: null,
            };
        case 'SAFETY_BAR_BUTTON_CLICKED':
            return {
                ...state,
                modalIsOpen: false,
                modalContent: null,
            };
        default:
            return state;
    }
};

export default modalReducer;
