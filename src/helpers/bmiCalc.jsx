function bmiCalc(feet, inches, weight){
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

export default bmiCalc