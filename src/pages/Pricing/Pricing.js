import { Pricingcard } from "../../components/Pricingcard/Pricingcard";
import { Footer } from "../../layout/Footer/Footer";
import { Navbar } from "../../layout/Navbar/navbar";
import { Topbar } from "../../layout/Topbar/topbar";
import { FAQ } from "../../layout/FAQ/FAQ";
import './Pricing.css'
import { Button1, Button2 } from "../../components/button/button";
export function Pricing(){
    return (
        <div style={{
            backgroundColor:"rgba(247, 247, 248, 1)",
        }}>
            <Topbar/>
            <Navbar/> 
                <PricingSection />
                <FAQ />
            <Footer/>
        </div>
    )
}

function PricingSection()  {
    const freePlanFeatures = [
      { text: 'Access to selected free courses.', included: true },
      { text: 'Limited course materials and resources.', included: true },
      { text: 'Basic community support.', included: true },
      { text: 'No certification upon completion.', included: true },
      { text: 'Ad-supported platform.', included: true },
      { text: 'Access to exclusive Pro Plan community forums.', included: false },
      { text: 'Early access to new courses and updates.', included: false },
    ];
  
    const proPlanFeatures = [
      { text: 'Unlimited access to all courses.', included: true },
      { text: 'Unlimited course materials and resources.', included: true },
      { text: 'Priority support from instructors.', included: true },
      { text: 'Course completion certificates.', included: true },
      { text: 'Ad-free experience.', included: true },
      { text: 'Access to exclusive Pro Plan community forums.', included: true },
      { text: 'Early access to new courses and updates.', included: true },
    ];
  
    return (
        <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
             <div className="pricing-section">
                <h1>Our Pricing</h1>
                <p>Welcome to SkillBridge's Pricing Plan page, where we offer two comprehensive options to cater to your needs: Free and Pro. We believe in providing flexible and affordable pricing options for our services. Whether you're an individual looking to enhance your skills or a business seeking professional development solutions, we have a plan that suits you. Explore our pricing options below and choose the one that best fits your requirements.</p>
              </div>  

                <div className="pricing-toggle-buttons">
                    <Button2>Monthly</Button2>
                    <Button1>Yearly</Button1>
                </div>

            <div className="pricing-plans-container">
                <Pricingcard
                    title="Free Plan"
                    price="$0"
                    features={freePlanFeatures}
                    buttonLabel="Get Started"
                />
                <Pricingcard
                    title="Pro Plan"
                    price="$79"
                    features={proPlanFeatures}
                    buttonLabel="Get Started"
                />
             </div>
        </div>
    );
  };