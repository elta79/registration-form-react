import { useState } from 'react'
import '../styles/form.css'
import PersonalInfo from '../formComponents/PersonalInfo'
import RaceAndEthnicity from '../formComponents/RaceAndEthnicity'
import FinancialInfo from '../formComponents/FinancialInfo'
import EducationAndEmployment from '../formComponents/EducationAndEmployment'
import PregnancyInfo from '../formComponents/PregnancyInfo'

function Form(){
    const PageTitles = ['Personal Info','Race & Ethnicity', 'Education & Employment', 'Financial Info', 'Pregnancy Info']
    
    const [page, setPage] = useState(0)

    const [formData, setFormData] = useState(
        {
            // text
            firstName:'',
            lastName:'',
            dobPatient:'',
            ssn:'',
            feet:'',
            inches:'',
            weight:'',
            address:'',
            city:'',
            state:'',
            zip:'',
            phone:'',
            email:'',
            emergencyName:'',
            emergencyPhone:'',
            employerName:'',
            jobDescription:'',
            partnerName:'',
            partnerEmployer:'',
            partnerJobDescription:'',
            insuranceName:'',
            policyId:'',
            groupId:'',
            insurancePhone:'',
            primaryName:'',
            primaryDob:'',
            primaryEmployer:'',
            lmp:'',
            edd:'',
            careProvider:'',
            firstVisit:'',
            lastVisit:'',
            numberPregnancies:'',
            numberMiscarriages:'',
            numberElectiveAbortions:'',
            numberBirths:'',
            numberPretermBirths:'',
            // datePreviousPregnancy:'',
            descriptionPreviousPregnancy:'',
            otherProvider:'',
            // textarea
            previousPregnancyComplication:'',
            previousDiagnosis:'',            
            currentMedications:'',
            providerReason:'',
            birthCenterReason:'',
            maternityCare:'',
            discuss:'',
            // checklist
            africanAmerican:false,
            ashkenaziJew:false,
            caucasian:false,
            eastAsian:false,
            haitian:false,
            mediterranean:false,
            northernEuropean:false,
            southAsian:false,
            southeastAsian:false,
            pacificIslander:false,
            isStudent:false,
            isEmployed:false,
            isReceivingCare:false,
            
        }
    )
    

    const PageDisplay = () => {

        if (page === 0){
            return <PersonalInfo formData={formData} setFormData={setFormData}/>
        }else if(page === 1){
            return  <RaceAndEthnicity formData={formData} setFormData={setFormData} />
        }else if(page === 2){
            return  <EducationAndEmployment formData={formData} setFormData={setFormData} />
        }else if(page === 3){
            return  <FinancialInfo formData={formData} setFormData={setFormData} />
        }else if(page === 4){
            return <PregnancyInfo formData={formData} setFormData={setFormData} />
        }

    }

// ***button functions***
    function handleNextClick(){        
        if(page < PageTitles.length-1){
            setPage(page+1)
        }        
    }
    function handlePrevClick(){
        if(page > 0){
            setPage(page - 1)
        }
    }

    function handleSubmit(event){ 
        event.preventDefault()
        alert("Form submitted form.jsx")
        // TODO: set up submit to DB
    }

// ********************************

    return(
        <div className='formPage'>
            <h1 className='form-title'>Registration Form</h1>
            <div className='progressBar'>
                {/* ***TODO:  create dynamic function to handle progress */}
                <div style={{width: page === 0 ? '20%': page===1? '40%': page===2 ? '60%': page===3 ? '80%' : '100%'}}></div>
            </div>
            <div className='formContainer'>
                <div className='formHeader'>
                    <h2>{PageTitles[page]}</h2>
                </div>
                <div className='formBody'>
                    <form onSubmit={handleSubmit} >
                        {PageDisplay()}
                        {/* Submit button hidden until on last page */}
                        <div className='submitButtonContainer'>
                            <button className="btn-submit" style={{display: page === PageTitles.length-1 ? 'block' : 'none'}} onClick={handleSubmit}>Submit</button>
                        </div>
                    </form>
                </div>
                <div className='formFooter'>
                    <button onClick={handlePrevClick} disabled={page === 0} >Prev</button>
                    <button onClick={handleNextClick} disabled={page === PageTitles.length-1}>Next</button>                    
                </div>            
            </div>            
        </div>
    )
}
 export default Form

