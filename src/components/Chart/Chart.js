import React from 'react';

import './ChartBar';
import './Chart.css';

const Chart = ({ dataPoints }) => {
  return (
    <div className="chart">
      {dataPoints.map(dataPoint => (
        <CartBar
          key={dataPoint.label}
          label={dataPoint.label}
          value={dataPoint.value}
          maxValue={null}
        />
      ))}
    </div>
  );
};

export default Chart;
