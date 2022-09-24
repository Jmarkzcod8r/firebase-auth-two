export const checkuserAccessToken = () => {
    const accessToken = 
        // This states that if our localstorage 'accessToken' is not undefined meaning
        // it is there, then we get it or else we clear the localstorage.
        localStorage.getItem('accessToken') !== "undefined" ? 
                JSON.parse(localStorage.getItem('acessToken')):
                localStorage.clear();
    // after defining the accessToken as a method sortof, we call it.
    return accessToken;

}



