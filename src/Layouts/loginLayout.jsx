

function Loginlayout({ children }) {

   

    return (
        <div>
            <main className="h-[8vh] bg-black flex ">
                <div className="w-[70%] sm:w-[95%]">
                    <h1 className="text-white p-5 text-xl font-bold sm:text-2xl">E-Notary</h1>
                </div>
                <div className="p-2 flex gap-4">
                    <div className=" items-center">
                     <img className="m-auto mt-1 hover:cursor-pointer"  src="https://png.pngtree.com/png-vector/20220812/ourlarge/pngtree-status-flat-white-color-rounded-vector-icon-marker-problem-question-mark-vector-png-image_19484164.jpg" width={40}/> </div>
                     <div className=" bg-lime-300 w-12 h-12 rounded-full overflow-hidden  text-center flex flex-col justify-center mt-1 hover:bg-green-400 hover:cursor-pointer">
                        <p className=" text-zinc-600  font-bold text-md">NS</p>
                     </div>
                </div>
                
            </main>

            
          
             { children }
         </div>
      
          
      
          
    );
}

export default Loginlayout;
