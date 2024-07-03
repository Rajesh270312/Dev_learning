import './Pricingcard.css'

export function Pricingcard({ title, price, features, buttonLabel }){
    return (
    
        <div className="plan-card">
            <div className="plan-header">
                <h3>{title}</h3>
                <div className="plan-price">{price}
                    <span className="plan-price-unit">/month</span>
                </div>
            </div>
            <ul className="plan-features">
                <h4>Available features</h4>
            {features.map((feature, index) => (
                <li key={index} className={`feature-item ${feature.included ? 'included' : 'not-included'}`}>
                {feature.text}
                </li>
            ))}
            </ul>
            <button className="plan-button">{buttonLabel}</button>
        </div>
        
    )
}

     

 


