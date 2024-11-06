import React, { useState } from "react";
import axios from "axios";
import { LoaderCircle } from "lucide-react";
import overlay1 from "../../../assets/Overlay1.png";

const QR = () => {
  const [paymentScreenshot, setPaymentScreenshot] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadedUrl, setUploadedUrl] = useState("");
  const [isBigSize, setIsBigSize] = useState(false);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file.size > 524288) {
      setIsBigSize(true);
      return;
    }
    setIsBigSize(false);
    if (file) {
      setPaymentScreenshot(file);
    }
  };

  // function to decrease the size of image
  /*
  REMINDER: commenting it for now, might get back to it later if time allows
  async function compressImage() {
    console.log(
      "originalFile instanceof Blob",
      paymentScreenshot instanceof Blob
    ); // true
    console.log(`originalFile size ${paymentScreenshot.size / 1024 / 1024} MB`);

    const options = {
      maxSizeMB: 0.5,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    };

    try {
      console.log(paymentScreenshot);
      // changing the type to png
      const pngFile = new File([paymentScreenshot], "compressedImage.png", {
        type: "image/png",
      });
      // compressing the png file
      const compressedFile = await imageCompression(pngFile, options);
      console.log(compressedFile);
      console.log(
        "compressedFile instanceof Blob",
        compressedFile instanceof Blob
      ); // true
      console.log(
        `compressedFile size ${compressedFile.size / 1024 / 1024} MB`
      ); // smaller than maxSizeMB
      if (compressedFile) {
        setPaymentScreenshot(compressedFile);
      } else {
        console.error("Some error occured while compressing the file");
      }
    } catch (error) {
      console.log(error);
    }
  }
    */

  const uploadToCloudinary = async (e) => {
    setUploading(true);
    if (!paymentScreenshot) {
      toast.error("Please upload an image", {
        icon: "🚫",
        duration: 2000,
        className: "toast-error",
      });
      setUploading(false);
      return;
    }

    const formData = new FormData();
    formData.append("file", paymentScreenshot);
    formData.append("upload_preset", import.meta.env.VITE_UPLOAD_PRESET);
    formData.append("cloud_name", import.meta.env.VITE_CLOUD_NAME);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}`,
        // URL to cloudinary
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      console.log("Cloudinary Response:", response.data);
      setUploadedUrl(response.data.secure_url);
      alert("Payment screenshot uploaded successfully!");
    } catch (error) {
      console.error(
        "Cloudinary upload failed:",
        error.response?.data || error.message
      );
      alert("Failed to upload screenshot. Please try again.");
    } finally {
      setUploading(false);
      setPaymentScreenshot(null);
    }
  };

  const handleSubmit = () => {
    if (!uploadedUrl) {
      alert("Please upload a payment screenshot before submitting.");
      return;
    }
    console.log("Form submitted with payment URL:", uploadedUrl);
  };

  return (
    <>
      {uploading && <LoaderCircle />}
      <div
        className="min-h-screen flex justify-center items-center bg-gray-900 p-4"
        style={{
          backgroundImage: `url(${overlay1})`,
          backgroundSize: "cover", // Ensure image covers the entire div
          backgroundPosition: "center", // Center the image
          backgroundRepeat: "no-repeat", // Prevent image repetition
          width: "100%", // Set the width to 100% of the parent
          height: "100%", // Set the height of the div
        }}
      >
        <div
          className="p-8 rounded-lg shadow-xl w-full max-w-xs sm:max-w-sm lg:max-w-lg xl:max-w-xl space-y-6"
          style={{ backgroundColor: "var(--Jet, #2D2D2D)" }}
        >
          <div
            className="w-full h-64 rounded-lg"
            style={{ backgroundColor: "#D9D9D9" }}
          ></div>

          <input
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            className="w-full p-3 rounded"
            style={{
              backgroundColor: "var(--Mine-Shaft-900, #3D3D3D)",
              color: "white",
            }}
          />
          {isBigSize && (
            <div className="text-[#F54E25]">
              *file size must be less than 512 kb
            </div>
          )}
          <button
            onClick={uploadToCloudinary}
            disabled={uploading}
            className="w-full p-4 rounded transition"
            style={{
              backgroundColor: uploading ? "#3D3D3D" : "var(--Orange, #F54E25)",
              color: "white",
            }}
          >
            {uploading ? "Uploading..." : "Upload payment Screenshot"}
          </button>

          <button
            onClick={handleSubmit}
            className="w-full p-4 rounded transition hover:bg-opacity-90"
            style={{
              backgroundColor: "var(--Orange, #F54E25)",
              color: "white",
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default QR;
