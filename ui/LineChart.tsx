import React from 'react';
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

interface LineChartProps {
  data: Array<{
    date: string;
    distance: number;
    tokens: number;
  }>;
}

export const LineChart: React.FC<LineChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsLineChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis yAxisId="left" />
        <YAxis yAxisId="right" orientation="right" />
        <Tooltip />
        <Line
          yAxisId="left"
          type="monotone"
          dataKey="distance"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line
          yAxisId="right"
          type="monotone"
          dataKey="tokens"
          stroke="#82ca9d"
        />
      </RechartsLineChart>
    </ResponsiveContainer>
  );
};
