import React, { useState } from "react";
import ChartistGraph from "react-chartist";
import { makeStyles } from "@material-ui/core/styles";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "../../variables/charts.js";

import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

const Analytics = () => {
  const setHoverDataFunc = e => {
    // The chart is not updated because `chartOptions` has not changed.
    setHoverData(e.target.category);
  };

  const [chartOptions, setChartOptions] = useState({
    title: {
      text: "Chart Types"
    },
    xAxis: {
      categories: ["A", "B", "C"]
    },
    yAxis: {
      title: {
        text: "Frequency of Calls"
      }
    },
    series: [
      {
        name: "Family Calls",
        data: [
          13,
          11,
          2,
          3,
          15,
          18,
          3,
          3,
          6,
          4,
          9,
          5,
          3,
          0,
          1,
          9,
          10,
          12,
          27,
          19,
          14,
          15,
          25,
          14,
          15,
          15,
          5,
          5
        ]
      },
      {
        name: "Office Calls",
        data: [
          1,
          2,
          3,
          3,
          5,
          2,
          5,
          2,
          6,
          7,
          9,
          9,
          4,
          0,
          3,
          2,
          5,
          2,
          7,
          9,
          0,
          2,
          4,
          5,
          6,
          2,
          5,
          5
        ]
      },
      {
        name: "School Calls",
        data: [
          21,
          22,
          53,
          43,
          25,
          52,
          25,
          52,
          46,
          27,
          19,
          29,
          24,
          20,
          23,
          22,
          25,
          22,
          27,
          29,
          20,
          22,
          24,
          25,
          26,
          22,
          25,
          25
        ]
      }
    ],
    plotOptions: {
      series: {
        point: {
          events: {
            mouseOver: setHoverDataFunc
          }
        }
      }
    }
  });
  const [hoverData, setHoverData] = useState(null);

  const updateSeries = () => {
    // The chart is updated only with new options.
    this.setState({
      chartOptions: {
        series: [{ data: [Math.random() * 5, 2, 1] }]
      }
    });
  };
  const classes = useStyles();

  return (
    <div>
      <GridContainer>
        <GridItem md={12}>
          <Card chart>
            <HighchartsReact
              highcharts={Highcharts}
              constructorType={"stockChart"}
              options={chartOptions}
            />
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="success">
              <ChartistGraph
                className="ct-chart"
                data={dailySalesChart.data}
                type="Line"
                options={dailySalesChart.options}
                listener={dailySalesChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Calls with suspicious data</h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory} /> 5%
                </span>{" "}
                increase in today suspicious data.
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> updated 4 minutes ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="warning">
              <ChartistGraph
                className="ct-chart"
                data={emailsSubscriptionChart.data}
                type="Bar"
                options={emailsSubscriptionChart.options}
                responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                listener={emailsSubscriptionChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Family Calls</h4>
              <p className={classes.cardCategory}>Last Campaign Performance</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> campaign sent 2 days ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="danger">
              <ChartistGraph
                className="ct-chart"
                data={completedTasksChart.data}
                type="Line"
                options={completedTasksChart.options}
                listener={completedTasksChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Completed Tasks</h4>
              <p className={classes.cardCategory}>Last Campaign Performance</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> campaign sent 2 days ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default Analytics;
