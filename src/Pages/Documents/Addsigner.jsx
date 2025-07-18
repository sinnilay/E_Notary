import React, { useState } from "react";
import Loginlayout from "../../Layouts/loginLayout";
import { useNavigate } from "react-router-dom";

export default function Addsigner() {
  const navigate = useNavigate();
  const [signers, setSigners] = useState([
    { email: "", joiningFromDevice: "" },
  ]);

  const handleAddSigner = () => {
    setSigners([...signers, { email: "", joiningFromDevice: "" }]);
  };

  const handleDeleteSigner = (index) => {
    setSigners(signers.filter((_, i) => i !== index));
  };

  const handleChange = (index, field, value) => {
    const updated = [...signers];
    updated[index][field] = value;
    setSigners(updated);
  };

  return (
    <Loginlayout>
      <div className="min-h-screen flex flex-col justify-between bg-gray-50 p-4">
        <div className="max-w-3xl w-full mx-auto bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6">Additional signers</h2>

          {signers.map((signer, index) => (
            <div
              key={index}
              className="border-b border-gray-200 mb-6 pb-6 relative"
            >
              {index !== 0 && (
                <button
                  onClick={() => handleDeleteSigner(index)}
                  className="absolute top-0 right-0 text-red-600 text-sm hover:underline"
                >
                  ✕ Delete
                </button>
              )}

              {/* Email input */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Enter their email <span className="text-red-500">*</span>
                </label>
                <p className="text-xs text-gray-500 mb-1">
                  We'll use their email to create their account and add them to
                  the transaction.
                </p>
                <input
                  type="email"
                  value={signer.email}
                  onChange={(e) =>
                    handleChange(index, "email", e.target.value)
                  }
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>

              {/* Radio buttons */}
              <div className="mb-4">
                <p className="text-sm font-medium">
                  Will this signer be joining the meeting from this device with
                  you? <span className="text-red-500">*</span>
                </p>
                <p className="text-xs text-gray-500 mb-2">
                  They can join the transaction from this device or their own.
                </p>
                <div className="flex gap-4">
                  <button
                    type="button"
                    className={`px-6 py-2 border rounded-full ${
                      signer.joiningFromDevice === "yes"
                        ? "bg-black text-white"
                        : "border-gray-300 text-gray-700"
                    }`}
                    onClick={() =>
                      handleChange(index, "joiningFromDevice", "yes")
                    }
                  >
                    Yes
                  </button>
                  <button
                    type="button"
                    className={`px-6 py-2 border rounded-full ${
                      signer.joiningFromDevice === "no"
                        ? "bg-black text-white"
                        : "border-gray-300 text-gray-700"
                    }`}
                    onClick={() =>
                      handleChange(index, "joiningFromDevice", "no")
                    }
                  >
                    No
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Add signer link */}
          <button
            onClick={handleAddSigner}
            className="text-blue-600 text-sm flex items-center gap-1 hover:underline"
          >
            <span>📌</span> Add another signer (optional)
          </button>
        </div>

        {/* Bottom Buttons */}
        <div className="w-full max-w-3xl mx-auto flex justify-between py-4">
          <button
            onClick={() => navigate("/user/datacallect")}
            className="border border-blue-600 text-blue-600 px-6 py-2 rounded-md hover:bg-blue-50"
          >
            ← Back
          </button>
          <button onClick={()=>navigate("/user/details",{state:[...signers]})} className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg hover:bg-blue-700">
            Continue
          </button>
        </div>
      </div>
    </Loginlayout>
  );
}
