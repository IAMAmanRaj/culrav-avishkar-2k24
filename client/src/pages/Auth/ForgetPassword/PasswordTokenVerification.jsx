import { Button } from "@/ShadCnComponents/ui/button";
import Input from "@/ShadCnComponents/ui/Input";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import overlay1 from "../../../assets/Overlay1.png";
import toast, { Toaster } from "react-hot-toast";

// Base URL for all requests (updated for better fallback)
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL, // Use proper env variable for the base URL
});

function ForgetPasswordTokenVerification() {
  const location = useLocation();
  const email = location.state?.email;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(); // Added formState for error handling
  const navigate = useNavigate();

  // Function to handle form submission and verification
  const check = async (data) => {
    try {
      console.log(data.otp);
      // Sending POST request to the API with OTP (token)
      const response = await apiClient.post(
        `/auth/v1/forgotPasswordVerification`,
        { token: data.otp }
      ); // Added email in the request
      // Check if verification was successful
      if (response.status === 200) {
        toast.success("Password sent. Check Email !", {
          style: {
            marginTop: "50px",
          },
        });
        toast.success("Login Successful!", {
          duration: 2000,
          className: "toast-success",
        });
        navigate("/login"); // Navigate to login on success
      } else {
        toast.error("Verification failed. Please try again.", {
          className: "toast-error",
        });
        console.log("Verification failed:", response.data); // Log failed verification
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Please try again.", {
        className: "toast-error",
      });
      console.log(
        "Error during password token verification:",
        error.response?.data?.message || error.message
      );
    }
  };

  return (
    <div
      className="flex items-center justify-center bg-[#FFF2D5] min-h-screen w-full"
      style={{
        backgroundImage: `url(${overlay1})`,
        backgroundSize: "cover", // Ensure image covers the entire div
        backgroundPosition: "center", // Center the image
        backgroundRepeat: "no-repeat", // Prevent image repetition
        width: "100%", // Set the width to 100% of the parent
        height: "100%", // Set the height of the div
      }}
    >
      <div className="flex flex-col items-center justify-center w-full max-w-md p-6 bg-[#2D2D2D] mx-4 sm:mx-0">
        <h1 className="text-center text-2xl sm:text-3xl text-[#FFFAF0] font-bold font-bionix leading-tight">
          Password Token
          <br />
          Verification
        </h1>
        <p className="text-center font-sftext m-2 p-1 text-[#FFFAF0]">
          We have sent a verification code to :<br />
          {email}
        </p>
        <form
          onSubmit={handleSubmit(check)}
          className="space-y-5 font-sftext w-full"
        >
          {/* Input for OTP */}
          <Input
            type="text"
            placeholder="Enter the code"
            {...register("otp", {
              required: "OTP is required", // Custom error message for required field
            })}
          />
          {errors.otp && <p className="text-red-500">{errors.otp.message}</p>}{" "}
          {/* Display error */}
          {/* Submit button */}
          <Button
            type="submit"
            className="w-full font-sftext bg-[#F54E25] hover:bg-orange-500 text-[#FFFAF0] py-3 font-semibold"
          >
            Submit
          </Button>
        </form>
      </div>
      <Toaster />
    </div>
  );
}

export default ForgetPasswordTokenVerification;
