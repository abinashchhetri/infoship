import React, { useState, useEffect, useRef } from "react";
import { assets } from "@/assets/assets";

const UploadWidget = ({ setUrl, url, contentType }) => {
  const widgetRef = useRef(null);

  useEffect(() => {
    if (!window.cloudinary) {
      console.error("Cloudinary script not loaded");
      return;
    }
    widgetRef.current = window.cloudinary.createUploadWidget(
      {
        cloudName: "dnbodlxzt",
        uploadPreset: "skillnestpreset",
        resourceType: contentType === "image/*" ? "image" : "auto", // Handle different file types
      },
      (error, result) => {
        if (error) {
          console.error("Upload Error:", error);
          return;
        }
        if (result.event === "success") {
          console.log("Upload success:", result.info);
          setUrl({
            publicId: result.info.public_id,
            url: result.info.url,
          });
        }
      }
    );
  }, []);

  const openWidget = () => {
    widgetRef.current.open();
  };

  return (
    <div className="flex items-center gap-3">
      <img
        src={assets.file_upload_icon}
        alt="Upload Icon"
        className="w-8 h-8 p-2 rounded cursor-pointer hover:bg-red-100 transition-all duration-300"
        onClick={openWidget} // Use openWidget function to trigger widget
      />
    </div>
  );
};

export default UploadWidget;
