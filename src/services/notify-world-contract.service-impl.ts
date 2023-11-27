/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Mon, 27 Nov 2023 09:54:53 GMT
 */

import { 
} from '../deltas/data/dtos';
import { 
  AntelopeRpcSourceImpl,
  AntelopeSmartContractServiceImpl,
} from '@alien-worlds/aw-antelope';

import { NotifyWorldContractService } from './notify-world-contract.service';
import { GetTableRowsOptions, Result } from '@alien-worlds/aw-core';

/**
 * A service class for interacting with the notify.world smart contract.
 * 
 * @class NotifyWorldContractServiceImpl
 * @extends {AntelopeSmartContractServiceImpl}
 * @implements { NotifyWorldContractService}
*/
export class NotifyWorldContractServiceImpl
  extends AntelopeSmartContractServiceImpl
  implements NotifyWorldContractService 
{
  /**
   * Creates an instance of NotifyWorldContractServiceImpl.
   * 
   * @constructor
   * @param {AntelopeRpcSourceImpl} antelopeRpcSourceImpl - The Antelope RPC source to use for interactions.
   * @param {string} serviceUrl - Service Url
   */
  constructor(antelopeRpcSourceImpl: AntelopeRpcSourceImpl, serviceUrl: string) {
    super(antelopeRpcSourceImpl, serviceUrl, 'notify.world');
  }

}
