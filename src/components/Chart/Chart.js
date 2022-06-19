import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
    const barValues = props.barsData.map(bar => bar.value)
    const totalMaximum = Math.max(...barValues)
  return (
    <div className="chart">
      {props.barsData.map((bar) => (
        <ChartBar
          key={bar.label}
          value={bar.value}
          maxValue={totalMaximum}
          label={bar.label}
        />
      ))}
    </div>
  );
};

export default Chart;
