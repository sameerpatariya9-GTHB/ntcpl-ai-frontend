import React, { useState } from "react";

const BACKEND_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function CataloguePage() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [downloadUrl, setDownloadUrl] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const resetState = () => {
    setFile(null);
    setLoading(false);
    setStatusMessage("");
    setDownloadUrl(null);
    setIsSuccess(false);
  };

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    setFile(selected);
    setStatusMessage("");
    setDownloadUrl(null);
    setIsSuccess(false);
  };

  const pollStatus = (jobId) => {
    const interval = setInterval(async () => {
      try {
        const res = await fetch(
          `${BACKEND_BASE_URL}/api/uploads/status/${jobId}`
        );

        if (!res.ok) throw new Error("Status fetch failed");

        const data = await res.json();

        if (data.status === "completed") {
          clearInterval(interval);

          const resultRes = await fetch(
            `${BACKEND_BASE_URL}/api/uploads/result/${jobId}`
          );

          if (!resultRes.ok) throw new Error("Result fetch failed");

          const resultData = await resultRes.json();

          setDownloadUrl(resultData.result_url);
          setStatusMessage("Processing complete.");
          setIsSuccess(true);
          setLoading(false);
        }

        if (data.status === "failed") {
          clearInterval(interval);
          setStatusMessage("Processing failed.");
          setLoading(false);
          setIsSuccess(false);
        }
      } catch (err) {
        clearInterval(interval);
        setStatusMessage("Status check failed.");
        setLoading(false);
        setIsSuccess(false);
      }
    }, 3000);
  };

  const handleGenerate = async () => {
    if (!file) {
      setStatusMessage("Please select a ZIP file first.");
      return;
    }

    try {
      setLoading(true);
      setIsSuccess(false);
      setStatusMessage("Initializing upload...");

      const initResponse = await fetch(
        `${BACKEND_BASE_URL}/api/uploads/init`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: "user@example.com",
            filename: file.name,
            content_type: file.type || "application/zip",
            file_size: file.size,
          }),
        }
      );

      if (!initResponse.ok) throw new Error("Init failed");

      const { upload_url, job_id } = await initResponse.json();

      setStatusMessage("Uploading to storage...");

      const uploadRes = await fetch(upload_url, {
        method: "PUT",
        body: file,
      });

      if (!uploadRes.ok) throw new Error("Upload failed");

      setStatusMessage("Confirming upload...");

      const completeRes = await fetch(
        `${BACKEND_BASE_URL}/api/uploads/complete`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ job_id }),
        }
      );

      if (!completeRes.ok) throw new Error("Complete failed");

      setStatusMessage("Processing file...");
      pollStatus(job_id);
    } catch (error) {
      console.error(error);
      setStatusMessage("Error: " + error.message);
      setLoading(false);
      setIsSuccess(false);
    }
  };

  const handleDownload = () => {
    window.open(downloadUrl, "_blank");
    resetState();
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Catalogue Intelligence
        </h1>

        <div className="border-2 border-dashed border-blue-300 rounded-2xl p-10 text-center">
          <input
            type="file"
            accept=".zip"
            onChange={handleFileChange}
            disabled={loading}
            className="mb-4"
          />
          {file && (
            <p className="text-gray-700 font-medium">{file.name}</p>
          )}
        </div>

        <div className="mt-8 flex justify-between items-center">
          <span className="text-sm text-gray-500">
            Supported format: .zip (Max 1GB)
          </span>

          <button
            onClick={handleGenerate}
            disabled={loading || isSuccess}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold shadow-md hover:opacity-90 disabled:opacity-50"
          >
            {loading ? "Processing..." : "Generate Product Links"}
          </button>
        </div>

        {statusMessage && (
          <div
            className={`mt-6 text-center text-sm font-medium ${
              isSuccess ? "text-green-600" : "text-red-600"
            }`}
          >
            {statusMessage}
          </div>
        )}

        {downloadUrl && (
          <div className="mt-6 text-center">
            <button
              onClick={handleDownload}
              className="px-6 py-3 rounded-xl bg-green-600 text-white font-semibold shadow-md hover:opacity-90"
            >
              Download Results
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default CataloguePage;