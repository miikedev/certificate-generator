import { Suspense, lazy } from 'react';
import BackButton from '@/components/BackButton';  
import PdfViewer from '@/components/PdfViewer';  
const OverlayText = lazy(() => import('@/components/OverlayText'))
import CertPDF from '../assets/cert-graphic-1.svg';  
import { useLocation, useNavigate } from 'react-router-dom';  
import CustomHelmet from '@/components/CustomHelmet';  
import { Button } from '@/components/ui/button';  
import html2canvas from 'html2canvas';  
import jsPDF from 'jspdf';  
const ViewPdf = () => {  
    const location = useLocation();  
    const navigate = useNavigate();  
    
    const handleDownload = () => {  
      const input = document.getElementById("pdf-component");  

      html2canvas(input, { scale: 2 }) // Use a high scale for better quality  
          .then((canvas) => {  
              const imgData = canvas.toDataURL("image/jpeg", 1.0); // Change to JPEG with maximum quality  
              const pdf = new jsPDF("p", "mm", "a4"); // Portrait orientation for A4 size  
  
              // Calculate dimensions for scaling to fit one page  
              const imgWidth = pdf.internal.pageSize.getWidth();  
              const imgHeight = (canvas.height * imgWidth) / canvas.width;  
  
              // If the image height is greater than the page height, scale it down  
              if (imgHeight > pdf.internal.pageSize.getHeight()) {  
                  const scaleFactor = pdf.internal.pageSize.getHeight() / imgHeight;  
                  const scaledWidth = imgWidth * scaleFactor;  
                  const scaledHeight = imgHeight * scaleFactor;  
                  pdf.addImage(imgData, "JPEG", 0, 0, scaledWidth, scaledHeight); // Updated to JPEG  
              } else {  
                  // If it fits, add it without scaling  
                  pdf.addImage(imgData, "JPEG", 0, 0, imgWidth, imgHeight); // Updated to JPEG  
              }  
  
              // Save the PDF file  
              pdf.save("donation-certificate.pdf");  
          });  
      
      navigate('/'); 
    }  

    return (  
        <>  
            <CustomHelmet    
                title="Your Donation Certificate"    
                description="View your donation certificate and see how your contribution is making a difference."    
                keywords="donation, certificate, thank you"  
            />  
            <BackButton url="/certificate" state={location.state} />  
            <div className='h-full flex flex-col justify-center'>  
                <div className='h-2/3'>  
                    <div id="pdf-component" style={{ padding: "10px", fontSize: "12px", lineHeight: "1.2", position: 'relative' }}>  
                        <Suspense fallback={<div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
  <svg
    className="text-gray-300 animate-spin"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
  >
    <path
      d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
      stroke="currentColor"
      strokeWidth={5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
      stroke="currentColor"
      strokeWidth={5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-gray-900"
    ></path>
  </svg>
</div>
}>
                        <PdfViewer pdfFile={CertPDF} />  
                        <OverlayText name={location.state.name} amount={location.state.amount} />  
                        </Suspense>
                    </div>  
                    <div className="text-center mt-[3.3rem]">  
                        <p>Thank you <strong>{location.state.name}!</strong></p>  
                        <Button className="w-full bg-[#006EFF] hover:bg-[#006EFFDF] rounded-full mt-[2rem]" onClick={handleDownload}>  
                            Download certificate  
                        </Button>  
                    </div>  
                </div>  
            </div>  
        </>  
    );  
}  

export default ViewPdf;