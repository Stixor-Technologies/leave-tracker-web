import { AUTH_BASE_URL } from "@/utils/constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  ErrorResponse,
  ResendEmailVerificationLinkRequest,
  ResendEmailVerificationLinkResponse,
  SignUpRequest,
  SignUpSuccessResponse,
  AuthenticationResponse,
  SignInRequest,
  CreateOrganizationResponse,
  CheckUserVerificationResponse,
  SendPasswordSetupLinkRequest,
  SetPasswordRequest,
  SetPasswordSuccessResponse,
  SendPasswordSetupLinkResponse,
} from "./api-types";
import { OrganizationFormDetail } from "@/utils/forms/interfaces";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: AUTH_BASE_URL,
    credentials: "include",
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

    setPassword: builder.mutation<
      SetPasswordSuccessResponse,
      SetPasswordRequest
    >({
      query: (body) => ({
        method: "PATCH",
        url: "/user/set-password",
        body: body,
      }),
    }),

    sendPasswordSetupLink: builder.mutation<
      SendPasswordSetupLinkResponse,
      SendPasswordSetupLinkRequest
    >({
      query: (body) => ({
        method: "POST",
        url: "/user/send-link",
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

    verifyLink: builder.query<AuthenticationResponse | any, string>({
      query: (token) => ({
        method: "GET",
        url: "/auth/verify-link",
        params: { token },
      }),
      keepUnusedDataFor: 0.001,
    }),

    checkUserVerification: builder.query<CheckUserVerificationResponse, string>(
      {
        query: (email) => ({
          method: "GET",
          url: "/user/is-verified",
          params: { email },
        }),
        keepUnusedDataFor: 0.001,
      },
    ),

    signIn: builder.mutation<AuthenticationResponse, SignInRequest>({
      query: (body) => ({
        method: "POST",
        url: "/auth/sign-in",
        body: body,
      }),
    }),

    createOrganization: builder.mutation<
      CreateOrganizationResponse,
      OrganizationFormDetail
    >({
      query: (body) => ({
        method: "POST",
        url: "/org",
        body: body,
      }),
    }),
  }),
});

export const {
  useSignUpMutation,
  useSendPasswordSetupLinkMutation,
  useSetPasswordMutation,
  useResendEmailVerificationLinkMutation,
  useVerifyLinkQuery,
  useCheckUserVerificationQuery,
  useSignInMutation,
  useCreateOrganizationMutation,
} = authApi;
