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

        address : {
            State:"GJ",
            City:"Surat",

        }
    }

    // In object when we want to access any value then the syntax is (person.keyName).
    console.log(person.Hobbies.indexOf("Reading"));
    