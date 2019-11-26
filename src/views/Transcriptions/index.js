import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import Table from "../../components/Table/Table.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

const useStyles = makeStyles(styles);

export default function Transcriptions() {
  const [showTranscribed, setShowTranscribed] = useState(null);
  const classes = useStyles();
  const handleTableRowClick = id => {
    setShowTranscribed(id + 1);
  };
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Transcriptions List</h4>
            <p className={classes.cardCategoryWhite}>
              Select any transcriptions to view its transcribed data
            </p>
          </CardHeader>
          <CardBody>
            <Table
              handleTableRowClick={handleTableRowClick}
              tableHeaderColor="primary"
              tableHead={["Name", "Length"]}
              tableData={[
                ["audio1.wav", "13 Min"],
                ["audio2.wav", "17 Min"],
                ["audio3.wav", "12 Min"],
                ["audio4.wav", "53 Min"],
                ["audio5.wav", "43 Min"],
                ["audio6.wav", "15 Min"]
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
      {showTranscribed && (
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4
                className={classes.cardTitleWhite}
              >{`audio${showTranscribed}.wav`}</h4>
            </CardHeader>
            <CardBody>
              <h5 style={{ marginLeft: "30px" }}>یہ نقل کا ڈیٹا ہے</h5>
            </CardBody>
          </Card>
        </GridItem>
      )}
    </GridContainer>
  );
}
