import React, { useState, useEffect } from "react";
import { IconButton, TextField } from "@material-ui/core";
import MatchService from "../../services/match.service";
import "../GlobalStyles.css";
import PostPreviewComponent from "../PostPreviewComponent";
import SearchIcon from "@material-ui/icons/Search";
import CreateIcon from "@material-ui/icons/Create";

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
    <div
      className="container"
      style={{ marginTop: "100px", marginBottom: "100px" }}
    >
      <div className="card">
        <div style={{ width: "100%" }}>
          <div
            className="flex-horiz flex-space-between"
          >
            {/*className="col-md-8"*/}

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
        </div>
      </div>
      {matches &&
        matches.map((match, index) => (
          <>
            {select(match)}
            <PostPreviewComponent
              key={index}
              symtomArray={match.symptoms}
              author={match.writer}
              title={match.title}
              detail={match.description}
              predict={match.predict}
              result={match.result}
              onClick={() => openMatch(match.id)}
            />
          </>
        ))}
    </div>
  );
};

export default CommunityList;
