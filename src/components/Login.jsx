"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { theme } from "@/components";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true); // Add loading state

  // Check if the user is already logged in
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      router.push("/"); // Redirect to dashboard if logged in
    } else {
      setLoading(false); // Set loading to false once the check is complete
    }
  }, [router]);

  // Handle login form submission
  const handleLogin = (e) => {
    e.preventDefault();

    // Valid credentials
    const validEmails = [
      "cbs@gmail.com",
      "ankitbkana@outlook.com",
      "abcd@bits-pilani.ac.in",
      "abcd@goa.bits-pilani.ac.in",
      "abcd@dubai.bits-pilani.ac.in",
      "abcd@hyd.bits-pilani.ac.in",
    ];

    if (validEmails.includes(email) && password === "1234") {
      toast.success("Successfully logged in!");

      // Set token and user email in localStorage
      localStorage.setItem("authToken", "mockToken123");
      localStorage.setItem("userEmail", email); // Store the user's email

      // Redirect to the dashboard
      router.push("/");
    } else {
      toast.error("Invalid email or password");
    }
  };

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff",
      padding: "20px",
      textAlign: "center",
      maxWidth: "333px",
      background: "rgba(0,0,0,0.2)",
      backdropFilter: "blur(5px)",
      boxShadow: "0 0 10px #6a0dad, 0 0 20px #6a0dad, 0 0 30px #6a0dad",
    },
    input: {
      width: "100%",
      maxWidth: "300px",
      padding: "5px 10px",
      margin: "10px 0",
      borderRadius: "5px",
      border: "1px solid #ccc",
      fontSize: "16px",
      color: "black",
    },
    button: {
      width: "100%",
      maxWidth: "300px",
      padding: "10px",
      margin: "10px 0",
      backgroundColor: "#6a0dad",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "16px",
      textAlign: "center",
      boxShadow: "0 0 10px #6a0dad, 0 0 20px #6a0dad, 0 0 30px #6a0dad",
      transition: "0.3s ease-in-out",
    },
    socialButtons: {
      display: "flex",
      justifyContent: "center",
      gap: "10px",
      marginTop: "20px",
    },
    socialButton: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "50%",
      backgroundColor: "#fff",
      color: "blue",
      cursor: "pointer",
      fontSize: "27px",
      boxShadow: "0 0 10px #6a0dad, 0 0 20px #6a0dad, 0 0 30px #6a0dad",
      transition: "0.3s ease-in-out",
    },
    socialButtonHover: {
      boxShadow: "0 0 20px #333, 0 0 30px #333, 0 0 40px #333",
    },
  };

  if (loading) return null; // Don't render anything while loading

  return (
    <div className="flex justify-center items-center min-h-[90vh]">
      <div style={styles.container}>
        <img className="w-20 mb-3" src="/unicode.png" alt="" />
        <h2>Login</h2>
        <p>Enter your credentials to connect</p>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter your mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />
          <button
            type="submit"
            style={{ ...styles.button, background: theme.colors.primary }}
          >
            Submit
          </button>
        </form>
        <div style={styles.socialButtons}>
          <button
            style={styles.socialButton}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow =
                styles.socialButtonHover.boxShadow)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.boxShadow = styles.socialButton.boxShadow)
            }
          >
            <FaFacebook />
          </button>
          <button
            style={{ ...styles.socialButton, color: "black" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow =
                styles.socialButtonHover.boxShadow)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.boxShadow = styles.socialButton.boxShadow)
            }
          >
            <FaGithub />
          </button>
        </div>
        <p className="py-5">
          Don’t have an account?{" "}
          <Link href="/login/register">Register here!</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
