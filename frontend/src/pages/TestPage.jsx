import { useState } from "react";

const FileUploader = () => {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [uploadedUrl, setUploadedUrl] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreviewUrl(URL.createObjectURL(selectedFile)); // Local preview
    }
  };

  console.log(file);

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <input type="file" onChange={handleFileChange} className="border p-2" />
      {previewUrl && <img src={previewUrl} alt="Preview" className="w-32 h-32 object-cover" />}
      <button className="bg-blue-500 text-white px-4 py-2">
        Upload to Cloudinary
      </button>
      {uploadedUrl && (
        <div>
          <p>Uploaded File:</p>
          <a href={uploadedUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
            Open File
          </a>
        </div>
      )}
    </div>
  );
};

export default FileUploader;
