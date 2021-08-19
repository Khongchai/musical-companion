import { FetchResult } from "@apollo/client";

export default function checkForApolloMutationErrors(result: FetchResult<any>) {
  result.errors &&
    alert(`
                We're sorry, something went wrong, please contact the admin. 
                Error message: ${result.errors[0].message}
            `);
}
