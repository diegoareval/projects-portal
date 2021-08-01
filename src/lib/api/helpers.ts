import { AxiosError } from "axios"
import Logger from "../Logger"

class HelpersApi {
  static errorHandler(
    operation: string,
    message = "Server error"
  ) {
    return (error: AxiosError) => {
      Logger.error(operation, error)
      return {
        message,
      }
    }
  }

  static headers() {
  
    return {
      "Content-Type": "application/json",
    }
  }
}

export default HelpersApi
