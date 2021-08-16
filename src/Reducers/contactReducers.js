const initialstate = {
    users: [
        {
          name: 'Frank',
          Location: 'Kumasi',
          PhoneNumber: '0246712461'
        }
      ],
    } 
    const contactReducers = (state={initialstate}, action)=> { 
        switch (action.type) { 
            case "ADD_USER": 
                return state 
            default: 
               return state; 
        }
     };
 export default contactReducers;
 