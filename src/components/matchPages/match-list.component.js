import React, { useState, useEffect } from "react";

import MatchService from "../../services/match.service";
import DefaultDataService from "../../services/defaultData.service";
import "../GlobalStyles.css";

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import * as am4plugins_sliceGrouper from "@amcharts/amcharts4/plugins/sliceGrouper";
import { IconButton, TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import PostPreviewComponent from "../PostPreviewComponent";

am4core.useTheme(am4themes_animated);

const MatchList = (props) => {
  const [matches, setMatches] = useState([]);
  const [searchWord, setSearchWord] = useState("");

  const initialDataState = {
    id: null,
    diseases: [],
    symptoms: [],
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

  useEffect(() => {
    retrieveData();
  }, []);

  const onChangeSearchWord = (e) => {
    e.preventDefault();
    const searchWord = e.target.value;
    setSearchWord(searchWord);
  };

  const openMatch = (id) => {
    props.history.push("/match/" + id);
  };

  const makeData = () => {
    let symptoms = [...data.symptoms];
    let diseases = [...data.diseases];

    for (let i = 0; i < symptoms.length; i++) {
      symptoms[i].weight = Number(symptoms[i].weight);
      delete symptoms[i].symptomid;
      delete symptoms[i].id;
    }
    for (let i = 0; i < symptoms.length; i++) {
      for (let j = 0; j < diseases.length; j++) {
        let inSymptoms = diseases[j].symptoms;
        for (let k = 0; k < inSymptoms.length; k++) {
          if (symptoms[i].symptomname === inSymptoms[k].symptomname) {
            symptoms[i].weight += 1;
          }
        }
      }
    }

    return symptoms;
  };

  let chart = am4core.create("chartdiv", am4charts.PieChart);
  chart.data = makeData()
    .sort((a, b) => b.weight - a.weight)
    .slice(0, 30);

  // Add and configure Series
  let pieSeries = chart.series.push(new am4charts.PieSeries());
  pieSeries.dataFields.value = "weight";
  pieSeries.dataFields.category = "symptomname";

  let grouper = pieSeries.plugins.push(
    new am4plugins_sliceGrouper.SliceGrouper()
  );
  grouper.threshold = 1;
  grouper.groupName = "Other";
  grouper.clickBehavior = "zoom";

  let title = chart.titles.create();
  title.text = "상위 30개 증상 비율";
  title.fontSize = 25;
  title.marginBottom = 20;

  let label = chart.chartContainer.createChild(am4core.Label);
  label.text = "단위 : 개";
  label.align = "center";

  return (
    <div>
      <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
      <div className="card">
        <div style={{ width: "100%" }}>
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
        </div>
      </div>
      {matches &&
        matches.map((match, index) => (
          <>
            <button
              type="button"
              className="editBtnStyle"
              onClick={() => openMatch(match.id)}
            >
              >>
            </button>
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

export default MatchList;
