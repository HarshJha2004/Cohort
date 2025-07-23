// Server call - server ko ek request bheji and waha se data liya.

    //  let weather = "Rainy"

    //  if(weather === "Rainy"){
    //     console.log("Haanji, Umbrella leke jaiyega.");
    //  }else if(weather === "Sunny"){
    //     console.log("Haanji, Bhai sunny hai");
        
    //  }

//  Question-2

    //  let numberOfGuest = 5;
    //  let pizzaSize; 

    //  if(numberOfGuest <= 2){
    //     pizzaSize = "small"
    //  }else if(numberOfGuest <= 4){
    //      pizzaSize = "Medium"
    //  }else if(numberOfGuest <= 6){
    //      pizzaSize = "Large"
    //  }

    //  console.log(pizzaSize);
     
// Question - 3

    // function gradeGiver(marks){
    //     if(marks >= 90){
    //         console.log("Grade A");
    //     }else if(marks >=80){
    //         console.log("Grade B");
    //     }else if(marks >= 70){
    //         console.log("Grade C");
    //     }else if(marks >= 60){
    //         console.log("Grade D");
    //     }else{
    //         console.log("Fail");
    //     }
    // }

    // gradeGiver(62);

    // Hitesh sir code.

    function calculateGrade(marks){
         if(marks >= 90){
            return "Grade A"
        }else if(marks >=80){
            return "Grade B"
        }else if(marks >= 70){
            return "Grade C"
        }else if(marks >= 60){
            return "Grade D"
        }else{
            return "Fail"
        }
    }

    let grade = calculateGrade(61); 
   console.log(calculateGrade(62));
