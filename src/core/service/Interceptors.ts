import {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ValidateError, ValidateSuccess } from "./interceptor_error_message";

const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
  return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  console.log(`[request error] [${JSON.stringify(error)}]`);
  return Promise.reject(error);
};

const onResponse = async (response: AxiosResponse): Promise<AxiosResponse> => {
  let message = "";
  if (response && response.data) {
    const data = response.data as any
    // console.log(response.data.type)
    message = await ValidateSuccess(data)
    // console.log(response)
    // if (data) message = await ValidateSuccess(data)
    if (response.config.url?.includes("authentication/admin/login") || response.config.url?.includes("authentication/private/admin/token")) {

    } else {

      toast.success(message)
    }
  }
  return response;
};

const onResponseError = async (error: AxiosError): Promise<AxiosError> => {

  // if (localStorage.getItem('company_redux')) {
  //   const company: Company = JSON.parse(localStorage.getItem('company_redux') as string)
  let message = ""
  if (error.response?.status === 401) {
    message = `Username dan / password salah`
    toast.error(message)
  }
  if (error.response && error.response.data) {
    const data = error.response?.data as any
    message = ValidateError(data, error.config)
    // if (data.errorCodes) message = await ValidateError(data.errorCodes[0])
    if (error.response?.status === 401) {
      message = `${message}. Please Login First!`
      window.location.replace("/")
    }
    toast.error(message)
  }
  // console.log(error);

  // if ([500, 501, 502, 503, 0].includes(error.response?.status as number)) {
  //   message = "Terjadi Kesalahan Sistem"
  // }
  // if ([403].includes(error.response?.status as number) && !error.config?.url?.includes('mob_user/security_code/reauthenticate')) {
  //   message = "Masukkan PIN anda"
  // }

  // if ([401].includes(error.response?.status as number) && error.config?.url?.includes('mob_user/login')) {
  //   message = "Username atau Password yang Anda Masukkan Salah"

  // }

  // if ([400].includes(error.response?.status as number) && error.config?.url?.includes('mob_user/transfer_bank/inquiry')) {
  //   message = "Nama Akun Tidak Ditemukan"

  // }
  // if ([400].includes(error.response?.status as number) && error.config?.url?.includes('digiprod/member/pulsa/inquiry/postpaid')) {
  //   message = "No Telepon Tidak Ditemukan"

  // }
  // if ([400].includes(error.response?.status as number) && error.config?.url?.includes('mob_user/status_cpm_qrcode')) {
  //   message = "Kode QR telah kadaluarsa"

  // }

  // if (error.response?.status == 401 && (!error.config?.url?.includes('login') && !error.config?.url?.includes('user_change_password'))) {
  //   store.dispatch(removeToken());
  //   window.location.href = `/${company?.initial}/login`
  // }
  // if ([403].includes(error.response?.status as number) && !error.config?.url?.includes('mob_user/security_code/reauthenticate')) {
  //   toast.warning(message)
  // }
  // else if (message == "WRONG_SECURITY_CODE") {
  //   toast.error("Kode Keamanan Salah")
  // } 
  // else {
  //   toast.error(message)
  // }

  // }
  return Promise.reject(error);
};

export function setupInterceptorsTo(
  axiosInstance: AxiosInstance
): AxiosInstance {
  axiosInstance.interceptors.request.use(onRequest, onRequestError);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
  return axiosInstance;
}