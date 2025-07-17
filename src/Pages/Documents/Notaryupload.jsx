import Loginlayout from "../../Layouts/loginLayout"
import hiw from "../../assets/hiw.png"
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';


function Notaryupload() {


    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    const [file, setFile] = useState(null);
    const [previewURL, setPreviewURL] = useState(null);
    const [showPreview, setShowPreview] = useState(false);

    const navigate = useNavigate();

    const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);
    const url = URL.createObjectURL(uploadedFile);
    setPreviewURL(url);
  };

      const handlePreview = () => {
    if (file) {
      setShowPreview(true);
    }
  };
  const handleOkClick = () => {
    navigate('/user/datacallect'); // route to another page
  };

  function cancelpreview(){
   
    setShowPreview(false)
    
  }
  const googleViewerURL = `https://docs.google.com/gview?url=${encodeURIComponent(previewURL)}&embedded=true`;

  return (
    <Loginlayout>


<div className="md:flex-row md:h-[65vh] md:justify-center md:flex overflow-hidden">
    <div className="flex flex-col md:w-[75%] md:flex-row md:gap-10 md:p-10">
        <div className=" py-4  px-3 md:py-3 md:px-20  md:w-[50%]">
        <h1 className="md:px-5 font-bold md:py-2 text-xl mt-5 ">Upload documents for eSign</h1>
        
        <h1 className="md:px-5  md:py-3 text-md "> Adopt an electronic signature and apply it to your <br /> documents . Prices starts at $4 </h1>
        <br />
        <h1 className="px-5 font-semibold text-xl ">
            What you'll need:
        </h1>
    <br />
        <p className="ml-10 font-bold">1. Your document - PDF or a scnned file</p>
        <br />
        <p className="ml-10 font-bold">2. Your email - For confirmation and update</p>
        <br />
        <br />
       <div className="hidden md:block">
           <h1 className=" hidden md:block px-5 font-bold text-xl ">
            Only have a papper copy?

        </h1>
        <div className="flex gap-5 ">
          <br />
          

          <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg" className="mt-3"  alt="" width={80} />
          <h1 className="p-4 font-semibold">Scan this to explore the site and enjoy <br /> our service</h1>
        </div>
        </div>
      </div>
      <div className="hidden md:block py-10 px-10 w-[40%] shadow-[0_0_2px_blue] ">
        <div className="border-dashed border-2 border-black p-5 bg-slate-100">
            <p  className="p-3 font-bold text-center text-xl">Drag and drop your documnet here</p>
            <p className="p-3 font-semibold text-center">Upload a full documrnt (not just a signature page) , upload the pdf format</p>
           
            <div className="flex justify-center">
            <label htmlFor="document_upload" className="bg-blue-600 text-white p-2 cursor-pointer hover:bg-blue-800 rounded-md" >Upload a document</label> 
            <input 
            type="file"
             name="document_upload" 
             id="document_upload"
             className="hidden"
             onChange={handleFileChange} />
            </div>
             {file && (
                <div className="mt-4 flex flex-col gap-2 justify-center items-center">
                <p className="text-red-500 font-bold text-center">File: {file.name}</p>
               <button
                onClick={handlePreview}
                className="bg-green-500 text-white px-2 py-1 rounded w-1/4"
            >
                Preview File
            </button>
           </div>
             )}

              {showPreview && (
        <div className="fixed inset-0 bg-black/80 bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-3xl w-full max-h-[100vh] overflow-y-auto">
            <h2 className="text-xl font-bold mb-4">File Preview : {file.name} </h2>

            {file.type === 'application/pdf' ? (
              <iframe
                src={previewURL}
                title="PDF Preview"
                width="100%"
                height="700px"
                className="mb-4"
              />
            ) : (
              <p>DOCX preview not supported inline. Please open manually.</p>
            )}

            <div className="flex justify-end gap-4">
              <button
                onClick={handleOkClick}
                className="bg-green-600 cursor-pointer text-white px-4 py-2 rounded font-bold"
              >
                Continue
              </button>
              <button
                onClick={cancelpreview}
                className="bg-red-600 cursor-pointer text-white px-4 py-2 rounded font-bold"
              >
                GO back
              </button>
            </div>
          </div>
        </div>
             )}

           

        </div>
        <br />
        
     

         <p className="ml-1 text-sm text-gray-500">By adding a document and clicking 'Continue to documnet , you are aggering to thespan <br /> <span className="text-blue-600"> General Terms</span> For information on our privacy and data use practices please see <span className="text-blue-600">our policy</span> </p>

      </div>
    <br />
    </div>
   
</div>
    <div>
    <p className="ml-1  text-gray-500 md:hidden">By adding a document and clicking 'Continue to documnet , you are aggering to thespan <br /> <span className="text-blue-600"> General Terms</span> For information on our privacy and data use practices please see <span className="text-blue-600">our policy</span> </p>

    <br />
    <br />
    <br />
    <p className="flex justify-center font-bold md:text-3xl ">Trusted by 7000+ buisnesse,including..</p>
    <br />
    <div className="md:flex md:justify-center">
    <img className="md:w-[50%] " src="https://graphicsprings.com/wp-content/uploads/2023/08/image-102-1.jpg" alt="" width={390} /></div>
    <br />
    <img className="md:hidden" src={hiw} alt=""  />
     <div className="py-2 px-3 sticky  bottom-1 items-center   flex justify-center flex-col sm:hidden ">
           {file && (
                <div className="mt-4">
                <p>File: {file.name}</p>
               <button
                onClick={handlePreview}
                className="bg-blue-500 text-white px-4 py-2 rounded"
            >
                Preview File
            </button>
           </div>
             )}

              {showPreview && (
        <div className="fixed inset-0 bg-white/80 bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-3xl w-full max-h-[100vh] overflow-y-auto">
            <h2 className="text-xl font-bold mb-4">File Preview : {file.name} </h2>

           <div className="h-[70vh] border rounded">
                 <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
                <Viewer
                    fileUrl={previewURL}
                    plugins={[defaultLayoutPluginInstance]}
                />
            </Worker>
            </div>

            <div className="flex justify-end gap-4">
              <button
                onClick={handleOkClick}
                className="bg-green-600 cursor-pointer text-white px-4 py-2 rounded font-bold"
              >
                OK
              </button>
              <button
                onClick={cancelpreview}
                className="bg-red-600 cursor-pointer text-white px-4 py-2 rounded font-bold"
              >
                GO back
              </button>
            </div>
          </div>
        </div>
             )}
            <label htmlFor="document_upload" onClick={handleFileChange} className="  bg-blue-500  px-30 py-3 font-bold text-white rounded-lg text-xl ">
                      Add a document
            </label>

        </div>
    </div>
    </Loginlayout>
  )
}

export default Notaryupload