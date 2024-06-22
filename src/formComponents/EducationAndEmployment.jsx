import PropTypes from 'prop-types'
import '../styles/form.css'
import handleChange from '../helpers/handleChange.jsx'

function EducationAndEmployment({ formData, setFormData }){

    const handleInputChange = (e) =>{
        handleChange(e, setFormData)
    }

    return(
        <div className='education-info-container'>
             {/* <!-- Education / Employment --> */}
             
             
            <div className='container-checkbox'>   
                <label className='label-grid'>                            
                    <input 
                        type='checkbox' 
                        name='isStudent'
                        className='isStudent'
                        value={formData.isStudent}
                        onChange={handleInputChange}
                    />
                    I am currently a student. 
                </label> 
            </div>
                
                
            <label>
                Highest level of education completed:
                <select 
                    name='education' 
                    id='education'
                    value={formData.education}
                    onChange={handleInputChange}
                >
                    <option value='highSchool'>High School</option>
                    <option value='someCollege'>Some College</option>
                    <option value='bachelors'>Bachelor's Degree</option>
                    <option value='masters'>Master's Degree</option>
                    <option value='phd'>Ph.D or higher</option>
                    <option value='tradeSchool'>Trade School</option>
                </select>
            </label>

            <div className='container-checkbox'>
                <label className='label-grid'>                                                
                    <input 
                        type='checkbox' 
                        name='isEmployed' 
                        className='isEmployed'
                        value={formData.isEmployed}
                        onChange={handleInputChange}
                    />
                    I am currently employed.  
                </label>                        
            </div>

            {/* <!-- TODO: revealed only if is-employed --> */}
            {/* <div className='container-employed'> */}
                <label>
                    Employer's Name
                    <input 
                        type='text' 
                        name='employerName' 
                        className='employerName'
                        value={formData.employerName}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Job Description
                    <input 
                        type='text' 
                        name='jobDescription' 
                        className='jobDescription'
                        value={formData.jobDescription}
                        onChange={handleInputChange}
                    />
                </label>
            {/* </div> */}
        </div>
    )
}

EducationAndEmployment.propTypes = {
    formData: PropTypes.object,
    setFormData: PropTypes.func
}

export default EducationAndEmployment