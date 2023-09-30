"use client";

import { useState } from "react";
import { useAppDispatch } from "../../utility/type";
import { sendData } from "../../redux/actions";

const Admin = () => {
  const dispatch = useAppDispatch();
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files && e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleUpload = async () => {
    if (!file) return;
    const formData = new FormData();
    formData.append("csvFile", file);
    try {
      dispatch(sendData({ file: formData }));
    } catch (error) {
      console.error("Error Uploading CSV", error);
    }
  };

  return (
    <div className="bg-red-300">
      <input type="file" accept=".csv" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload CSV</button>
    </div>
  );
};

export default Admin;
