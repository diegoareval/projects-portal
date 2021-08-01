type GenericError = {
    message: string
  }
  
export  type ApiError = GenericError
  
  export type ConnectionError = {
    message: "Could not connect to the backend"
  }
  
  