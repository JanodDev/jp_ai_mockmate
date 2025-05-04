"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
// import Image from "next/image";
import { toast } from "sonner";
import { auth } from "@/firebase/client";
import { signOut } from "firebase/auth";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ProfilePage = () => {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is authenticated
    const unsubscribe = auth.onAuthStateChanged(async (firebaseUser) => {
      if (firebaseUser) {
        try {
          // Set basic user info from Firebase Auth
          setUser({
            name: firebaseUser.displayName || "User",
            email: firebaseUser.email,
            uid: firebaseUser.uid,
          });
        } catch (error) {
          console.error("Error fetching user data:", error);
          toast.error("Failed to load profile data");
        }
      } else {
        router.push("/sign-in");
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, [router]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      // Clear cookies if needed
      toast.success("Logged out successfully");
      router.push("/sign-in");
    } catch (error) {
      console.error("Error signing out:", error);
      toast.error("Failed to log out");
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen pattern flex items-center justify-center">
        <div className="flex-center flex-col gap-4">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary-200 border-t-transparent"></div>
          <p className="text-light-100">Loading profile...</p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen pattern">
      <Header />

      <div className="root-layout">
        <div className="card-border w-full max-w-2xl mx-auto">
          <div className="card p-8">
            <div className="flex flex-col items-center text-center gap-6">
              {/* Profile Avatar */}
              <div className="blue-gradient rounded-full size-28 flex-center">
                <span className="text-3xl font-bold text-dark-100">
                  {user?.name.charAt(0).toUpperCase()}
                </span>
              </div>

              {/* Profile Info */}
              <div className="flex flex-col gap-2">
                <h2 className="text-white text-2xl font-bold">{user?.name}</h2>
                <p className="text-light-400">{user?.email}</p>
              </div>

              {/* Account Actions */}
              <div className="flex flex-col sm:flex-row gap-4 w-full mt-4 justify-center items-center">
                <Button
                  className="btn-disconnect w-full sm:w-auto"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Access */}
        <section className="mt-10">
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">
            Quick Access
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="card-border">
              <div className="card p-6 text-center">
                <div className="blue-gradient-dark rounded-lg p-4 mb-4 flex-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary-200"
                  >
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                  </svg>
                </div>
                <h4 className="text-white font-medium mb-2">My Interviews</h4>
                <p className="text-light-400 text-sm mb-4">
                  View your completed interviews and performance
                </p>
                <Button
                  className="btn-secondary w-full"
                  onClick={() => router.push("/interviews")}
                >
                  View Interviews
                </Button>
              </div>
            </div>

            <div className="card-border">
              <div className="card p-6 text-center">
                <div className="blue-gradient-dark rounded-lg p-4 mb-4 flex-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary-200"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                </div>
                <h4 className="text-white font-medium mb-2">
                  Practice Questions
                </h4>
                <p className="text-light-400 text-sm mb-4">
                  Review common interview questions and answers
                </p>
                <Button
                  className="btn-secondary w-full"
                  onClick={() => router.push("/practice")}
                >
                  Start Practicing
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
};

export default ProfilePage;
