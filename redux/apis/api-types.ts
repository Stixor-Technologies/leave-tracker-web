export interface SignUpRequest {
  email: string;
  password: string;
  confirmPassword: string;
  //   local:boolean;
}

export interface SignUpResponse {
  message: string;
  data: {
    isOrg: boolean;
  };
}
