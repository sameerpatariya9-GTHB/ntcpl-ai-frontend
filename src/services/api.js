export async function requestOTP(email) {
  const res = await fetch("/api/auth/request-otp", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email })
  });

  if (!res.ok) throw new Error("Request OTP failed");

  return res.json();
}

export async function verifyOTP(email, otp) {
  const res = await fetch("/api/auth/verify-otp", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, otp })
  });

  if (!res.ok) throw new Error("Verify OTP failed");

  return res.json();
}