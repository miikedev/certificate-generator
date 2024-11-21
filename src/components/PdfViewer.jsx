import React from 'react'

import CertGraphicOne from '../assets/cert-graphic-1.svg'

const PdfViewer = ({pdfFile}) => {
  return (
    <div className='w-full'>
      <img src={CertGraphicOne} alt="" />
    </div>
  )
}

export default PdfViewer