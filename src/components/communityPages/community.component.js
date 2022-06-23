import React, { useState, useEffect } from "react";
import MatchService from "../../services/match.service";
import imageService from "../../services/image.service";
import "../GlobalStyles.css";

const Community = (props) => {
  const initialMatchState = {
    id: null,
    writer: {},
    title: "",
    img: "",
    description:"",
    symptoms:[],
    predict:[],
    resultimg:"",
    result:""
  };
  const [currentMatch, setCurrentMatch] = useState(initialMatchState);
  const [message, setMessage] = useState("");
  const [images, setImages] = useState([]);

  const getMatch = id => {
    MatchService.getUser(id)    // tutorial service 수정 필요
        .then(response => {
          setCurrentMatch(response.data);
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
    getMatch(props.match.params.id);
    retrieveImages();
  }, [props.match.params.id]);

  const handleInputChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    setCurrentMatch({ ...currentMatch, [name]: value });
  };

  const updateContent = () => {
    let data = {
        id: currentMatch.id,
        title: currentMatch.title,
        description: currentMatch.description,
        resultimg: image.name,
        result: currentMatch.result
    };

    MatchService.update(currentMatch.id, data)
        .then(response => {
          console.log(response.data);
          setMessage("수정이 완료 되었습니다.");
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

  const removeMatch = () => {
    MatchService.delete(currentMatch.id)
        .then(response => {
          console.log(response.data);
          // props.history.push("/admin");
        })
        .catch(e => {
          console.log(e);
        });
      props.history.push("/match");
  };

  const moveUp = () => {
    props.history.push("/match");
  };

  const imageView = (match, flag) => {
    let img = "";
    if (flag === 'img')             { img = match.img; }
    else if (flag === 'resultImg')  { img = match.resultimg; }

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
            <div style={{height: "200px", width: "300px"}}
                 className={"image-card center-align vert-center-align"}>
              <img src={url} alt={name} height={"200px"} width={"140px"}/>
            </div>
          </div>
      );
    }else{
      return (
          <div className={"wrapper"}>
            <div style={{height: "200px", width: "300px"}}
                 className={"image-card center-align vert-center-align"}/>
          </div>
      );
    }
  };

  const notNullImage = (match, flag)=>{
      if (match !== null){
          return(
            imageView(match, flag)
          )
      }
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

  return (
      <div>
        {currentMatch ? (
            <div className="edit-form">
              <h5>정보 수정</h5>
              <hr/>
              <form>
                  <label htmlFor="writer">작성자</label>
                  <div className="form-group">
                      <input
                          type="text"
                          className="form-control"
                          id="writer"
                          name="writer"
                          value={currentMatch.writer}
                          onChange={handleInputChange}
                          disabled
                      />
                  </div>

                  <label htmlFor="image">증상 사진</label>
                  {notNullImage(currentMatch.img,'img')}

                <div className="form-group">
                  <label htmlFor="title">제목</label>
                  <input
                      type="text"
                      className="form-control"
                      id="title"
                      name="title"
                      value={currentMatch.title}
                      onChange={handleInputChange}
                  />
                </div>
                  <div className="form-group">
                      <label htmlFor="symptoms">증상</label>
                      <table>
                          <tbody>
                          <tr>
                              {currentMatch.symptoms.map(
                                  (symptom) => (
                                      <td key={symptom.id}>
                                          <i><b>{"#"+symptom.symptomname}</b></i>
                                      </td>
                                  )
                              )}
                          </tr>
                          </tbody>
                      </table>
                  </div>
                <div className="form-group">
                  <label htmlFor="description">내용</label>
                  <textarea
                      className="form-control"
                      id="description"
                      name="description"
                      value={currentMatch.description}
                      onChange={handleInputChange}
                      rows={"5"}
                  />
                </div>

                  <label htmlFor="predict">예측 질병</label>
                  <div className="form-group">
                      <input
                          type="text"
                          className="form-control"
                          id="predict"
                          name="predict"
                          value={currentMatch.predict}
                          onChange={handleInputChange}
                          disabled
                      />
                  </div>

                  <div className="form-group">
                      <label htmlFor="result-image">진단 결과 사진</label>
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
                  <div className="form-group">
                      <label htmlFor="result">실제 진단 결과</label>
                      <input
                          type="text"
                          className="form-control"
                          id="result"
                          name="result"
                          placeholder="병원에 다녀오신 후 작성해주세요."
                          value={currentMatch.result}
                          onChange={handleInputChange}
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
                        onClick={moveUp}
                        className="addBtnStyle">
                      목록
                    </button>
                  </td>
                  <td className={"right-align"}>
                    <button className="delBtnStyle" onClick={removeMatch}>
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
              <p>Please click on a Match...</p>
            </div>
        )}
      </div>
  );
};

export default Community;