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


  return (
    <div
      className="container"
      style={{ marginTop: "100px", marginBottom: "100px" }}
    >
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
        {matches.length}
        <button
          className="write-btn"
          style={{ background: "none" }}
          onClick={addCommunity}
        >
          <span className="input-size">글쓰기</span>
          <CreateIcon />
        </button>
      </div>
      <div>
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
                result={match.result}
                canEdit={
                  JSON.parse(sessionStorage.getItem("user")).userid ===
                  match.writer
                }
                onClick={() => openMatch(match.id)}
                onEditClick={() => openCommunity(match.id)}
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
      </div>
    </div>
  );
};

export default CommunityList;
