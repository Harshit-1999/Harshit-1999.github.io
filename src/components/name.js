import React, {Component} from 'react'
import ReactDOM from 'react-dom';

export default class Name extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div style={styles.name}>
                <h1>Harshit Yadav</h1>
            </div>
        )
    }
}

const styles={
    name:{
        padding:'40px'
    }
}