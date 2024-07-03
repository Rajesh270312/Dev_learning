import { useNavigate } from 'react-router-dom'
import {  Button3 } from '../button/button'
import './CoursesCard.css'

export function CoursesCard({img,level,time,proff,name,details}){
    const navigate = useNavigate();

    const coursesclick=()=>{
        navigate('/Courses');
    }


    
    return (
        <div className='CourseCard'>
            <img src={img} className='Courseimg' alt='img'/>
            <div className='Courseinfo'>
                <div style={{border:"1px",display:"flex",justifyContent:"center"}}>
                    <div style={{margin:"5px"}}>
                         {level}
                    </div>
                    <div style={{margin:"5px"}}>
                         {time}
                    </div>
                </div>
                <div>
                    {proff}
                </div>
            </div>
            <div style={{display:"flex",flexDirection:"column", justifyContent:"flex-start"}}>
                <h2 className='Coursetitle'>
                    {name}
                </h2>
                <p className='Coursedescription'> 
                    {details}
                </p>
            </div>
            <Button3 onClick={coursesclick} id="coursebutton">Enroll Now</Button3>
        </div>
    )
}