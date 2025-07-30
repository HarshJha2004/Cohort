// DS : The general meaning of Data structure is how we keep the data into the memory.
// -Two types of DS is avilable in JS : 1).Primitive (array)- jo inbuilt ho.  2).Non-primitive(graph,tree) - jisse haame khud likhna padta ho. and haan ye yaad rakhna ki yaha haam datatypes ke baare me nhi DS ke baare me baat kr rhe hai.

    // Coding me Objects isiliye banaye jaate hai taaki haam real world Objects ko code kr paaye like Example T.V Remote.
    const person = {
        name : "Harsh Jha",
        College : "ADIT",
        Hobbies : ["GYM", "Coding", "Reading"],
        isMarried : false,
        hasGF : true,

        //and we can also create the function.
        getFullName : function(){
            return 'Harsh Jha'
        }, 

        //nested Object(object ke andar object)
        address : {
            State:"GJ",
            City:"Surat",

        }
    }

        // Change the key values.
            person.name = 'Monkey Bajrangi Vlogger'

    // In object when we want to access any value then the syntax is (arrayName.keyName).
    // console.log(person.Hobbies.indexOf("Reading"));
    // console.log(person.name.);
    


    let p1 = {
        fname : "JS",
        lname : "Scipt"
    }

   
    // console.log(p2);
    // console.log(p1);

    // To copy a actual Object, not his memory address.
    // let p2 = {
    //     ...p1 //spread opertor which is copy all the actual values of P1. not a memory address.but the problem is that of spread operator is vo inner (nested) Objects pe kaam nhi karta.
    // }

    // Objects ka Deep Copy.
        // Object se string
        const p1kastring = JSON.stringify(p1)

        // String se phir object.
        let p2 = JSON.parse(p1kastring)

        
    