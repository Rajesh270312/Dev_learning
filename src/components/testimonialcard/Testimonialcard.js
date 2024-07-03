import './testimonialcard.css'
import { Button1 } from '../button/button'

export function Testimonialcard({img,name,details}){

    function fullstory(){
        return (
            <div>

            </div>
        )
    }
  return (
    <div className='TestCard'>
        <div className='Testdescription'>
             {details}
        </div>
        <div className='Testtitle'>
            <div style={{display:"flex", alignItems:"center"}}>
                <img src={img} alt='123' className='Testicon' />
                <div>
                     {name}
                </div>
            </div>
            <div style={{marginTop:"5%"}}>
                <Button1 onClick={fullstory} >View Full Story</Button1>
            </div>
        </div>

    </div>
  )
}