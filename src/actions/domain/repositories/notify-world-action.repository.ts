/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Mon, 27 Nov 2023 09:54:53 GMT
 */

import { 
  ContractAction, 
  ContractActionModel, 
  Repository, 
  injectable, 
} from '@alien-worlds/aw-core';

import { DataDocumentType } from '../../data/dtos/notify-world-action.dto';
import { DataEntityType } from '../../domain/entities/notify-world-action';

/**
 * @description This abstract class represents a repository for `notify.world` contract actions.
 */
@injectable()
export abstract class NotifyWorldActionRepository extends Repository<
  ContractAction<DataEntityType, DataDocumentType>,
  ContractActionModel
> {
  public static Token = 'NOTIFY_WORLD_ACTION_REPOSITORY';
}
