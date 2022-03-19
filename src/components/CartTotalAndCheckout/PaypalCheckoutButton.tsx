import { Box, Input } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { useAddDataAfterPurchaseToUserAfterCheckoutMutation } from "../../generated/graphql";
import usePaypal from "../../utils-hooks/usePaypal";

const CheckoutButton: React.FC<{
  totalToPay: number;
}> = ({ totalToPay }) => {
  const [attachDataToUser] =
    useAddDataAfterPurchaseToUserAfterCheckoutMutation();

  // Delete this line after testing
  const [mockPaymentAmount, setMockPaymentAmount] = useState(0);

  const client = {
    sandboxKey:
      "AXSG6onMrHwrfcTYtTwVXBPX4BG1Nag8Dlo1rAUQrkWxD6Nc0UumEWcpw1KPceD0PIzHJeS3HOnhqfD6",
    productionKey:
      "AefzESw_LUu6JXFE5P8Bf72A4v5Oe6RSRtthksZLKJMSKEkt0NsdQN5b7SSDO_mcJ0OSqyPiHZQBCMTz",
  };

  // const clientID =
  //   process.env.NODE_ENV === "production"
  //     ? client.productionKey
  //     : client.sandboxKey;
  const clientID = client.productionKey;

  const paypalButtonContainer = useRef<any>(null);

  usePaypal(
    `https://www.paypal.com/sdk/js?client-id=${clientID}`,
    paypalButtonContainer,
    // totalToPay,
    mockPaymentAmount,
    attachDataToUser
  );

  return (
    <div>
      <Input
        onChange={(e) => setMockPaymentAmount(parseInt(e.target.value))}
      ></Input>
      <Box ml="auto" width="min(300px, 100%)" mt="1.5rem" display="block">
        <Box ref={paypalButtonContainer}></Box>
      </Box>
    </div>
  );
};

export default CheckoutButton;
