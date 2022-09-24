// This function returns an object
export function Getuserinfo(){
    const userInfo = 
    // This states that if our localstorage 'accessToken' is not undefined meaning
    // it is there, then we get it or else we clear the localstorage.
    localStorage.getItem("user") !== "undefined" ? 
            JSON.parse(localStorage.getItem("user")):
            localStorage.clear();
// after defining the accessToken as a method sortof, we call it.
return userInfo;

}
