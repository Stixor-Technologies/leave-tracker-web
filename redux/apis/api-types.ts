import { UserState } from "@/types";

export interface ErrorResponse {
  data: {
    message: string;
    name: string;
    status: number;
    response: {
      error: string;
      message: string;
      statusCode: number;
    };
  };
  status: number;
}

export interface SignUpRequest {
  email: string;
  password: string;
  confirmPassword: string;
  local: boolean;
}

export interface SignInRequest
  extends Omit<SignUpRequest, "confirmPassword" | "local"> {}

export interface SignUpSuccessResponse {
  data: {
    message: string;
    data: {
      isOrg: boolean;
    };
  };
}

export interface ResendEmailVerificationLinkRequest {
  email: string;
  local: boolean;
}

export interface ResendEmailVerificationLinkResponse {
  data: {
    message: string;
    data: string;
  };
}

export interface AuthenticationResponse {
  message: string;
  status: number;
  data: UserState;
}
