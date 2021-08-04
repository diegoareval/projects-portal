import { Setting, SettingResponse } from './../types/settings';
import Axios from "axios"
import {  SETTING_ENDPOINT } from "../endpoints"
import HelpersApi from "./helpers"
import { ApiError } from "../types/error"

class SettingApi {
  static getSetting(): Promise<Setting | null | ApiError> {
    return Axios.get<SettingResponse>(SETTING_ENDPOINT, {
      headers: HelpersApi.headers(),
      withCredentials: false,
    })
      .then((response) => {
        const { data } = response.data
        if (data) {
          return data;
        } else {
          return null
        }
      })
      .catch(HelpersApi.errorHandler("getSetting"))
  }
}

export default SettingApi
