import React from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ReferenceLine,
    ResponsiveContainer,
  } from 'recharts';
const Dashboard = () => {

const marksArray = [
     
      {
        "name": "John",
        "physics": 75,
        "chemistry": 80,
        "math": 90
      },
      {
        "name": "Sarah",
        "physics": 80,
        "chemistry": 70,
        "math": 85
      },
      {
        "name": "David",
        "physics": 90,
        "chemistry": 85,
        "math": 95
      },
      {
        "name": "Emily",
        "physics": 85,
        "chemistry": 90,
        "math": 80
      },
      {
        "name": "Michael",
        "physics": 70,
        "chemistry": 80,
        "math": 75
      },
      {
        "name": "Rachel",
        "physics": 95,
        "chemistry": 95,
        "math": 90
      },
      {
        "name": "Ryan",
        "physics": 75,
        "chemistry": 85,
        "math": 80
      },
      {
        "name": "Olivia",
        "physics": 80,
        "chemistry": 90,
        "math": 95
      },
      {
        "name": "Jacob",
        "physics": 85,
        "chemistry": 75,
        "math": 80
      },
      {
        "name": "Emma",
        "physics": 90,
        "chemistry": 80,
        "math": 85
      }
    ]
  
  

    return (
        <div>
            <LineChart
            width = {500}
            height = {300}
            data = {marksArray}
            >
                <Line 
                stroke='green'
                dataKey="physics"
                ></Line>
                <Line
                stroke='red'
                dataKey="chemistry"
                ></Line>
                <Line
                stroke='purple'
                dataKey="math"
                
                ></Line>
               <XAxis dataKey="name"  />
               <YAxis />
               <Tooltip></Tooltip>
                
            </LineChart>
        </div>
    );
};

export default Dashboard;