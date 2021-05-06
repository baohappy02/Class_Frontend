export const JWT_KEY = "@yabe_jwtkey";
export const PASSWORD_REGEX = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
export const USERNAME_REGEX = /^[a-zA-Z0-9.\-_$@*!]{3,}$/;
export const PHONE_REGEX = /((09|03|07|08|05)+([0-9]{8})\b)/g;

export default {
    JWT_KEY,
    PASSWORD_REGEX,
    USERNAME_REGEX,
    PHONE_REGEX
}