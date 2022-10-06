const brkTimeToLocal = (brktime) => {
    localStorage.setItem('breaktime', brktime);
}


const addToList = (time, id) => {
    let exerciseDatall
    
    const storedTime = localStorage.getItem('exercise-time')

    if (storedTime){
        const storedTimeObj = JSON.parse(storedTime)
        console.log(storedTimeObj);

        let exerciseData = {id, time}
        exerciseDatall = {...exerciseData}

        
    }
    else{
        
        exerciseDatall = {}
        
    }

    const quantity = exerciseDatall[time]
    if (quantity) {
        const newQuantity = quantity + time;
        exerciseDatall[time] = newQuantity;
    }
    
    localStorage.setItem('exercise-time', JSON.stringify(exerciseDatall));
    
}

const getStoredCart = () => {
    let exerciseData = {}

    const storedTime = localStorage.getItem('exercise-time')
    if (storedTime){
     exerciseData = JSON.parse(storedTime)
    }
    return exerciseData;

}


export {brkTimeToLocal, addToList, getStoredCart}