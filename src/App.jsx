import {Routes, Route} from 'react-router-dom'

import Layout from './components/layout/Layout'

import Home from './pages/Home'
import ExamplePage from './pages/ExamplePage'

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path="example" element={<ExamplePage/>}/>
            </Route>
        </Routes>
    )
}

export default App
