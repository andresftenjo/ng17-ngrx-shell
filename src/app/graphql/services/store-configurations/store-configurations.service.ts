import { Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment";
import { BaseGraphqlService } from "../graphQL.service";
import { Observable } from "rxjs";
import { GET_STORE_CONFIGURATION } from "../../querys/store-configurations/store-configurations.graphql";
import { StoreConfigurationsResponse } from "../../models/store-configurations/store-configurations.model";


@Injectable()
export class StoreConfigurationService {

  private graphqlUrl!: string;

  constructor(private _graphqlService: BaseGraphqlService) {
    this.graphqlUrl = environment.graphqlUrl.back_office;
  }


  /**
   *Metodo que obtiene la configuracion de la tienda
   *
   * @return {*}  {Observable<StoreConfigurationsResponse>}
   * @memberof StoreConfigurationService
   */
  public getStoreConfigurations(): Observable<StoreConfigurationsResponse> {
    const filter = {
      storeId: environment.idApp,
      fiscalId: environment.fiscalId
    };
    return this._graphqlService.queryFilter<StoreConfigurationsResponse,any>(
      GET_STORE_CONFIGURATION,
      this.graphqlUrl,
      filter
    );
  }

}