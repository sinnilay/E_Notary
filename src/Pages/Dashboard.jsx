import Loginlayout from "../Layouts/loginLayout"
import image from "../assets/image.png"
import img2 from "../assets/esign.png"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


function Dashboard() {
    const navigate = useNavigate()
    const [state,setstate] = useState(false)
    function show(){
        setstate(true)
    }
    function hide(){
        setstate(false)
    }
  return (
   <Loginlayout>
    <section className="md:hidden  ">
    
        <div className="h-[12vh] bg-black ">
            <br />
            <h1 className="text-amber-50 px-5 text-2xl font-bold"> Welcome back, Nilay</h1>
            <h1 className="text-amber-50 px-5 text-xl font-semibold mt-1">Notrasize and eSign a document below </h1>
        </div>
        <br />
      


        <div className="flex justify-center items-center  ">
                <img  src={image} alt="" width={350} />
        </div>
        <div>
            <h1 className="text-center text-2xl font-bold">eSign or notarize now </h1>
            <p className="text-center px-8 font-semibold mt-3 text-zinc-500">Notarize or sign your document online in minutes. Prices start at $25 for notarization and $4 for eSign.</p>
        </div>
        <div className="py-2 px-3 absolute bottom-1 items-center   w-[100%]">
            
            <button onClick={show} className="  bg-blue-500 p-3 font-bold text-white rounded-lg text-xl w-full">
            Start a new transaction
            </button>
        </div>

        <div className={`bg-white absolute bottom-0 h-[45%] w-full p-7 ${state?"block":"hidden"}`}   >
                <div className="flex">
                    <h1 className="font-bold text-2xl ">Upload a document to get personaly notarized or eSigned now</h1>
                    <h1 onClick={hide} className="font-bold text-sm ">❌</h1>
                </div>
                <div className="py-5 px-2">
                    <button onClick={()=>navigate("/notary/upload")} className="w-full border-2 border-blue-600 p-4 font-bold text-xl text-blue-700">
                        Notarize
                    </button>
                </div>
                <div className=" px-2">
                    <button className="w-full border-2 border-blue-600 p-4 font-bold text-xl text-blue-700">
                        Sign
                    </button>
                </div>
        </div>
       
    </section>
    <section className="hidden md:block">
            <div className="h-[12vh] bg-black">
            <br />
            <h1 className="  ml-[30%] text-amber-50 px-5 text-2xl font-bold"> Welcome back, Nilay</h1>
            <h1 className=" ml-[30%] text-amber-50 px-5 text-md font-semibold mt-1">Notrasize and eSign a document below </h1>
           </div>
     
     <div className="bg-white  ml-[8%] absolute h-[60vh] w-[20%] top-27 ">
            <div className=" shadow-[0_0_8px_black] p-3" >
                <div className="flex px-7 py-4">
                <div className="w-[83%] mt-2">
                    <h1 className="font-bold text-xl">My Profile account</h1>
                    <h1 className="font-md font-semibold mt-2 ">Nilay singh</h1>
                </div>
                <div className=" bg-lime-300 w-18 h-18 rounded-full overflow-hidden  text-center flex flex-col justify-center mt-1  hover:cursor-pointer">
                        <p className=" text-zinc-600  font-bold text-2xl">NS</p>
                </div> </div>

                 <p className="px-6 font-semibold text-sm">
                One account for everything you do with Proof. Sign, verify, or connect with the <span className="text-blue-600">Notarlze</span> Network
                 </p>

                 <hr className="mt-7"/>

                <div className="mt-4 flex justify-center p-2">
                    <button className="px-5 text-blue-600 font-bold border-2 w-[90%] py-2  border-blue-600 rounded-md">
                        Manage your Account
                    </button>
                </div>
            </div>
            <br />
             <div className=" shadow-[0_0_10px_black] p-3" >
                      <h1 className="font-md font-bold mt-2 px-5">Refer a friend! Give $5, get $5 </h1>
                       <h1 className="font-md font-semibold mt-1 px-5">Refer a friend and get a $5 off credit when they notarize!</h1>
                       <h1 className="font-md font-semibold mt-3 px-5 text-blue-600">Invite friends now</h1>
                      
            </div>
            <br />
            <div className=" shadow-[0_0_10px_black] p-3" >
                      <h1 className="font-md font-bold mt-2 px-5">Get proof for Buisness , free </h1>
                       <h1 className="font-md font-semibold mt-1 px-5">Need someone else to sign, notarize, or verify? Get <span className="text-blue-600">Proof for Business</span>  for free-just pay per transaction.
</h1>
                       <h1 className="font-md font-semibold mt-3 px-5 text-blue-600"> Get buisness Pro now</h1>
                      
            </div>
           
     </div>

    <div className="h-[55vh] flex justify-end gap-7 ">
        <div className="flex gap-10  w-[68%]">
            <div className="w-[40%] py-6  mt-4 shadow-xl/30" >  
                    <div className="flex justify-center items-center py-14">
                    <img src={image} width={220} />
                    </div>
                    <h1 className="flex justify-center text-2xl font-bold">Notarize now</h1>
                    <p className="flex justify-center px-10 font-semibold ">
                        Notarize your document in minutes
                    </p>
                    <p  className="flex justify-center px-10 font-semibold "> Prices start at $25 </p>
                    <br />
                    <div className="flex justify-center">
                        <button onClick={()=>navigate("/notary/upload")} className="cursor-pointer hover:bg-blue-500 w-[90%] rounded-md py-4 px-3 bg-blue-800 text-white">
                                Notarize now 
                        </button>
                    </div>
            </div>
              <div className="w-[40%] py-6 mt-5  shadow-xl/30 border-black" >  
                    <div className="flex justify-center items-center py-14">
                    <img src={img2} width={200} />
                    </div>
                    <h1 className="flex justify-center text-2xl font-bold">eSign now</h1>
                    <br />
                    <p className="flex justify-center px-10 font-semibold ">
                        Sign document for $1
                    </p>
                   <br />
                    <div className="flex justify-center">
                        <button className="w-[90%] rounded-md py-4 px-3 bg-blue-800 text-white">
                                eSign now 
                        </button>
                    </div>
            </div>
        </div>
    </div>
    </section>
    </Loginlayout>
  )
}

export default Dashboard