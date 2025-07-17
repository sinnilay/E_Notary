import { useState } from "react";
import Loginlayout from "../../Layouts/loginLayout";
import { useNavigate } from "react-router-dom";


function UserInfoCallection() {

 const [showPronouns, setShowPronouns] = useState(false);
 
//   const [signer, setSigner] = useState("");
  const [impdata,setimpdata] = useState({
    routeingcheck:"",
    signer:""
  })
  const navigate = useNavigate()

  function route(){
        if(!impdata.routeingcheck){
            alert("please select any one options given.")
            return
        }
        if(impdata.routeingcheck==="yes"){
           navigate("/document/addsigner")
           return 
        }
        if(impdata.routeingcheck==="no"){
            navigate("/")
        }

  }

  return (
    <Loginlayout>
    <div className="h-[95vh] flex flex-col justify-between bg-white p-4">
      {/* Form Section */}
      <form onSubmit={route}>
      <div className="max-w-3xl w-full mx-auto bg-white p-6 rounded-lg ">
        <h2 className="text-2xl font-semibold mb-4">Enter your full name</h2>
        <p className="text-sm text-gray-600 mb-6">Enter your name as it appears on your ID</p>

        {/* Name Fields */}
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">First name *</label>
            <input required type="text" className="w-full border border-gray-300 rounded px-3 py-2" />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">Middle name</label>
            <input  type="text" className="w-full border border-gray-300 rounded px-3 py-2" />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">Last name *</label>
            <input required type="text" className="w-full border border-gray-300 rounded px-3 py-2" />
          </div>
        </div>

        {/* Pronouns Toggle */}
        <button
          type="button"
          onClick={() => setShowPronouns(!showPronouns)}
          className="text-blue-600 text-sm underline mb-4"
        >
          + Add pronouns (optional)
        </button>
        {showPronouns && (
          <div className="mb-6">
            <input
              type="text"
              placeholder="e.g. He/Him, She/Her"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
        )}

        {/* Additional Signers */}
        <div className="mb-6">
          <p className="text-sm font-medium mb-2">
            Does anyone else need to sign this document? <span className="text-red-500">*</span>
          </p>
          <div className="flex gap-4">
            <button
              type="button"
              className={`px-6 py-2 border rounded-full ${
               impdata.signer === "yes"
                  ? "bg-black text-white"
                  : "border-gray-300 text-gray-700"
              }`}
              onClick={() => setimpdata({signer:"yes",routeingcheck:"yes" })} 
            >
              Yes
            </button>
            <button
              type="button"
              className={`px-6 py-2 border rounded-full ${
                impdata.signer === "no"
                  ? "bg-black text-white"
                  : "border-gray-300 text-gray-700"
              }`}
              onClick={() => setimpdata({signer:"no",routeingcheck:"no" })}
            >
              No, it's just me
            </button>
          </div>
        </div>
      </div>

      {/* Sticky Continue Button */}
      <div className="w-full max-w-3xl mx-auto py-4 flex justify-end ">
        <button  type="submit" className=" absolute bottom-1 w-full sm:w-[40%] bg-blue-600 text-white py-3 rounded-md text-lg hover:bg-blue-700 cursor-pointer">
          Continue
        </button>
      </div></form>
    </div>
    </Loginlayout>
  )
}

export default UserInfoCallection