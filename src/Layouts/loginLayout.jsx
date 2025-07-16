

function Loginlayout({ children }) {

   

    return (
        <div>
            <main className="h-[8vh] bg-black flex ">
                <div className="w-[80%]">
                    <h1 className="text-white p-5 text-xl font-bold ">E-Notary</h1>
                </div>
                <div>
                     <h1 className="text-white ">NILAY</h1>
                </div>
                
            </main>

            
          
             { children }
         </div>
      
          
      
          
    );
}

export default Loginlayout;
