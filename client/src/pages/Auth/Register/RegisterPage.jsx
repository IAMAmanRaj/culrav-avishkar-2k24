import { Button } from "@/ShadCnComponents/ui/button.jsx";
import Input from "@/ShadCnComponents/ui/Input";
import axios from "axios";
import { Eye, EyeOff } from "lucide-react";
import { ClipLoader } from "react-spinners";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../lib/useAuth";
import toast, { Toaster } from "react-hot-toast";
import overlay1 from "../../../assets/Overlay1.png";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL, // Base URL for all requests
});

function Register() {
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
   
      setSubmitting(true);
      const response = await apiClient.post(`/auth/v1/register`, {
        name: data.name,
        email: data.email,
        password: data.password,
        isOtherCollege: false,
        phone: `${data.phone}`,
      });

      // Check for a successful response (status code 201)
      if (response.status === 201) {
        setSubmitting(false);
        toast.success(response.data.message, {
          duration: 2000,
          className: "toast-success",
        });
        navigate("/verify-email", { state: { email: data.email } });
      }
    } catch (err) {
      setSubmitting(false);
      toast.error(
        err.response?.data?.message || "Registration failed. Please try again.",
        { className: "toast-error" }
      );
    }
  };

  // Password confirmation validation
  const validatePasswordMatch = (value) =>
    value === watch("password") || "Passwords do not match";

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
          Register for <br /> CULRAV-AVISHKAR
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
            placeholder="GSuite Id"
            type="email"
            {...register("email", {
              required: true,
            })}
          />
          {errors.email && (
            <p className="text-[#F54E25]">{errors.email.message}</p>
          )}

          <Input
            placeholder="Phone Number"
            {...register("phone", {
              required: "Phone number is required",
              validate: {
                matchPattern: (value) =>
                  /^[6-9]\d{9}$/.test(value) ||
                  "Phone number must be a valid Indian phone number",
              },
            })}
          />
          {errors.phone && (
            <p className="text-[#F54E25]">{errors.phone.message}</p>
          )}

          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              {...register("password", {
                required: true,
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
            <>
              <div className="flex w-full items-center justify-center">
                <ClipLoader color="#F54E25" size={35} className="mx-auto" />
              </div>
            </>
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

        <p className="text-[#FFFAF0] font-sftext mt-4 text-center">
          For Outside Participation
          <Link
            to={"/outside-registration"}
            className="font-medium font-sftext text-[#F54E25] transition-all duration-200 hover:underline ml-1"
          >
            Click here
          </Link>
        </p>
      </div>
      <Toaster />
    </div>
  );
}

export default Register;
