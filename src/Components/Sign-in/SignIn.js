import React, { useState } from "react";

const SignIn = () => {
  const [isLogin, setLogin] = useState(true); // Controls modal visibility

  const toggleModal = () => setLogin((prev) => !prev); // Cleaner toggle function

  return (
    <div
      className={`fixed inset-0 w-full h-screen flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 z-10 ${
        isLogin ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={toggleModal} // Click outside to close
    >
      <div
        className="p-6 w-full max-w-md bg-white rounded-xl shadow-lg"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-semibold">Get Started</h2>
          <button
            onClick={toggleModal}
            className="text-gray-500 hover:text-gray-700 text-2xl"
            aria-label="Close modal"
          >
            &times;
          </button>
        </div>

        {/* Social Login Options */}
        <div className="space-y-4 mt-6">
          <button className="flex items-center justify-center w-full p-3 border border-gray-300 rounded-lg hover:bg-gray-50">
            <span className="mr-2">Logo</span> {/* Replace with actual icon */}
            Continue with Google
          </button>
          <button className="flex items-center justify-center w-full p-3 border border-gray-300 rounded-lg hover:bg-gray-50">
            <span className="mr-2">Logo</span>
            Continue with Email
          </button>
          <button className="flex items-center justify-center w-full p-3 border border-gray-300 rounded-lg hover:bg-gray-50">
            <span className="mr-2">Logo</span>
            Continue with Apple
          </button>
        </div>

        {/* Divider */}
        <div className="text-center my-6 text-gray-500">OR</div>

        {/* Mobile Input */}
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1 text-gray-600">
            Logo {/* Replace with flag/icon */}
            +91
          </span>
          <input
            type="tel"
            className="w-full p-2 border-b-2 border-gray-300 outline-none focus:border-blue-500"
            placeholder="Enter mobile number"
            aria-label="Mobile number"
          />
        </div>

        {/* Terms */}
        <div className="mt-8 text-center text-sm text-gray-600">
          I agree to the{" "}
          <a href="/terms" className="underline hover:text-blue-500">
            Terms & Conditions
          </a>{" "}
          &{" "}
          <a href="/privacy" className="underline hover:text-blue-500">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignIn;