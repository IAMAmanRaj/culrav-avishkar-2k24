import { Button } from "@/ShadCnComponents/ui/button";
import Input from "@/ShadCnComponents/ui/Input";
import axios from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import useAuth from "../../../lib/useAuth";
import overlay1 from "../../../assets/Overlay1.png";

// Base URL for all requests (updated for better fallback)
const apiClient = axios.create({
  baseURL: import.meta.env.BASE_URL, // Use proper env variable for the base URL
});

function VerifyEmail() {
  const location = useLocation();
  const email = location.state?.email; // Get email from location state

  const checkEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*@mnnit\.ac\.in$/;
    return emailRegex.test(email);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(); // Added formState for error handling
  const navigate = useNavigate();

  useEffect(() => {
    console.log(location);
    if (!email || email.trim() === "") {
      navigate("/registration");
    }
  }, [email, navigate]);

  // Function to handle form submission and verification
  const check = async (data) => {
    try {
      // Logging OTP for debugging
      console.log(data.otp);

      // Sending POST request to the API with OTP (token)
      const response = await apiClient.post(`/auth/v1/verify`, {
        token: data.otp,
        email,
      }); // Added email in the request

      // Check if verification was successful
      if (response.status === 200) {
        toast.success("Email verification successful!", {
          duration: 2000,
          className: "toast-success",
        });
        // Check if the email is inside or outside college
        if (checkEmail(email)) {
          navigate("/login"); // Navigate to login for inside college
        } else {
          navigate("/outside-registration/payFee", { state: { email: email } }); // Navigate to pay fee for outside college
        }
      } else {
        toast.error("Email verification successful!", {
          duration: 2000,
          className: "toast-error",
        });
        console.log("Verification failed:", response.data); // Log failed verification
      }
    } catch (error) {
      // Improved error logging
      toast.error("Error during verification. Please try again.", {
        style: {
          marginTop: "50px",
        },
      });
      if (error.response) {
        console.log("Error during verification:", error.response.data.message);
      } else {
        console.log("Error during verification:", error.message);
      }
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
          Email Verification
        </h1>
        <p className="text-center font-sftext m-2 p-1 text-[#FFFAF0]">
          We have sent a code to your email:
          <br />
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

export default VerifyEmail;
