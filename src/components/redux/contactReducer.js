const initialList = [];

const contactReducer = (state = initialList, action) => {
        switch (action.type) {
                case 'add': return [...state, { ...action.contact, id: action.id }];

                case 'update': {
                        return state.map((card) => {
                          if (card.id === action.contact.id) {
                            card.name = action.contact.name;
                            card.email = action.contact.email;
                          }
                          return card;
                        });
                      }

                case 'delete': {
                        return state.filter((contact) => {
                                return contact.id !== action.id;
                        });
                }

                default: return state;
        }
}


export default contactReducer;