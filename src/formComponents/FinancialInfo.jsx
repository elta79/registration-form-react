import PropTypes from 'prop-types'
import '../styles/form.css'

function FinancialInfo({ formData, setFormData }){
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
    return(
        <div className='financial-info-container'>
        {/* <!-- Financial Information --> */}
            
            <label htmlFor='financial'>Financial Situation:
                <select 
                name='financial' 
                id='financial'                    
                value={formData.financial}
                onChange={handleChange}
                >
                    <option value='selfPay'>Self Pay</option>
                    <option value='medicaid'>Medicaid</option>
                    <option value='insurance'>Insurance</option>
                </select>
            </label>
            {/* <!-- TODO: revealed only if financial is medicaid, insurance --> */}
            {/* <div className='container payorInfo'> */}
                <label htmlFor='insuranceName'>Insurance Company Name
                    <input 
                        type='text' 
                        name='insuranceName' 
                        id='insuranceName'
                        value={formData.insuranceName}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor='policyId'>Policy Id #
                    <input 
                        type='text' 
                        name='policyId' 
                        id='policyId'
                        value={formData.policyId}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor='groupId'>Group Id #
                    <input 
                        type='text' 
                        name='groupId' 
                        id='groupId'
                        value={formData.groupId}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor='insurancePhone'>Insurance Phone Number
                    <input 
                        type='text' 
                        name='insurancePhone' 
                        id='insurancePhone'
                        value={formData.insurancePhone}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor='primaryName'>Primary Insured&apos;s Name
                    <input 
                        type='text' 
                        name='primaryName' 
                        id='primaryName'
                        value={formData.primaryName}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor='primaryDob'>Primary Insured&apos;s Date of Birth
                    <input 
                        type='date' 
                        name='primaryDob' 
                        id='primaryDob'
                        value={formData.primaryDob}
                        onChange={handleChange}
                    />    
                </label>
                <label htmlFor='primaryEmployer'>Primary Insured&apos;s Employer
                    <input 
                        type='text' 
                        name='primaryEmployer' 
                        className='primaryEmployer'
                        value={formData.primaryEmployer}
                        onChange={handleChange}
                    />
                </label>
            <fieldset>
                <legend>Primary Insured&apos;s Relation to Patient</legend>   
                <div className='grid-style'>
             
                    <input 
                        type='radio' 
                        name='primaryRelation' 
                        className='primarySpouse}
                        onChange={handleChange}' 
                        value={formData.primarySpouse}
                        onChange={handleChange}
                        checked
                    />
                    <label htmlFor='primarySpouse'>Spouse</label>
                    <input 
                        type='radio' 
                        name='primaryRelation' 
                        className='primaryParent'
                        value={formData.primaryParent}
                        onChange={handleChange}                    
                    />
                    <label htmlFor='primaryParent'>Parent</label>
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