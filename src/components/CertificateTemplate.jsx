import React from 'react';
import CertPDF from '../assets/cert-graphic-1.svg';
import PropTypes from 'prop-types';

const CertificateTemplate = ({ name, amount, date }) => {
  return (
    <div className="relative w-[800px] h-[600px]">
      <img src={CertPDF} alt="Certificate Template" className="w-full h-full" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <p className="text-2xl font-bold mb-4">{name}</p>
        <p className="text-xl mb-2">${amount.toFixed(2)}</p>
        <p className="text-lg">{date}</p>
      </div>
    </div>
  );
};

CertificateTemplate.propTypes = {
    name: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
};

export default CertificateTemplate;