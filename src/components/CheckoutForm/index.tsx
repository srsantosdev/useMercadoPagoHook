export const CheckoutForm: React.FC = () => {
  return (
    <form
      id="form-checkout"
      className="p-8 bg-gray-100 flex flex-col lg:w-full xl:w-3/5"
    >
      <label className="mt-8 text-base leading-4 text-gray-800">Nome do titular</label>
      <div className="mt-2 flex-col">
        <div>
          <input
            id="form-checkout__cardholderName"
            className="border rounded border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
            placeholder="Nome do titular"
          />
        </div>
      </div>

      <label className="mt-8 text-base leading-4 text-gray-800">Documentos</label>
      <div className="mt-2 flex-col">
        <div>
          <select
            className="border rounded-tl rounded-tr border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
            placeholder="Tipo de documento"
            id="form-checkout__identificationType"
          >
            <option value="CPF">CPF</option>
            <option value="CNPJ">CNPJ</option>
          </select>
        </div>
        <div>
          <input
            className="border rounded-bl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
            placeholder="000.000.000-00"
            id="form-checkout__identificationNumber"
          />
        </div>
      </div>

      <label className="mt-8 text-base leading-4 text-gray-800">Parcelas</label>
      <div className="mt-2 flex-col">
        <div>
          <select
            id="form-checkout__installments"
            className="border rounded border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
            placeholder="Parcelas"
          >
            <option value="1">1x</option>
            <option value="2">2x</option>
            <option value="3">3x</option>
            <option value="4">4x</option>
            <option value="5">5x</option>
            <option value="6">6x</option>
            <option value="7">7x</option>
            <option value="8">8x</option>
            <option value="9">9x</option>
            <option value="10">10x</option>
            <option value="11">11x</option>
            <option value="12">12x</option>
          </select>
        </div>
      </div>

      <label className="mt-8 text-base leading-4 text-gray-800">Detalhes do cartão</label>
      <div className="mt-2 flex-col">
        <div>
          <select
            className="border rounded-tl rounded-tr border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
            placeholder="0000 1234 6549 1515"
            id="form-checkout__issuer"
          >
            <option value="VISA">VISA</option>
            <option value="MASTERCARD">MASTERCARD</option>
            <option value="AMEX">AMEX</option>
          </select>
        </div>
        <div>
          <input
            className="border rounded-tl rounded-tr border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
            placeholder="0000 1234 6549 1515"
            id="form-checkout__cardNumber"
          />
        </div>
        <div className="flex-row flex">
          <input
            className="border rounded-bl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
            placeholder="MM/YY"
            id="form-checkout__cardExpirationDate"
          />
          <input
            className="border rounded-br border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
            placeholder="CVV"
            id="form-checkout__securityCode"
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-8 border border-transparent hover:border-gray-300 bg-gray-900 hover:bg-white text-white hover:text-gray-900 flex justify-center items-center py-4 rounded w-full"
      >
        <div>
          <p className="text-base leading-4">Pagar R$ 520,00</p>
        </div>
      </button>
    </form>
  )
}
