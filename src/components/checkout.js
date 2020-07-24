import React, { Component } from 'react'
import { PayPalButton } from "react-paypal-button-v2";

export default class Checkout extends Component {
    render() {
        return (
            <div>
                      <PayPalButton
        shippingPreference="NO_SHIPPING"
        amount="0.01"
        options={{
          clientId:
            "AYNUdhobCjQXyre8GefGGI1Bg_zDXMCiMn2G4_9SqAimZXj6K-3iaMW7AdBSNFqJdTWPOHiDA-Pa3GOt"
        }}
        onSuccess={(details, data) => {
          console.log("Details---------->", details);
          console.log("Data------------->", data);
        }}
      />
            </div>
        )
    }
}
