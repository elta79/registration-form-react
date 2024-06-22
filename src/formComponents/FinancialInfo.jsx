import PropTypes from 'prop-types'
import '../styles/form.css'
import handleChange from '../helpers/handleChange'

function FinancialInfo({ formData, setFormData }){
    
    const handleInputChange = (e) => {
        handleChange(e, setFormData)
    }

    return(       

        <div className='financial-info-container'>
        {/* <!-- Financial Information --> */}
            
            <label>
                Financial Situation:
                <select 
                name='financial' 
                id='financial'                    
                value={formData.financial}
                onChange={handleInputChange}
                required
                >
                    <option value='selfPay'>Self Pay</option>
                    <option value='medicaid'>Medicaid</option>
                    <option value='insurance'>Insurance</option>
                </select>
            </label>
            {/* <!-- TODO: revealed only if financial is medicaid, insurance --> */}
            {/* <div className='container payorInfo'> */}
                <label>
                    Insurance Company Name
                    <input 
                        type='text' 
                        name='insuranceName' 
                        id='insuranceName'
                        value={formData.insuranceName}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Policy Id #
                    <input 
                        type='text' 
                        name='policyId' 
                        id='policyId'
                        value={formData.policyId}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Group Id #
                    <input 
                        type='text' 
                        name='groupId' 
                        id='groupId'
                        value={formData.groupId}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Insurance Phone Number
                    <input 
                        type='tel' 
                        name='insurancePhone' 
                        id='insurancePhone'
                        value={formData.insurancePhone}
                        onChange={handleInputChange}
                        pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
                    />
                </label>
                <label>
                    Primary Insured's Name
                    <input 
                        type='text' 
                        name='primaryName' 
                        id='primaryName'
                        value={formData.primaryName}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Primary Insured's Date of Birth
                    <input 
                        type='date' 
                        name='primaryDob' 
                        id='primaryDob'
                        value={formData.primaryDob}
                        onChange={handleInputChange}
                    />    
                </label>
                <label>
                    Primary Insured's Employer
                    <input 
                        type='text' 
                        name='primaryEmployer' 
                        className='primaryEmployer'
                        value={formData.primaryEmployer}
                        onChange={handleInputChange}
                    />
                </label>
            <fieldset>
                <legend>Primary Insured's Relation to Patient</legend>   
                <div className='grid-style'>
                    <label className='label-grid'>
                        <input 
                            type='radio' 
                            name='primaryRelation' 
                            className='primarySpouse}
                            onChange={handleInputChange}' 
                            value={formData.primarySpouse}
                            onChange={handleInputChange}
                            checked
                        />
                        Spouse
                    </label>
                    <label className='label-grid'>
                        <input 
                            type='radio' 
                            name='primaryRelation' 
                            className='primaryParent'
                            value={formData.primaryParent}
                            onChange={handleInputChange}                    
                        />
                        Parent
                    </label>
                </div>
            </fieldset>    

            
            
                
            {/* </div> */}
        </div>
    )
}

FinancialInfo.propTypes={
    formData: PropTypes.object,
    setFormData: PropTypes.func
}
export default FinancialInfo