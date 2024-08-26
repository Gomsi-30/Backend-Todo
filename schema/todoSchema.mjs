export const schoolSchema = {
    title : {
        isString:{
            errorMessage : "Provide string only"
        },
        isLength:{
            options:{
                min:5,max:30
            },
            errorMessage : 'Provide min 5 to max 30 length of school'
        },
       
    },
    description : {
        isString:{
            errorMessage : "Provide string only"
        },
        isLength:{
            options:{
                min:10,max:200
            },
             errorMessage : 'Provide min 10 to max 200 address of school'
        },
       
    }
    
}