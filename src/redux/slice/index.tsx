import { createSlice } from '@reduxjs/toolkit';

import { initialState } from '@/components/Form';

const initial = {
    formFields: initialState,
};

const sliceFormFields = createSlice({
    name: 'form',
    initialState: initial,
    reducers: {
        setFormFields(state, action) {
            state.formFields = action.payload;
        },
    },
});

const { actions, reducer } = sliceFormFields;

export { reducer, actions };
