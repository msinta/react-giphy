import '../assets/stylesheets/application.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

// const Hello = (props) => {

// const {greeting, name} = props;
//   return <h1>{greeting} {name}!</h1>;
// };

// class Hello extends React.Component{
// render() {
// const {greeting, name} = this.props;
// return(
//   <div>
//     <h1>{greeting}{name}!</h1>
//   </div>
// );
// }

// }
const container = document.querySelector("#root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
