import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './App.css'
import { Container } from './Components/index'
import { Home, Profile } from './Pages/index'
import { Header, Footer } from './sections/index'
const App = () => {

    return (
        <>
            <Router>
                <Header />
                <Container>
                    <Routes>
                        <Route path='/Cybrog' element={<Home />} />
                        <Route path='/profile' element={<Profile />} />
                    </Routes>
                </Container>
                <Footer />
            </Router>
        </>
    )
}

export default App;