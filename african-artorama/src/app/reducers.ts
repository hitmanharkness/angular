import { reducer } from 'src/app/layout/main-section-modules/main/main.reducer';
import { artUploadReducer } from 'src/app/layout/main-section-modules/artUpload/artUpload.reducer';

export const reducers = {
    main: reducer,
    artUpload: artUploadReducer
};
