import React, { useState, useEffect } from 'react';
import {Bar} from 'react-chartjs-2';

const Graphic = () => {
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
                    label: "Percent scores",
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
          <Bar
            data={chartData}
            options={{
              scales: {
                yAxes: [
                  {
                    ticks: {
                      maxTicksLimit: 100,
                      beginAtZero: true
                    }
                  }
                ],
              }
            }}
          />
    );
  };
  
  export default Graphic;