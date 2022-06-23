import React, { useState } from "react";
import tutorialService from "../../services/tutorial.service";
import imageService from "../../services/image.service";
import "../GlobalStyles.css";

const TutorialAdd = () => {
  const initialTutorialState = {
    id: null,
    title: "",
    description: "",
    img: ""
  };
  const [tutorial, setTutorial] = useState(initialTutorialState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    setTutorial({ ...tutorial, [name]: value });
  };

  const [image, setImage] = useState("");
  const [preview, setPreview] = useState("");

  const onChange = (e) => {
    e.preventDefault();
    const img = e.target.files[0];
    console.log(img);
    setImage(img);
    setPreview(URL.createObjectURL(img));
  };

  const saveTutorial = () => {
    var data = {
      id: tutorial.id,
      title: tutorial.title,
      description: tutorial.description,
      img: image.name
    };

    tutorialService.create(data)
        .then(response => {
          setTutorial({
            id: response.data.id,
            title: response.data.title,
            description: response.data.description,
            img: response.data.img
          });
          setSubmitted(true);
          // console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });

    imageService.upload(image)
        .then(response => {
          setImage(response.image);
        })
        .catch(e => {
          console.log(e);
        });
  };

  const newTutorial = () => {
    setTutorial(initialTutorialState);
    setSubmitted(false);
  };

  return (
      <div className="submit-form">
        {submitted ? (
            <div>
              <h4>You submitted successfully!</h4>
              <button className="btn btn-success" onClick={newTutorial}>
                Add
              </button>
            </div>
        ) : (
            <div className={"edit-form"}>
              <h5>등록</h5>
              <hr/>
              <form>
                <div className="form-group">
                  <label htmlFor="title">제목</label>
                  <input
                      type="text"
                      className="form-control"
                      id="title"
                      name="title"
                      value={tutorial.title}
                      onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="description">설명</label>
                  <textarea
                      className="form-control"
                      id="description"
                      name="description"
                      value={tutorial.description}
                      onChange={handleInputChange}
                      rows={"5"}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cover-image">이미지</label>
                  {preview && (
                      <div>
                        <img className={'preview'} src={preview} alt={''}/>
                      </div>
                  )}
                  <input
                      type='file'
                      id='file-upload'
                      style={{display:'none'}}
                      name={'png'}
                      accept='image/png'
                      onChange={onChange}/>
                  <label
                      className={"addBtnStyle fileUploadBtn"}
                      htmlFor="file-upload"
                  >
                    파일 선택
                  </label>
                </div>
              </form>
              <hr/>
              <button onClick={saveTutorial} className="addBtnStyle">
                등록
              </button>
            </div>
        )}
      </div>
  );
};

export default TutorialAdd;