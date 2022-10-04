const brkTimeToLocal = (brktime) => {
    localStorage.setItem('breaktime', brktime);
}


const addToList = (id) => {
    if (localStorage.getItem(id)){
        console.log('already exist');
    }
    else{

        localStorage.setItem('exercise-time', id);
    }
    
}

export {brkTimeToLocal, addToList}