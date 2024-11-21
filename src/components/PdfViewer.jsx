import React from 'react'

const PdfViewer = ({pdfFile}) => {
  return (
    <div className='w-full'>
        <iframe src={pdfFile} className='mx-auto'></iframe>
    </div>
  )
}

export default PdfViewer