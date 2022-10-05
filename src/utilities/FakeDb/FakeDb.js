const brkTimeToLocal = (brktime) => {
    localStorage.setItem('breaktime', brktime);
}


const addToList = (time, id) => {
    let exerciseData = {}
    const storedTime = localStorage.getItem('exercise-time')

    if (storedTime){
        const storedTimeObj = JSON.parse(storedTime)

        if(id === storedTimeObj.id){

        }
        else{

            const newTime = storedTimeObj.time + time;
            time = newTime;
            let exerciseData = {time, id}
            localStorage.setItem('exercise-time', JSON.stringify(exerciseData));
        }

        
    }
    else{
        exerciseData = {time, id}
        localStorage.setItem('exercise-time', JSON.stringify(exerciseData));
    }
    
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