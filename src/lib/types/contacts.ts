
export enum ContactType {
   CONTACT = "contact",
   PROJECT = "project",
   SERVICE = "service"
}
export type Contact = {
    name: string,
   email: string,
  message:string,
  type?: ContactType,
  bookDate?: Date,
  description?: string,
  ProjectId?: number
}

export type ContactResponse = {
    status: string,
    data: Contact,
    message: string
  }