export const ValidateSuccess = (respon) => {
  if (respon.type === "SUCCESS_LOGOUT") {
    return "Logout Berhasil";
  } else if (respon.type === "SUCCESS_LOGIN") {
    return "Login Berhasil";
  } else if (respon.type === "SUCCESS_REQUEST_OTP") {
    return "Permintaan OTP Berhasil";
  } else if (respon.type === "SUCCESS_VALIDATE_OTP") {
    return "Validasi OTP Berhasil";
  } else if (respon.type === "SUCCESS_VALIDATE_SECURITY_CODE") {
    return "Validasi Kode Keamanan Berhasil";
  } else if (respon.type === "SUCCESS_VALIDATE_SECURITY_CODE_TOKEN") {
    return "Validasi Kode Keamanan Token Berhasil";
  } else if (respon.type === "SUCCESS_GET_OTP_CONFIG") {
    return "Konfigurasi OTP Berhasil Didapatkan";
  } else if (respon.type === "SUCCESS_UPDATE_OTP_CONFIG") {
    return "Konfigurasi OTP Berhasil Dirubah";
  } else if (respon.type === "SUCCESS_CREATED") {
    return "Berhasil Dibuat";
  } else if (respon.type === "SUCCESS_UPDATED") {
    return "Berhasil Dirubah";
  } else if (respon.type === "SUCCESS_DELETED") {
    return "Berhasil Dihapus";
  } else if (respon.type === "OK") {
    return "Berhasil";
  } else if (respon.type === "") {
    return "Berhasil";
  } else {
    return respon.type;
  }
};

export const ValidateError = (respon, config) => {
  // console.log("response", respon);
  var message = "";
  if (respon.status == 400) {
    message = respon.message || respon.detail.type;
  } else if (respon.status == 404) {
    message = respon.message || respon.detail.type;
  } else if (respon.status == 405) {
    message = respon.message;
  } else if (respon.status == 403) {
    message = "Authentication has failed, please wait";
  } else if (respon.status == 422) {
    message = respon.message;
  } else if (respon.status == 500) {
    message = "Internal Server Error";
  } else if (respon.status == 401) {
    message = "Username dan/atau password salah";
  } else {
    message = respon.message;
  }
  console.log(message);
  return message;
  // switch (parseInt(respon.status)) {
  //   case 400:
  //     if (respon.detail.type === "INVALID_COMPANY") {
  //       return "Company Tidak Sah";
  //     } else if (respon.detail.type === "USER_NOT_FOUND") {
  //       return "Pengguna Tidak Ditemukan";
  //     } else if (respon.detail.type === "USER_INACTIVE") {
  //       return "Pengguna Tidak Ditemukan";
  //     } else if (respon.detail.type === "WRONG_PASSWORD_COUNT_EXCEEDED") {
  //       return "Percobaan Melebihi Batas, Silahkan Reset Password Anda";
  //     } else if (respon.detail.type === "AUTHENTICATION_FAILED") {
  //       return "Otentikasi Gagal";
  //     } else if (respon.detail.type === "OTP_NOT_FOUND") {
  //       return "OTP Tidak Ditemukan";
  //     } else if (respon.detail.type === "SECURITY_CODE_NOT_MATCH") {
  //       return "Kode Keamanan Tidak Cocok";
  //     } else if (respon.detail.type === "USER_DO_NOT_HAVE_SECURITY_CODE") {
  //       return "Pengguna Tidak Memiliki Kode Keamanan";
  //     } else if (respon.detail.type === "SECURITY_CODE_TOKEN_NOT_FOUND") {
  //       return "Token Kode Keamanan Tidak Ditemukan";
  //     } else if (respon.detail.type === "BAD_REQUEST") {
  //       return "Permintaan Buruk";
  //     } else if (respon.detail.type === "INVALID_DATE_FORMAT") {
  //       return "Format Tanggal Tidak Valid";
  //     } else if (respon.detail.type === "INVALID_PHONE_NUMBER") {
  //       return "Nomor Telepon Tidak Valid";
  //     } else if (respon.detail.type === "INVALID_EMAIL") {
  //       return "Email Tidak Valid";
  //     } else if (respon.detail.type === "INVALID_OBJECT_ID") {
  //       return "ID Obyek Tidak Valid";
  //     } else if (respon.detail.type === "INVALID_PASSWORD_LENGTH") {
  //       return "Panjang Password Tidak Valid";
  //     } else if (respon.detail.type === "FAILED_TO_REQUEST") {
  //       return "Gagal Meminta";
  //     } else if (respon.detail.type === "COMPANY_INITIAL_OR_NAME_EXIST") {
  //       return "Inisial atau Nama Perusahaan Ada";
  //     } else if (respon.detail.type === "DUPLICATE_EMAIL") {
  //       return "Email Duplikat";
  //     } else if (respon.detail.type === "TOKEN_EXPIRED") {
  //       return "Token Kadaluwarsa";
  //     } else if (respon.detail.type === "TOKEN_ALREADY_USED") {
  //       return "Token Sudah Digunakan";
  //     } else if (respon.detail.type === "WRONG_CONFIRMATION_PASSWORD") {
  //       return "Password Konfirmasi Salah";
  //     } else if (respon.detail.type === "WRONG_PASSWORD") {
  //       return "Username atau Password Salah";
  //     } else {
  //       return respon.message + "abbns";
  //     }
  //   case 401:
  //     if (respon.detail.type === "WRONG_PASSWORD") {
  //       return "Username atau Password Salah";
  //     } else if (respon.detail.type === "AUTHENTICATION_FAILED") {
  //       return "Otentikasi Gagal";
  //     } else if (respon.detail.type === "UNAUTHORIZED") {
  //       return "Tidak Diizinkan";
  //     } else {
  //       return respon.detail.type;
  //     }
  //   case 403:
  //     if (respon.detail.type === "UNAUTHORIZED_ROLE") {
  //       return "Akses Tidak Diizinkan";
  //     } else if (respon.detail.type === "ACCESS_FORBIDDEN") {
  //       return "Dilarang Akses";
  //     } else {
  //       return respon.detail.type || respon.detail.message;
  //     }
  //   case 404:
  //     if (respon.detail.type === "NOT_FOUND") {
  //       return "Tidak Ditemukan";
  //     } else if (respon.detail.type === "COMPANY_NOT_FOUND") {
  //       return "Instansi/Perusahaan tidak ditemukan";
  //     } else {
  //       return respon.detail.type;
  //     }
  //   case 500:
  //     if (respon.detail.type === "INTERNAL_SERVER_ERROR") {
  //       return "Kesalahan Server";
  //     } else {
  //       return respon.detail.type;
  //     }
  //   default:
  //     return respon.message + "anbf";
  // }
};
// if (respon === "SUCCESS_LOGOUT") {
//   return "Berhasil Logout";
// } else if (respon === "SUCCESS_REQUEST_OTP") {
//   return "Permintaan OTP Berhasil";
// } else if (respon === "SUCCESS_VALIDATE_OTP") {
//   return "Validasi OTP Berhasil";
// } else if (respon === "SUCCESS_VALIDATE_SECURITY_CODE") {
//   return "Validasi Kode Keamanan Berhasil";
// } else if (respon === "SUCCESS_VALIDATE_SECURITY_CODE_TOKEN") {
//   return "Validasi Kode Keamanan Token Berhasil";
// } else if (respon === "SUCCESS_GET_OTP_CONFIG") {
//   return "Konfigurasi OTP Berhasil";
// } else if (respon === "SUCCESS_UPDATE_OTP_CONFIG") {
//   return "Token Diperlukan";
// } else if (respon === "INVALID_TOKEN") {
//   return "Token Salah";
// } else if (respon === "EXPIRED_TOKEN") {
//   return "Token Expired";
// } else if (respon === "WRONG_TRANSACTION") {
//   return "Transaksi Salah";
// } else if (respon === "WRONG_USER_ID") {
//   return "User Id Salah";
// } else if (respon === "User tidak ditemukan") {
//   return "User tidak ditemukan";
// } else if (respon === "Company tidak ditemukan") {
//   return "Company tidak ditemukan";
// } else if (respon === "User tidak memiliki email") {
//   return "User tidak memiliki email";
// } else if (respon === "Device baru, mohon masukkan kode otp") {
//   return "Device baru, mohon masukkan kode otp";
// } else if (respon === "Kode OTP tidak ditemukan") {
//   return "Kode OTP tidak ditemukan";
// } else if (respon === "Kode OTP suspended") {
//   return "Kode OTP suspended";
// } else if (respon === "Kode OTP expired") {
//   return "Kode OTP expired";
// } else if (respon === "OTP salah") {
//   return "OTP salah";
// } else if (respon === "Your Account is Disabled") {
//   return "Akun Anda di Nonaktifkan";
// } else if (respon === "Incorrect old password") {
//   return "Password lama tidak sesuai";
// } else if (respon === "User not found") {
//   return "User tidak di temukan";
// } else if (respon === "Email tidak valid") {
//   return "Email tidak valid";
// } else if (respon === "Email sudah terdaftar") {
//   return "Email sudah terdaftar";
// } else if (respon === "Gagal update data") {
//   return "Gagal update data";
// } else if (
//   respon === "Belum bisa membuat virtual account dengan bank terkait"
// ) {
//   return "Belum bisa membuat virtual account dengan bank terkait";
// } else if (respon === "Gagal mengirim request create va ke gateway") {
//   return "Gagal mengirim request create va ke gateway";
// } else if (respon === "COMPANY_ACCOUNT_NOT_FOUND") {
//   return "Company Akun Tidak ditemukan";
// } else if (respon === "WRONG_ACCOUNT_NAME") {
//   return "Nama Akun Salah";
// } else if (respon === "BANK_ACCOUNT_NOT_FOUND") {
//   return "Akun Bank Tidak Di temukan";
// } else if (respon === "DONATION_HAS_ENDED") {
//   return "Donasi telah Berakhir";
// } else if (respon === "MIN_DONATION_10000") {
//   return "Minimal Donasi Rp 10.000";
// } else if (respon === "DONATION_PROGRESS_NOT_FOUND") {
//   return "Donasi tidak di temukan";
// } else if (respon === "QR_CODE_NOT_FOUND") {
//   return "Qr Code Tidak di temukan";
// } else if (respon === "QR_CODE_EXPIRED") {
//   return "QR Code Expired";
// } else if (respon === "User bukan member") {
//   return "User bukan member";
// } else if (respon === "USER_ALREADY_HAVE_SECURITY_CODE") {
//   return "User Sudah memiliki kode Keamanan";
// } else if (respon === "SECURITY_CODE_INVALID") {
//   return "Kode Keamanan Invalid";
// } else if (respon === "WRONG_SECURITY_CODE") {
//   return "Kode Keamanan Salah";
// } else if (respon === "SUSPENDED_SECURITY_CODE") {
//   return "Kode Keamanan di Suspend";
// } else if (respon === "USER_HAVE_NO_SECURITY_CODE") {
//   return "User Tidak Memiliki Kode Keamanan";
// } else if (respon === "REQUEST_FOR_RESET_OTP_TOO_QUICK") {
//   return "Permintaan request OTP untuk reset kode keamanan terlalu cepat. Mohon tunggu beberapa saat";
// } else if (respon === "OTP_REQUEST_EXCEED_MAXIMUM_NUMBER_IN_ONE_DAY") {
//   return "PERMINTAAN OTP MELEBIHI JUMLAH MAKSIMUM DALAM SATU HARI";
// } else if (respon === "OTP_CODE_EXPIRED") {
//   return "Kode OTP Expired";
// } else if (respon === "WRONG_OTP_CODE") {
//   return "Kode OTP Tidak Sesuai";
// } else if (respon === "EXTENSION_NOT_ALLOWED") {
//   return "Extensi Salah";
// } else if (respon === "FAILED_UPLOADING_FILE") {
//   return "Gagal Upload file";
// } else if (respon === "MERCHANT_NOT_EXIST") {
//   return "Merchant tidak di temukan";
// } else if (respon === "MEMBER_NOT_EXIST") {
//   return "Member tidak di temukan";
// } else if (respon === "MERCHANT_SHIP_NOT_EXIST") {
//   return "Kurir Merchant tidak di temukan";
// } else if (respon === "AUTHENTICATION_FAILED") {
//   return "Authentikasi gagal";
// } else if (respon === "BALANCE_NOT_ENOUGH") {
//   return "Saldo saat create order tidak cukup";
// } else if (respon === "FAILED_CREATING_ORDER") {
//   return "Order gagal di buat";
// } else if (respon === "STATUS_NOT_VALID") {
//   return "Status order tidak valid";
// } else if (respon === "CATEGORY_NOT_EXIST") {
//   return "Kategori Tidak di temukan";
// } else if (respon === "PRODUCT_NOT_EXIST") {
//   return "Product Tidak di temukan";
// } else if (respon === "MEMBER_ADDRESS_NOT_EXIST") {
//   return "Alamat Member tidak di temukan";
// } else if (respon === "CART_NOT_EXIST") {
//   return "Keranjang Tidak di temukan";
// } else if (respon === "ORDER_NOT_EXIST") {
//   return "Order Tidak di temukan";
// } else if (respon === "INVALID_PRICE") {
//   return "Harga Salah";
// } else if (respon === "INVALID_ORDER_QUANTITY") {
//   return "Harga Salah";
// } else if (respon === "Harga Order salah") {
//   return "Harga Salah";
// } else if (respon === "FAILED_REVERSE_BALANCE") {
//   return "Gagal Mengembalikan Saldo";
// } else if (respon === "PRODUCT_QUANTITY_NOT_EXIST") {
//   return "Jumlah Product Tidak Tersedia";
// } else if (respon === "FAILED_SEND_NOTIFICATION") {
//   return "Gagal Mengirim Notifikasi";
// } else if (respon === "UNAUTHORIZED_ROLE") {
//   return "Role tidak bisa di akses";
// } else if (respon === "CHARGE_NOT_EXIST") {
//   return "Data charge tidak di temukan";
// } else if (respon === "FAILED_UPDATE_CHARGE_STATUS") {
//   return "Gagal mengubah mutasi charge";
// } else if (respon === "PULSE_PRODUCT_NOT_EXIST") {
//   return "Pulsa tidak tersedia";
// } else if (respon === "FAILED_PULSE_INQUIRY") {
//   return "Gagal Mengambil data Pulsa";
// } else if (respon === "PLN_CUSTOMER_NUMBER_NOT_FOUND") {
//   return "PLN Customer Number tidak di temukan";
// } else if (respon === "PLN_PRODUCT_NOT_EXIST") {
//   return "PLN Tidak tersedia";
// } else if (respon === "TRANSACTION_NOT_EXIST") {
//   return "Tidak ada Teransaksi";
// } else if (respon === "FAILED_PLN_INQUIRY") {
//   return "PLN Inquiry gagal";
// } else if (respon === "FAILED_BPJS_INQUIRY") {
//   return "BPJS Inquiry gagal";
// } else if (respon === "FAILED_PBB_INQUIRY") {
//   return "PBB Inquiry gagal";
// } else if (respon === "PBB_CODE_NOT_EXIST") {
//   return "Kode PBB Tidak di temukan";
// } else if (respon === "FAILED_PDAM_INQUIRY") {
//   return "PDAM Inquiry gagal";
// } else if (respon === "PDAM_CODE_NOT_EXIST") {
//   return "Kode PDAM Tidak di Temukan";
// } else if (respon === "FAILED_INTERNET_TV_INQUIRY") {
//   return "Internet TV Inquiry gagal";
// } else if (respon === "INTERNET_TV_PRODUCT_NOT_EXIST") {
//   return "Product Internet Tv Tidak di temukan";
// } else if (respon === "ACCOUNT_NOT_FOUND") {
//   return "Akun Tidak Di Temukan";
// } else if (respon === "STOCK_PRODUCT_NOT_EXIST") {
//   return "Stok Produk Tidak Mencukupi";
// }
// else {
//   return respon;
// };
