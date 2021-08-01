type Loggable = string | Record<string, unknown> | Error

class Logger {
  static error = (message: string, ...data: Loggable[]) => {
      console.log(message, data)
  }
}

export default Logger
