/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Mon, 27 Nov 2023 09:54:53 GMT
 */

import { MongoDB } from '@alien-worlds/aw-storage-mongodb';
import { AssetMongoModel, Pair, AssetRawModel } from '@alien-worlds/aw-antelope';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} LogmineMongoModel
 */
export type LogmineMongoModel = {
  _id?: MongoDB.ObjectId;
  miner?: string;
  params?: MiningData2MongoModel;
  bounty?: AssetMongoModel;
  land_id?: number;
  planet_name?: string;
  landowner?: string;
  bag_items?: number[];
  offset?: number;
  landowner_share?: AssetMongoModel;
  pool_amounts?: Pair[];
  [key: string]: unknown;
};

/**
 * @typedef {Object} MiningData2MongoModel
 */
export type MiningData2MongoModel = {
  _id?: MongoDB.ObjectId;
  invalid?: number;
  error?: string;
  delay?: number;
  difficulty?: number;
  ease?: number;
  luck?: number;
  commission?: number;
  eases?: Pair[];
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} LogmineRawModel
 */
export type LogmineRawModel = {
  miner?: string;
  params?: MiningData2RawModel;
  bounty?: AssetRawModel;
  land_id?: number;
  planet_name?: string;
  landowner?: string;
  bag_items?: number[];
  offset?: number;
  landowner_share?: AssetRawModel;
  pool_amounts?: Pair[];
  [key: string]: unknown;
};

/**
 * @typedef {Object} MiningData2RawModel
 */
export type MiningData2RawModel = {
  invalid?: number;
  error?: string;
  delay?: number;
  difficulty?: number;
  ease?: number;
  luck?: number;
  commission?: number;
  eases?: Pair[];
  [key: string]: unknown;
};

