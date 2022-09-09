import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://tanvirs-server.herokuapp.com",
  }),

  tagTypes: ["VIDEOS", "Video", "RelatedVideos"],

  endpoints: (builder) => ({
    getVideos: builder.query({
      query: () => "/rtkVideos",
      keepUnusedDataFor: 600,
      providesTags: ["VIDEOS"],
    }),
    getVideo: builder.query({
      query: (videoId) => `/rtkVideos/${videoId}`,
      providesTags: (result, error, arg) => [{ type: "Video", id: arg }],
    }),
    getRelatedVideos: builder.query({
      query: ({ id, title }) => {
        const queryString = title.replaceAll(" ", "&title_like=");
        return `/rtkVideos?id_ne=${id}&title_like=${queryString}&_limit=4`;
      },
      providesTags: (result, error, arg) => [
        { type: "RelatedVideos", id: arg.id },
      ],
    }),
    addVideosTodb: builder.mutation({
      query: (data) => ({
        url: "/rtkVideos",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["VIDEOS"],
    }),
    updateSingleVideo: builder.mutation({
      query: ({ id, data }) => ({
        url: `/rtkVideos/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: (result, error, arg) => [
        "VIDEOS",
        { type: "Video", id: arg.id },
        { type: "RelatedVideos", id: arg.id },
      ],
    }),
    deleteVideo: builder.mutation({
      query: (id) => ({
        url: `/rtkVideos/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["VIDEOS"],
    }),
  }),
});

export const {
  useGetVideosQuery,
  useGetVideoQuery,
  useGetRelatedVideosQuery,
  useAddVideosTodbMutation,
  useUpdateSingleVideoMutation,
  useDeleteVideoMutation,
} = apiSlice;
