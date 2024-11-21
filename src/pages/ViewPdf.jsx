import BackButton from '@/components/BackButton'
import PdfViewer from '@/components/PdfViewer'
import { Button } from '@/components/ui/button'
import OverlayText from '@/components/OverlayText'
import CertPDF from '../assets/cert-graphic-1.svg'
import { useLocation } from 'react-router-dom'

const ViewPdf = () => {
  const location = useLocation();
  console.log(location);
  return (
    <>
        <BackButton url="/certificate" state={location.state} />
        <div className='h-full flex flex-col justify-center'>
            <div className='h-2/3'>
            <PdfViewer pdfFile={CertPDF} />
            <OverlayText name={location.state.name} amount={location.state.amount} />
            <div className="text-center mt-[5rem]">
                <p>Thank you <strong>{location.state.name}!</strong></p>
            </div>  
            </div>
        </div>
    </>
  )
}

export default ViewPdf