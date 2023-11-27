/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Mon, 27 Nov 2023 09:54:53 GMT
 */


import { 
  Logmine,
} from '../../domain/entities';
import { 
  ContractAction, 
  MapperImpl, 
  parseToBigInt 
} from '@alien-worlds/aw-core';

import { LogmineMongoMapper, LogmineRawMapper } from "./logmine.mapper";
import { MongoDB, MongoMapper } from '@alien-worlds/aw-storage-mongodb';
import { DataEntityType } from '../../domain/entities/notify-world-action';
import { 
  NotifyWorldActionMongoModel,
  NotifyWorldActionRawModel,
  LogmineMongoModel,
  LogmineRawModel,
} from '../dtos';
import { NotifyWorldActionName } from '../../domain/enums';

// Mongo Mapper
export class NotifyWorldActionMongoMapper
  extends MongoMapper<ContractAction<DataEntityType>, NotifyWorldActionMongoModel>
{
  public fromEntity(
    entity: ContractAction<DataEntityType>
  ): NotifyWorldActionMongoModel {
    let entityData;
    switch (entity.name) {
      case NotifyWorldActionName.Logmine:
        entityData = new LogmineMongoMapper().fromEntity(
          entity.data as Logmine
        );
        break;
    }

    const model: NotifyWorldActionMongoModel = {
      block_timestamp: entity.blockTimestamp,
      block_number: new MongoDB.Long(entity.blockNumber),
      global_sequence: new MongoDB.Long(entity.globalSequence),
      receiver_sequence: new MongoDB.Long(entity.receiverSequence),
      trx_id: entity.transactionId,
      action: {
        name: entity.name,
        account: entity.account,
        data: entityData,
      },
    };

    if (entity.id && MongoDB.ObjectId.isValid(entity.id)) {
      model._id =  new MongoDB.ObjectId(entity.id);
    }

    return model;
  }

  public toEntity(
    mongoModel: NotifyWorldActionMongoModel
  ): ContractAction<DataEntityType> {
    let data;
    switch (mongoModel.action.name) {
      case NotifyWorldActionName.Logmine:
        data = new LogmineMongoMapper().toEntity(
          mongoModel.action.data as LogmineMongoModel
        );
        break;
    }

    const {
      _id,
      block_timestamp,
      block_number,
      global_sequence,
      receiver_sequence,
      trx_id,
      action,
    } = mongoModel;

    return new ContractAction<DataEntityType>(
      _id.toString(),
      block_timestamp,
      parseToBigInt(block_number),
      action.account,
      action.name,
      parseToBigInt(global_sequence),
      parseToBigInt(receiver_sequence),
      trx_id,
      data,
    );
  }
}

// Processor Task Mapper
export class NotifyWorldActionProcessorTaskMapper extends MapperImpl<
  ContractAction<DataEntityType, NotifyWorldActionRawModel>,
  NotifyWorldActionRawModel
> {
  public fromEntity(
    entity: ContractAction<DataEntityType, NotifyWorldActionRawModel>
  ): NotifyWorldActionRawModel {
    throw new Error('method not implemented');
  }

  public toEntity(
    rawModel: NotifyWorldActionRawModel
  ): ContractAction<DataEntityType, NotifyWorldActionRawModel> {
    let data;
    switch (rawModel.name) {
      case NotifyWorldActionName.Logmine:
        data = new LogmineRawMapper().toEntity(
          rawModel.data as LogmineRawModel
        );
        break;
    }

    const {
      account,
      name,
      block_timestamp,
      block_number,
      global_sequence,
      recv_sequence,
      transaction_id,
    } = rawModel;

    return new ContractAction<DataEntityType, NotifyWorldActionRawModel>(
      '',
      block_timestamp,
      parseToBigInt(block_number),
      account,
      name,
      parseToBigInt(global_sequence),
      parseToBigInt(recv_sequence),
      transaction_id,
      data
    );
  }
}
