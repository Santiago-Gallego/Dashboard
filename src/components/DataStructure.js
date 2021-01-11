import React, { Component } from 'react';
import './DataStructure.css';
import Graphic from './chart'
import Graphic2 from './chart2'


class DataStructure extends Component {
    
    constructor() {
        super();

        this.state = {
            chartData: {
            }           
        }
    }

    componentDidMount(){
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
            })
    }

    


    render(){
        return(
            <div className="data-container">
                <div className="data-left">
                    <h4 className="title-group">Group #1</h4>
                    <div className="employee-title">
                        <h4>Employee</h4>
                    </div>
                    <div className="task-title">
                        <h4>KPIs</h4>
                    </div>
                    <div className="score-title">
                        <h4>Score</h4>
                    </div>
                    <div className="employee">
                        <p className="text-grid">Concerto</p>
                    </div>
                    <div className="task">
                        <p className="text-grid" >Clarity of goals and objectives.</p>
                    </div>
                    <div className="score">
                        <p className="text-grid">70%</p>
                    </div>
                    <div className="employee">
                        <p className="text-grid" Style="text-align: center">Cyclops Rick</p>
                    </div>
                    <div className="task">
                        <p className="text-grid" Style="text-align: center">Direct, open and fluid communication.</p>
                    </div>
                    <div className="score">
                        <p className="text-grid">86%</p>
                    </div>
                    <div className="employee">
                        <p className="text-grid" Style="text-align: center">Bubonic Plague</p>
                    </div>
                    <div className="task">
                        <p className="text-grid" Style="text-align: center">Participation in decisions.</p>
                    </div>
                    <div className="score">
                        <p className="text-grid">100%</p>
                    </div>
                </div>
                <div className="data-graphics">
                    <div className="data-bar">
                        <Graphic ></Graphic>
                    </div>
                    <div className="data-bar">
                        <Graphic ></Graphic>
                    </div>
                    <div className="data-pie">
                        <Graphic2></Graphic2>
                    </div>
                    <div className="data-progress-bar">
                        <Graphic></Graphic>
                    </div>
                    <div className="data-performancer">
                        <div className="boton"></div>
                        <h2 className="align-items">Performancer</h2>
                        <h2 className="align-items">80%</h2>
                    </div>
                </div>
            </div>
        )
    }
}
export default DataStructure;