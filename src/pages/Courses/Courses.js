import { BigCoursecard } from "../../components/BigCoursecard/BigCoursecard";
import { Footer } from "../../layout/Footer/Footer";
import { Navbar } from "../../layout/Navbar/navbar";
import { Topbar } from "../../layout/Topbar/topbar";

export function Courses(){
    return (
        <div style={{
            backgroundColor:"rgba(247, 247, 248, 1)",
        }}>
            <Topbar/>
            <Navbar/> 
              <BigCoursecard />
            <Footer/>
        </div>
    )
}