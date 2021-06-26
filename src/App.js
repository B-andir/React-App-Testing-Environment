// import React from 'react';  // Used for classes
import Header from './components/Header'


// Function based react component

function App() {
  const name = "Daniel";

  return (
    <div className="container">
      <Header />
    </div>
  );
}


// Class based react component

// class App extends React.Component {
//   render() {
//     return (
//       <div className='container'>
//         <Header />
//       </div>
//     )
//   }
// }

export default App;
