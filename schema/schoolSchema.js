export const schoolSchema = {
    name : {
        isString:{
            errorMessage : "Provide string only"
        },
        isLength:{
            options:{
                min:10,max:40
            },
            errorMessage : 'Provide min 10 to max 40 length of school'
        },
       
    },
    address : {
        isString:{
            errorMessage : "Provide string only"
        },
        isLength:{
            options:{
                min:5,max:40
            },
             errorMessage : 'Provide min 5 to max 20 address of school'
        },
       
    },
    latitude : {
        isNumeric:{
            errorMessage : "Provide number only"
        },
    },
    longitude : {
        isNumeric:{
            errorMessage : "Provide number only"
        },
    }
}