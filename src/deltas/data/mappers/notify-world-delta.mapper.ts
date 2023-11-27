/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Mon, 27 Nov 2023 09:54:53 GMT
 */

import {} from '../../domain/entities';
import {
  ContractDelta,
  MapperImpl,
  parseToBigInt,
} from '@alien-worlds/aw-core';
import { MongoDB, MongoMapper } from '@alien-worlds/aw-storage-mongodb';
import { DataEntityType } from '../../domain/entities/notify-world-delta';
import { NotifyWorldDeltaMongoModel, NotifyWorldDeltaRawModel } from '../dtos';
import { NotifyWorldTableName } from '../../domain/enums';

// Mongo Mapper
export class NotifyWorldDeltaMongoMapper extends MongoMapper<
  ContractDelta<DataEntityType>,
  NotifyWorldDeltaMongoModel
> {
  public fromEntity(
    entity: ContractDelta<DataEntityType>
  ): NotifyWorldDeltaMongoModel {
    let entityData;
    // switch (entity.table) {
    // }

    const model: NotifyWorldDeltaMongoModel = {
      block_timestamp: entity.blockTimestamp,
      block_number: new MongoDB.Long(entity.blockNumber),
      code: entity.code,
      scope: entity.scope,
      table: entity.table,
      data: entityData,
      payer: entity.payer,
      primary_key: new MongoDB.Long(entity.primaryKey),
      present: entity.present,
    };

    if (entity.id && MongoDB.ObjectId.isValid(entity.id)) {
      model._id = new MongoDB.ObjectId(entity.id);
    }

    return model;
  }

  public toEntity(
    mongoModel: NotifyWorldDeltaMongoModel
  ): ContractDelta<DataEntityType> {
    let data;
    // switch (mongoModel.table) {
    // }

    const {
      _id,
      block_number,
      code,
      scope,
      table,
      payer,
      primary_key,
      present,
      block_timestamp,
    } = mongoModel;

    return new ContractDelta<DataEntityType>(
      _id.toString(),
      parseToBigInt(block_number),
      code,
      scope,
      table,
      data,
      payer,
      parseToBigInt(primary_key),
      present,
      block_timestamp
    );
  }
}

// Processor Task Mapper
export class NotifyWorldDeltaProcessorTaskMapper extends MapperImpl<
  ContractDelta<DataEntityType, NotifyWorldDeltaRawModel>,
  NotifyWorldDeltaRawModel
> {
  public fromEntity(
    entity: ContractDelta<DataEntityType, NotifyWorldDeltaRawModel>
  ): NotifyWorldDeltaRawModel {
    throw new Error('method not implemented');
  }

  public toEntity(
    rawModel: NotifyWorldDeltaRawModel
  ): ContractDelta<DataEntityType, NotifyWorldDeltaRawModel> {
    let data;
    // switch (rawModel.table) {
    // }

    const {
      block_number,
      code,
      scope,
      table,
      payer,
      primary_key,
      present,
      block_timestamp,
    } = rawModel;

    return new ContractDelta<DataEntityType, NotifyWorldDeltaRawModel>(
      '',
      parseToBigInt(block_number),
      code,
      scope,
      table,
      data,
      payer,
      parseToBigInt(primary_key),
      present,
      block_timestamp
    );
  }
}
