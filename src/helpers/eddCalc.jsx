function eddCalc(lmp){
    const lmpDateSelected = new Date(lmp) //convert string to date obj
    const day = lmpDateSelected.getUTCDate()
    const month = lmpDateSelected.getUTCMonth()
    const year = lmpDateSelected.getUTCFullYear()
    const lmpInMilliSeconds = Date.UTC(year, month, day+1)

    // add ms of lmp to avg preg num ms
    const avgPregMs = 24192000000
    const eddInMilliSeconds = avgPregMs + lmpInMilliSeconds
    const edd = new Date(eddInMilliSeconds).toLocaleDateString()
    if(lmp === ''){
        return ('')
    }else{
        return (<p>Based on your last period, we estimate your due date to be: <span id='edd'>{edd}</span></p>)
    }
}

export default eddCalc