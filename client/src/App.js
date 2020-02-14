import React from "react";
import axios from "axios";


class App extends React.Component{

    constructor(){
        super();
        this.state={
            players: []
        }
    }

    componentDidMount() {
        axios
        .get('http://localhost:5000/api/footballers')
        .then(res => {
            this.setState = ({
                players:[]
            })
        })
        .catch( error => console.log('error fetching data', error))
    }

    render(){
        return(
            <div>
                <h1>Testing......</h1>
            </div>
        )
    }


}
export default App;