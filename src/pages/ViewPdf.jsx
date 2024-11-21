import PdfViewer from '@/components/PdfViewer'
import { Button } from '@/components/ui/button'
import CertPDF from '../assets/cert.pdf'
import BackButton from '@/components/BackButton'
const ViewPdf = () => {
  return (
    <>
        <BackButton url="/certificate" />
        <div className='h-full flex flex-col justify-center'>
            <div className='h-2/3'>
            <PdfViewer pdfFile={CertPDF} />
            <div className="text-center mt-[5rem]">
                <p>Thank you <strong>Htay Htay Kyi Tint!</strong></p>
            </div>  
            </div>
        </div>
    </>
  )
}

export default ViewPdf