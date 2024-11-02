import { Button } from "@/ShadCnComponents/ui/button.jsx";
import Input from "@/ShadCnComponents/ui/Input";
import axios from "axios";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../lib/useAuth";
import toast, { Toaster } from "react-hot-toast";

const apiClient = axios.create({
  baseURL: "http://localhost:3000", // Base URL for all requests
});

function OutsideRegistration() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  // checking if the user is already logged in
  const isAuthenticated = useAuth();
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);

  useEffect(() => {}, [submitting]);

  const create = async (data) => {
    try {
      console.log(data);
      setSubmitting(true);
      const response = await apiClient.post(`/api/auth/v1/register`, {
        name: data.name,
        email: data.email,
        password: data.password,
        isOtherCollege: true,
        phone: `${data.phone}`, // Append +91 to the phone number
        college: data.college,
        collegeID: data.collegeID,
      });

      // Check for a successful response (status code 201)
      if (response.status === 201) {
        setSubmitting(false);
        toast.success(response.data.message, {
          style: {
            marginTop: "50px",
          },
        });
        navigate("/verify-email", { state: { email: data.email } });
        console.log("User now went to verify user");
      }
    } catch (error) {
      setSubmitting(false);
      toast.error(
        error.response?.data?.message ||
          "Registration failed. Please try again.",
        {
          style: {
            marginTop: "50px",
          },
        }
      );
      // Safely handle different types of errors
      if (error.response) {
        // Server responded with a status outside the 2xx range (e.g., 400, 500)
        console.log("Server Error:", error.response.data);
      } else if (error.request) {
        // Request was made but no response was received (e.g., network error)
        console.log("No Response Received:", error.request);
      } else {
        // Some other error occurred (e.g., request setup issue)
        console.log("Error:", error.message || "Unknown error occurred");
      }
    }
  };

  // Password confirmation validation
  const validatePasswordMatch = (value) =>
    value === watch("password") || "Passwords do not match";

  return (
    <div className="flex items-center justify-center bg-[#FFF2D5] min-h-screen w-full">
      <div className="flex flex-col items-center justify-center w-full max-w-[40rem] mt-[4rem] p-6 bg-[#2D2D2D] mx-4 sm:mx-0">
        <h1 className="text-center text-2xl sm:text-3xl text-[#FFFAF0] font-bold font-bionix leading-tight">
          Outside Participation for <br /> CULRAV-AVISHKAR
        </h1>
        <p className="text-center font-sftext m-2 p-1 text-[#FFFAF0]">
          Already got registered?
          <Link
            to={"/login"}
            className="font-medium font-sftext text-[#F54E25] hover:underline ml-1"
          >
            Log in
          </Link>
        </p>
        <form
          onSubmit={handleSubmit(create)}
          className="space-y-5 font-sftext w-full"
        >
          <Input
            placeholder="Full name"
            {...register("name", { required: "Full name is required" })}
          />
          {errors.name && (
            <p className="text-[#F54E25]">{errors.name.message}</p>
          )}

          <Input
            placeholder="Email Id"
            type="email"
            {...register("email", {
              required: "Email is required",
              validate: {
                matchPattern: (value) =>
                  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ||
                  "Email is not valid",
              },
            })}
          />
          {errors.email && (
            <p className="text-[#F54E25]">{errors.email.message}</p>
          )}

          <Input
            placeholder="Phone no"
            {...register("phone", {
              required: "Phone no is required",
              validate: {
                matchPattern: (value) =>
                  /^[0-9]{10}$/.test(value) || "Phone must be a valid phone no",
              },
            })}
          />
          {errors.phone && (
            <p className="text-[#F54E25]">{errors.phone.message}</p>
          )}

          <Input
            placeholder="College Name"
            {...register("college", {
              required: "College name is required",
            })}
          />
          {errors.college && (
            <p className="text-[#F54E25]">{errors.college.message}</p>
          )}

          <Input
            placeholder="College ID Card [ Drive Link ]"
            type="url"
            {...register("collegeID", {
              required: "College ID is required",
            })}
          />
          {errors.collegeID && (
            <p className="text-[#F54E25]">{errors.collegeID.message}</p>
          )}

          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              {...register("password", {
                required: "Password is required",
                validate: {
                  matchPattern: (value) =>
                    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/.test(value) ||
                    "Password is not valid",
                },
              })}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-2.5"
            >
              {showPassword ? (
                <EyeOff className="animate-pulse text-gray-500" />
              ) : (
                <Eye className="animate-pulse text-gray-500" />
              )}
            </button>
          </div>
          {errors.password && (
            <p className="text-[#F54E25]">{errors.password.message}</p>
          )}

          <div className="relative">
            <Input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm password"
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: validatePasswordMatch,
              })}
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-2 top-2.5"
            >
              {showConfirmPassword ? (
                <EyeOff className="animate-pulse text-gray-500" />
              ) : (
                <Eye className="animate-pulse text-gray-500" />
              )}
            </button>
          </div>
          {errors.confirmPassword && (
            <p className="text-[#F54E25]">{errors.confirmPassword.message}</p>
          )}

          {submitting ? (
            <Loader2 className="animate-spin justify-center items-center" />
          ) : (
            <Button
              type="submit"
              className="w-full font-sftext bg-orange-600 hover:bg-orange-500 text-[#FFFAF0] py-3 font-semibold"
            >
              Register
            </Button>
          )}
        </form>

        {error && <p className="text-[#F54E25]">{error}</p>}
      </div>
      <Toaster />
    </div>
  );
}

export default OutsideRegistration;
