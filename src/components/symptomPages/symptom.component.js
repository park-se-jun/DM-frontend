import React, { useState, useEffect } from "react";
import SymptomService from "../../services/symptom.service";
import imageService from "../../services/image.service";
import "../GlobalStyles.css";

const Symptom = (props) => {
  const initialSymptomState = {
    id: null,
    symptomid: "",
    symptomname: "",
  };
  const [currentSymptom, setCurrentSymptom] = useState(initialSymptomState);
  const [message, setMessage] = useState("");
//  const [images, setImages] = useState([]);

  const getSymptom = id => {
    SymptomService.get(id)
        .then(response => {
          setCurrentSymptom(response.data);
          // console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
  };

  useEffect(() => {
    getSymptom(props.match.params.id);
  }, [props.match.params.id]);

  const handleInputChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    setCurrentSymptom({ ...currentSymptom, [name]: value });
  };

  const updateContent = () => {
    let data = {
      id: currentSymptom.id,
      symptomid: currentSymptom.symptomid,
      symptomname: currentSymptom.symptomname
    };

    SymptomService.update(currentSymptom.id, data)
        .then(response => {
          console.log(response.data);
          setMessage("수정이 완료 되었습니다.");
        })
        .catch(e => {
          console.log(e);
        });
  };

  const removeSymptom = () => {
    SymptomService.delete(currentSymptom.id)
        .then(response => {
          console.log(response.data);
          // props.history.push("/admin");
        })
        .catch(e => {
          console.log(e);
        });
  };

  const moveUp = () => {
    props.history.push("/symptom");
  };

  return (
      <div>
        {currentSymptom ? (
            <div className="edit-form">
              <h5>정보 수정</h5>
              <hr/>
              <form>
                <div className="form-group">
                  <label htmlFor="symptomid">증상코드</label>
                  <input
                      type="text"
                      className="form-control"
                      id="symptomid"
                      name="symptomid"
                      placeholder="S0000"
                      value={currentSymptom.symptomid}
                      onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="symptomname">증상명</label>
                  <input
                      type="text"
                      className="form-control"
                      id="symptomname"
                      name="symptomname"
                      value={currentSymptom.symptomname}
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
                    <button className="delBtnStyle" onClick={removeSymptom}>
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
              <p>Please click on a Symptom.</p>
            </div>
        )}
      </div>
  );
};

export default Symptom;