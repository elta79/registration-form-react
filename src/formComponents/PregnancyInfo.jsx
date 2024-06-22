import PropTypes from 'prop-types'
import '../styles/form.css'
import handleChange from '../helpers/handleChange'
import eddCalc from '../helpers/eddCalc'

// ****TODO: auto resize textarea***

// *******TODO: choose lmp or concept to calc EDD


const getEdd = ({lmp}) => {
    return eddCalc(lmp)
}

function PregnancyInfo({ formData, setFormData }){

    const handleInputChange = (e) =>{
        handleChange(e, setFormData)
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
                    onChange={handleInputChange}
                    required
                /> 
            </label>

            {/* ***Estimated Due Date Calculator*** */}
            <div className='eddCalc'>
                {getEdd(formData)}
                <p>Please input the date you believe to be your estimated due date in the field below.</p>
            </div>

            <label htmlFor='edd'>Estimated Due Date
                <input 
                    type='date' 
                    name='edd' 
                    className='edd' 
                    value={formData.edd}
                    onChange={handleInputChange}
                    required
                /> 
            </label>
            <div className='container-checkbox'>
                <input 
                    type='checkbox' 
                    name='isReceivingCare' 
                    className='isReceivingCare'
                    value={formData.isReceivingCare}
                    onChange={handleInputChange}
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
                        onChange={handleInputChange}
                    />
                </label>
                <label htmlFor='firstVisit'>Date of First Visit
                    <input 
                        type='date' 
                        name='firstVisit' 
                        className='firstVisit'
                        value={formData.firstVisit}
                        onChange={handleInputChange}
                    />
                </label>
                <label htmlFor='lastVisit'>Date of Last Visit
                    <input 
                        type='date' 
                        name='lastVisit' 
                        className='lastVisit'
                        value={formData.lastVisit}
                        onChange={handleInputChange}
                    />
                </label>
            </div>

            <label htmlFor='numberPregnancies'>Number of pregnancies experienced (include this one)
                <input 
                    type='number' 
                    name='numberPregnancies' 
                    className='numberPregnancies'
                    value={formData.numberPregnancies}
                    onChange={handleInputChange} 
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
                        onChange={handleInputChange} 
                    />
                </label>
                <label htmlFor='numberElectiveAbortions'>Number of elective abortions experienced
                    <input 
                        type='number' 
                        name='numberElectiveAbortions' 
                        className='numberElectiveAbortions'
                        value={formData.numberElectiveAbortions}
                        onChange={handleInputChange} 
                    />
                </label>
                <label htmlFor='numberBirths'>Total number of births experienced
                    <input 
                        type='number' 
                        name='numberBirths' 
                        className='numberBirths'
                        value={formData.numberBirths}
                        onChange={handleInputChange} 
                    />
                </label>
                <label htmlFor='numberPretermBirths'>Number of births before 37 weeks gestation experienced
                    <input 
                        type='number' 
                        name='numberPretermBirths' 
                        className='numberPretermBirths'
                        value={formData.numberPretermBirths}
                        onChange={handleInputChange} 
                    />
                </label>

            {/* <!-- Previous Pregnancy Info --> */}


                <label htmlFor='previousPregnancyInfo'>Please provide some details about previous pregnancy and/or birth experiences <br/>
                    (Date, # of weeks at birth/loss, any problems).
                    <textarea 
                        name='descriptionPreviousPregnancy' 
                        className='descriptionPreviousPregnancy'
                        value={formData.descriptionPreviousPregnancy}
                        onChange={handleInputChange}                     
                    ></textarea>
                </label>
                    
            </div>


            <label htmlFor=''>Please describe any complications of a pregnancy (past or present) that you have experienced.
                <textarea 
                    name='previousPregnancyComplication' 
                    className='previousPregnancyComplication'
                    value={formData.previousPregnancyComplication}
                    onChange={handleInputChange}
                ></textarea>
            </label>
            <label htmlFor=''>Please describe any diagnosis of any medical conditions, hospitalizations, and/or surgeries that you have experienced.
                <textarea 
                    name='previousDiagnosis' 
                    className='previousDiagnosis'
                    value={formData.previousDiagnosis}
                    onChange={handleInputChange}
                ></textarea>
            </label>
            <label htmlFor=''>Please list any and all medications you are currently taking, including the reason and why you are taking it.
                <textarea 
                    name='currentMedications' 
                    className='currentMedications' 
                    value={formData.currentMedications}
                    onChange={handleInputChange}
                ></textarea>
            </label>

            <div className='container-checkbox'>
                <input 
                    type='checkbox' 
                    name='otherProvider' 
                    className='otherProvider'
                    value={formData.otherProvider}
                    onChange={handleInputChange}
                />
                <label htmlFor='otherProvider'>I am currently under the care of another provider for a reason outside of this pregnancy.</label>            
            </div>

            {/* <!-- TODO: reveal only if other-provider --> */}
            <label htmlFor='providerReason'>Please list the provider name and why you are seeing them.
                <textarea 
                    name='providerReason' 
                    className='providerReason'
                    value={formData.providerReason}
                    onChange={handleInputChange}>
                </textarea>
            </label>
            <label htmlFor='birthCenterReason'>What brought you to the birth center?
                <textarea 
                    name='birthCenterReason' 
                    className='birthCenterReason' 
                    value={formData.birthCenterReason}
                    onChange={handleInputChange}>
                </textarea>
            </label>
            <label htmlFor='maternityCare'>What type of maternity care experience are you looking for?
                <textarea 
                    name='maternityCare' 
                    className='maternityCare'                     
                    value={formData.maternityCare}
                    onChange={handleInputChange}>
                </textarea>
            </label>
            <label htmlFor='discuss'>Is there any thing in particular you wish to discuss with the midwife?
                <textarea 
                    name='discuss' 
                    className='discuss' 
                    value={formData.discuss}
                    onChange={handleInputChange}>
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