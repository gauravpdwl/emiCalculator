import { useState, useEffect } from "react";
import homeStyle from '../style/css/home.module.css';

function Emicalculator(){

    const [amount, setAmount]=useState(1000000);
    const [interest, setInterest]=useState(8.5);
    const [tenure, setTenure]=useState(20);

    let [emi, setEmi]=useState(0);
    let [totalinterest, setTotalInterest]=useState(0); 

    useEffect(()=>{

        const months = tenure*12;

        // Calculate monthly interest rate
        const monthlyInterestRate = (interest/100)/12;

        const amounttmp=amount;

        // Calculate EMI using the formula
        let emi = (amounttmp * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, months)) / (Math.pow(1 + monthlyInterestRate, months) - 1);

        // Calculate total interest
        let totalinterest = (emi * months) - amounttmp;

        emi=Number((Math.round(emi * 100) / 100).toFixed(0));
        totalinterest=Number((Math.round(totalinterest * 100) / 100).toFixed(0));

        setEmi(emi);
        setTotalInterest(totalinterest);


    }, [tenure, interest, amount])

    return (
        <>
            <div className={homeStyle.inputvalues}>
                <div className={homeStyle.ivgroup}>
                    <label className={homeStyle.ivgroupchild}>Loan Amout</label>
                    <input 
                    className={homeStyle.ivgroupchild}
                    type="number"
                    value={amount}
                    onChange={(e)=>setAmount(e.target.value)} 
                    />
                </div>
                <div className={homeStyle.ivgroup}>
                    <label className={homeStyle.ivgroupchild}>Rate of Interest P.A.</label>
                    <input 
                    className={homeStyle.ivgroupchild}
                    type="number"
                    value={interest}
                    onChange={(e)=>setInterest(e.target.value)}  
                    />
                </div>
                <div className={homeStyle.ivgroup}>
                    <label className={homeStyle.ivgroupchild}>Loan Tenure Years</label>
                    <input
                    className={homeStyle.ivgroupchild}
                    type="number"
                    value={tenure}
                    onChange={(e)=>setTenure(e.target.value)} 
                    />
                </div>
            </div>
            <div>
                <div className={homeStyle.result}>
                    <div className={homeStyle.resultgroup}>
                        <label className={homeStyle.resultgroupchild}>Monthly EMI</label>
                        <input
                        className={homeStyle.resultgroupchild}
                        value={emi}
                        readonly
                        />
                    </div>
                    <div className={homeStyle.resultgroup}>
                        <label className={homeStyle.resultgroupchild}>Principle Amount</label>
                        <input
                        className={homeStyle.resultgroupchild}
                        value={amount}
                        readonly
                        />
                    </div>
                    <div className={homeStyle.resultgroup}>
                        <label className={homeStyle.resultgroupchild}>Total Interest</label>
                        <input
                        className={homeStyle.resultgroupchild}
                        value={totalinterest}
                        readonly
                        />
                    </div>
                    <div className={homeStyle.resultgroup}>
                        <label className={homeStyle.resultgroupchild}>Total Amount</label>
                        <input
                        className={homeStyle.resultgroupchild}
                        value={Number(amount)+Number(totalinterest)}
                        readonly
                        />
                    </div>
                </div>
            </div>
            
        </>
    )
}



export default Emicalculator;