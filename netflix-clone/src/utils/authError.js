export const authErrorHandler=(code)=>{
    switch (code) {
        case "auth/wrong-password":
            return "Attention, wrong password!";
        case "auth/user-not-found":
            return "Attention, user not found!";
        default:
            break;
    }
}