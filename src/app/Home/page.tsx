"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      router.push("/signup"); // Redirect to signup if not logged in
    }
  }, [router]);

  return (
    <div className="home-container">
      <h1>Welcome to the Home Page!</h1>
      <p>You are successfully logged in.</p>
      <button onClick={() => {
        localStorage.removeItem("isLoggedIn");
        router.push("/signup");
      }}>
        Logout
      </button>
    </div>
  );
};

export default Home;