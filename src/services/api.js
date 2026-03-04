// ================================
// API CONFIG
// ================================

const ENV_BASE = import.meta.env.VITE_API_BASE_URL;

// Fallback safety (prevents undefined issue during dev)
const API_BASE = ENV_BASE && ENV_BASE.length > 0
  ? ENV_BASE
  : "http://localhost:8000";

console.log("ENV_BASE:", ENV_BASE);
console.log("FINAL API_BASE:", API_BASE);

// ================================
// AUTH APIs
// ================================

export async function requestOTP(email) {
  const res = await fetch(`${API_BASE}/auth/request-otp`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Request OTP failed: ${err}`);
  }

  return res.json();
}

export async function verifyOTP(email, otp) {
  const res = await fetch(`${API_BASE}/auth/verify-otp`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, otp }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Verify OTP failed: ${err}`);
  }

  return res.json();
}

// ================================
// AUTH HEADER HELPER
// ================================

export function getAuthHeaders() {
  const token = localStorage.getItem("token");

  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
}

// ================================
// UPLOAD INIT (Protected Example)
// ================================

export async function initUpload(filename, contentType, fileSize) {
  const res = await fetch(`${API_BASE}/api/uploads/init`, {
    method: "POST",
    headers: getAuthHeaders(),
    body: JSON.stringify({
      filename,
      content_type: contentType,
      file_size: fileSize,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Init upload failed: ${err}`);
  }

  return res.json();
}