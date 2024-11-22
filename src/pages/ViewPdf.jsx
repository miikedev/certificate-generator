import BackButton from '@/components/BackButton';  
import PdfViewer from '@/components/PdfViewer';  
import OverlayText from '@/components/OverlayText';  
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
                        <PdfViewer pdfFile={CertPDF} />  
                        <OverlayText name={location.state.name} amount={location.state.amount} />  
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