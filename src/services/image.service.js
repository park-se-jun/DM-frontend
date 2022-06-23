import http from "./http-common";

const upload = (file) => {
    let formData = new FormData();

    formData.append("file", file);

    return http.post("/authority/all/images/upload", formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
};

const getFiles = () => {
    return http.get("/authority/all/images/files");
};

const ImageService = {
    getFiles,
    upload,
};

export default ImageService;