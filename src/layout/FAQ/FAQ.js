import './FAQ.css'

export function FAQ(){


    const faqs = [
        {
          question: 'Can I enroll in multiple courses at once?',
          answer: 'Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.',
        },
        {
          question: 'What kind of support can I expect from instructors?',
          answer: 'You can expect support through various means such as live sessions, forums, and direct messaging.',
        },
        {
          question: 'Are the courses self-paced or do they have specific start and end dates?',
          answer: 'Our courses are designed to be self-paced, allowing you to learn at your own speed and convenience.',
        },
        {
          question: 'Are there any prerequisites for the courses?',
          answer: 'Some courses might have prerequisites. Please check the course details for more information.',
        },
        {
          question: 'Can I download the course materials for offline access?',
          answer: 'Yes, you can download the course materials for offline access.',
        },
      ];
    
      return (
        <div style={{display:"flex" , justifyContent:"center" , paddingBottom:"20px"}}>
        <div className="faq-container">
          <div className="faq-header">
            <h1>Frequently Asked Questions</h1>
            <p>Still you have any questions? Contact our Team via support@devanant.com</p>
            <button>See All FAQ's</button>
          </div>
          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <details key={index} className="faq-item">
                <summary className="faq-question">
                  {faq.question}
                  <span className="plus">
                        <span className="icon-plus">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 848 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
                        </span>
                        <span className="icon-minus">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 848 512"><path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg>
                        </span>
              </span>
                </summary>
                <div className="faq-answer">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
        </div>
        
    )
}