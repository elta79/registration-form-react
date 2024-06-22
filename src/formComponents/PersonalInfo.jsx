import PropTypes from 'prop-types'
import '../styles/form.css'
import handleChange from '../helpers/handleChange'
import bmiCalc from '../helpers/bmiCalc'
import ageCalc from '../helpers/ageCalc'

// TODO modal about c-section risk

function PersonalInfo({ formData, setFormData }){    
 
    const getAge = ({dobPatient}) => {
        return ageCalc(dobPatient)
    }

    const getBMI = ({feet, inches, weight }) => {        
        return bmiCalc(feet, inches, weight)
    }
    
    const handleInputChange = (e) => {
        handleChange(e, setFormData)
    }

    return (
        <div className='personal-info-container'>
            
                <label htmlFor='firstName'>First Name</label>
                <input 
                    type='text'                     
                    name='firstName' 
                    className='firstName'
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                />
                <label htmlFor='lastName'>Last Name</label>
                <input 
                    type='text' 
                    name='lastName' 
                    className='lastName' 
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                />       
            
            
            <div >
                <label htmlFor='dobPatient'>Date of Birth</label>
                <input 
                    type='date'
                    name='dobPatient' 
                    className='dobPatient'
                    value={formData.dobPatient}
                    onChange={handleInputChange}
                    required
                />  
                {/* age calculator       */}
                <span>Age</span>
                <p id='age'>{getAge(formData)}</p>  
                </div>

                <label htmlFor='ssn'>Last 4 of Social Security Number</label>
                <input 
                    type='text' 
                    name='ssn'
                    className='ssn'
                    value={formData.ssn}
                    onChange={handleInputChange}
                    required
                    pattern='[0-9]{4}'
                />
            
            
                <span>Height</span>
                <div id='height' >
                    <label htmlFor='feet'>Feet</label>
                    <input 
                        type='number' 
                        name='feet' 
                        className='feet'
                        value={formData.feet}
                        onChange={handleInputChange}
                        min='1' 
                        max='6' 
                        required
                    />
                    <label htmlFor='inches'>Inches</label>
                    <input 
                        type='number' 
                        name='inches' 
                        className='inches' 
                        value={formData.inches}
                        onChange={handleInputChange}
                        min='0' 
                        max='11' 
                        required
                    />
                </div>                
            
                <label htmlFor='weight'>Weight (in pounds)</label>
                <input 
                    type='number' 
                    name='weight' 
                    className='weight' 
                    value={formData.weight}
                    onChange={handleInputChange}
                    required 
                />
                <span>BMI</span>
            {/* BMI Calculator */}
                <p id='bmi'>{getBMI(formData)}</p>               
            
           
{/* <!-- Contact Info --> */}

            <label htmlFor='address'>Address</label>
            <input 
                type='text' 
                name='address' 
                className='address' 
                value={formData.address}
                onChange={handleInputChange}
                required
            />
            
                <label htmlFor='city'>City</label>
                <input 
                    type='text' 
                    name='city'
                    className='city'
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                />
                <label htmlFor='state'>State</label>
                <input 
                    type='text' 
                    name='state'
                    className='state'value={formData.state}
                    onChange={handleInputChange}
                    required
                    pattern='[A-Za-z]{2}'
                />
                <label htmlFor='zip'>Zip Code</label>
                <input 
                    type='text' 
                    name='zip' 
                    className='zip'
                    value={formData.zip}
                    onChange={handleInputChange}
                    required
                    pattern='[0-9]{5}'
                />
            
                <label htmlFor='phone'>Phone</label>
                <input 
                    type='tel' 
                    name='phone' 
                    className='phone' 
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
                />
                <label htmlFor='email'>Email Address</label>
                <input 
                    type='email' 
                    name='email' 
                    className='email' 
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                />
            
{/* <!-- Emergency Contact --> */}
            
                <label htmlFor='emergencyName'>Emergency Contact Name</label>
                <input 
                    type='text' 
                    name='emergencyName' 
                    className='emergencyName'
                    value={formData.emergencyName}
                    onChange={handleInputChange}
                    
                />
                <label htmlFor='emergencyPhone'>Emergency Contact Number</label>
                <input 
                    type='text' 
                    name='emergencyPhone' 
                    className='emergencyPhone'
                    value={formData.emergencyPhone}
                    onChange={handleInputChange}
                    pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
                />
            
            

{/* <!-- Marital Status / Partner Info --> */}
            <label htmlFor='maritalStatus'>Marital Status:</label>
            <select 
                name='maritalStatus' 
                id='maritalStatus'
                value={formData.maritalStatus}
                onChange={handleInputChange}
            >
                <option value='single'>Single</option>
                <option value='partnership'>Partnership</option>
                <option value='married'>Married</option>
                <option value='separated'>Separated</option>
                <option value='divorced'>Divorced</option>
                <option value='widowed'>Widowed</option>
            </select>

{/* <!-- TODO: revealed only if marital status is partnership, married --> */}

            
                <label htmlFor='partnerName'>Partner&apos;s Full Name</label>
                <input 
                    type='text' 
                    name='partnerName' 
                    className='partnerName'
                    value={formData.partnerName}
                    onChange={handleInputChange}
                />
                <label htmlFor='partnerEmployer'>Partner&apos;s Employer</label>
                <input 
                    type='text' 
                    name='partnerEmployer' 
                    className='partnerEmployer'
                    value={formData.partnerEmployer}
                    onChange={handleInputChange}
                />
                <label htmlFor='partnerJobDescription'>Partner&apos;s Job Description</label>
                <input 
                    type='text' 
                    name='partnerJobDescription' 
                    className='partnerJobDescription'
                    value={formData.partnerJobDescription}
                    onChange={handleInputChange}
                />  
           
        </div>
    )
}

PersonalInfo.propTypes = {
    formData: PropTypes.object,
    setFormData: PropTypes.func
}
export default PersonalInfo