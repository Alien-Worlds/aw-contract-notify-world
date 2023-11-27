/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Mon, 27 Nov 2023 09:54:53 GMT
 */

import { MapperImpl } from '@alien-worlds/aw-core';
import { MongoDB, MongoMapper } from '@alien-worlds/aw-storage-mongodb';
import { Asset, AssetMongoMapper, AssetRawMapper, Pair, PairMongoMapper, PairRawMapper } from '@alien-worlds/aw-antelope';
import { Logmine,  MiningData2  } from "../../domain/entities";
import { LogmineMongoModel, LogmineRawModel,  MiningData2MongoModel, MiningData2RawModel  } from "../dtos/logmine.dto";

// Mongo Mappers
export class LogmineMongoMapper
  extends MongoMapper<Logmine, LogmineMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('miner', { 
      key: 'miner', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('params', { 
      key: 'params', 
      mapper: (value: MiningData2) => new MiningData2MongoMapper().fromEntity(value),
    });

    this.mappingFromEntity.set('bounty', { 
      key: 'bounty', 
      mapper: (value: Asset) => new AssetMongoMapper().fromEntity(value),
    });

    this.mappingFromEntity.set('landId', { 
      key: 'land_id', 
      mapper: (value: number) => value,
    });

    this.mappingFromEntity.set('planetName', { 
      key: 'planet_name', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('landowner', { 
      key: 'landowner', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('bagItems', { 
      key: 'bag_items', 
      mapper: (values: number[][]) => values,
    });

    this.mappingFromEntity.set('offset', { 
      key: 'offset', 
      mapper: (value: number) => value,
    });

    this.mappingFromEntity.set('landownerShare', { 
      key: 'landowner_share', 
      mapper: (value: Asset) => new AssetMongoMapper().fromEntity(value),
    });

    this.mappingFromEntity.set('poolAmounts', { 
      key: 'pool_amounts', 
      mapper: (values: Pair[]) => values.map(value => new PairMongoMapper().fromEntity(value)),
    });

  }

  public toEntity(mongoModel: LogmineMongoModel): Logmine {
    const { 
      miner,
      params,
      bounty,
      land_id,
      planet_name,
      landowner,
      bag_items,
      offset,
      landowner_share,
      pool_amounts,
      _id,
      ...rest
    } = mongoModel;

    return Logmine.create(
      miner || '',
      params ? new MiningData2MongoMapper().toEntity(params) : MiningData2.getDefault(),
      bounty ? new AssetMongoMapper().toEntity(bounty) : Asset.getDefault(),
      land_id || 0,
      planet_name || '',
      landowner || '',
      bag_items || [],
      offset || 0,
      landowner_share ? new AssetMongoMapper().toEntity(landowner_share) : Asset.getDefault(),
      pool_amounts?.map(value => new PairMongoMapper().toEntity(value)) || [],
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}

export class MiningData2MongoMapper
  extends MongoMapper<MiningData2, MiningData2MongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('invalid', { 
      key: 'invalid', 
      mapper: (value: number) => value,
    });

    this.mappingFromEntity.set('error', { 
      key: 'error', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('delay', { 
      key: 'delay', 
      mapper: (value: number) => value,
    });

    this.mappingFromEntity.set('difficulty', { 
      key: 'difficulty', 
      mapper: (value: number) => value,
    });

    this.mappingFromEntity.set('ease', { 
      key: 'ease', 
      mapper: (value: number) => value,
    });

    this.mappingFromEntity.set('luck', { 
      key: 'luck', 
      mapper: (value: number) => value,
    });

    this.mappingFromEntity.set('commission', { 
      key: 'commission', 
      mapper: (value: number) => value,
    });

    this.mappingFromEntity.set('eases', { 
      key: 'eases', 
      mapper: (values: Pair[]) => values.map(value => new PairMongoMapper().fromEntity(value)),
    });

  }

  public toEntity(mongoModel: MiningData2MongoModel): MiningData2 {
    const { 
      invalid,
      error,
      delay,
      difficulty,
      ease,
      luck,
      commission,
      eases,
      _id,
      ...rest
    } = mongoModel;

    return MiningData2.create(
      invalid || 0,
      error || '',
      delay || 0,
      difficulty || 0,
      ease || 0,
      luck || 0,
      commission || 0,
      eases?.map(value => new PairMongoMapper().toEntity(value)) || [],
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class LogmineRawMapper
  extends MapperImpl<Logmine, LogmineRawModel>
{
  public fromEntity(entity: Logmine): LogmineRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: LogmineRawModel): Logmine {
    const { 
      miner,
      params,
      bounty,
      land_id,
      planet_name,
      landowner,
      bag_items,
      offset,
      landowner_share,
      pool_amounts,
      ...rest
    } = rawModel;

    return Logmine.create(
      miner || '',
      params ? new MiningData2RawMapper().toEntity(params) : MiningData2.getDefault(),
      bounty ? new AssetRawMapper().toEntity(bounty) : Asset.getDefault(),
      land_id || 0,
      planet_name || '',
      landowner || '',
      bag_items || [],
      offset || 0,
      landowner_share ? new AssetRawMapper().toEntity(landowner_share) : Asset.getDefault(),
      pool_amounts?.map(value => new PairRawMapper().toEntity(value)) || [],
      undefined,
      rest
    );
  }
}

export class MiningData2RawMapper
  extends MapperImpl<MiningData2, MiningData2RawModel>
{
  public fromEntity(entity: MiningData2): MiningData2RawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: MiningData2RawModel): MiningData2 {
    const { 
      invalid,
      error,
      delay,
      difficulty,
      ease,
      luck,
      commission,
      eases,
      ...rest
    } = rawModel;

    return MiningData2.create(
      invalid || 0,
      error || '',
      delay || 0,
      difficulty || 0,
      ease || 0,
      luck || 0,
      commission || 0,
      eases?.map(value => new PairRawMapper().toEntity(value)) || [],
      undefined,
      rest
    );
  }
}

