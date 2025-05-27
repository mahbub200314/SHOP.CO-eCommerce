
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../../public/firebase";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate("/user"); // Redirect to user page after login
    } catch (error) {
      alert("Login failed!");
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[50vh]">
     <div className="bg-white2 text-center py-6 px-15 rounded-[10px]  shadow-gray shadow-md">
      <h1 className="text-[1.5rem]"> Click And add Your Gmail And Login easily.</h1>
       <button
        onClick={handleGoogleLogin}
        className="bg-blue-600 my-5 text-white px-6 py-3 rounded-md cursor-pointer"
      >
        Sign in with Google
      </button>
     </div>
    </div>
  );
};

export default Login;

