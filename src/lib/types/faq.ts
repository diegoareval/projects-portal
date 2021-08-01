export type Faq = {
        id: number,
        question: string,
        answer: string
}

export type FaqResponse = {
    status: string,
    data: Faq[],
    message: string
  }
