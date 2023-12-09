import PropTypes from 'prop-types'
import '../styles/form.css'

function RaceAndEthnicity({formData, setFormData}){

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
        <div className='race-info-container'>
{/* <!-- Race / Ethnicity --> */}
            <p>Certain health conditions are commonly associated with specific racial or ethnic groups.</p>
            <fieldset>
                <legend>Choose one:</legend>
                <div className='group grid-style'>
                    
                    <input 
                        type='radio' 
                        name='hispanic' 
                        id='trueHispanic' 
                        value='trueHispanic'
                        checked={formData.hispanic === 'trueHispanic'}
                        onChange={handleChange}
                    />
                    <p>Hispanic/Latino</p>
                    <input 
                        type='radio' 
                        name='hispanic' 
                        id='falseHispanic'
                        value='falseHispanic'
                        checked={formData.hispanic === 'falseHispanic'}
                        onChange={handleChange}
                    />
                    <span id='falseHispanic'>Not Hispanic/Latino</span>
                </div>
            </fieldset>
            
            <fieldset>                
            
            <legend>Choose all that apply:</legend>
            <div className='group grid-style'>
                <input 
                    type='checkbox' 
                    name='africanAmerican' 
                    className='africanAmerican'
                    value={formData.africanAmerican}
                    onChange={handleChange}
                />
                <span id='africanAmerican'>African American</span>
                
                <input 
                    type='checkbox' 
                    name='ashkenaziJew' 
                    className='ashkenaziJew'
                    value={formData.ashkenaziJew}
                    onChange={handleChange}
                />
                <span id='ashkenaziJew'>Ashkenazi Jew</span>
                
                <input 
                    type='checkbox' 
                    name='caucasian' 
                    className='caucasian'
                    value={formData.caucasian}
                    onChange={handleChange}
                />
                <span id='caucasian'>Caucasian</span>
                
                <input 
                    type='checkbox' 
                    name='eastAsian' 
                    className='eastAsian'
                    value={formData.eastAsian}
                    onChange={handleChange}
                />
                <span id='eastAsian'>East Asian</span>
                
                <input 
                    type='checkbox' 
                    name='haitian' 
                    className='haitian'
                    value={formData.haitian}
                    onChange={handleChange}
                />
                <span id='haitian'>Haitian</span>
                
                <input 
                    type='checkbox' 
                    name='mediterranean' 
                    className='mediterranean'
                    value={formData.mediterranean}
                    onChange={handleChange}
                />
                <span id='mediterranean'>Mediterranean</span>

                <input 
                    type='checkbox' 
                    name='northernEuropean' 
                    className='northernEuropean'
                    value={formData.northernEuropean}
                    onChange={handleChange}
                />
                <span 
                    id='northernEuropean'>Northern European</span>

                <input 
                    type='checkbox' 
                    name='southAsian' 
                    className='southAsian'
                    value={formData.southAsian}
                    onChange={handleChange}
                />
                <span id='southAsian'>South Asian</span>

                <input 
                    type='checkbox' 
                    name='southeastAsian' 
                    className='southeastAsian'
                    value={formData.southeastAsian}
                    onChange={handleChange}
                />
                <span id='southeastAsian'>Southeast Asian</span>

                <input 
                    type='checkbox' 
                    name='pacificIslander' 
                    className='pacificIslander'
                    value={formData.pacificIslander}
                    onChange={handleChange}
                />
                <span id='pacificIslander'>Pacific-Islander</span>
            </div>
            </fieldset>
            
                
        
        </div>
    )
}
RaceAndEthnicity.propTypes = {
    formData: PropTypes.object,
    setFormData: PropTypes.func
}
export default RaceAndEthnicity