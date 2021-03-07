import React, {Component} from 'react';

export default function Hoc(Benjimen, data){
    return class extends Component{
        constructor(props) {
            super(props);
            this.state = {
                data: data
            };
        }
        
        render(){
            return (
                <Benjimen data={this.state.data}/>
            );
        }
    } 
}