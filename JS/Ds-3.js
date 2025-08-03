// DS : The general meaning of Data structure is how we keep the data into the memory.
// -Two types of DS is avilable in JS : 1).Primitive (array)- jo inbuilt ho.  2).Non-primitive(graph,tree, linked-list) - jisse haame khud likhna padta ho. and haan ye yaad rakhna ki yaha haam datatypes ke baare me nhi DS ke baare me baat kr rhe hai.

    const person = {
        name : "Harsh Jha",
        College : "ADIT",

    // In Objects we put any types of value.like array and all.
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


    // Access the object key value.
        console.log(person.name);

    // Change the key values.
        person.name = 'Monkey Bajrangi Vlogger'

      
// How can i copy the actual object?, not his reference(memory address).
        let p1 = {
            fname : 'Sourav',
            lname : 'Joshi',
            age : 22
        }

        // let person2 = {
        //     fname : p1.fname,
        //     lname : p1.lname,
        //     age : p1.age
        // }

        // Here the successfully!, the acutal object copt from p1 to p2.

//Problem : What is if in p1 have 1000 values, so what we copy the 1000 values one by one from p1 to p2?
    // solution is spread operator.but it's not work in inner objects(nested objects), it's works only first/upper layer.
        let person2 = {
                ...p1
            }

//Concept: In inner Object (nested Object), we cannot copy the value, always it's all time copy reference so what the solution?
// solution : Shallow copy(...), 
//            Deep copy -> nested objects ko bhi copy karke lata hai.



    // Objects ka Deep Copy.
        // Object se string
        const p1kastring = JSON.stringify(p1)

        // String se phir object.
        let p2 = JSON.parse(p1kastring)

        
    