import { apiSlice } from './apiSlice';

export const gameApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getGame: builder.query({
      query: id => `/jogos/${id}`
    }),
    getFeaturedGames: builder.query({
      query: () => '/destaque'
    }),
    getOnSale: builder.query({
      query: () => '/promocoes'
    }),
    getComingSoon: builder.query({
      query: () => '/em-breve'
    }),
    getActionGames: builder.query({
      query: () => '/acao'
    }),
    getRpgGames: builder.query({
      query: () => '/rpg'
    }),
    getSimulationGames: builder.query({
      query: () => '/simulacao'
    }),
    getFightGames: builder.query({
      query: () => '/luta'
    })
  })
});

export const {
  useGetFeaturedGamesQuery,
  useGetOnSaleQuery,
  useGetComingSoonQuery,
  useGetActionGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetFightGamesQuery,
  useGetGameQuery
} = gameApi;
