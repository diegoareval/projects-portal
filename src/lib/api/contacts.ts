import { CONTACT_ENDPOINT } from '../endpoints';
import { ApiError } from '../types/error';
import { Contact, ContactResponse } from './../types/contacts';
import Axios from "axios";
import HelpersApi from "./helpers"

class ContactApi {
    static createContact(data: Contact): Promise<boolean | ApiError> {
      return Axios.post<ContactResponse>(CONTACT_ENDPOINT, data, {
        headers: HelpersApi.headers(),
        withCredentials: false,
      })
        .then((response) => {
          const { data } = response.data
          if (data) {
            return true;
          } else {
            return false
          }
        })
        .catch(HelpersApi.errorHandler("createContacts"))
    }
  }
  
  export default ContactApi