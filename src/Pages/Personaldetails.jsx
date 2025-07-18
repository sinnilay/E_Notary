import React, { useEffect, useState } from "react";
import Loginlayout from "../Layouts/loginLayout";
import { useLocation, useNavigate, useNavigation } from "react-router-dom";

export default function Personaldetails() {
    const navigate= useNavigate()
    const {state} = useLocation()
  const [formData, setFormData] = useState({
    email: "",
    address: "",
    pincode: "",
    aadhar: ""
  });
  useEffect(() => {
    console.log(state);
    
   
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    navigate("/slotselection")
    // navigation or API call logic here
  };

  return (
    <Loginlayout>
    <div className="min-h-screen flex justify-center bg-gray-50 px-4">
      <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-6 text-center">Personal Details</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="email" className="block font-medium text-gray-700 mb-1">
              Your Email ID <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label htmlFor="address" className="block   font-medium text-gray-700 mb-1">
              Address <span className="text-red-500">*</span>
            </label>
            <textarea
              name="address"
              id="address"
              required
              value={formData.address}
              onChange={handleChange}
              className="w-full border h-20 border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none"
            //   rows={6}
              
            ></textarea>
          </div>

          <div>
            <label htmlFor="pincode" className="block font-medium text-gray-700 mb-1">
              Pincode <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="pincode"
              id="pincode"
              required
              maxLength={6}
              value={formData.pincode}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label htmlFor="aadhar" className="block font-medium text-gray-700 mb-1">
              Aadhaar Card Number <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="aadhar"
              id="aadhar"
              required
              maxLength={12}
              value={formData.aadhar}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

            <br />
            {state && (
                <div>
                    <h1 className="text-2xl font-semibold text-black text-center">Sighners details</h1>
                    
                    <br />

                   {state.map((data,index)=>(
                    <div key={index}>
                        <div>
                            <label htmlFor="email" className="block font-medium text-gray-700 mb-1">
                            Signer {index+1} Email ID <span className="text-red-500">*</span>
                            </label>
                            <input
                            readOnly
                            type="email"
                            name="email"
                            id="email"
                            required
                            value={data.email}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md p-2  outline-none"
                            />

                        </div>
                            <br />

                        <div>
                                <label htmlFor="email" className="block font-medium text-gray-700 mb-1">
                                Signer {index+1} name<span className="text-red-500">*</span>
                                </label>
                                <input
                                type="text"
                                name="name"
                                id="name"
                                required
                                // value={formData.email}
                                // onChange={handleChange}
                                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none"
                                />
                        </div>
                        <br />
                        <div>
                                <label htmlFor="aadhar" className="block font-medium text-gray-700 mb-1">
                                 Signer {index+1} Aadhaar Card Number <span className="text-red-500">*</span>
                                </label>
                                <input
                                type="text"
                                name="aadhar"
                                id="aadhar"
                                required
                                maxLength={12}
                              
                               
                                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none"
                                />
                         </div>
                         <br />

                         
                    </div>
                   ))}
                </div>
            )}
          <button
            
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition"
          >
            Continue
          </button>

        </form>
      </div>
    </div>
    </Loginlayout>
  );
}
