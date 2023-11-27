/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Mon, 27 Nov 2023 09:54:53 GMT
 */

import { 
  ContractDelta, 
  ContractDeltaModel, 
  Repository, 
  injectable, 
} from '@alien-worlds/aw-core';

import { DataDocumentType } from '../../data/dtos/notify-world-delta.dto';
import { DataEntityType } from '../../domain/entities/notify-world-delta';

/**
 * @description This abstract class represents a repository for `notify.world` contract deltas.
 */
@injectable()
export abstract class NotifyWorldDeltaRepository extends Repository<
  ContractDelta<DataEntityType, DataDocumentType>,
  ContractDeltaModel
> {
  public static Token = 'NOTIFY_WORLD_DELTA_REPOSITORY';
}
