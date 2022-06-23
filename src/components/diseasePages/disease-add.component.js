import React, {useEffect, useState} from "react";
import DiseaseService from "../../services/disease.service";
import DefaultDataService from "../../services/defaultData.service";
import _ from "underscore";
import "../GlobalStyles.css";
import del_logo from "../delete.png";

const DiseaseAdd = () => {
  const initialDiseaseState = {
    id: null,
    diseaseid: "",
    diseasename: "",
    symptoms: []
  };
  const [disease, setDisease] = useState(initialDiseaseState);
  const [submitted, setSubmitted] = useState(false);

  const initialDataState = {
    id: null,
    diseases: [],
    symptoms: []
  };
  const [data, setData] = useState(initialDataState);

  const retrieveData = () => {
    DefaultDataService.getAll()
        .then((response) => {
          setData(response.data);
        })
        .catch((e) => {
          console.log(e);
        });

  };

  useEffect(() => {
    retrieveData();
  }, []);

  const handleInputChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    setDisease({ ...disease, [name]: value });
  };

  const saveDisease = (event) => {
    event.preventDefault();
    disease.symptoms = [...submitSymptoms];

    let data = {
      id: disease.id,
      diseaseid: disease.diseaseid,
      diseasename: disease.diseasename,
      symptoms: disease.symptoms
    };

    DiseaseService.create(data)
        .then(response => {
          setDisease({
            id: response.data.id,
            diseaseid: response.data.diseaseid,
            diseasename: response.data.diseasename,
            symptoms: response.data.symptoms
          });
          setSubmitted(true);
          // console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
  };

  const newDisease = () => {
    setDisease(initialDiseaseState);
    setSubmitted(false);
  };

  const [search, setSearch] = useState('')

  const onChangeSearch = (e) => {
    e.preventDefault();
    const search = e.target.value;
    setSearch(search);
  };

  const [weight, setWeight] = useState(0);

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };

  const example = [0, 1, 2, 3, 4, 5]

  const initialSymptomState = {
    id: "",
    symptomid: "",
    symptomname: "",
    weight: 0
  };

  const [inputSymptom, setInputSymptom] = useState(initialSymptomState);

  const selectSymptom = (e, row, weight)=>{
    e.preventDefault();
    setInputSymptom({id: row.id,
                           symptomid: row.symptomid,
                           symptomname: row.symptomname,
                           weight: weight});
    setSearch('');
  };

  const searchResultBox = () => {
    let result = [];
    for(let i = 0; i<data.symptoms.length; i++){
      if((data.symptoms[i].symptomid.toLowerCase().includes(search.toLowerCase()) ||
          data.symptoms[i].symptomname.toLowerCase().includes(search.toLowerCase()))&&
          search !== ''){
        result.push(data.symptoms[i]);
      }
    }
    if(result.length!==0){
      return(
          <table width="100%" className={"my-3 table-bordered table"}>
            <thead>
            <tr>
              <th width={"35%"}>증상코드</th>
              <th width={"35%"}>증상명</th>
              <th width={"20%"}>가중치</th>
              <th width={"10%"}/>
            </tr>
            </thead>
            <tbody>
            {result.map((row)=>(
                <tr key={row.id}>
                  <td>{row.symptomid}</td>
                  <td>{row.symptomname}</td>
                  <td>
                    <select
                        className={"form-select input-group"}
                        onChange={handleWeightChange}
                        >
                      {example.map((index) => (
                          <option key={index} value={index}>
                            {index}
                          </option>
                      ))}
                    </select>
                  </td>
                  <td>
                    <button
                        className={"addBtnStyle"}
                        onClick={(event)=>selectSymptom(event, row, weight)}>
                      +
                    </button>
                  </td>
                </tr>
            ))}
            </tbody>
          </table>
      )
    }
  };
  let [submitSymptoms, setSubmitSymptoms] = useState([]);

  const makeSymptoms = (event) => {
    event.preventDefault();

    let value = [...submitSymptoms];
    value.push(inputSymptom);
    value = _.uniq(value, 'id');
    value.sort(function (a, b){
      if(a.symptomid<b.symptomid){return -1;}
      if(a.symptomid>b.symptomid){return 1;}
      return 0;
    });

    setSubmitSymptoms(value);
    setInputSymptom(initialSymptomState);
  };

  const notZero = (weight) => {
    if(weight !== 0){
      return(
          <div>
            {weight}
          </div>
      );
    }
  };

  const selectSymptomBox = () => {
    return (
        <div>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th width={"35%"}>증상코드</th>
                <th width={"35%"}>증상명</th>
                <th width={"20%"}>가중치</th>
                <th width={"10%"}>등록</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{inputSymptom.symptomid}</td>
                <td>{inputSymptom.symptomname}</td>
                <td>{notZero(inputSymptom.weight)}</td>
                <td>
                  <button
                      type="button"
                      onClick={(event) => makeSymptoms(event)}
                      className="addBtnStyle">
                    +
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
    )
  };

  const delSymptom = (event, id) => {
    event.preventDefault();

    let value = [...submitSymptoms];
    value = value.filter(function (row){return row.symptomid !== id});
    setSubmitSymptoms(value);
  };

  const symptomsTable = () =>{
    submitSymptoms.sort(function (a, b){
      if(a.symptomid<b.symptomid){return -1;}
      if(a.symptomid>b.symptomid){return 1;}
      return 0;
    });
    if(submitSymptoms.length === 0) return <i>증상을 추가해주세요.</i>;
    else return(
        <table className="table table-bordered">
          <thead>
          <tr>
            <th width={"35%"}>증상코드</th>
            <th width={"35%"}>증상명</th>
            <th width={"20%"}>가중치</th>
            <th width={"10%"}/>
          </tr>
          </thead>
          <tbody>
          {submitSymptoms.map(
              (row) =>(
                  <tr key={row.id}>
                    <td>{row['symptomid']}</td>
                    <td>{row['symptomname']}</td>
                    <td>{row['weight']}</td>
                    <td>
                      <button
                          type="button"
                          onClick={(event) => delSymptom(event, row.symptomid)}
                          className="delBtnStyle">
                        <img width={15} height={15} src={del_logo} alt={"del_logo"}/>
                      </button>
                    </td>
                  </tr>
              )
          )}
          </tbody>
        </table>
    );
  };

  return (
      <div className="submit-form">
        {submitted ? (
            <div>
              <h4>You submitted successfully!</h4>
              <button className="btn btn-success" onClick={newDisease}>
                Add
              </button>
            </div>
        ) : (
            <div className={"edit-form"}>
              <h5>등록</h5>
              <hr/>
              <form>
                <div className="form-group">
                  <label htmlFor="diseaseid">질병코드</label>
                  <input
                      type="text"
                      className="form-control"
                      id="diseaseid"
                      name="diseaseid"
                      placeholder="D0000"
                      value={disease.diseaseid}
                      onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="diseasename">질병명</label>
                  <input
                      type="text"
                      className="form-control"
                      id="diseasename"
                      name="diseasename"
                      value={disease.diseasename}
                      onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="Search">증상</label>
                  <input
                      type="text"
                      className={"form-control"}
                      value={search}
                      placeholder="검색해주세요."
                      onChange={onChangeSearch}
                  />
                  {selectSymptomBox()}
                  {searchResultBox()}
                  {symptomsTable()}
                </div>

              </form>
              <hr/>
              <button onClick={(event) => saveDisease(event)}
                      className="addBtnStyle">
                등록
              </button>
            </div>
        )}
      </div>
  );
};

export default DiseaseAdd;