import React from 'react'
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';

import CertGraphicOne from '../assets/cert-graphic-1.svg'
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});
const PdfViewer = ({pdfFile}) => {
  return (
    <div className='w-full'>
      <img src={pdfFile} />
      <Document>
    <Page size="A4">
      {/* <View> */}
        <Image src={pdfFile} />
      {/* </View> */}
    </Page>
  </Document>
      {/* <img src={CertGraphicOne} alt="" /> */}
        {/* <iframe src={pdfFile} className='mx-auto'></iframe> */}
    </div>
  )
}

export default PdfViewer