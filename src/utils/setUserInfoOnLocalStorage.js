export function saveUserInfoOnLocalStorage(info) {

    if(info.avatar){
        const { token, avatar, username} = info;
        localStorage.setItem("user", JSON.stringify({ token, avatar, username}));
    }
    if(!info.avatar){
        const { token, username} = info;
        localStorage.setItem("user", JSON.stringify({ token, username}));
    }
}
