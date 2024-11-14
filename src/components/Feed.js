"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function Feed() {

  
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);


  useEffect(() => {
    router.push("/dashboard");
      
    // const token = localStorage.getItem("authToken");
    // if (token) {
    //   router.push("/dashboard");
    // } else {
    //   router.push("/login");
    //   setLoading(false);
    // }
  }, );

  // useEffect(() => {
  //   const token = localStorage.getItem("authToken");
  //   const email = localStorage.getItem("userEmail");

  //   if (token && email) {
  //     setUserData(email); // Set user email
  //     setLoading(false); // Stop loading if user is authenticated
  //   } else {
  //     router.push("/login"); // Redirect to login if not authenticated
  //   }
  // }, [router]);







  
  const handleLogout = () => {
    if (confirm('are you sure ?')){
        localStorage.removeItem("authToken"); // Remove the token from localStorage
        localStorage.removeItem("userEmail"); // Remove user email from localStorage
        router.push("/login"); // Redirect to login page
    }
    
  };

  const posts = [
    {
      id: 1,
      username: "John Doe",
      content: "Just went on a great hike today! The view was amazing!",
      timestamp: "2 hours ago",
    },
    {
      id: 2,
      username: "Jane Smith",
      content: "Loving the new features on this platform!",
      timestamp: "5 hours ago",
    },
    {
      id: 3,
      username: "Michael Johnson",
      content: "Had a wonderful dinner with family.",
      timestamp: "1 day ago",
    },
  ];

  // Show nothing if loading is true
  if (loading) return null;

  return (
    <div style={styles.feedContainer}>
      <div style={styles.header}>
        <h2 style={styles.feedTitle}>Feed</h2>
        <button onClick={handleLogout} style={styles.logoutButton}>
          Logout
        </button>
      </div>
      <div style={styles.welcomeMessage}>
        <h3>Welcome, <span className="text-blue-800">{userData}</span></h3>
      </div>
      <div style={styles.postsContainer}>
        {posts.map((post) => (
          <div key={post.id} style={styles.post}>
            <div style={styles.postHeader}>
              <strong>{post.username}</strong>
              <span style={styles.timestamp}>{post.timestamp}</span>
            </div>
            <p style={styles.postContent}>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  feedContainer: {
    width: "100%",
    maxWidth: "600px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },
  feedTitle: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  logoutButton: {
    padding: "8px 16px",
    backgroundColor: "#ff4d4f",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "14px",
  },
  welcomeMessage: {
    marginBottom: "20px",
    fontSize: "18px",
    color: "#333",
  },
  postsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  post: {
    backgroundColor: "#fff",
    padding: "15px",
    borderRadius: "8px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  },
  postHeader: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
  },
  timestamp: {
    fontSize: "12px",
    color: "#777",
  },
  postContent: {
    fontSize: "16px",
    color: "#333",
  },
};

export default Feed;
