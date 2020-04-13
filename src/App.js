import React, {Component} from 'react';
import './App.css';
import Chart from './components/Chart'

class App extends Component {  //Problema no construtor, componentWillMount e getChart functions pq é o novo react com hooks e functions (stateless)
  constructor(){
    super();
    this.state = {
      chartData:{}
    }
  }

  componentWillMount(){
    this.getChartData();
  }

  getChartData(){
    // Ajax calls go here! (Aqui que vão as requisições pra API que vão buscar os dados do COVID)
    this.setState({
      chartData:{
        labels: ['Porto Alegre', 'Alegrete', 'Canoas','Novo Hamburgo'],
        datasets:[{
            label:'População',
            data:[
                1409000,
                78984,
                323827,
                246452
            ],
            backgroundColor:[
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)'
            ]
        }]
    }
    });
  }

  render(){
    return (
      <div className="App">
        <Chart chartData={this.state.chartData} legendPosition="top" />
      </div>
    );
  }
}

export default App;
