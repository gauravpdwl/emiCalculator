import aboutStyle from '../style/css/about.module.css';

function About(){
    return (
        <>
            
            <div className={aboutStyle.main}>
                <h1 className={aboutStyle.heading1}>About This Loan EMI Calculator App</h1>
                <div className={aboutStyle.paragraphcontainer}>
                    <p className={aboutStyle.paragraph}>
                        This loan EMI calculator app was born out of my desire
                        to create a user-friendly and accessible tool for anyone needing to calculate 
                        their monthly loan payments. I've always been fascinated by finance and wanted to 
                        develop something practical that could help people make informed financial decisions.
                        Built with React, this app offers a smooth and interactive experience. I 
                        leveraged the power of React hooks and state management for efficient data handling 
                        and component rendering
                    </p>
                </div>
                
                <h1 className={aboutStyle.heading1}>Behind the Scenes</h1>
                <div className={aboutStyle.paragraphcontainer}>
                    <p className={aboutStyle.paragraph}>
                        This project allowed me to delve deeper into React concepts 
                        like component structure, state management, and user interface design. 
                        I also explored accessibility best practices to ensure the app is usable 
                        by everyone.
                    </p>
                </div>
                <h1 className={aboutStyle.heading1}>Developed by Gaurav &copy;2024.</h1>
            </div>
        </>
    )
}

export default About;