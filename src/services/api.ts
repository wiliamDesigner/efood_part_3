import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-ebac.vercel.app/api/efood'
  }),
  endpoints: (build) => ({
    getRestaurantes: build.query<any, void>({
      query: () => '/restaurantes'
    })
  })
})

export const { useGetRestaurantesQuery } = api

export default api