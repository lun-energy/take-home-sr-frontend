export type SignupRequestVariables = {
  method: "post";
  path: "/newsletter-signup";
  headers: {
    "Content-Type": "application/json";
    Accept: "application/json";
  };
  body: SignupRequestBody;
};

export type SignupRequestBody = {
  name: string;
  /**
   * @format email
   */
  email: string;
  phone: string;
  /**
   * @format url
   */
  website: string;
  annualInstallationsCount: "0-29" | "30-59" | "60-99" | "100+";
};

export type SignupResponseBody =
  | { success: true }
  | { success: false; error: string };
