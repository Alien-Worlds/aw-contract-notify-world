/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Mon, 27 Nov 2023 09:54:53 GMT
 */

import { Container, RepositoryImpl } from '@alien-worlds/aw-core';
import { 
  MongoConfig,
  MongoQueryBuilders, 
  MongoSource,
} from '@alien-worlds/aw-storage-mongodb';

import { NotifyWorldActionMongoMapper } from './actions/data/mappers';
import { NotifyWorldActionMongoSource } from './actions/data/data-sources';
import { NotifyWorldActionRepository } from './actions/domain/repositories';
import { NotifyWorldContractService } from "./services/notify-world-contract.service";
import { NotifyWorldContractServiceImpl } from "./services/notify-world-contract.service-impl";
import { NotifyWorldDeltaMongoMapper } from './deltas/data/mappers';
import { NotifyWorldDeltaMongoSource } from './deltas/data/data-sources';
import { NotifyWorldDeltaRepository } from './deltas/domain/repositories';
import { AntelopeRpcSourceImpl } from '@alien-worlds/aw-antelope';

export const setupNotifyWorldActionRepository = async (
  mongo: MongoSource | MongoConfig,
  container?: Container
): Promise<NotifyWorldActionRepository> => {
  let mongoSource: MongoSource;
  if (mongo instanceof MongoSource) {
    mongoSource = mongo;
  } else {
    mongoSource = await MongoSource.create(mongo);
  }

  const mapper = new NotifyWorldActionMongoMapper();
  
  const repository = new RepositoryImpl(
    new NotifyWorldActionMongoSource(mongoSource),
    mapper,
    new MongoQueryBuilders(mapper)
  );

  if (container) {
    container
      .bind<NotifyWorldActionRepository>(NotifyWorldActionRepository.Token)
      .toConstantValue(repository);
  }

  return repository;
};

export const setupNotifyWorldDeltaRepository = async (
  mongo: MongoSource | MongoConfig,
  container?: Container
): Promise<NotifyWorldDeltaRepository> => {
  let mongoSource: MongoSource;
  if (mongo instanceof MongoSource) {
    mongoSource = mongo;
  } else {
    mongoSource = await MongoSource.create(mongo);
  }

  const mapper = new NotifyWorldDeltaMongoMapper();
  
  const repository = new RepositoryImpl(
    new NotifyWorldDeltaMongoSource(mongoSource),
    mapper,
    new MongoQueryBuilders(mapper)
  );

  if (container) {
    container
      .bind<NotifyWorldDeltaRepository>(NotifyWorldDeltaRepository.Token)
      .toConstantValue(repository);
  }

  return repository;
};

export const setupNotifyWorldContractService = (
  antelopeRpcSourceImpl: AntelopeRpcSourceImpl,
  serviceUrl: string,
  container?: Container
): NotifyWorldContractService => {
  const service = new NotifyWorldContractServiceImpl(
    antelopeRpcSourceImpl,
    serviceUrl
  );

  if (container) {
    container
      .bind<NotifyWorldContractService>(NotifyWorldContractService.Token)
      .toConstantValue(service);
  }

  return service;
};
