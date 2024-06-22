//Not currently in use


// function handleChange(e){
//     const { name, value, type, checked } = e.target
//     setFormData(prevFormData => {
//         return{
//             ...prevFormData,
//             [name]: type === 'checkbox'?checked:value,
//             [name]: value
//         }
//     })
    
// }


// export default handleChange

function handleChange(e, setFormData){
    const { name, value, type, checked } = e.target
    setFormData(prevFormData => {
        return{
            ...prevFormData,
            [name]: type === 'checkbox'?checked:value,
            [name]: value
        }
    })
}


export default handleChange