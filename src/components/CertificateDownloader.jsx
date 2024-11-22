import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { generateCertificatePDF } from '@/utils/certificate-utils';
import { twMerge } from "tailwind-merge";

const CertificateDownloader = ({ children, onDownloadComplete, className, name, amount, date, ...props }) => {
    const [isDownloading, setIsDownloading] = useState(false);
    const [error, setError] = useState(null);

    const handleDownload = async () => {
        setIsDownloading(true);
        setError(null);
        try {
            await generateCertificatePDF({name, amount, date});
            if (onDownloadComplete) {
                onDownloadComplete();
            }
        } catch (err) {
            console.error('Failed to download certificate:', err);
            setError(err.message || 'Failed to download certificate. Please try again.');
        } finally {
            setIsDownloading(false);
        }
    };

    return (
        <>
            <Button 
                className={twMerge("w-full bg-[#006EFF] hover:bg-[#006EFFDF] rounded-full mt-[2rem]", className)} 
                {...props} 
                onClick={handleDownload}
                disabled={isDownloading}
            >
                {isDownloading ? 'Downloading...' : children}
            </Button>
            {error && <p className="text-red-500 mt-2 text-center">{error}</p>}
        </>
    );
};

export default CertificateDownloader;