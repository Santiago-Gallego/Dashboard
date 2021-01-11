import React, { useState, useEffect } from 'react';
import {Pie} from 'react-chartjs-2';

const Graphic2 = () => {
    const [chartData, setChartData] = useState({});
  
    const chart = () => {
    var name = [];
    var task = [];
    var score = [];
    fetch('https://rickandmortyapi.com/api/character/100,70,86')
        .then(response => {
            return response.json();
        })
        .then(characterJson => {
            for(const datObj of characterJson){
                name.push(datObj.name)
                task.push(datObj.status)
                score.push(parseInt(datObj.id))
            }
            setChartData({
                labels: name,
                datasets: [
                  {
                    data: score,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(255, 159, 64, 0.6)'
                    ]
                  }
                ]
              });
            })
            .catch(err => {
              console.log(err);
            });
    };

    useEffect(() => {
        chart();
      }, []);   
  
   
    return (
          <Pie
            data={chartData}
            options={{
                maintainAspectRatio: false,
              scales: {
                yAxes: [
                    {
                      ticks: {
                        autoSkip: true,
                        maxTicksLimit: 10,
                        beginAtZero: true
                      },
                      gridLines: {
                        display: false
                      }
                    }
                  ],
                  xAxes: [
                    {
                      gridLines: {
                        display: false
                      }
                    }
                  ]
              }
            }}
          />
    );
  };
  
  export default Graphic2;