// import BgMainDesktop from './assets/images/bg-main-desktop.png'
// import BgMainMobile from './assets/images/bg-main-mobile.png'
import { Route, Routes } from 'react-router-dom';
import Form from './Form'

const Landing = () =>{
    return(
        <div>
            <Routes>
                <Route path="/" element={<Form />}/>
            </Routes>
        </div>
    )
}

export default Landing;