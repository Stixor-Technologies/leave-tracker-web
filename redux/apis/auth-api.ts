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
  AddEmployeeResponse,
} from "./api-types";
import {
  AddEmployeeFormDetail,
  OrganizationFormDetail,
} from "@/utils/forms/interfaces";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: AUTH_BASE_URL,
    credentials: "include",
  }),
  tagTypes: ["Employee"], // Define tag for employees

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

    addEmployee: builder.mutation<AddEmployeeResponse, AddEmployeeFormDetail>({
      query: (body) => ({
        method: "POST",
        url: "/user/add-new-employee",
        body: body,
      }),
      invalidatesTags: ["Employee"], // Invalidate the employee tag on successful add
    }),

    employeeList: builder.query<any, void>({
      query: () => ({
        url: "/user/org-all-employees",
        method: "GET",
      }),
      keepUnusedDataFor: 0.001,
      transformResponse: (response) => response.data.users,
      providesTags: ["Employee"], // Provide the employee tag
    }),

    getEmployeeDetail: builder.query<any, string>({
      query: (id) => ({
        method: "GET",
        url: `/user/${id}`,
        params: { id },
      }),
      keepUnusedDataFor: 0.001,
      transformResponse: (response) => response.data.user,
    }),
  }),
});

export const {
  useSignUpMutation,
  useResendEmailVerificationLinkMutation,
  useVerifyLinkQuery,
  useCheckUserVerificationQuery,
  useSignInMutation,
  useCreateOrganizationMutation,
  useEmployeeListQuery,
  useAddEmployeeMutation,
  useGetEmployeeDetailQuery,
} = authApi;
