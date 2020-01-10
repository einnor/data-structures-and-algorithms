import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { IBarItem } from '../../@types';

import './style.scss';

type Props = {
  data: IBarItem [];
  dataKeys: string [];
  yAxis: string;
};

const COLORS = ['#173f5f', '#20639b', '#3caea3', '#f6d55c', '#ed553b'];

const Chart = ({ data, dataKeys, yAxis }: Props) => {
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
            <Bar dataKey={yAxis}>
              {
                data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))
              }
            </Bar>
          </BarChart>
        ) : null
      }
    </div>
  );
};

export default Chart;
