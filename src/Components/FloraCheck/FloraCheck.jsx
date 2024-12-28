import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

export default function FloraCheck() {
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const [scrollDirection, setScrollDirection] = useState("down");

  const scrollToSection = () => {
    if (scrollDirection === "down") {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
      setScrollDirection("up");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setScrollDirection("down");
    }
  };

  const startCamera = async () => {
    setIsLoading(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      streamRef.current = stream;

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }

      setIsCameraOpen(true);
      setErrorMessage(null);
    } catch (err) {
      console.error("Error accessing the camera: ", err);
      setErrorMessage(
        "Could not access the camera. Please check your device or browser settings."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
    setIsCameraOpen(false);
  };

  const capturePhoto = () => {
    if (videoRef.current && videoRef.current.readyState === 4) {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      const video = videoRef.current;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      const dataUrl = canvas.toDataURL("image/png");
      setImagePreviewUrl(dataUrl);

      stopCamera();
    } else {
      console.error("Camera feed is not ready.");
      setErrorMessage("Camera feed is not ready. Please try again.");
    }
  };

  const handleUploadPhoto = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setUploadedFile(file);
      const reader = new FileReader();
      reader.onload = (e) => setImagePreviewUrl(e.target.result);
      reader.readAsDataURL(file);
      setIsCameraOpen(false);
    } else {
      alert("Please upload a valid image file.");
    }
  };

  const sendToBackend = async () => {
    setIsLoading(true);
    const formData = new FormData();

    if (uploadedFile) {
      formData.append("file", uploadedFile);
    } else {
      formData.append("file", dataUrlToFile(imagePreviewUrl, "plant_image.png"));
    }

    try {
      const response = await fetch("/api/FloraCheck/predict", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        const errorDetails = errorData.details || "An unexpected error occurred.";
        setErrorMessage(errorDetails);
        throw new Error(errorDetails);
      }

      const result = await response.json();
      setResponse(result);
      setErrorMessage(null);
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const resetProcess = () => {
    setResponse(null);
    setImagePreviewUrl(null);
    setUploadedFile(null);
    setIsCameraOpen(false);
    setErrorMessage(null);
  };

  const dataUrlToFile = (dataUrl, filename) => {
    const arr = dataUrl.split(",");
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);

    while (n--) u8arr[n] = bstr.charCodeAt(n);

    return new File([u8arr], filename, { type: mime });
  };

  const stripHtml = (html) => {
    // Remove unnecessary Markdown or HTML-like formatting
    html = html.replace(/.*?\n/g, "").replace(/<.*?>/g, "");

    // Remove the JSON-like "predicted_class" key and extract its value
    var predictedClassMatch = html.match(/"predicted_class":"(.*?)"/);
    if (predictedClassMatch) {
      html = predictedClassMatch[1];
    }

    // Parse remaining HTML to extract plain text
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    return (doc.body.textContent || "").trim();
  };

  return (
    <>
      {/* Code omitted for brevity - same as the original UI structure */}
    </>
  );
}
