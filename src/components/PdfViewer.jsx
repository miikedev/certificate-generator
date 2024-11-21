import React from 'react'
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import {motion} from 'framer-motion'
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
      <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1 }} layoutId="modal" src={pdfFile} />
      {/* <img src={CertGraphicOne} alt="" /> */}
        {/* <iframe src={pdfFile} className='mx-auto'></iframe> */}
    </div>
  )
}

export default PdfViewer