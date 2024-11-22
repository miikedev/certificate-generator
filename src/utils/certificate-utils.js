import { jsPDF } from 'jspdf';
// import 'svg2pdf.js';
import PropTypes from 'prop-types';
import CertSVG from '../assets/cert-graphic-1.svg';

export const generateCertificatePDF = async ({ name, amount, date }) => {
  try {
    // Create a new jsPDF instance
    const pdf = new jsPDF('l', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    // Add the SVG to the PDF
    pdf.addSvgAsImage(CertSVG,
       0,
       0,
      pdfWidth,
      pdfHeight
    );

    // Add the text overlay
    pdf.setFont("helvetica");
    pdf.setFontSize(24);
    pdf.setTextColor(51, 51, 51); // #333333
    pdf.text(name, pdfWidth / 2, pdfHeight / 2 - 10, { align: 'center' });

    pdf.setFontSize(20);
    pdf.setTextColor(85, 85, 85); // #555555
    pdf.text(`$${Number(amount).toFixed(2)}`, pdfWidth / 2, pdfHeight / 2 + 10, { align: 'center' });

    pdf.setFontSize(18);
    pdf.setTextColor(119, 119, 119); // #777777
    pdf.text(date, pdfWidth / 2, pdfHeight / 2 + 25, { align: 'center' });

    // Save the PDF
    pdf.save('donation-certificate.pdf');
  } catch (error) {
    console.error('Error generating PDF:', error);
    throw new Error('Failed to generate PDF. Please try again.');
  }
};

generateCertificatePDF.propTypes = {
  name: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
};