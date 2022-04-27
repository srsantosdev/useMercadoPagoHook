import { useCallback } from "react";
import { CheckoutForm } from "../components/CheckoutForm";
import { useMercadoPago } from "../hooks/useMercadoPago";
import { CheckoutLayout } from "../layouts/CheckoutLayout";

export default function Home() {
  const amount = 520

  const onSubmit = useCallback(async (token: string) => {
    console.log('token', token)
  }, [])

  useMercadoPago({ 
    amount, 
    onSubmit 
  })

  return (
    <CheckoutLayout>
      <CheckoutForm />
    </CheckoutLayout>
  );
}
