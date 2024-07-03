import './Hero.css'
import { useNavigate } from 'react-router-dom';
import { Button2 , Button1 } from "../../components/button/button";


export function HeroSection(){
    const navigate = useNavigate();

    const coursesclick=()=>{
        navigate('/Courses');
    }
    

    const pricingclick=()=>{
        navigate('/Pricing');
    }

    return(
        <div className="Hero">
            <div className="Container">
                <div className="SubContainer">
                    <img src="Screenshot 2024-06-20 155554.png" className='icon' alt=''/>
                    <div><span className='target'>Unlock</span> Your Creative Potential</div>
                </div>
                <div className="TextContainer">
                    <h2>with Online Design and Development Courses.</h2>
                    <p>Learn from Industry Experts and Enhance Your Skills.</p>
                </div>
            </div>
            <div className="Buttons">
            <Button2 onClick={coursesclick}>Explore Courses</Button2>
            <Button1 onClick={pricingclick}>View Pricing</Button1>
            </div>
        </div>
    )
}