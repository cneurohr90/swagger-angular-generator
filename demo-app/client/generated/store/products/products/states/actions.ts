/* tslint:disable:max-line-length max-classes-per-file */
/**
 * Test Swagger
 * v1
 * example.com/api/api-base-path
 */

import {HttpErrorResponse} from '@angular/common/http';
import {Action} from '@ngrx/store';
import {ProductsParams} from '../../../../controllers/Products';
import * as __model from '../../../../model';

export enum Actions {
  START = '[Products Products] Start',
  SUCCESS = '[Products Products] Success',
  ERROR = '[Products Products] Error',
}

export class Start implements Action {
  readonly type = Actions.START;
  constructor(public payload: ProductsParams) {}
}

export class Success implements Action {
  readonly type = Actions.SUCCESS;
  constructor(public payload: __model.Products) {}
}

export class Error implements Action {
  readonly type = Actions.ERROR;
  constructor(public payload: HttpErrorResponse) {}
}

export type ProductsAction = Start | Success | Error;
