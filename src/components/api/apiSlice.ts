import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';



export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://atod.online',
        responseHandler: response => response.text()
    }),
    endpoints: (build => ({
        authorization: build.mutation({
            query: (body: {name: FormDataEntryValue | null, password: FormDataEntryValue | null}) => ({
                url: '/auth.php',
                method: 'POST',
                body
            })
        })
    }))
})

