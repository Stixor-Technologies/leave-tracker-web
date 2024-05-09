export interface SignUpRequest {
  email: string;
  password: string;
  confirmPassword: string;
  //   local:boolean;
}

export interface SignUpSuccessResponse {
  data: {
    message: string;
    data: {
      isOrg: boolean;
    };
  };
}
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
