import React, { useState } from "react";
import axios from "axios";
import Santa from "../assets/Santa.gif";
import InfoButton from "./InfoIcon";
const FileUpload = () => {
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState("");
    const [fileSize, setFileSize] = useState("");
    const [progress, setProgress] = useState(0);
    const [errorMessage, setErrorMessage] = useState("");
    const [buttonState, setButtonState] = useState("Generate");

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            setFile(() => selectedFile); // Ensure state update is recognized
            setFileName(() => selectedFile.name);
            setFileSize(() => (selectedFile.size / 1024).toFixed(1) + " KB");
            setProgress(0);
            setErrorMessage("");
            setButtonState("Generate"); // Reset button state when file changes
        }
    };


    const handleFileUpload = async () => {
        if (!file) {
            setErrorMessage("Please select a file first");
            return;
        }
        setButtonState("downloading...");
        let width = 0;
        const interval = setInterval(() => {
            if (width >= 100) {
                clearInterval(interval);
            } else {
                width += 5;
                setProgress(width);
            }
        }, 50);

        const formData = new FormData();
        formData.append("file", file);

        try {
            const response = await axios.post("https://secret-santa-backend-ltaw.onrender.com/upload", formData, {
                headers: { "Content-Type": "multipart/form-data" },
                responseType: "blob",
            });
            setButtonState("Generate Again");
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", "download.csv");
            document.body.appendChild(link);
            link.click();
            link.remove();
        } catch (err) {
            setErrorMessage("Error uploading file");
        }
    };

    const removeFile = () => {
        setFile(null);
        setFileName("");
        setFileSize("");
        setProgress(0);
        setErrorMessage("");
    };

    return (
        <div className="projbody">
            
            <div class="main">
                <div class="initial-snow">
                    <div class="snow">&#10052;</div>
                    <div class="snow">&#10052;</div>
                    <div class="snow">&#10052;</div>
                    <div class="snow">&#10052;</div>
                    <div class="snow">&#10052;</div>
                    <div class="snow">&#10052;</div>
                    <div class="snow">&#10052;</div>
                    <div class="snow">&#10052;</div>
                    <div class="snow">&#10052;</div>
                    <div class="snow">&#10052;</div>
                    <div class="snow">&#10052;</div>
                    <div class="snow">&#10052;</div>
                    <div class="snow">&#10052;</div>
                    <div class="snow">&#10052;</div>
                    <div class="snow">&#10052;</div>
                    <div class="snow">&#10052;</div>
                    <div class="snow">&#10052;</div>
                    <div class="snow">&#10052;</div>
                    <div class="snow">&#10052;</div>
                    <div class="snow">&#10052;</div>
                    <div class="snow">&#10052;</div>
                    <div class="snow">&#10052;</div>
                    <div class="snow">&#10052;</div>
                    <div class="snow">&#10052;</div>
                    <div class="snow">&#10052;</div>
                    <div class="snow">&#10052;</div>
                    <div class="snow">&#10052;</div>
                    <div class="snow">&#10052;</div>
                    <div class="snow">&#10052;</div>
                    <div class="snow">&#10052;</div>
                    <div class="snow">&#10052;</div>
                    <div class="snow">&#10052;</div>
                    <div class="snow">&#10052;</div>
                    <div class="snow">&#10052;</div>
                    <div class="snow">&#10052;</div>
                    <div class="snow">&#10052;</div>
                    <div class="snow">&#10052;</div>
                    <div class="snow">&#10052;</div>
                    <div class="snow">&#10052;</div>
                    <div class="snow">&#10052;</div>
                    <div class="snow">&#10052;</div>
                    <div class="snow">&#10052;</div>
                    <div class="snow">&#10052;</div>
                    <div class="snow">&#10052;</div>
                    <div class="snow">&#10052;</div>
                    <div class="snow">&#10052;</div>
                    <div class="snow">&#10052;</div>
                    <div class="snow">&#10052;</div>
                    <div class="snow">&#10052;</div>
                    <div class="snow">&#10052;</div>
                </div>
            </div>
            <div className="">
            <InfoButton/>
                <div className="container">
                    <div className="row  align-items-center justify-content-center">
                        <div className="row w-50 h-50 mt-5">
                            <img src={Santa} style={{height:"100%", width:"100%"}}/>
                        </div>
                        <div className="row g-2 content-main d-flex justify-content-center">
                            <div className="col-auto">
                                <input type="file" accept=".csv" className="default-file-input form-control" onChange={handleFileChange} />
                            </div>
                            <div className="col-auto">
                                <button type="button" className="upload-button btn btn-primary" onClick={handleFileUpload}>
                                    {buttonState}
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default FileUpload;
