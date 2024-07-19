import React, { useState, useRef } from 'react';

const DropDownInput = ({ handleFileChange }) => {
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleRemoveFile = () => {
    setFile(null);
  };

  const handleSelectFile = (e) => {
    e.preventDefault();
    fileInputRef.current.click();
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
    event.dataTransfer.dropEffect = 'copy';
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const droppedFile = event.dataTransfer.files[0];
    if (droppedFile && droppedFile.type === 'application/pdf') {
      setFile(droppedFile);
      handleFileChange({ target: { files: [droppedFile] } }); // Call the handleFileChange function from the parent component
    } else {
      alert('Please drop a PDF file.');
    }
  };

  return (
    <div className="bg-white input my-5 rounded w-full mx-auto">
      <div
        className="relative flex flex-col p-4 text-gray-400 border border-gray-300 rounded"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <input
          type="file"
          accept=".pdf"
          className="hidden"
          onChange={handleFileChange} // Call the handleFileChange function directly when a file is selected
          ref={fileInputRef}
        />
        <button
          className="absolute inset-0 z-50 w-full h-full opacity-0 cursor-pointer"
          onClick={handleSelectFile}
        >
          Select here
        </button>
        <div className="flex flex-col items-center justify-center py-10 text-center">
          <svg className="w-6 h-6 mr-1 text-current-50" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p className="m-0">Drag your PDF file here or click in this area.</p>
        </div>
      </div>
      {file && (
        <div className="flex justify-between items-center bg-gray-100 border border-gray-300 rounded px-4 py-2 mt-4">
          <span className="text-gray-900 truncate">{file.name}</span>
          <button
            className="text-red-500 hover:text-red-700"
            onClick={handleRemoveFile}
          >
            Remove
          </button>
        </div>
      )}
    </div>
  );
};

export default DropDownInput;
