// This is a function that checks the access token. If there is one, no redirect will \
// occur but if there s none a redirect to the login page will be done.
import { useRouter } from "next/router"

export const CheckToken = async () => {
    const router = useRouter();
    const token = localStorage.getItem('accesToken');
    console.log(token);
    if (token){
      console.log('okay')
    } else {
      console.log(
      'not okay, redirecting to the login page');
      router.push("/login");
    }
  };