import { Button2 } from "../../components/button/button";
import { Footer } from "../../layout/Footer/Footer";
import { Navbar } from "../../layout/Navbar/navbar";
import { Topbar } from "../../layout/Topbar/topbar";
import './contact.css'
export function Contact(){
    return (
        <div style={{
            backgroundColor:"rgba(247, 247, 248, 1)",
        }}>
            <Topbar/>
            <Navbar/> 
                <Contactwithform />
            <Footer/>
        </div>
    )
}

function Contactwithform(){
    return (
        <div>
            <div className="contact-banner">
                <h1 style={{fontFamily:"'Be Vietnam Pro',sans-serif" , color: "rgba(89, 89, 90, 1)"}}> 
                    Contact Us
                </h1 >
                <p style={{fontFamily:"'Be Vietnam Pro',sans-serif", color: "rgba(89, 89, 90, 1)" }}>
                Welcome to SkillBridge's Pricing Plan page, where we offer two comprehensive options to cater to your needs: Free and Pro. We believe in providing flexible and affordable pricing options for our services. Whether you're an individual looking to enhance your skills or a business seeking professional development solutions, we have a plan that suits you. Explore our pricing options below and choose the one that best fits your requirements.
                </p>
            </div>
            <div className="contact-container">
                <div className="contact-form">
                    <form >
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" id="firstName" placeholder="Enter First Name" style={{width:"90%",color:" rgba(252, 252, 253, 1)"}}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" id="lastName" placeholder="Enter Last Name" style={{width:"90%",color:" rgba(252, 252, 253, 1)"}}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="Enter your Email" style={{width:"90%",color:" rgba(252, 252, 253, 1)"}} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input type="tel" id="phone" placeholder="Enter Phone Number" style={{width:"90%",color:" rgba(252, 252, 253, 1)"}}/>
                        </div>
                    </div>
                    <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <input type="text" id="subject" placeholder="Enter your Subject" style={{width:"95%",color:" rgba(252, 252, 253, 1)"}}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" placeholder="Enter your Message here..." style={{width:"95%",color:" rgba(252, 252, 253, 1)"}}></textarea>
                    </div>
                    <div style={{display:"flex",justifyContent:"center"}}>
                    <Button2>Submit Your Message</Button2>
                    </div>
                </form>
                </div>
                <div className="contact-info">
                    <div className="info-item">
                        <svg xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 96 960 960" width="25" target="_blank" style={{padding: "0.6rem"}}><path d="M480 572 176 388v348h608V388L480 572Zm0-76 278-168H202l278 168Zm0 156L160 376v400h640V376L480 652Z"/></svg>
                        <a href="mailto:girish.shelly@devanant.com" style={{color:" rgba(76, 76, 77, 1)"}}>girish.shelly@devanant.com</a>
                    </div>
                    <div className="info-item">
                        <svg xmlns="http://www.w3.org/2000/svg" height="25" viewBox="10 100 800 400" width="25" target="_blank" style={{padding: "0.6rem"}}><path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"/></svg>
                        <a  href="tel:9417142661"style={{color:" rgba(76, 76, 77, 1)"}} >+919417142661 </a>
                    </div>
                    <div className="info-item">
                        <svg xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 96 800 400" width="25" target="_blank" style={{padding: "0.6rem"}}><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
                        <span style={{color:" rgba(76, 76, 77, 1)"}}>2070, sector 32A, chandigarh road, Ludhiana, 141010
                        Punjab</span>
                    </div>
                    <div className="info-item">
                        <span style={{color:" rgba(76, 76, 77, 1)", paddingBottom:"10px"}}>Social Profiles</span>
                        <div >
                            <a className="css-vkhk1j" aria-label="Example Link" href="https://www.linkedin.com/company/devanant-app-private-limited/"  style={{padding: "0.6rem"}}><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 35 24" data-testid="LinkedInIcon"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path></svg></a>
                            <a className="css-vkhk1j" aria-label="Example Link" href="https://www.instagram.com/devanant12345/" style={{padding: "0.6rem"}}><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 35 24" data-testid="InstagramIcon"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path></svg></a>
                            <a className="css-vkhk1j" aria-label="Example Link" href="https://www.facebook.com/profile.php?id=100095231655902"  style={{padding: "0.6rem"}}><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 35 24" data-testid="FacebookIcon"><path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"></path></svg></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}