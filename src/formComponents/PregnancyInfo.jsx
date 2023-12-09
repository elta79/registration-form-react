import PropTypes from 'prop-types'
import '../styles/form.css'

// ****TODO: auto resize textarea***

// *******TODO: choose lmp or concept to calc EDD
function eddCalc(lmp){
    const lmpDateSelected = new Date(lmp) //convert string to date obj
    const day = lmpDateSelected.getUTCDate()
    const month = lmpDateSelected.getUTCMonth()
    const year = lmpDateSelected.getUTCFullYear()
    const lmpInMilliSeconds = Date.UTC(year, month, day+1)

    // add ms of lmp to avg preg num ms
    const avgPregMs = 24192000000
    const eddInMilliSeconds = avgPregMs + lmpInMilliSeconds
    const edd = new Date(eddInMilliSeconds).toLocaleDateString()
    if(lmp === ''){
        return ('')
    }else{
        return (<p>Based on your last period, we estimate your due date to be: <span id='edd'>{edd}</span></p>)
    }
   
}

function PregnancyInfo({ formData, setFormData }){

    function handleChange(e){
        const { name, value, type, checked } = e.target
        setFormData(prevFormData => {
            return{
                ...prevFormData,
                [name]: type === 'checkbox'?checked:value,
                [name]: value
            }
        })
    }

    return (
        <div className='pregnancy-info-container'>
            {/* <!-- Pregnancy / Birth Information --> */}

            <label htmlFor='lmp'>First Day of Last Period
                <input 
                    type='date' 
                    name='lmp' 
                    className='lmp' 
                    value={formData.lmp}
                    onChange={handleChange}
                    required
                /> 
            </label>

            {/* ***Estimated Due Date Calculator*** */}
            <div className='eddCalc'>
                {eddCalc(formData.lmp)}
                <p>Please input the date you believe to be your estimated due date in the field below.</p>
            </div>

            <label htmlFor='edd'>Estimated Due Date
                <input 
                    type='date' 
                    name='edd' 
                    className='edd' 
                    value={formData.edd}
                    onChange={handleChange}
                    required
                /> 
            </label>
            <div className='container-checkbox'>
                <input 
                    type='checkbox' 
                    name='isReceivingCare' 
                    className='isReceivingCare'
                    value={formData.isReceivingCare}
                    onChange={handleChange}
                />
                <label htmlFor='isReceivingCare'>I am currently receiving or have received prenatal care.</label>                        
            </div>
            {/* <!-- TODO: revealed only if is-receiving-care --> */}
            <div className='container previousCare'>
                <label htmlFor='careProvider'>Care Provider&apos;s Name
                    <input 
                        type='text' 
                        name='careProvider' 
                        className='careProvider'
                        value={formData.careProvider}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor='firstVisit'>Date of First Visit
                    <input 
                        type='date' 
                        name='firstVisit' 
                        className='firstVisit'
                        value={formData.firstVisit}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor='lastVisit'>Date of Last Visit
                    <input 
                        type='date' 
                        name='lastVisit' 
                        className='lastVisit'
                        value={formData.lastVisit}
                        onChange={handleChange}
                    />
                </label>
            </div>

            <label htmlFor='numberPregnancies'>Number of pregnancies experienced (include this one)
                <input 
                    type='number' 
                    name='numberPregnancies' 
                    className='numberPregnancies'
                    value={formData.numberPregnancies}
                    onChange={handleChange} 
                    min='1'
                />
            </label>

            {/* <!-- TODO: reveal only if number-pregnancies > 0 --> */}
            <div className='container previousPregnancy'>
                <label htmlFor='numberMiscarriages'>Number of miscarriages experienced
                    <input 
                        type='number' 
                        name='numberMiscarriages' 
                        className='numberMiscarriages'
                        value={formData.numberMiscarriages}
                        onChange={handleChange} 
                    />
                </label>
                <label htmlFor='numberElectiveAbortions'>Number of elective abortions experienced
                    <input 
                        type='number' 
                        name='numberElectiveAbortions' 
                        className='numberElectiveAbortions'
                        value={formData.numberElectiveAbortions}
                        onChange={handleChange} 
                    />
                </label>
                <label htmlFor='numberBirths'>Total number of births experienced
                    <input 
                        type='number' 
                        name='numberBirths' 
                        className='numberBirths'
                        value={formData.numberBirths}
                        onChange={handleChange} 
                    />
                </label>
                <label htmlFor='numberPretermBirths'>Number of births before 37 weeks gestation experienced
                    <input 
                        type='number' 
                        name='numberPretermBirths' 
                        className='numberPretermBirths'
                        value={formData.numberPretermBirths}
                        onChange={handleChange} 
                    />
                </label>

            {/* <!-- Previous Pregnancy Info --> */}


                <label htmlFor='previousPregnancyInfo'>Please provide some details about previous pregnancy and/or birth experiences <br/>
                    (Date, # of weeks at birth/loss, any problems).
                    <textarea 
                        name='descriptionPreviousPregnancy' 
                        className='descriptionPreviousPregnancy'
                        value={formData.descriptionPreviousPregnancy}
                        onChange={handleChange}                     
                    ></textarea>
                </label>
                    
            </div>


            <label htmlFor=''>Please describe any complications of a pregnancy (past or present) that you have experienced.
                <textarea 
                    name='previousPregnancyComplication' 
                    className='previousPregnancyComplication'
                    value={formData.previousPregnancyComplication}
                    onChange={handleChange}
                ></textarea>
            </label>
            <label htmlFor=''>Please describe any diagnosis of any medical conditions, hospitalizations, and/or surgeries that you have experienced.
                <textarea 
                    name='previousDiagnosis' 
                    className='previousDiagnosis'
                    value={formData.previousDiagnosis}
                    onChange={handleChange}
                ></textarea>
            </label>
            <label htmlFor=''>Please list any and all medications you are currently taking, including the reason and why you are taking it.
                <textarea 
                    name='currentMedications' 
                    className='currentMedications' 
                    value={formData.currentMedications}
                    onChange={handleChange}
                ></textarea>
            </label>

            <div className='container-checkbox'>
                <input 
                    type='checkbox' 
                    name='otherProvider' 
                    className='otherProvider'
                    value={formData.otherProvider}
                    onChange={handleChange}
                />
                <label htmlFor='otherProvider'>I am currently under the care of another provider for a reason outside of this pregnancy.</label>            
            </div>

            {/* <!-- TODO: reveal only if other-provider --> */}
            <label htmlFor='providerReason'>Please list the provider name and why you are seeing them.
                <textarea 
                    name='providerReason' 
                    className='providerReason'
                    value={formData.providerReason}
                    onChange={handleChange}>
                </textarea>
            </label>
            <label htmlFor='birthCenterReason'>What brought you to the birth center?
                <textarea 
                    name='birthCenterReason' 
                    className='birthCenterReason' 
                    value={formData.birthCenterReason}
                    onChange={handleChange}>
                </textarea>
            </label>
            <label htmlFor='maternityCare'>What type of maternity care experience are you looking for?
                <textarea 
                    name='maternityCare' 
                    className='maternityCare'                     
                    value={formData.maternityCare}
                    onChange={handleChange}>
                </textarea>
            </label>
            <label htmlFor='discuss'>Is there any thing in particular you wish to discuss with the midwife?
                <textarea 
                    name='discuss' 
                    className='discuss' 
                    value={formData.discuss}
                    onChange={handleChange}>
                </textarea>
            </label>
        </div>
    )
}

PregnancyInfo.propTypes = {
    formData: PropTypes.object,
    setFormData: PropTypes.func
}

export default PregnancyInfo