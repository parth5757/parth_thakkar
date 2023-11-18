import {Route, BrowseRouter as Router, Routes } from 'react-router-dom';

const App = () => {
  return (
    <main className="bg-slate-300/20">
        <Router>
            Navbar
            <Routes>
                <Route path= " /" element = {'Home'}/>
                <Route path ="/about" element = {'About'} />
                <Route path ="/projects" element = {'projects'} />
                <Route path ="/contacts" element = {'Contacts'} />
            </Routes>
        </Router>
        <h1>parth</h1>
    </main>
  )
}

export default App