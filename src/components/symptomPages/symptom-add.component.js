import React, { useState } from "react";
import symptomService from "../../services/symptom.service";
import imageService from "../../services/image.service";
import "../GlobalStyles.css";

const SymptomAdd = () => {
  const initialSymptomState = {
    id: null,
    symptomid: "",
    symptomname: "",
    img: ""
  };
  const [symptom, setSymptom] = useState(initialSymptomState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    setSymptom({ ...symptom, [name]: value });
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

  const saveSymptom = () => {
    let data = {
      id: symptom.id,
      symptomid: symptom.symptomid,
      symptomname: symptom.symptomname,
      img: image.name
    };

    symptomService.create(data)
        .then(response => {
          setSymptom({
            id: response.data.id,
            symptomid: response.data.symptomid,
            symptomname: response.data.symptomname,
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

  const newSymptom = () => {
    setSymptom(initialSymptomState);
    setSubmitted(false);
  };

  return (
      <div className="submit-form" style={{marginTop: "120px", marginBottom: "120px"}}>
        {submitted ? (
            <div>
              <h4>You submitted successfully!</h4>
              <button className="btn btn-success" onClick={newSymptom}>
                Add
              </button>
            </div>
        ) : (
            <div className={"edit-form"}>
              <h5 className='text-bold'>등록</h5>
              <hr/>
              <form style={{marginTop: "40px"}}>
                <div className="form-group">
                  <label htmlFor="symptomid">증상코드</label>
                  <input
                      type="text"
                      className="form-control input-size"
                      id="symptomid"
                      name="symptomid"
                      placeholder="S0000"
                      value={symptom.symptomid}
                      onChange={handleInputChange}
                      style={{marginBottom: "30px"}}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="symptomname">증상이름</label>
                  <input
                      type="text"
                      className="form-control  input-size"
                      id="symptomname"
                      name="symptomname"
                      value={symptom.symptomname}
                      onChange={handleInputChange}
                      style={{marginBottom: "40px"}}
                  />
                </div>
              </form>
              <hr/>
              <button onClick={saveSymptom} className="addBtnStyle  input-size"  style={{padding: "10px 20px"}}>
                등록
              </button>
            </div>
        )}
      </div>
  );
};

export default SymptomAdd;