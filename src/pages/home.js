import Emicalculator from '../components/emicalculator';
import homeStyle from '../style/css/home.module.css';

function Home(){
    return (
        <>
            <div className={homeStyle.hometitle}>
                <h1 className={homeStyle.heading1}>Loan EMI Calculator</h1>
            </div>
            <Emicalculator/>
        </>
    )
}

export default Home;