import React, { useState, useEffect, useMemo, useRef } from "react";
import Pagination from "@material-ui/lab/Pagination";
import { useTable, useSortBy } from "react-table";
import { makeStyles } from '@material-ui/core/styles';
import _ from "underscore";

import SymptomService from "../../services/symptom.service";
import "../GlobalStyles.css";

const SymptomList = (props) => {
  const [searchWord, setSearchWord] = useState("");
  const [symptoms, setSymptoms] = useState([]);
  const symptomsRef = useRef();

  symptomsRef.current = symptoms;

  const [totalItems, setTotalItems] = useState(0);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const pageSizes = [10, 20, 30, "전체 보기"];

  const getRequestParams = (searchWord, page, pageSize) => {
    let params = {};

    if (searchWord) {
      params["symptomid"] = searchWord;
      params["symptomname"] = searchWord;
    }

    if (page) {
      params["page"] = page - 1;
    }

    if (pageSize === "전체 보기") {
      params["size"] = totalItems;
    } else params["size"] = pageSize;

    return params;
  };

  const retrieveSymptoms = () => {
    const params = getRequestParams(searchWord, page, pageSize);

    SymptomService.getAll(params)
        .then((response) => {
          const { symptoms, totalItems, totalPages } = response.data;

          setSymptoms(symptoms);
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
    retrieveSymptoms();
  }, [page, pageSize]);

  const searchRequest = () => {
    setPage(1);
    retrieveSymptoms();
  };

  const onChangeSearchWord = (e) => {
    e.preventDefault();
    const searchWord = e.target.value;
    setSearchWord(searchWord);
  };

  // const onKeyPress = (e) => {
  //   if(e.key === "Enter") searchRequest();
  // };

  const openSymptom = (rowIndex) => {
    const id = symptomsRef.current[rowIndex].id;

    props.history.push("/symptom/" + id);
  };

  const addSymptom = () => {
    props.history.push("/symptom/add");
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
          accessor: "symptomid",
        },
        {
          Header: "질병명",
          accessor: "symptomname",
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
                      onClick={() => openSymptom(rowIdx)}>
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
  } = useTable({ columns, data: symptoms, initialState: {
      sortBy: [{ id: 'symptomid', desc: false }]
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
                        className="addBtnStyle" onClick={addSymptom}>
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
                <td width="40%" className={"nonBorder"}/>
                <th width="40%" className={"nonBorder"}/>
                <td width="20%" className={"nonBorder"}/>
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

export default SymptomList;
