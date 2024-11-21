import {motion} from 'framer-motion'
const PdfViewer = ({pdfFile}) => {
  return (
    <div className='w-full'>
      <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1 }} layoutId="modal" src={pdfFile} />
      {/* <img src={CertGraphicOne} alt="" /> */}
        {/* <iframe src={pdfFile} className='mx-auto'></iframe> */}
    </div>
  )
}

export default PdfViewer