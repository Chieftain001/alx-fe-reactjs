import { useState } from "react";

export function useAuth() {
  // Simulate authentication state (this can be replaced with real logic)
  const [isAuthenticated] = useState(() => {
    // Check if user token exists in localStorage (example)
    return localStorage.getItem("userToken") ? true : false;
  });

  return { isAuthenticated };
}
