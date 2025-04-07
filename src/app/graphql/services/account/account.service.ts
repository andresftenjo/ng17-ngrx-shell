import { Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment";
import { BaseGraphqlService } from "../graphQL.service";
import { Observable } from "rxjs";
import { GET_ACCOUNT, GET_RECIPIENT } from "../../querys/account/account.graphql";


@Injectable()
export class AccountService {

  private graphqlUrl!: string;

  constructor(private _graphqlService: BaseGraphqlService) {
    this.graphqlUrl = environment.graphqlUrl.back_office;
  }


  
  /**
   *Metodo que obtiene los clientes por cuentas
   *
   * @return {*}  {Observable<any>}
   * @memberof AccountService
   */
  public getClientByAccounts(): Observable<any> {
    //var variable = {"accountFilters":filter}
    return this._graphqlService.queryFilter<any,any>(
      GET_ACCOUNT,
      this.graphqlUrl,
    );
  }

  /**
   *Metodo que obtiene los destinatarios por cuenta
   *
   * @param {number} acocuntSelect
   * @return {*}  {Observable<any>}
   * @memberof AccountService
   */
  public getRecipients(acocuntSelect:number): Observable<any> {
    const filter = {
      accountId: acocuntSelect,
      storeId: environment.idApp,
    };
    return this._graphqlService.queryFilter<any,any>(
      GET_RECIPIENT,
      this.graphqlUrl,
      filter
    );
  }

}