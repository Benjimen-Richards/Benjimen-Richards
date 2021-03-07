import React, { Component } from 'react';
import TableRow from './TableRow';

class UserList extends Component {    
      tabRow(data){
        if(data){
          return this.props.data.map(function(object, i){
              return <TableRow obj={object} key={i} />;
          })
        }
      }
      render() {
        console.log("props",)
        return (
            <div className="container">
            <table className="table table-striped">
              <thead>
                <tr>
                  <td>ID</td>
                  <td>Name</td>
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
export default UserList;