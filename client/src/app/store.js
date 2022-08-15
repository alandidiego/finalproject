import {configureStore} from '@reduxjs/toolkit';

import {cryptoNewsApi} from '../services/cryptoNews'

export default configureStore({
    reducer:{
        [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer
    }
})

