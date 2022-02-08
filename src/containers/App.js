import React, {Component} from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            Prod: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(response=> response.json()
        ).then(users =>  this.setState({Prod: users})
        );
    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value })
    }
    render() {
        const {Prod, searchField} = this.state;
        const filteredProd = Prod.filter(Prod => {
            return Prod.name.toLowerCase().includes(searchField.toLowerCase())
        })
        return !Prod.length ?
             <h1> Loading</h1> :
    (
        <div className="tc">
            <h1 className="f2">Prod Title</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <Scroll>
                <ErrorBoundry>
                 <CardList Prod={filteredProd}/> 
                 </ErrorBoundry>
            </Scroll>
          
        </div>
    );
    }
}

export default App;