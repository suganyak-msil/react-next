
// export const encrypt = (value) => {
//     var edata = CryptoJS.AES.encrypt(
//         value,
//         ekey,
//         {
//             mode: CryptoJS.mode.CBC,
//             padding: CryptoJS.pad.Pkcs7,
//             iv: eiv
//         }
//     );
//     return edata.ciphertext.toString(CryptoJS.enc.Base64);
// }

// export const decrypt = (value) => {
//     var bytes = CryptoJS.AES.decrypt(
//         value,
//         ekey,
//         {
//             mode:  CryptoJS.mode.CBC,
//             padding: CryptoJS.pad.Pkcs7,
//             iv: eiv
//         }
//     );
//     return bytes.toString(CryptoJS.enc.Utf8);
// }