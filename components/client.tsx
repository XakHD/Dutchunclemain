"use client"

import React from 'react';

const DownloadButton = () => {
  // This function will be called when the button is clicked
  const handleDownloadClick = () => {
    // Create a new link
    const link = document.createElement('a');
    // Set the download URL to the link to the file you want to download
    link.href = '/downloads/Services.pdf'; // Adjust the path to the file
    link.setAttribute('download', 'Services.pdf'); // Set the download attribute
    document.body.appendChild(link); // Append to the body
    link.click(); // Simulate click
    document.body.removeChild(link); // Remove the link from the body
  };

  return (
    <button onClick={handleDownloadClick} className="bg-[#030b42] text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
      Services Introduction Documentation, Click to View
    </button>

  );
};

export default DownloadButton;


