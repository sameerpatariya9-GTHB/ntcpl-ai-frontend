import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { requestOTP, verifyOTP } from "../services/api";

export default function LoginPage() {

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);

  const navigate = useNavigate();

  // Redirect if already logged in
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/");
    }
  }, []);

  const handleRequestOTP = async () => {

    // Company email restriction
    if (!email.endsWith("@newtrendscommerce.in")) {
      alert("Please use your company email.");
      return;
    }

    try {
      await requestOTP(email);
      alert("OTP generated. Check with admin or logs for now.");
      setStep(2);
    } catch (err) {
      alert("Failed to send OTP");
    }
  };

  const handleVerifyOTP = async () => {

    try {

      const data = await verifyOTP(email, otp);

      // IMPORTANT FIX
      if (data && data.access_token) {

        localStorage.setItem("token", data.access_token);

        navigate("/");

      } else {

        alert("Invalid OTP. Please try again.");

      }

    } catch (err) {

      alert("Invalid OTP. Please try again.");

    }

  };

  return (
    <div className="p-6 max-w-md mx-auto">

      <h1 className="text-2xl font-bold mb-6">Login</h1>

      {step === 1 && (
        <>
          <input
            className="border p-2 w-full mb-4"
            placeholder="Corporate Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button
            className="bg-black text-white px-4 py-2 w-full"
            onClick={handleRequestOTP}
          >
            Request OTP
          </button>
        </>
      )}

      {step === 2 && (
        <>
          <input
            className="border p-2 w-full mb-4"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />

          <button
            className="bg-black text-white px-4 py-2 w-full"
            onClick={handleVerifyOTP}
          >
            Verify OTP
          </button>

          <button
            className="mt-3 text-sm underline"
            onClick={() => setStep(1)}
          >
            Change Email
          </button>
        </>
      )}

    </div>
  );
}