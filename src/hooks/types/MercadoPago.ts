type MercadoPagoCardFormInput = {
  amount: string;
  autoMount: boolean
  form: { 
    id: string;
    cardholderName: {
      id: string
      placeholder?: string
    },
    cardholderEmail?: {
      id: string;
      placeholder?: string
    },
    cardNumber: {
      id: string;
      placeholder?: string
    },
    cardExpirationDate: {
      id: string;
      placeholder?: string
    },
    securityCode: {
      id: string;
      placeholder?: string
    },
    installments: {
      id: string;
      placeholder?: string
    },
    identificationType: {
      id: string;
      placeholder?: string
    },
    identificationNumber: {
      id: string;
      placeholder?: string
    },
    issuer: {
      id: string;
      placeholder?: string
    },
  }
  callbacks: any
}

export type MercadoPago = {
  cardForm: (input: MercadoPagoCardFormInput) => any
  checkout: (e: any) => any
  constructor: (key: string, options: { locale: string }) => any
  createCardToken: (e: any, t: any) => Promise<any>
  getIdentificationTypes: () => Promise<any>
  getInstallments: (e: any) => Promise<any>
  getIssuers: (e: any) => Promise<any>
  getPaymentMethods: (e: any) => Promise<any>
}