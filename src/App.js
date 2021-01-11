import React from 'react';
import Navbar from './components/Navbar';
import DataStructure from './components/DataStructure'
import Footer from './components/Footer'
import Chart from './components/chart'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css'

function App() {
    return (
        <>
            <Router>
                <Navbar>
                    <Switch>
                        <Route path="/" exact/>
                        <Route path="/dasboard" component={DataStructure}></Route>
                        <Route path="/dasboard" component={Chart}></Route>
                        <Route path="/" component={Footer}></Route>
                    </Switch>
                </Navbar>
                <DataStructure>
                    
                </DataStructure>
                    
                <Footer>
                    
                </Footer>
              
            </Router>
        </>
    )
}

export default App