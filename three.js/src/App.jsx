// import {Route, BrowseRouter as Router, Routes } from 'react-dom/client';

// const App = () => {
//   return (
//     <main className="bg-slate-300/20">
//         <Router>
//             Navbar
//             <Routes>
//                 <Route path= "/" element = {'Home'} />
//                 <Route path ="/about" element = {'About'} />
//                 <Route path ="/projects" element = {'projects'} />
//                 <Route path ="/contacts" element = {'Contacts'} />
//             </Routes>
//         </Router>
//         <h1>parth</h1>
//     </main>

//     // <div>
//     //   <h1 className="text-3xl font-bold underline text-re">
//     //     Hi Parth
//     //   </h1>
//     // </div>
//   )
// }

// export default App


import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <main className="bg-slate-300/20">
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={'Home'} />
                <Route path="/about" element={'About'} />
                <Route path="/projects" element={'Projects'} />
                <Route path="/contacts" element={'Contacts'} />
            </Routes>
        </Router>
    </main>
  )
}

export default App;
