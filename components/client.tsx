"use client"

import React from 'react';

const DownloadButton: React.FC = () => {
    const onButtonClick = () => {
      // Construct the path where the file is located
      const pdfPath = 'public/downloads/SERVICES_DESK.pdf'; // No leading slash if in public folder
      const link = document.createElement('a');
      link.href = pdfPath;
      link.setAttribute('download', 'SERVICES_DESK.pdf'); // This suggests the filename to save as
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
  return (
    <button onClick={onButtonClick} className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
      Download Services Desk PDF
    </button>


  );
};

export default DownloadButton;
