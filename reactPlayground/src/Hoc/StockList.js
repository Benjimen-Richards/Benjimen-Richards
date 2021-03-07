import React, { Component } from 'react';
import TableRow from './TableRow';

class StockList extends Component {
     
      tabRow(data){
        if(data){
          return data.map(function(object, i){
              return <TableRow obj={object} key={i} />;
          })
        }
      }
      render() {
        
        return (
            <div className="container">
            <table className="table table-striped">
              <thead>
                <tr>
                  <td>Stock Name</td>
                  <td>Stock Price</td>
                </tr>
              </thead>
              <tbody>
                {this.tabRow(this.props.data)}
              </tbody>
            </table>
        </div>
        );
      }
}
export default StockList;