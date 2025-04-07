import { Injectable } from "@angular/core";
import { Apollo } from 'apollo-angular';
import { DocumentNode } from 'graphql';
import { Observable, catchError, map, throwError } from "rxjs";

@Injectable()
export class BaseGraphqlService {

  constructor(private apollo: Apollo) { }


  /**
   *Metodo que se encarga de realizar consultas al backend
   *
   * @template T
   * @param {DocumentNode} query
   * @param {string} urlGraphql
   * @return {*}  {Observable<T>}
   * @memberof BaseGraphqlService
   */
  query<T>(query: DocumentNode, urlGraphql: string): Observable<T> {
    return this.apollo.watchQuery<{ data: T }>({
      query,
      context: { headers: this.getHeaders(), uri: urlGraphql },
      fetchPolicy: 'network-only'
    }).valueChanges.pipe(
      map((result) => result.data as T)
    );
  }



  /**
   *Metodo que se encarga de realizar consultas al backend por filtros
   *
   * @template T
   * @template F
   * @param {DocumentNode} query
   * @param {string} urlGraphql
   * @param {F} [filters]
   * @return {*}  {Observable<T>}
   * @memberof BaseGraphqlService
   */
  queryFilter<T, F>(query: DocumentNode, urlGraphql: string, filters?: F): Observable<T> {
    return this.apollo.watchQuery<{ data: T }>({
      query,
      variables: filters || {},
      context: { headers: this.getHeaders(), uri: urlGraphql },
      fetchPolicy: 'network-only'
    }).valueChanges.pipe(
      map((result) => result.data as T)
    );
  }


  mutate<T, V>(mutation: DocumentNode, urlGraphql: string, variables?: V ): Observable<T> {
    return this.apollo.mutate<{ data: T }>({
      mutation,
      variables: variables || {},
      context: { headers: this.getHeaders(), uri: urlGraphql },
    }).pipe(
      map((result) => result.data as T),
      catchError((error) => {
        console.error('Mutation error:', error);
        return throwError(() => error);
      })
    );
  }

  /**
   *Metodo que se encarga de organizar los headers de la peticion
   *
   * @private
   * @return {*}  {{ [key: string]: string }}
   * @memberof BaseGraphqlService
   */
  private getHeaders(): { [key: string]: string } {
    let stateApp: any;
    const headers = {
      'Authorization': ''
    };
    return headers;
  }

}