    // console.log(greek());
    function greek(){
        return "Bajrangi vlogger!";
    }

    function addTwo(num1, num2){
        return num1 + num2;
    }

    // console.log(addTwo(2, 2));

    function isEven(number){
        if(number % 2 == 0){
            // console.log("number is Even : ");
            return true;
        }
        else { 
            // console.log("number is odd : ");
            return false;
        }
    }

    // console.log(isEven(10));

        let age = 18;
    if (age > 18) {
    console.log("Adult");
    } else if (age === 18) {
    console.log("Just became adult");
    } else {
    console.log("Minor");
    }

    for (let number = 1; number <=5; number++) {
        // console.log(number)
    }

    
    for (number = 10; number > 0; number--){
            // console.log(number);
    }
    
    for(number = 1; number <= 20; number++){
        if(number % 2 == 0){
            // console.log(number);
        }
        
    }

    
    for(let tableNumber = 1; tableNumber <=10 ; tableNumber++){
        let table = 5 * tableNumber;
        // console.log(table);
    }
    
    for (let i = 1; i <= 5; i++) {
        if (i === 3) continue;
        // console.log(i);
    }
    
    for(let number = 1; number <= 10; number++){
        if(number % 2 == 1){
            if(number === 7 ) continue;
            console.log(number);
        }
    }
    
    for(number = 1; number <=10; number++){
        if(number % 2 == 0){
            console.log(`${number}, is odd`)
        }
        else if( number % 2 == 1){
            console.log(`${number}, is even`)
        }
    }

    // let sum = sum + number;

    // for(number = 1; number <=10; number++){
    //     console.log(number);
    // }