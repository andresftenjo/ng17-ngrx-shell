import { Injectable } from "@angular/core";
import { BaseGraphqlService } from "../graphQL.service";
import { Observable, of } from "rxjs";
import { SUBMIT_CONTACT_US_MUTATION } from "../../mutations/category-configuration.graphql";
import { environment } from "../../../../environments/environment";

@Injectable()
export class ContactUsService {

  private graphqlUrl!: string;

  constructor(private _graphqlService: BaseGraphqlService) {
    this.graphqlUrl = environment.graphqlUrl.contactUs;
  }

  public postContactUs(contactModel: any): Observable<any> {
    if (contactModel == null) {
      return of(null);
    }
    return this._graphqlService.mutate(
      SUBMIT_CONTACT_US_MUTATION,
      this.graphqlUrl,
      { input: contactModel, }
    );
  }
}