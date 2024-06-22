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
            
                <label>
                    First Name
                    <input 
                        type='text'                     
                        name='firstName' 
                        className='firstName'
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                    />
                </label>
                <label>
                    Last Name
                    <input 
                        type='text' 
                        name='lastName' 
                        className='lastName' 
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                    />       
                </label>
            
            <div >
                <label>
                    Date of Birth
                    <input 
                        type='date'
                        name='dobPatient' 
                        className='dobPatient'
                        value={formData.dobPatient}
                        onChange={handleInputChange}
                        required
                    />  
                </label>
                {/* age calculator       */}
                <span>Age</span>
                <p id='age'>{getAge(formData)}</p>  
                </div>

                <label>
                    Last 4 of Social Security Number
                    <input 
                        type='text' 
                        name='ssn'
                        className='ssn'
                        value={formData.ssn}
                        onChange={handleInputChange}
                        required
                        pattern='[0-9]{4}'
                    />
                </label>
            
                <span>Height</span>
                <div id='height' >
                    <label>
                        Feet
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
                    </label>
                    <label>
                        Inches
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
                    </label>
                </div>                
            
                <label>
                    Weight (in pounds)
                    <input 
                        type='number' 
                        name='weight' 
                        className='weight' 
                        value={formData.weight}
                        onChange={handleInputChange}
                        required 
                    />
                </label>
                <span>BMI</span>
            {/* BMI Calculator */}
                <p id='bmi'>{getBMI(formData)}</p>               
            
           
{/* <!-- Contact Info --> */}

            <label>
                Address
                <input 
                    type='text' 
                    name='address' 
                    className='address' 
                    autoComplete='street-address'
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                />
            </label>
                <label>
                    City
                    <input 
                        type='text' 
                        name='city'
                        className='city'
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                    />
                </label>
                <label>
                    State
                    <input 
                        type='text' 
                        name='state'
                        className='state'value={formData.state}
                        onChange={handleInputChange}
                        required
                        pattern='[A-Za-z]{2}'
                    />
                </label>
                <label>
                    Zip Code
                    <input 
                        type='text' 
                        name='zip' 
                        className='zip'
                        value={formData.zip}
                        onChange={handleInputChange}
                        required
                        pattern='[0-9]{5}'
                    />
                </label>
            
                <label>
                    Phone
                    <input 
                        type='tel' 
                        name='phone' 
                        className='phone'
                        autoComplete='tel'
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
                    />
                </label>
                <label>
                    Email Address
                    <input 
                        type='email' 
                        name='email' 
                        className='email'
                        autoComplete='email'
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                </label>
            
{/* <!-- Emergency Contact --> */}
            
                <label>
                    Emergency Contact Name
                    <input 
                        type='text' 
                        name='emergencyName' 
                        className='emergencyName'
                        value={formData.emergencyName}
                        onChange={handleInputChange}                    
                    />
                </label>
                <label>
                    Emergency Contact Number
                    <input 
                        type='text' 
                        name='emergencyPhone' 
                        className='emergencyPhone'
                        value={formData.emergencyPhone}
                        onChange={handleInputChange}
                        pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
                    />
                </label>
            
            

{/* <!-- Marital Status / Partner Info --> */}
            <label>
                Marital Status:
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
            </label>

{/* <!-- TODO: revealed only if marital status is partnership, married --> */}

            
                <label>
                    Partner's Full Name
                    <input 
                        type='text' 
                        name='partnerName' 
                        className='partnerName'
                        value={formData.partnerName}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Partner's Employer
                    <input 
                        type='text' 
                        name='partnerEmployer' 
                        className='partnerEmployer'
                        value={formData.partnerEmployer}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Partner's Job Description
                    <input 
                        type='text' 
                        name='partnerJobDescription' 
                        className='partnerJobDescription'
                        value={formData.partnerJobDescription}
                        onChange={handleInputChange}
                    />  
                </label>
        </div>
    )
}

PersonalInfo.propTypes = {
    formData: PropTypes.object,
    setFormData: PropTypes.func
}
export default PersonalInfo