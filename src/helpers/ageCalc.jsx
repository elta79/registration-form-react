// TODO fix so that age depends on month we are in

function ageCalc(dob){
    //returns a string, split for 1st four and parse to number
    const ptDob = Number(dob.slice(0,4))  
    const today = new Date().getFullYear()
    if (ptDob === 0){
        return '--'
    }else{
        return today-ptDob
    }        
}

export default ageCalc