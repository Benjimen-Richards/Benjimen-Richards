// import axios from 'axios';
// import React, { Component } from 'react';
// import { Carousel } from 'react-bootstrap';
// const url = 'http://localhost:1234/movies'


// class Practice extends Component {
//     constructor() {
//         super()
//         this.state =
//         {
//             data: ''
//         }
//     }
//     renderslider = (data) => {
//         if (data) {
//             return data.map(pro =>
//             (
//                 <Carousel.Item>
//                     <img
//                         className="d-block w-100"
//                         src={pro.imageurl}
//                         alt="First slide"
//                         style={{ width: '200px', height: '500px' }}
//                     />
//                     <Carousel.Caption>
//                         <h3>{pro.name}</h3>
//                         <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//                     </Carousel.Caption>
//                 </Carousel.Item>
//             )
//             )
//         }
//     }
//     render() {
//         console.log('d', this.state.data)
//         return (
//             // <Carousel>
//             //     {this.renderslider(this.state.data)}


//             // </Carousel >
//             <Table responsive>
//                 <thead>
//                     <tr>
//                         <th>#</th>
//                         {Array.from({ length: 12 }).map((_, index) => (
//                             <th key={index}>Table heading</th>
//                         ))}
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr>
//                         <td>1</td>
//                         {Array.from({ length: 12 }).map((_, index) => (
//                             <td key={index}>Table cell {index}</td>
//                         ))}
//                     </tr>
//                     <tr>
//                         <td>2</td>
//                         {Array.from({ length: 12 }).map((_, index) => (
//                             <td key={index}>Table cell {index}</td>
//                         ))}
//                     </tr>
//                     <tr>
//                         <td>3</td>
//                         {Array.from({ length: 12 }).map((_, index) => (
//                             <td key={index}>Table cell {index}</td>
//                         ))}
//                     </tr>
//                 </tbody>
//             </Table>
//         );
//     }
//     componentDidMount() {
//         axios.get(url).then(res => this.setState({ data: res.data }))
//     }
// }
// export default Practice