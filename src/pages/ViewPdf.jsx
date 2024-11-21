import BackButton from '@/components/BackButton'
import PdfViewer from '@/components/PdfViewer'
import { Button } from '@/components/ui/button'

import CertPDF from '../assets/cert.pdf'
import { useLocation } from 'react-router-dom'

const ViewPdf = () => {
  const location = useLocation();
  console.log(location);
  return (
    <>
        <BackButton url="/certificate" />
        <div className='h-full flex flex-col justify-center'>
            <div className='h-2/3'>
            <p className='text-yellow-500 text-xs z-10 relative top-[8.4rem] left-[5.5rem] font-semibold w-[10rem] text-center'>{location.state.amount}သိန်းကျပ််</p>
            <PdfViewer pdfFile={CertPDF} />
            <p className='text-yellow-500 text-xs z-10 relative bottom-[5rem] left-[5.5rem] font-semibold w-[10rem] text-center'>{location.state.name}</p>
            <div className="text-center mt-[5rem]">
                <p>Thank you <strong>{location.state.name}!</strong></p>
            </div>  
            </div>
        </div>
    </>
  )
}

export default ViewPdf