import PropTypes from 'prop-types'
import '../styles/form.css'

function EducationAndEmployment({ formData, setFormData }){
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
        <div className='education-info-container'>
             {/* <!-- Education / Employment --> */}
             

            <div className='container-checkbox'>                
                <input 
                    type='checkbox' 
                    name='isStudent'
                    className='isStudent'
                    value={formData.isStudent}
                    onChange={handleChange}
                />
                <label htmlFor='isStudent'>I am currently a student.</label> 
            </div>
                
                
            <label htmlFor='education'>Highest level of education completed:</label>
            <select 
                name='education' 
                id='education'
                value={formData.education}
                onChange={handleChange}
            >
                <option value='highSchool'>High School</option>
                <option value='someCollege'>Some College</option>
                <option value='bachelors'>Bachelor&apos;s Degree</option>
                <option value='masters'>Master&apos;s Degree</option>
                <option value='phd'>Ph.D or higher</option>
                <option value='tradeSchool'>Trade School</option>
            </select>

            <div className='container-checkbox'>
                <input 
                    type='checkbox' 
                    name='isEmployed' 
                    className='isEmployed'
                    value={formData.isEmployed}
                    onChange={handleChange}
                />
                <label htmlFor='isEmployed'>I am currently employed.</label>                        
            </div>

            {/* <!-- TODO: revealed only if is-employed --> */}
            {/* <div className='container-employed'> */}
                <label htmlFor='employerName'>Employer&apos;s Name</label>
                <input 
                    type='text' 
                    name='employerName' 
                    className='employerName'
                    value={formData.employerName}
                    onChange={handleChange}
                />
                <label htmlFor='jobDescription'>Job Description</label>
                <input 
                    type='text' 
                    name='jobDescription' 
                    className='jobDescription'
                    value={formData.jobDescription}
                    onChange={handleChange}
                />
            {/* </div> */}
        </div>
    )
}

EducationAndEmployment.propTypes = {
    formData: PropTypes.object,
    setFormData: PropTypes.func
}

export default EducationAndEmployment