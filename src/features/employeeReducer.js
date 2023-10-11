// employeeReducer.js

const initialState = {
  users: [], // Ajoutez le tableau users
  employee: {
    firstName: '',
    lastName: '',
    dateOfBirth: null,
    startDate: null,
    street: '',
    city: '',
    state: '',
    zipCode: '',
    department: 'Sales',
  },
};

const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_EMPLOYEE':
      return {
        ...state,
        users: [...state.users, action.payload], // Mettez à jour le tableau users
      };
    default:
      return state;
  }
};

export default employeeReducer;
