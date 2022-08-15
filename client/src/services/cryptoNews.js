
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoNewsHeaders = {

    'x-bingapis-sdk': 'true',
  'x-rapidapi-key': 'f9e145eb5bmsh915405dce68b3ddp146862jsnda4c0153f368',
  'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
}


const baseUrl = 'https://bing-news-search1.p.rapidapi.com/news';
    
const createRequest = (url) =>({url, headers: cryptoNewsHeaders});

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) =>({
        getCryptoNews: builder.query({
            query: (obj) => createRequest(`/search?q=${Object.values(obj)[0]}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${Object.values(obj)[1]}`),
        })
    })
});

export const {useGetCryptoNewsQuery} = cryptoNewsApi;
