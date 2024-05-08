import { AUTH_BASE_URL } from "@/utils/constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getCookie } from "cookies-next";
import {
  ErrorResponse,
  SignUpRequest,
  SignUpSuccessResponse,
} from "./api-types";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: AUTH_BASE_URL,
    prepareHeaders: (headers) => {
      const token = getCookie("token");

      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: [],

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  endpoints: (builder) => ({
    signUp: builder.mutation<
      SignUpSuccessResponse | ErrorResponse,
      SignUpRequest
    >({
      query: (body) => ({
        method: "POST",
        url: "/user/sign-up",
        body: body,
      }),
    }),
  }),
});

export const { useSignUpMutation } = authApi;
