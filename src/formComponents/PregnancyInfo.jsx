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

            <label>
                First Day of Last Period
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

            <label>
                Estimated Due Date
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
            <label className='label-grid'>
                <input 
                    type='checkbox' 
                    name='isReceivingCare' 
                    className='isReceivingCare'
                    value={formData.isReceivingCare}
                    onChange={handleInputChange}
                />
                I am currently receiving or have received prenatal care.</label>                        
            </div>
            {/* <!-- TODO: revealed only if is-receiving-care --> */}
            <div className='container previousCare'>
                <label >
                    Care Provider's Name
                    <input 
                        type='text' 
                        name='careProvider' 
                        className='careProvider'
                        value={formData.careProvider}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Date of First Visit
                    <input 
                        type='date' 
                        name='firstVisit' 
                        className='firstVisit'
                        value={formData.firstVisit}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Date of Last Visit
                    <input 
                        type='date' 
                        name='lastVisit' 
                        className='lastVisit'
                        value={formData.lastVisit}
                        onChange={handleInputChange}
                    />
                </label>
            </div>

            <label>
                Number of pregnancies experienced (include this one)
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
                <label>
                    Number of miscarriages experienced
                    <input 
                        type='number' 
                        name='numberMiscarriages' 
                        className='numberMiscarriages'
                        value={formData.numberMiscarriages}
                        onChange={handleInputChange} 
                    />
                </label>
                <label>
                    Number of elective abortions experienced
                    <input 
                        type='number' 
                        name='numberElectiveAbortions' 
                        className='numberElectiveAbortions'
                        value={formData.numberElectiveAbortions}
                        onChange={handleInputChange} 
                    />
                </label>
                <label>
                    Total number of births experienced
                    <input 
                        type='number' 
                        name='numberBirths' 
                        className='numberBirths'
                        value={formData.numberBirths}
                        onChange={handleInputChange} 
                    />
                </label>
                <label>
                    Number of births before 37 weeks gestation experienced
                    <input 
                        type='number' 
                        name='numberPretermBirths' 
                        className='numberPretermBirths'
                        value={formData.numberPretermBirths}
                        onChange={handleInputChange} 
                    />
                </label>

            {/* <!-- Previous Pregnancy Info --> */}


                <label>
                    Please provide some details about previous pregnancy and/or birth experiences <br/>
                    (Date, # of weeks at birth/loss, any problems).
                    <textarea 
                        name='descriptionPreviousPregnancy' 
                        className='descriptionPreviousPregnancy'
                        value={formData.descriptionPreviousPregnancy}
                        onChange={handleInputChange}                     
                    ></textarea>
                </label>
                    
            </div>


            <label>
                Please describe any complications of a pregnancy (past or present) that you have experienced.
                <textarea 
                    name='previousPregnancyComplication' 
                    className='previousPregnancyComplication'
                    value={formData.previousPregnancyComplication}
                    onChange={handleInputChange}
                ></textarea>
            </label>
            <label>
                Please describe any diagnosis of any medical conditions, hospitalizations, and/or surgeries that you have experienced.
                <textarea 
                    name='previousDiagnosis' 
                    className='previousDiagnosis'
                    value={formData.previousDiagnosis}
                    onChange={handleInputChange}
                ></textarea>
            </label>
            <label>
                Please list any and all medications you are currently taking, including the reason and why you are taking it.
                <textarea 
                    name='currentMedications' 
                    className='currentMedications' 
                    value={formData.currentMedications}
                    onChange={handleInputChange}
                ></textarea>
            </label>

            <div className='container-checkbox'>
                <label className='label-grid'>
                    <input 
                        type='checkbox' 
                        name='otherProvider' 
                        className='otherProvider'
                        value={formData.otherProvider}
                        onChange={handleInputChange}
                    />
                    I am currently under the care of another provider for a reason outside of this pregnancy.
                    </label>            
            </div>

            {/* <!-- TODO: reveal only if other-provider --> */}
            <label>
                Please list the provider name and why you are seeing them.
                <textarea 
                    name='providerReason' 
                    className='providerReason'
                    value={formData.providerReason}
                    onChange={handleInputChange}>
                </textarea>
            </label>
            <label>
                What brought you to the birth center?
                <textarea 
                    name='birthCenterReason' 
                    className='birthCenterReason' 
                    value={formData.birthCenterReason}
                    onChange={handleInputChange}>
                </textarea>
            </label>
            <label>
                What type of maternity care experience are you looking for?
                <textarea 
                    name='maternityCare' 
                    className='maternityCare'                     
                    value={formData.maternityCare}
                    onChange={handleInputChange}>
                </textarea>
            </label>
            <label>
                Is there any thing in particular you wish to discuss with the midwife?
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