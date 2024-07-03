import { Pricingcard } from "../../components/Pricingcard/Pricingcard";
import { Footer } from "../../layout/Footer/Footer";
import { Navbar } from "../../layout/Navbar/navbar";
import { Topbar } from "../../layout/Topbar/topbar";
import { FAQ } from "../../layout/FAQ/FAQ";
import './Pricing.css'
import { Button1, Button2 } from "../../components/button/button";
import React ,{ useState } from "react";

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
    const [isYearly,setIsYearly] = useState(false);
      
            const freePlanFeaturesYearly = [
                { text: 'Access to selected free courses.', included: true },
                { text: 'Limited course materials and resources.', included: true },
                { text: 'Basic community support.', included: true },
                { text: 'No certification upon completion.', included: true },
                { text: 'Ad-supported platform.', included: false },
                { text: 'Access to exclusive Pro Plan community forums.', included: false },
                { text: 'Early access to new courses and updates.', included: false },
              ];
            
              const proPlanFeaturesYearly = [
                { text: 'Unlimited access to all courses.', included: true },
                { text: 'Unlimited course materials and resources.', included: true },
                { text: 'Priority support from instructors.', included: true },
                { text: 'Course completion certificates.', included: true },
                { text: 'Ad-free experience.', included: true },
                { text: 'Access to exclusive Pro Plan community forums.', included: true },
                { text: 'Early access to new courses and updates.', included: true },
              ];
       
    
    
    
            const freePlanFeaturesMonthly = [
                { text: 'Access to selected free courses.', included: true },
                { text: 'Limited course materials and resources.', included: true },
                { text: 'Basic community support.', included: true },
                { text: 'No certification upon completion.', included: true },
                { text: 'Ad-supported platform.', included: false },
                { text: 'Access to exclusive Pro Plan community forums.', included: false },
                { text: 'Early access to new courses and updates.', included: false },
              ];
            
              const proPlanFeaturesMonthly = [
                { text: 'Unlimited access to all courses.', included: true },
                { text: 'Unlimited course materials and resources.', included: true },
                { text: 'Priority support from instructors.', included: true },
                { text: 'Course completion certificates.', included: true },
                { text: 'Ad-free experience.', included: true },
                { text: 'Access to exclusive Pro Plan community forums.', included: true },
                { text: 'Early access to new courses and updates.', included: false },
              ];
     
    
    
      
    
      return (
        <div style={{display:"flex",justifyContent:"center",paddingTop:"10px"}}>
            <div className="home-pricing-section">
                <div className="home-pricing-heading">
                    <div>
                        <h2>Our Pricing</h2>
                        <p>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>
                    </div>
                    
                    <div className="home-toggle-buttons">
                        <Button2 onClick={() => setIsYearly(false)}>Monthly</Button2>
                        <Button1 onClick={() => setIsYearly(true)}>Yearly</Button1>
                    </div>
                </div>
                <div className="pricing-plans-container">
                        <Pricingcard
                            title="Free Plan"
                            price={isYearly ? "$0/year" : "$0/month"}
                            features={isYearly ? freePlanFeaturesYearly : freePlanFeaturesMonthly}
                            buttonLabel="Get Started"
                        />
                        <Pricingcard
                            title="Pro Plan"
                            price={isYearly ? "$499/year" : "$79/month"}
                            features={isYearly ? proPlanFeaturesYearly : proPlanFeaturesMonthly}
                            buttonLabel="Get Started"
                        />
                    </div>
            </div>
          
        </div>
       
      );
    };