const brkTimeToLocal = (brktime) => {
    localStorage.setItem('breaktime', brktime);
}


const addToList = (time, id) => {
    
    const storedTime = localStorage.getItem('exercise-time')
    const storedTimeObj = JSON.parse(storedTime)
    let exerciseDatall = storedTimeObj;
    // console.log(exerciseDatall);
    

    if (storedTime){

        let arry = ["default"];
        let arrio = exerciseDatall.map(storedTimeSingleObj => {
        arry = [...arry, storedTimeSingleObj.id]
        
    })
        if(arry.includes(id)){
            // console.log('exists', id);
        }
        else {
            exerciseDatall = [...exerciseDatall, {id,time}]
            console.log(exerciseDatall);
        }
    
    }
    else{
        exerciseDatall= [{id, time}];
    }

    /* const quantity = exerciseDatall[time]
    if (quantity) {
        const newQuantity = quantity + time;
        exerciseDatall[time] = newQuantity;
    } */
    
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