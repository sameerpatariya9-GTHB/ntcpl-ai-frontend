import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { requestOTP, verifyOTP } from "../services/api";

function LoginPage() {

const [email, setEmail] = useState("");
const [otp, setOtp] = useState("");
const [step, setStep] = useState(1);
const [loading, setLoading] = useState(false);

const navigate = useNavigate();

useEffect(() => {
const token = localStorage.getItem("token");
if (token) {
navigate("/");
}
}, [navigate]);

const handleRequestOTP = async () => {

```
if (!email.endsWith("@newtrendscommerce.in")) {
  alert("Please use your company email.");
  return;
}

try {

  setLoading(true);

  const res = await requestOTP(email);

  if (res && !res.error) {
    alert("OTP sent to your email.");
    setStep(2);
  } else {
    alert("Failed to send OTP.");
  }

} catch (error) {

  console.error(error);
  alert("Failed to send OTP.");

} finally {

  setLoading(false);

}
```

};

const handleVerifyOTP = async () => {

```
if (!otp) {
  alert("Please enter OTP");
  return;
}

try {

  setLoading(true);

  const res = await verifyOTP(email, otp);

  if (res && res.access_token) {

    localStorage.setItem("token", res.access_token);

    navigate("/");

  } else {

    alert("Invalid OTP");

  }

} catch (error) {

  console.error(error);
  alert("OTP verification failed");

} finally {

  setLoading(false);

}
```

};

return (

```
<div className="p-6 max-w-md mx-auto">

  <h1 className="text-2xl font-bold mb-6">Login</h1>

  {step === 1 && (

    <div>

      <input
        className="border p-2 w-full mb-4"
        placeholder="Corporate Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button
        className="bg-black text-white px-4 py-2 w-full"
        onClick={handleRequestOTP}
        disabled={loading}
      >
        {loading ? "Sending OTP..." : "Request OTP"}
      </button>

    </div>

  )}

  {step === 2 && (

    <div>

      <input
        className="border p-2 w-full mb-4"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />

      <button
        className="bg-black text-white px-4 py-2 w-full"
        onClick={handleVerifyOTP}
        disabled={loading}
      >
        {loading ? "Verifying..." : "Verify OTP"}
      </button>

      <button
        className="mt-3 text-sm underline"
        onClick={() => setStep(1)}
      >
        Change Email
      </button>

    </div>

  )}

</div>
```

);
}

export default LoginPage;
