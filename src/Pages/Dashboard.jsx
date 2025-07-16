import Loginlayout from "../Layouts/loginLayout"
import image from "../assets/image.png"


function Dashboard() {
  return (
   <Loginlayout>
    <section className="sm:hidden">
    
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
         
            <button className="  bg-blue-500 p-3 font-bold text-white rounded-lg text-xl w-full">
            Start a new transaction
            </button>
        </div>
       
    </section>
    </Loginlayout>
  )
}

export default Dashboard