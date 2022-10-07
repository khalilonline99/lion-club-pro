const brkTimeToLocal = (brktime) => {
    localStorage.setItem('breaktime', brktime);
}


const addToList = (time, id) => {
    
    const storedTime = localStorage.getItem('exercise-time')
    const storedTimeObj = JSON.parse(storedTime)
    let exerciseDatall = storedTimeObj;
    
    

    if (storedTime){

        let arry = ["default"];
        let arrio = exerciseDatall.map(storedTimeSingleObj => {
        arry = [...arry, storedTimeSingleObj.id]
        
        })
        
        if(arry.includes(id)){
            
        }
        else {
            exerciseDatall = [...exerciseDatall, {id,time}]
           
        }
    
    }
    else{
        exerciseDatall= [{id, time}];
    }
    localStorage.setItem('exercise-time', JSON.stringify(exerciseDatall));
    
}

const getStoredCart = () => {
    let exerciseData = []

    const storedTime = localStorage.getItem('exercise-time')
    if (storedTime){
     exerciseData = JSON.parse(storedTime)
    }
    return exerciseData;

}

const getBreakData = () => {
    let breakData =[]
    const storedBreakData = localStorage.getItem('breaktime')
    if (storedBreakData){
        breakData = JSON.parse(storedBreakData)
    }
    return breakData;
}


export {brkTimeToLocal, addToList, getStoredCart, getBreakData}