import Axios from "axios"
import { FAQ_ENDPOINT } from "../endpoints"
import HelpersApi from "./helpers"
import { ApiError } from "../types/error"
import {
  Faq,
  FaqResponse,
} from "../types/faq"

class FaqApi {
  static getFaqs(): Promise<Faq[] | ApiError> {
    return Axios.get<FaqResponse>(FAQ_ENDPOINT, {
      headers: HelpersApi.headers(),
      withCredentials: false,
    })
      .then((response) => {
        const { data } = response.data
        if (data) {
          return data;
        } else {
          return []
        }
      })
      .catch(HelpersApi.errorHandler("Faqs"))
  }
}

export default FaqApi
