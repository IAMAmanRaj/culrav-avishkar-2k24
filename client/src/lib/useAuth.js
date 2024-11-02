import { useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";
import toast, { Toaster } from "react-hot-toast";
const useAuth = () => {
  const token = useSelector((state) => state.user.token);

  if (!token) {
    return false;
  }

  try {
    const decoded = jwtDecode(token);
    const currentTime = Date.now() / 1000;

    if (decoded.exp > currentTime) {
      return true;
    } else {
      toast.error("Session expired. Please log in again.", {
        style: {
          marginTop: "50px",
        },
      });
      navigate("/login");
      return false;
    }
  } catch (err) {
    console.error("Invalid token", err);
    return false;
  }
};

export default useAuth;
