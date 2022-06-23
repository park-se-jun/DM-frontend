import React, { useState, useEffect } from "react";
import TutorialService from "../../services/tutorial.service";
import imageService from "../../services/image.service";
import "../GlobalStyles.css";

const Tutorial = (props) => {
  const initialTutorialState = {
    id: null,
    title: "",
    description: "",
    img: "",
    published: false,

    submitted: false
  };
  const [currentTutorial, setCurrentTutorial] = useState(initialTutorialState);
  const [message, setMessage] = useState("");
  const [images, setImages] = useState([]);

  const getTutorial = id => {
    TutorialService.get(id)
        .then(response => {
          setCurrentTutorial(response.data);
          // console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
  };

  const retrieveImages = () => {
    imageService.getFiles()
        .then(response => {
          setImages(response.data);
          // console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
  };

  useEffect(() => {
    getTutorial(props.match.params.id);
    retrieveImages();
  }, [props.match.params.id]);

  const handleInputChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    setCurrentTutorial({ ...currentTutorial, [name]: value });
  };

  const updateContent = () => {
    let data = {
      id: currentTutorial.id,
      description: currentTutorial.description
    };

    TutorialService.update(currentTutorial.id, data)
        .then(response => {
          console.log(response.data);
          setMessage("수정이 완료 되었습니다.");
        })
        .catch(e => {
          console.log(e);
        });
  };

  const removeTutorial = () => {
    TutorialService.delete(currentTutorial.id)
        .then(response => {
          console.log(response.data);
          // props.history.push("/admin");
        })
        .catch(e => {
          console.log(e);
        });
  };

  const moveAdmin = () => {
    // props.history.push("/admin");
  };

  const imageView = (tutorial) => {
    const img = tutorial.img;
    let name = "";
    let url = "";
    let exist = false;

    for(let i = 0; i < images.length; i++){
      if(images[i]['name'].includes(img)){
        name = images[i]['name'];
        url = images[i]['url'];
        exist = true;
        break;
      }
    }
    if(exist) {
      return (
          <div className={"wrapper"}>
            <div style={{height: "200px", width: "140px"}}
                 className={"image-card center-align vert-center-align"}>
              <img src={url} alt={name} height={"200px"} width={"140px"}/>
            </div>
          </div>
      );
    }else{
      return (
          <div className={"wrapper"}>
            <div style={{height: "200px", width: "140px"}}
                 className={"image-card center-align vert-center-align"}/>
          </div>
      );
    }
  };

  return (
      <div>
        {currentTutorial ? (
            <div className="edit-form">
              <h5>정보 수정</h5>
              <hr/>
              <form>
                {imageView(currentTutorial)}
                <div className="form-group">
                  <label htmlFor="title">제목</label>
                  <input
                      type="text"
                      className="form-control"
                      id="title"
                      name="title"
                      value={currentTutorial.title}
                      onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="description">설명</label>
                  <textarea
                      className="form-control"
                      id="description"
                      name="description"
                      value={currentTutorial.description}
                      onChange={handleInputChange}
                      rows={"5"}
                  />
                </div>
              </form>
              <hr/>
              <table width={"100%"}>
                <tbody>
                <tr>
                  <td className={"left-align"}>
                    <button
                        type="submit"
                        className="addBtnStyle"
                        onClick={updateContent}
                    >
                      수정
                    </button>
                    &nbsp;&nbsp;
                    <button
                        type="button"
                        onClick={moveAdmin}
                        className="addBtnStyle">
                      목록
                    </button>
                  </td>
                  <td className={"right-align"}>
                    <button className="delBtnStyle" onClick={removeTutorial}>
                      삭제
                    </button>
                  </td>
                </tr>
                </tbody>
              </table>
              <p>{message}</p>
            </div>
        ) : (
            <div>
              <br />
              <p>Please click on a Tutorial...</p>
            </div>
        )}
      </div>
  );
};

export default Tutorial;