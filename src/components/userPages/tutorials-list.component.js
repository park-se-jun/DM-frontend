import React, { useState, useEffect, useMemo, useRef } from "react";
import Pagination from "@material-ui/lab/Pagination";
import { useTable, useSortBy } from "react-table";
import { makeStyles } from '@material-ui/core/styles';
import _ from "underscore";

import TutorialService from "../../services/tutorial.service";
import ImageService from "../../services/image.service";
import "../GlobalStyles.css";

const TutorialList = (props) => {
  const [searchWord, setSearchWord] = useState("");
  const [images, setImages] = useState([]);
  const [tutorials, setTutorials] = useState([]);
  const tutorialsRef = useRef();

  tutorialsRef.current = tutorials;

  const [totalItems, setTotalItems] = useState(0);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const pageSizes = [10, 20, 30, "전체 보기"];

  const getRequestParams = (searchWord, page, pageSize) => {
    let params = {};

    if (searchWord) {
      params["title"] = searchWord;
      params["description"] = searchWord;
    }

    if (page) {
      params["page"] = page - 1;
    }

    if (pageSize === "전체 보기") {
      params["size"] = totalItems;
    } else params["size"] = pageSize;

    return params;
  };

  const retrieveTutorials = () => {
    const params = getRequestParams(searchWord, page, pageSize);

    TutorialService.getAll(params)
        .then((response) => {
          const { tutorials, totalItems, totalPages } = response.data;

          setTutorials(tutorials);
          setTotalItems(totalItems);
          setCount(totalPages);

          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });

    ImageService.getFiles()
        .then(response => {
          setImages(response.data);
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
  };

  // eslint-disable-next-line
  useEffect(() => {
    retrieveTutorials();
  }, [page, pageSize]);

  const searchRequest = () => {
    setPage(1);
    retrieveTutorials();
  };

  const onChangeSearchWord = (e) => {
    e.preventDefault();
    const searchWord = e.target.value;
    setSearchWord(searchWord);
  };

  // const onKeyPress = (e) => {
  //   if(e.key === "Enter") searchRequest();
  // };

  const openTutorial = (rowIndex) => {
    const id = tutorialsRef.current[rowIndex].id;

    props.history.push("/tutorial/" + id);
  };

  const addTutorial = () => {
    props.history.push("/tutorial/add");
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handlePageSizeChange = (event) => {
    setPageSize(event.target.value);
    setPage(1);
  };

  const imageView = (idx) => {
    const image = idx;
    console.log(image)
    let name = "";
    let url = "";
    let exist = false;

    for(let i = 0; i < images.length; i++){
      if(images[i]['name'].includes(image)){
        name = images[i]['name'];
        url = images[i]['url'];
        exist = true;
        break;
      }
    }
    if(exist) {
      return (
          <div style={{height: "100px", width: "70px"}}
               className={"image-card right-align vert-center-align left-margin"}>
            <img src={url} alt={name} height={"100px"} width={"70px"}/>
          </div>
      );
    }else{
      return (
          <div style={{height: "100px", width: "70px"}}
               className={"image-card right-align vert-center-align left-margin"}/>
      );
    }
  };

  const columns = useMemo(
      () => [
        {
          Header: "제목",
          accessor: "title",
        },
        {
          Header: "설명",
          accessor: "description",
        },
        {
          Header: "관리",
          accessor: "actions",
          Cell: (props) => {
            const rowIdx = props.row.id;
            return (
                <div>
                  <button
                      type="button"
                      className="editBtnStyle"
                      onClick={() => openTutorial(rowIdx)}>
                    >>
                  </button>
                </div>
            );
          },
        },
      ],
      // eslint-disable-next-line
      []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data: tutorials, initialState: {
      sortBy: [{ id: 'title', desc: false }]
    }}, useSortBy);

  const useStyles = makeStyles(() => ({
    ul: {
      "& .MuiPaginationItem-root": {
        color: "#000",
        backgroundColor: "#fff",
      }
    }
  }));

  const classes = useStyles();

  return (
      <div>
        <div className="card">
          <div style={{width: "100%"}}>{/*className="col-md-8"*/}
            <div className="input-group">
              <table width="100%">
                <tbody>
                <tr>
                  <td width="25%">
                    <div className="input-group">
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
                            onClick={searchRequest}
                        >
                          검색
                        </button>
                      </div>
                    </div>
                  </td>
                  <td width="5%"/>
                  <td width={"40%"} className={"center-align"}>
                    <Pagination
                        classes={{ul: classes.ul}}
                        count={count}
                        page={page}
                        siblingCount={1}
                        boundaryCount={1}
                        variant="outlined"
                        shape="rounded"
                        onChange={handlePageChange}
                    />
                  </td>
                  <td width="5%"/>
                  <td width="5%">
                    <h6>{totalItems}</h6>
                  </td>
                  <td width="5%">
                    <select
                        className={"form-select table input-group"}
                        onChange={handlePageSizeChange}
                        value={pageSize}>
                      {pageSizes.map((size) => (
                          <option key={size} value={size}>
                            {size}
                          </option>
                      ))}
                    </select>
                  </td>
                  <td width="5%"/>
                  <td width="5%">
                    <button
                        type="button"
                        className="addBtnStyle" onClick={addTutorial}>
                      추가
                    </button>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <table
                className="table table-bordered"
                {...getTableProps()}
            >
              <thead>
              <tr className={"nonBorder"}>
                <td width="35%" className={"nonBorder"}/>
                <th width="55%" className={"nonBorder"}/>
                <td width="10%" className={"nonBorder"}/>
              </tr>
              {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                        <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                          {column.render("Header")}
                        </th>
                    ))}
                  </tr>
              ))}
              </thead>
              <tbody {...getTableBodyProps()}>
              {rows.map((row) => {
                prepareRow(row);
                return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map((cell) => {
                        return (
                            <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                        );
                      })}
                    </tr>
                );
              })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
  );
};

export default TutorialList;
