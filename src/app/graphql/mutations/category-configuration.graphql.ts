import { gql } from "apollo-angular";
import { DocumentNode } from "graphql";

export interface ContactUsContractInput {
  contactEmail: string;
  contactFirstname: string;
  contactLastname: string;
  contactMessage: string;
  contactNumber: string;
  storeId: string;
}

const SUBMIT_CONTACT_US_MUTATION = gql`
  mutation createContactUs($input: ContactUsContractInput!) {
    createContactUs(input: $input) {
      contactUsId
      contactEmail
      contactFirstname
      contactLastname
      contactMessage
      contactNumber
      storeId
      creationDate
      creationUser
      updateDate
      updateUser
    }
  }
`;

export { SUBMIT_CONTACT_US_MUTATION };
