import { AUTH_BASE_URL } from "@/utils/constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getCookie } from "cookies-next";
import {
  ErrorResponse,
  ResendEmailVerificationLinkRequest,
  ResendEmailVerificationLinkResponse,
  SignUpRequest,
  SignUpSuccessResponse,
  VerifyEmailResponse,
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

    resendEmailVerificationLink: builder.mutation<
      ResendEmailVerificationLinkResponse | ErrorResponse,
      ResendEmailVerificationLinkRequest
    >({
      query: (body) => ({
        method: "POST",
        url: "/user/send-verification-link",
        body: body,
      }),
    }),

    verifyLink: builder.query<VerifyEmailResponse | any, string>({
      query: (token) => ({
        method: "GET",
        url: "/auth/verify-link",
        params: { token },
      }),
      keepUnusedDataFor: 0.001,
    }),

    signIn: builder.mutation<
      { message: string },
      { email: string; password: string }
    >({
      query: (body) => ({
        method: "POST",
        url: "/auth/sign-in",
        body: body,
      }),
    }),
  }),
});

export const {
  useSignUpMutation,
  useResendEmailVerificationLinkMutation,
  useVerifyLinkQuery,
  useSignInMutation,
} = authApi;
