import React from 'react'
import GooglePayButton from "@google-pay/button-react"
// import CheckOut from './CheckOut';

export default function MakePayment() {
  let price = JSON.parse(localStorage.getItem('checkOutTotalPriceFinal'));
  return (
    <div>
        {/* <CheckOut /> */}
        <div className='gpay--button'>
            <GooglePayButton
                environment="TEST"
                paymentRequest={{
                apiVersion: 2,
                apiVersionMinor: 0,
                allowedPaymentMethods: [
                    {
                    type: 'CARD',
                    parameters: {
                        allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                        allowedCardNetworks: ['MASTERCARD', 'VISA'],
                    },
                    tokenizationSpecification: {
                        type: 'PAYMENT_GATEWAY',
                        parameters: {
                        gateway: 'example',
                        gatewayMerchantId: 'exampleGatewayMerchantId',
                        },
                    },
                    },
                ],
                merchantInfo: {
                    merchantId: '674839472347384973824723824738478',
                    merchantName: 'Temp ID',
                },
                transactionInfo: {
                    totalPriceStatus: 'FINAL',
                    totalPriceLabel: 'Total',
                    totalPrice: `${price}`,
                    currencyCode: 'USD',
                    countryCode: 'US',
                },
                shippingAddressRequired: true,
                callbackIntents: ['SHIPPING_ADDRESS', 'PAYMENT_AUTHORIZATION'],
                }}
                onLoadPaymentData={paymentRequest => {
                console.log('Success', paymentRequest);
                }}
                onPaymentAuthorized={paymentData => {
                    console.log('Payment Authorised Success', paymentData)
                    return { transactionState: 'SUCCESS'}
                }
                }
                onPaymentDataChanged={paymentData => {
                    console.log('On Payment Data Changed', paymentData)
                    return { }
                }
                }
                existingPaymentMethodRequired='false'
                buttonColor='black'
                buttonType='Buy'
            />
        </div>
      </div>
  )
}
