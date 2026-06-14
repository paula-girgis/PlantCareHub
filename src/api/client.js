import axios from "axios";

// Single axios instance for the whole app. Base URL comes from the
// VITE_API_BASE_URL env var and falls back to the dev proxy path "/api".
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "/api",
});

// Attach the stored auth token to every request automatically so individual
// components no longer have to wire it up by hand.
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("userToken");
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
});

export default apiClient;
