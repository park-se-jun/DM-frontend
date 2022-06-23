import React, {useEffect, useState} from "react";
import matchService from "../../services/match.service";
import imageService from "../../services/image.service";
import "../GlobalStyles.css";
import _ from "underscore";
import del_logo from "../delete.png";
import DefaultDataService from "../../services/defaultData.service";

const MatchAdd = () => {
  const initialMatchState = {
    id: null,
    writer: "",
    title: "",
    img: "",
    description:"",
    symptoms:[],
    predict:[],
    resultimg:"",
    result:""
  };
  const [match , setMatch] = useState(initialMatchState);
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
    setMatch({ ...match, [name]: value });
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

  const saveMatch = (event) => {
    event.preventDefault();
    match.symptoms = [...submitSymptoms];

    let data = {
      id: match.id,
      writer: JSON.parse(sessionStorage.getItem("user")).userid,
      title: match.title,
      img : match.img,
      description: match.description,
      symptoms: match.symptoms,
      predict: match.predict,
      resultimg: match.resultimg,
      result: match.result
    };
    matchService.create(data)
        .then(response => {
          setMatch({
            id: response.data.id,
            writer: response.data.writer,
            title: response.data.title,
            img : response.data.img,
            description: response.data.description,
            symptoms: response.data.symptoms,
            predict: response.data.predict,
            resultimg: response.data.resultimg,
            result: response.data.result
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

  const newMatch = () => {
    setMatch(initialMatchState);
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
              <button className="btn btn-success" onClick={newMatch}>
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
                      value={match.title}
                      onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="description">내용</label>
                  <textarea
                      className="form-control"
                      id="description"
                      name="description"
                      value={match.description}
                      onChange={handleInputChange}
                      rows={"5"}
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

                <label htmlFor="predict">예측 질병</label>
                <div className="form-group">
                  <input
                      type="text"
                      className="form-control"
                      id="predict"
                      name="predict"
                      value={match.predict}
                      onChange={handleInputChange}
                      disabled
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="cover-image">증상 사진</label>
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
              <button onClick={(event) => saveMatch(event)}
                      className="addBtnStyle">
                등록
              </button>
            </div>
        )}
      </div>
  );
};

export default MatchAdd;