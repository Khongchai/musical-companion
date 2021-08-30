import checkForApolloMutationErrors from "./checkForApolloMutationErrrors";

export default async function addStuffFromCartToUserAfterPurchase(
  attachDataToUser: () => any
) {
  const result = await attachDataToUser();

  checkForApolloMutationErrors(result);

  if (result.data?.addDataAfterPurchaseToUserAfterCheckout?.purchaseSuccess) {
    location.href = "/my-items";
  } else {
    alert("Something went wrong, please contact the admin.");
  }
}
