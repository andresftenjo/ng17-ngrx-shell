import { gql } from "apollo-angular";
import { DocumentNode } from "graphql";

const  GET_ACCOUNT: DocumentNode = gql`
query  {
        FindClient(StoreId:"1ADB5C6D-DC99-4BDD-A231-DE40EA2BFAD2", FiscalId:"860852321"){
          client {
          ClientId
          AccountId
          RecipientId
          FiscalId
          ClientName
          BusinessId
          SegmentId
          SubSegmentId
          AccountName
          AccountActive
          AccountActiveName
          ZoneId
          SubZoneId
          OriginId
          Address
          ZonesName
          SubZonesName
          OriginName
          ZipCode
          Latitude
          Longitude
          ClientActive
          ClientActiveName
          BusinessName
          SegmentName
          SubSegmentName
          DeliveryTypeId
          DeliveryTypeName
          PaymentConditionId
          PaymentConditionName
          DownloadTypeId
          DownloadName
          IsPurchaseOrderRequired
          RecipientActive
          RecipientActiveName
          PhoneNumber
          TechnicalAvisorId
          SaleAdvisorsId
          TechnicalAvisorName
          TechnicalAvisorEmail
          SaleAdvisorsName
          SaleAdvisorsEmail
          ClientProfileId
          LocationProfileId
          RecipientProfileId
          ClientServiceProfileId
          AddressDetails
          }
        accounts {
          ClientId
          AccountId
          RecipientId
          FiscalId
          ClientName
          BusinessId
          SegmentId
          SubSegmentId
          AccountName
          AccountActive
          AccountActiveName
          ZoneId
          SubZoneId
          OriginId
          Address
          ZonesName
          SubZonesName
          OriginName
          ZipCode
          Latitude
          Longitude
          ClientActive
          ClientActiveName
          BusinessName
          SegmentName
          SubSegmentName
          DeliveryTypeId
          DeliveryTypeName
          PaymentConditionId
          PaymentConditionName
          DownloadTypeId
          DownloadName
          IsPurchaseOrderRequired
          RecipientActive
          RecipientActiveName
          PhoneNumber
          TechnicalAvisorId
          SaleAdvisorsId
          TechnicalAvisorName
          TechnicalAvisorEmail
          SaleAdvisorsName
          SaleAdvisorsEmail
          ClientProfileId
          LocationProfileId
          RecipientProfileId
          ClientServiceProfileId
          AddressDetails
        }
      }
}
`;

export { GET_ACCOUNT };


const  GET_RECIPIENT: DocumentNode = gql`
query GetRecipient($accountId: Float!, $storeId: String!) {
  Recipient(AccountId: $accountId, StoreId: $storeId) {
    ClientId
    AccountId
    RecipientId
    FiscalId
    ClientName
    BusinessId
    SegmentId
    SubSegmentId
    AccountName
    AccountActive
    AccountActiveName
    ZoneId
    SubZoneId
    OriginId
    Address
    ZonesName
    SubZonesName
    OriginName
    ZipCode
    Latitude
    Longitude
    ClientActive
    ClientActiveName
    BusinessName
    SegmentName
    SubSegmentName
    DeliveryTypeId
    DeliveryTypeName
    PaymentConditionId
    PaymentConditionName
    DownloadTypeId
    DownloadName
    IsPurchaseOrderRequired
    RecipientActive
    RecipientActiveName
    PhoneNumber
    TechnicalAvisorId
    SaleAdvisorsId
    TechnicalAvisorName
    TechnicalAvisorEmail
    SaleAdvisorsName
    SaleAdvisorsEmail
    ClientProfileId
    LocationProfileId
    RecipientProfileId
    ClientServiceProfileId
    AddressDetails
  }
}
`;

export { GET_RECIPIENT };