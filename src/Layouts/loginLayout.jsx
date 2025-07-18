import { useState } from "react";


function Loginlayout({ children }) {
    const [s2,sets2] = useState(false)
     function show2(){
        if(!s2) sets2(true)
        else  sets2(false)
        
    }
     
   

    return (
        <div>
            <main className="h-[8vh] bg-black flex ">
                <div className="w-[70%] sm:w-[95%]">
                    <h1 className="text-white p-5 text-xl font-bold sm:text-2xl">E-Notary</h1>
                </div>
                <div className="p-2 flex gap-4">
                    <div className=" items-center">
                     <img className="m-auto mt-1 hover:cursor-pointer"  src="https://png.pngtree.com/png-vector/20220812/ourlarge/pngtree-status-flat-white-color-rounded-vector-icon-marker-problem-question-mark-vector-png-image_19484164.jpg" width={40}/> </div>
                     <div onClick={show2} className=" bg-lime-300 w-12 h-12 rounded-full overflow-hidden  text-center flex flex-col justify-center mt-1 hover:bg-green-400 hover:cursor-pointer">
                        <p className=" text-zinc-600  font-bold text-md">NS</p>
                     </div>
                </div>
                
            </main>
            <div className={`hidden  md:${s2?"block":"hidden"} bg-white absolute top-[6%] md:w-[20%]  right-[2.5%] shadow-[0_0_8px_black] p-2`} >
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
            
          
             { children }
         </div>
      
          
      
          
    );
}

export default Loginlayout;
