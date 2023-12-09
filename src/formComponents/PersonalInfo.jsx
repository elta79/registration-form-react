import PropTypes from 'prop-types'
import '../styles/form.css'

function PersonalInfo({ formData, setFormData }){    
    

    function getAge(dob){
        //returns a string, split for 1st four and parse to number
        const ptDob = Number(dob.slice(0,4))  
        const today = new Date().getFullYear()
        if (ptDob === 0){
            return '--'
        }else{
            return today-ptDob
        }        
    }

    function getBMI(feet, inches, weight){
        const ft = Number(feet)
        const inc = Number(inches)
        const height = (ft*12)+inc
        const wt = Number(weight)
        const bmi = (703 * (wt/(height**2))).toFixed(1)       
        if (bmi === 'NaN'){
            return '--'
        }else{
            return (bmi)
        }        
    }
    
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
        <div className='personal-info-container'>
            
                <label htmlFor='firstName'>First Name</label>
                <input 
                    type='text'                     
                    name='firstName' 
                    className='firstName'
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                />
                <label htmlFor='lastName'>Last Name</label>
                <input 
                    type='text' 
                    name='lastName' 
                    className='lastName' 
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                />       
            
            
            <div >
                <label htmlFor='dobPatient'>Date of Birth</label>
                <input 
                    type='date'
                    name='dobPatient' 
                    className='dobPatient'
                    value={formData.dobPatient}
                    onChange={handleChange}
                    required
                />        
                <span>Age</span>
                <p id='age' >{getAge(formData.dobPatient)}</p>  
                </div>

                <label htmlFor='ssn'>Last 4 of Social Security Number</label>
                <input 
                    type='text' 
                    name='ssn'
                    className='ssn'
                    value={formData.ssn}
                    onChange={handleChange}
                    required
                />
            
            
                <span>Height</span>
                <div id='height' >
                    <label htmlFor='feet'>Feet</label>
                    <input 
                        type='number' 
                        name='feet' 
                        className='feet'
                        value={formData.feet}
                        onChange={handleChange}
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
                        onChange={handleChange}
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
                    onChange={handleChange}
                    required 
                />
                <span>BMI</span>
            {/* BMI Calculator */}
                <p id='bmi'>{getBMI(formData.feet, formData.inches, formData.weight)}</p>
            
           
{/* <!-- Contact Info --> */}

            <label htmlFor='address'>Address</label>
            <input 
                type='text' 
                name='address' 
                className='address' 
                value={formData.address}
                onChange={handleChange}
                required
            />
            
                <label htmlFor='city'>City</label>
                <input 
                    type='text' 
                    name='city'
                    className='city'
                    value={formData.city}
                    onChange={handleChange}
                />
                <label htmlFor='state'>State</label>
                <input 
                    type='text' 
                    name='state'
                    className='state'value={formData.state}
                    onChange={handleChange}
                />
                <label htmlFor='zip'>Zip Code</label>
                <input 
                    type='text' 
                    name='zip' 
                    className='zip'
                    value={formData.zip}
                    onChange={handleChange}
                    required
                />
            
                <label htmlFor='phone'>Phone</label>
                <input 
                    type='number' 
                    name='phone' 
                    className='phone' 
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />
                <label htmlFor='email'>Email Address</label>
                <input 
                    type='email' 
                    name='email' 
                    className='email' 
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            
{/* <!-- Emergency Contact --> */}
            
                <label htmlFor='emergencyName'>Emergency Contact Name</label>
                <input 
                    type='text' 
                    name='emergencyName' 
                    className='emergencyName'
                    value={formData.emergencyName}
                    onChange={handleChange}
                />
                <label htmlFor='emergencyPhone'>Emergency Contact Number</label>
                <input 
                    type='text' 
                    name='emergencyPhone' 
                    className='emergencyPhone'
                    value={formData.emergencyPhone}
                    onChange={handleChange}
                />
            
            

{/* <!-- Marital Status / Partner Info --> */}
            <label htmlFor='maritalStatus'>Marital Status:</label>
            <select 
                name='maritalStatus' 
                id='maritalStatus'
                value={formData.maritalStatus}
                onChange={handleChange}
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
                    onChange={handleChange}
                />
                <label htmlFor='partnerEmployer'>Partner&apos;s Employer</label>
                <input 
                    type='text' 
                    name='partnerEmployer' 
                    className='partnerEmployer'
                    value={formData.partnerEmployer}
                    onChange={handleChange}
                />
                <label htmlFor='partnerJobDescription'>Partner&apos;s Job Description</label>
                <input 
                    type='text' 
                    name='partnerJobDescription' 
                    className='partnerJobDescription'
                    value={formData.partnerJobDescription}
                    onChange={handleChange}
                />  
           
        </div>
    )
}

PersonalInfo.propTypes = {
    formData: PropTypes.object,
    setFormData: PropTypes.func
}
export default PersonalInfo