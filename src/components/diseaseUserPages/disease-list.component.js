import React, { useState, useEffect, useMemo, useRef } from "react";
import Pagination from "@material-ui/lab/Pagination";
import { useTable, useSortBy } from "react-table";
import { makeStyles } from '@material-ui/core/styles';
import _ from "underscore";

import DiseaseService from "../../services/disease.service";
import "../GlobalStyles.css";

const DiseasesList = (props) => {
  const [searchWord, setSearchWord] = useState("");
  const [diseases, setDiseases] = useState([]);
  const diseasesRef = useRef();

  diseasesRef.current = diseases;

  const [totalItems, setTotalItems] = useState(0);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const pageSizes = [10, 20, 30, "전체 보기"];

  const getRequestParams = (searchWord, page, pageSize) => {
    let params = {};

    if (searchWord) {
      params["diseaseid"] = searchWord;
      params["diseasename"] = searchWord;
    }

    if (page) {
      params["page"] = page - 1;
    }

    if (pageSize === "전체 보기") {
      params["size"] = totalItems;
    } else params["size"] = pageSize;

    return params;
  };

  const retrieveDiseases = () => {
    const params = getRequestParams(searchWord, page, pageSize);

    DiseaseService.getAll(params)
        .then((response) => {
          const { diseases, totalItems, totalPages } = response.data;

          setDiseases(diseases);
          setTotalItems(totalItems);
          setCount(totalPages);

          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });

  };

  // eslint-disable-next-line
  useEffect(() => {
    retrieveDiseases();
  }, [page, pageSize]);

  const searchRequest = () => {
    setPage(1);
    retrieveDiseases();
  };

  const onChangeSearchWord = (e) => {
    e.preventDefault();
    const searchWord = e.target.value;
    setSearchWord(searchWord);
  };

  // const onKeyPress = (e) => {
  //   if(e.key === "Enter") searchRequest();
  // };

  const openDisease = (rowIndex) => {
    const id = diseasesRef.current[rowIndex].id;

    props.history.push("/diseaseuser/" + id);
  };

  const addDisease = () => {
    props.history.push("/diseaseuser/add");
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handlePageSizeChange = (event) => {
    setPageSize(event.target.value);
    setPage(1);
  };

  const columns = useMemo(
      () => [
        {
          Header: "질병코드",
          accessor: "diseaseid",
        },
        {
          Header: "질병명",
          accessor: "diseasename",
        },
        {
          Header: "증상",
          accessor: data =>{
            const symptoms = [...data.symptoms];
            return (
                <div>
                  <div>
                    <div >
                      {symptoms.map(
                          (symptom)=>(
                                <div key={symptom.symptomid}>{symptom.symptomname}</div>
                          )
                      )}
                    </div>
                  </div>
                </div>
            )
          },
        },
        {
          Header: "가중치",
          accessor: data =>{
            const symptoms = [...data.symptoms];
            return (
                <div>
                  <div>
                    <div >
                      {symptoms.map(
                          (symptom)=>(
                              <div key={symptom.symptomid}>{symptom.weight}</div>
                          )
                      )}
                    </div>
                  </div>
                </div>
            )
          },
        },
        {
          Header: "더보기",
          accessor: "actions",
          Cell: (props) => {
            const rowIdx = props.row.id;
            return (
                <div>
                  <button
                      type="button"
                      className="editBtnStyle"
                      onClick={() => openDisease(rowIdx)}>
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
  } = useTable({ columns, data: diseases, initialState: {
      sortBy: [{ id: 'diseaseid', desc: false }]
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
                  <td width="15%"/>
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
                <td width="30%" className={"nonBorder"}/>
                <th width="30%" className={"nonBorder"}/>
                <td width="15%" className={"nonBorder"}/>
                <td width="15%" className={"nonBorder"}/>
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

export default DiseasesList;
