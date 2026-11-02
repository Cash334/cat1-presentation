const grade = ()=>{
    const registry = {
        "A" : {"min" : 79,"max" : 101},
        "B" : {"min" : 69, "max" : 80},
        "C" : {"min" : 59, "max" : 70},
        "D" : {"min" : 39, "max" : 60},
        "E" : {"min" : -1, "max": 40}
    };

    let graded = "";

    for(const [grade, constraints] of Object.entries(registry)){                        

        const {min, max} = constraints;
        console.log(min, max);
        const avg = 100

        if(min < avg && max > avg){
            graded = grade;
        }else{
            continue;
        };
    }

    return graded

}

console.log(grade());
console.log(isNaN("a"));