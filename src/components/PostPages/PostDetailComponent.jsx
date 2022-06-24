import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useEffect } from "react";
import { DemoObject } from "../../demoData/demoData";
import SymptomFillterComponent from "../disease/SymtomFillterComponent";


function PostCard({ dataForPost }) {
  const {
    title,
    author,
    date,
    comment,
    mainText,
    ResultObject,
    Images,
    symtoms,
  } = dataForPost;

  return (
    <Card>
      <CardHeader
        avatar={<Avatar style={{ fontSize: "0.5rem" }}>{author}</Avatar>}
        title={title}
        subheader={date}
      />
      <CardMedia />
      <SymptomContainer symptoms={symtoms}/>
      <CardContent>
        <Typography variant="body1" component="p">
          {mainText.split("\n").map((value) => (
            <p> {value}</p>
          ))}
        </Typography>
      </CardContent>
    </Card>
  );
}
function SymptomContainer({symptoms}) {
  return (
    <Box style={{ display: "flex" }}>
      {symptoms.map((symtomObject) => {
        return (
          <SymptomFillterComponent clickable={false} style={{color:"#000",pointerEvent :"none"}}
            initialValue={symtomObject.symptomweight}
            symptomName={symtomObject.symptom}
          />
        );
      })}
    </Box>
  );
}
function ActualResultPopup({ ResultObject }) {
  return (
    <>
      {ResultObject ? (
        <>실제 진단을 받은 결과</>
      ) : (
        <>아직 실제 진단을 받지 않음</>
      )}
    </>
  );
}
function PostDetailComponent({ id }) {
  return (
    <div>
      <PostCard dataForPost={DemoObject} />
    </div>
  );
}

export default PostDetailComponent;
