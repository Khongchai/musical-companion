import { useEffect } from "react";
import addStuffFromCartToUserAfterPurchase from "../utils/addStuffFromCartToUserAfterPurchase";

export default function useScript(
  src: string,
  paypalButtonContainer: React.MutableRefObject<any>,
  totalToPay: number,
  attachDataToUser: () => any
) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      (window as any).paypal
        .Buttons({
          createOrder: (_: any, actions: any, __: any) => {
            return actions.order.create({
              intent: "CAPTURE",
              purchase_units: [
                {
                  amount: {
                    value: totalToPay,
                    currentcy_code: "USD",
                  },
                },
              ],
            });
          },
          onApprove: async (_: any, action: any) => {
            return action.order.capture().then(() => {
              // const purchaseID = details.id;
              addStuffFromCartToUserAfterPurchase(attachDataToUser);
            });
          },
          onError: (err: any) => {
            alert(err);
          },
        })
        .render(paypalButtonContainer.current);
    };

    return () => {
      document.body.removeChild(script);
    };
  }, [paypalButtonContainer, totalToPay]);
}
