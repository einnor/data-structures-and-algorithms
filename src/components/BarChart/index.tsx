import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { IBarItem } from '../../@types';

import './style.scss';

type Props = {
  data: IBarItem [];
  dataKeys: string [];
};

const Chart = ({ data, dataKeys }: Props) => {
  return (
    <div className="bar-chart-container">
      {
        data.length ? (
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5, right: 30, left: 20, bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            {
              dataKeys.map((dataKey) => (
                <Bar key={dataKey} dataKey={dataKey} fill="#8884d8" />
              ))
            }
          </BarChart>
        ) : null
      }
    </div>
  );
};

export default Chart;
