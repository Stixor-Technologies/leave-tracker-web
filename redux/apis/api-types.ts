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

export interface CreateOrganizationResponse {
  message: string;
  data: string;
}

export interface CheckUserVerificationResponse {
  message: string;
  data: {
    verified: boolean;
  };
}

export interface SendPasswordSetupLinkRequest {
  email: string;
  type: "INVITE" | "RESET";
  local: boolean;
}

export interface SendPasswordSetupLinkResponse {
  data: string;
  message: string;
}

export interface SetPasswordRequest {
  password: string;
  confirmPassword: string;
  token: string;
  type: string;
}

export interface SetPasswordSuccessResponse {
  status: number;
  message: string;
  data: {
    user: UserState;
  };
}

export interface AddEmployeeResponse {
  message: string;
  data: string;
}
