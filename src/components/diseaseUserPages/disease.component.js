import React, { useState, useEffect } from "react";
import DiseaseService from "../../services/disease.service";
import DefaultDataService from "../../services/defaultData.service";
import _ from "underscore";
import "../GlobalStyles.css";
import del_logo from "../delete.png";

const Disease = (props) => {
  const initialDiseaseState = {
    id: null,
    diseaseid: "",
    diseasename: "",
    symptoms: []
  };
  const [currentDisease, setCurrentDisease] = useState(initialDiseaseState);
  const [message, setMessage] = useState("");

    const initialDataState = {
        id: null,
        diseases: [],
        symptoms: []
    };
    const [data, setData] = useState(initialDataState);

  const getDisease = id => {
    DiseaseService.get(id)
        .then(response => {
          setCurrentDisease(response.data);
          setSubmitSymptoms(response.data.symptoms);
          // console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });

      DefaultDataService.getAll()
          .then((response) => {
              setData(response.data);
          })
          .catch((e) => {
              console.log(e);
          });
  };

  useEffect(() => {
    getDisease(props.match.params.id);
  }, [props.match.params.id]);

  const handleInputChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    setCurrentDisease({ ...currentDisease, [name]: value });
  };

  const updateContent = (event) => {
      event.preventDefault();
      currentDisease.symptoms = [...submitSymptoms];

    let data = {
      id: currentDisease.id,
      diseaseid: currentDisease.diseaseid,
      diseasename: currentDisease.diseasename,
      symptoms: currentDisease.symptoms
    };

    DiseaseService.update(currentDisease.id, data)
        .then(response => {
          console.log(response.data);
          setMessage("수정이 완료 되었습니다.");
        })
        .catch(e => {
          console.log(e);
        });
  };

  const removeDisease = () => {
      DiseaseService.delete(currentDisease.id)
        .then(response => {
          console.log(response.data);
          // props.history.push("/admin");
        })
        .catch(e => {
          console.log(e);
        });
  };

  const moveUp = () => {
    props.history.push("/diseaseuser");
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
                    <th width={"30%"}>가중치</th>
                </tr>
                </thead>
                <tbody>
                {submitSymptoms.map(
                    (row) =>(
                        <tr key={row.id}>
                            <td>{row['symptomid']}</td>
                            <td>{row['symptomname']}</td>
                            <td>{row['weight']}</td>
                        </tr>
                    )
                )}
                </tbody>
            </table>
        );
    };


    return (
      <div>
        {currentDisease ? (
            <div className="edit-form">
              <h5>정보 수정</h5>
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
                      value={currentDisease.diseaseid}
                      onChange={handleInputChange}
                      disabled
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="diseasename">질병명</label>
                  <input
                      type="text"
                      className="form-control"
                      id="diseasename"
                      name="diseasename"
                      value={currentDisease.diseasename}
                      onChange={handleInputChange}
                      disabled
                  />
                </div>

                  <div className="form-group">
                      <label htmlFor="Search">증상</label>
                      {symptomsTable()}
                  </div>

              </form>
              <hr/>
              <table width={"100%"}>
                <tbody>
                <tr>
                  <td className={"left-align"}>
                    <button
                        type="button"
                        onClick={moveUp}
                        className="addBtnStyle">
                      목록
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
              <p>Please click on a Disease.</p>
            </div>
        )}
      </div>
  );
};

export default Disease;