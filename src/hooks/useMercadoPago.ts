import { FormEvent, useEffect, useMemo, useState } from "react";
import { MercadoPago } from "./types/MercadoPago";

interface Constructable<T> {
  new(key: string, options?: { locale: string }): T
}

declare global {
  interface Window {
    MercadoPago: Constructable<MercadoPago>
  }
}

interface UseMercadoPagoHookProps {
  amount: number
  onSubmit?: (token: string) => Promise<void>
}

export function useMercadoPago({ amount, onSubmit }: UseMercadoPagoHookProps) {
  const [mercadoPago, setMercadoPago] = useState<MercadoPago | null>(null)

  useEffect(() => {
    const publicKey = process.env.NEXT_PUBLIC_MERCADO_PAGO_PUBLIC_KEY

    const script = document.createElement('script')
    script.src = 'https://sdk.mercadopago.com/js/v2'

    script.addEventListener('load', () => {
      setMercadoPago(new window.MercadoPago(publicKey, {
        locale: 'pt-BR',
      }))
    })

    document.body.appendChild(script)

    return () => {
      const iframe = document.body.querySelector('iframe[src*="mercadolibre"]')

      if (iframe) {
        document.body.removeChild(iframe)
      }

      document.body.removeChild(script)
    }
  }, [])

  const formData = useMemo(() => {
    return mercadoPago?.cardForm({
      amount: amount.toString(),
      autoMount: true,
      form: {
        id: 'form-checkout',
        cardholderName: {
          id: 'form-checkout__cardholderName',
          placeholder: 'Nome do titular',
        },
        cardNumber: {
          id: 'form-checkout__cardNumber',
          placeholder: 'Número do cartão',
        },
        cardExpirationDate: {
          id: 'form-checkout__cardExpirationDate',
          placeholder: 'MM\YYYY'
        },
        securityCode: {
          id: 'form-checkout__securityCode',
          placeholder: 'CVV',
        },
        installments: {
          id: 'form-checkout__installments',
          placeholder: 'Total de parcelas'
        },
        identificationType: {
          id: 'form-checkout__identificationType',
          placeholder: 'CPF ou CNPJ'
        },
        identificationNumber: {
          id: 'form-checkout__identificationNumber',
          placeholder: 'Número do CPF ou CNPJ'
        },
        issuer: {
          id: "form-checkout__issuer",
          placeholder: "Bandeira",
        }
      },
      callbacks: {
        onFormMounted: error => {
          if (error) return console.warn("Form mounted handling error: ", error);
        },
        onSubmit: (event: FormEvent) => {
          event.preventDefault();
          const { token } = formData.getCardFormData();

          onSubmit?.(token)
        }
      }
    })
  }, [mercadoPago, amount, onSubmit])

  return {
    mercadoPago,
    formData,
  }
}