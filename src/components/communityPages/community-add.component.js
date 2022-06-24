import React, {useEffect, useState} from "react";
import matchService from "../../services/match.service";
import imageService from "../../services/image.service";
import "../GlobalStyles.css";
import _ from "underscore";
import del_logo from "../delete.png";
import DefaultDataService from "../../services/defaultData.service";

const CommunityAdd = () => {
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
    match.predict = predictDisease(submitSymptoms);

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

  const predictDisease = (symptomArray) => {//symptomArray = [{"symptomname":"자살충동","weight":4},{"절망감",2},{"불면",1}] 과 같이 증상과 weight 가 들어간 형식
    let predictedDiseaseArray = [];
    //  if(symptomArray<3) return predictedDiseaseArray;
    // symptomArray.sort((a,b)=>b[1]-a[1]); // 제가 3개를 했엇는데, 전체에대서 5 5 4 3 1 1 filter    // 3까지만 가져가능방법
    // 증상 1 (5) 증상 2 (4) 증상 3(2) 증상 4(5) 증상 5(1) -> 평균 : 3.4
    // 질병A  증상 1(1) 증상 2(1) 증상 3(1) 증상 4(1) 증상 5(1) 증상 6 증상 7  -> 1~5증상평균 > 3.4 => 집어넣기 or <3.4 제외
    let average_user = 0; // 사용자가 선택한 증상들의 평균 가중치
    let count_user = 0;   // 사용자가 선택한 증상들의 개수

    symptomArray.map((key) => {
      average_user += Number(key.weight);
      count_user += 1
    })

    average_user = average_user / count_user;  // 평균을 구해줌.

    for(let {diseasename, symptoms} of data.diseases){ // 수많은 질병 중 1개 질병 꺼냄.

      let average_of_symptom_of_disease = 0;    // 해당 질병에서 증상들의 가중치 용 변수
      let count_symptom_of_disease =0;              // 해당 질병에서 사용자 증상들이 있는 개수

      for(let {symptomname, weight}of symptoms){ // 증상을 하나 뽑음

        symptomArray.map((key) => {
          if (key.symptomname === symptomname) {
            average_of_symptom_of_disease += Number(weight);
            count_symptom_of_disease+=1;
            if(count_symptom_of_disease === count_user) return false;
          }
        });

        if(count_symptom_of_disease === count_user) break;    // 사용자 증상이 해당 질병의 증상에 다 있기 때문에 마찬가지로 break
      }

      if(count_symptom_of_disease === count_user && average_user <= average_of_symptom_of_disease / count_symptom_of_disease)  // 사용자 증상들이 해당 질병 증상에 다 있으며, 사용자 증상들의 가중치보다 해당 질병의 해당되는 증상들의 가중치가 더 높으면, 해당 질병이 유력하기에 예측 질병에 넣어줌.
        predictedDiseaseArray.push(diseasename);   // 질병 푸시
      if(predictedDiseaseArray.length>=3) break;     // 질병 개수를 한정 짓기 위해 3개만 허용.
    }
    return predictedDiseaseArray;  // 예측 질병 반환.
  }

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
                      value={predictDisease(submitSymptoms)}
                      onChange={handleInputChange}
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

export default CommunityAdd;