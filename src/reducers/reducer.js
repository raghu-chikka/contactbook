import {
  ContactData,
  getContact,
  updateContact,
  deleteContact,
  businessContact,
  personalContact
} from "../components/contacts/mock-data";

const initialState = {
  contacts: ContactData,
  contact: null,
};

export const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_CONTACT":
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
      };
    case "GET_CONTACT":
      let arr = state.contacts.filter(
        (contact) => contact.id == action.payload
      );
      arr = arr.values();
      for (let val of arr) {
        arr = val;
      }
      return {
        ...state,
        contact: arr,
      };
    case "UPDATE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id == action.payload.id ? action.payload : contact
        ),
      };
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
      case "BUSINESS_CONTACT":
        return {          
          contacts: state.contacts.filter(
            (contact) => contact.type == "business"            
          )
        };
        case "PERSONAL_CONTACT":
          return {
            contacts: state.contacts.filter(
              (contact) => contact.type == "personal"
            )
          }
    default:
      return state;
  }
};
