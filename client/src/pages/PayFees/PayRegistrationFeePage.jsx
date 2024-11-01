import { Button } from "@/ShadCnComponents/ui/button.jsx";
import Input from "@/ShadCnComponents/ui/Input";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

const apiClient = axios.create({
  baseURL: "http://localhost:3000", // Base URL for all requests
});

function PayRegistrationFeePage() {
  const [submitting, setSubmitting] = useState(false);
  const [isBigSize, setIsBigSize] = useState(false);
  const [currentError, setCurrentError] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;
console.log("hi", email);
  useEffect(() => {
    if (!email) {
      navigate("/outside-registration");
    }
  }, [email, navigate]);

  const create = async (data) => {
    setSubmitting(true);
    console.log(data);

    if (!data.image) {
      console.log("No image");
      toast.error("No image uploaded. Please upload an image.", {
        style: {
          marginTop: "50px",
        },
      });
      setSubmitting(false);
      return;
    }

    if (data.image[0].size > 524288) {
      setIsBigSize(true);
      toast.error("File size must be less than 512 KB.", {
        style: {
          marginTop: "50px",
        },
      });
      setSubmitting(false);
      return;
    }

    setIsBigSize(false);

    try {
      const paymentScreenshot = data.image[0];
      const uploadedUrl = await uploadToCloudinary(paymentScreenshot);
      if (!uploadedUrl) {
        console.log("Image not able to upload");
        toast.error("Image upload failed. Please try again.", {
          style: {
            marginTop: "50px",
          },
        });
        setSubmitting(false);
        return;
      }

      const res = await apiClient.post("/api/auth/v1/registerOutside", {
        email,
        paymentLink: uploadedUrl,
        isOtherCollege: true,
        isPaymentVerified: false,
      });

      if (res.status === 200) {
        toast.success("Verification Request Submitted !", { duration: 1000 }, {
          style: {
            marginTop: "50px",
          },
        });
        setSubmitting(false);
        navigate("/login");
      }
    } catch (error) {
      setCurrentError(error);
      toast.error("Error occurred while updating user details.", {
        style: {
          marginTop: "50px",
        },
      });
      console.error("Error occurred while updating user details: ", error);
    }

    setSubmitting(false);
  };

  // Function to upload to Cloudinary
  const uploadToCloudinary = async (paymentScreenshot) => {
    if (!paymentScreenshot) {
      console.log("Please upload a screenshot first.");
      toast.error("Please upload a screenshot first.", {
        style: {
          marginTop: "50px",
        },
      });
      return null;
    }

    const formData = new FormData();
    formData.append("file", paymentScreenshot);
    formData.append("upload_preset", import.meta.env.VITE_UPLOAD_PRESET);
    formData.append("cloud_name", import.meta.env.VITE_CLOUD_NAME);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      console.log("Cloudinary Response:", response.data);
    
      return response.data.secure_url;
    } catch (error) {
      setCurrentError(error);
      toast.error("Cloudinary upload failed. Please try again.", {
        style: {
          marginTop: "50px",
        },
      });
      console.error("Cloudinary upload failed:", error.response?.data || error.message);
      console.log("Failed to upload screenshot. Please try again.");
      return null;
    }
  };

  return (
    <div className="flex items-center justify-center bg-[#FFF2D5] min-h-screen w-full">
      <div className="flex flex-col items-center justify-center w-full max-w-md p-6 bg-[#2D2D2D] mx-4 sm:mx-0">
        <form
          onSubmit={handleSubmit(create)}
          className="space-y-5 font-sftext w-full"
        >
          <div
            className="w-full h-64 rounded-lg"
            style={{ backgroundColor: "#D9D9D9" }}
          ></div>
          <div className="text-white">Upload the screenshot</div>
          <Input
            type="file"
            accept="image/*"
            className="w-full p-3 rounded"
            {...register("image", { required: "Image is required" })}
          />
          {isBigSize && (
            <div className="text-[#F54E25]">
              *file size must be less than 512 kb
            </div>
          )}

          {submitting ? (
            <Loader2 className="animate-spin justify-center items-center" />
          ) : (
            <Button
              type="submit"
              className="w-full font-sftext bg-orange-600 hover:bg-orange-500 text-[#FFFAF0] py-3 font-semibold"
            >
              Verify Payment
            </Button>
          )}
        </form>

        {errors.image && <p className="text-[#F54E25]">{errors.image.message}</p>}
        {currentError && (
          <p className="text-[#F54E25]">{currentError.response?.data?.message}</p>
        )}
      </div>
      <Toaster />
    </div>
  );
}

export default PayRegistrationFeePage;