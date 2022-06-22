import http from "./http-common";

const upload = (file) => {
    let formData = new FormData();

    formData.append("file", file);

    return http.post("/images/upload", formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
};

const getFiles = () => {
    return http.get("/images/files");
};

const imageService = {
    getFiles,
    upload,
};

export default imageService;