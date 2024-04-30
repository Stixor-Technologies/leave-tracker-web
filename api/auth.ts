import { axiosClient } from "@/utils/axios-client";
import { toast } from "sonner";

export const signIn = async (email: string, password: string) => {
  try {
    const data = {
      email: email,
      password: password,
    };
    const resp = await axiosClient.post("/admin/signin", data);
    return resp?.data?.data;
  } catch (err: any) {
    toast.error(err?.response?.data?.message);
    return false;
  }
};
