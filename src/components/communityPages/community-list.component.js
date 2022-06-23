import React, { useState, useEffect } from "react";
import {
  IconButton,
  InputAdornment,
  InputBase,
  TextField,
  Button,
} from "@material-ui/core";
import MatchService from "../../services/match.service";
import "../GlobalStyles.css";
import SearchIcon from "@material-ui/icons/Search";
import CreateIcon from "@material-ui/icons/Create";
import PostPreviewComponent from "../PostPreviewComponent";
const CommunityList = (props) => {
  const [matches, setMatches] = useState([]);
  const [searchWord, setSearchWord] = useState("");

  const retrieveMatches = () => {
    MatchService.getAll()
      .then((response) => {
        setMatches(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const findByWord = () => {
    MatchService.findByWord(searchWord)
      .then((response) => {
        setMatches(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // eslint-disable-next-line
  useEffect(() => {
    retrieveMatches();
  }, []);

  const onChangeSearchWord = (e) => {
    e.preventDefault();
    const searchWord = e.target.value;
    setSearchWord(searchWord);
  };

  const openMatch = (id) => {
    props.history.push("/match/" + id);
  };

  const openCommunity = (id) => {
    props.history.push("/community/" + id);
  };

  const addCommunity = () => {
    props.history.push("/community/add");
  };

  const select = (match) => {
    if (JSON.parse(sessionStorage.getItem("user")).userid === match.writer) {
      return (
        <div>
          <button
            type="button"
            className="editBtnStyle"
            onClick={() => openCommunity(match.id)}
          >
            수정
          </button>
          <button
            type="button"
            className="editBtnStyle"
            onClick={() => openMatch(match.id)}
          >
            >>
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <button
            type="button"
            className="editBtnStyle"
            onClick={() => openMatch(match.id)}
          >
            >>
          </button>
        </div>
      );
    }
  };

  return (
    <div className="card">
      <div style={{ width: "100%" }}>
        {/*className="col-md-8"*/}
        <div className="input-group">
          <table width="100%">
            <tbody>
              <tr>
                <div
                  className="flex-horiz flex-space-between"
                  style={{ marginBottom: "20px" }}
                >
                  <TextField
                    type="search"
                    placeholder="어떤 증상이 동반될까?"
                    value={searchWord}
                    onChange={onChangeSearchWord}
                    InputProps={{
                      endAdornment: (
                        <IconButton
                          className="p-0"
                          aria-label="search"
                          onClick={findByWord}
                        >
                          <SearchIcon />
                        </IconButton>
                      ),
                    }}
                  />
                  {/* <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder=""
                      value={searchWord}
                      onChange={onChangeSearchWord}
                    />
                    <div className="input-group-append">
                      <button
                        className="btn btn-outline-secondary form-control"
                        type="button"
                        onClick={findByWord}
                      >
                        검색
                      </button>
                    </div>
                  </div> */}
                  <h6>{matches.length}</h6>
                  <button
                    className="write-btn"
                    style={{ background: "none" }}
                    onClick={addCommunity}
                  >
                    <span className="input-size">글쓰기</span>
                    <CreateIcon />
                  </button>
                </div>

                {/* <td width="55%" />
                <td width="5%">
                  <h6>{matches.length}</h6>
                </td>
                <td width="5%" />
                <td width="5%">
                  <button
                    type="button"
                    className="addBtnStyle"
                    onClick={addCommunity}
                  >
                    추가
                  </button>
                </td> */}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <table className="table table-bordered">
          <thead>
            {/* <tr className={"nonBorder"}>
              <td width="15%" className={"nonBorder"}>
                작성자
              </td>
              <td width="15%" className={"nonBorder"}>
                제목
              </td>
              <td width="15%" className={"nonBorder"}>
                내용
              </td>
              <td width="15%" className={"nonBorder"}>
                증상
              </td>
              <td width="15%" className={"nonBorder"}>
                예측 질병
              </td>
              <td width="15%" className={"nonBorder"}>
                진단 결과
              </td>
              <td width="10%" className={"nonBorder"} />
            </tr> */}
            {/*<tr></tr>*/}
          </thead>
          <tbody>
            {matches &&
              matches.map((match, index) => (
                <>
                  <PostPreviewComponent
                    key={index}
                    symtomArray={match.symptoms}
                    author={match.writer}
                    title={match.title}
                    detail={match.description}
                    predict={match.predict}
                    result = {match.result}
                    canEdit= {JSON.parse(sessionStorage.getItem("user")).userid === match.writer}
                    onClick={() => openMatch(match.id)}
                    onEditClick={()=>openCommunity(match.id)}
                  />
                  {/* <tr key={index}> */}
                    {/* <td>{match.writer}</td>
                    <td>{match.title}</td> */}
                    {/* <td>{match.description}</td> */}
                    {/* <td>
                    {match.symptoms.map((symptom) => (
                      <div key={symptom.symptomid}>
                        <i>
                          <b>{"#" + symptom.symptomname}</b>
                        </i>
                      </div>
                    ))}
                  </td> */}
                    
                  {/* </tr> */}
                </>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CommunityList;
