import axios from "axios";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const apiClient = axios.create({
  baseURL: "http://localhost:3000", // Base URL for all requests
});

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [sending, setisSending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setisSending(true);
    try {
      const result = await apiClient.post(`/api/auth/v1/sendForgotPasswordToken`, { email });
      toast.success(result.data.message, {
        style: {
          marginTop: "50px",
        },
      });
      navigate("/forget-password-token-verification", { state: { email: email } });
    } catch (err) {
      console.log("error message", err);
      toast.error(err.response?.data?.message || "An error occurred. Please try again.", {
        style: {
          marginTop: "50px",
        },
      });
    } finally {
      setisSending(false);
    }
  };

  return (
    <div className="flex items-center justify-center bg-[#FFF2D5] min-h-screen w-full">
      <div className="flex flex-col items-center justify-center w-full max-w-md p-6 bg-[#2D2D2D] mx-4 sm:mx-0">
        <h1 className="text-2xl text-[#FFFAF0] font-bold font-bionix mb-6 text-center">
          Forget Password
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4 w-full">
          <input
            type="email"
            placeholder="Enter Registered Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 font-sftext bg-[#3D3D3D] text-[#B0B0B0] rounded"
          />
          <button
            type="submit"
            className="w-full font-sftext bg-[#F54E25] hover:bg-orange-500 text-[#FFFAF0] py-3 font-semibold flex items-center justify-center"
            disabled={sending}
          >
            {sending ? (
              <Loader2 color="#F54E25" className="animate-spin" />
            ) : (
              "Get Password on your Email"
            )}
          </button>
        </form>
        <div className="flex w-full justify-between mt-4 px-2">
          <Link to="/" className="text-[#FFFAF0] font-sftext hover:underline">
            Home
          </Link>
          <Link
            to="/login"
            className="text-[#FFFAF0] font-sftext hover:underline"
          >
            Login
          </Link>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default ForgetPassword;