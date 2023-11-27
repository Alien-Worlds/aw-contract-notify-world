/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Mon, 27 Nov 2023 09:54:53 GMT
 */

import { MongoDB } from '@alien-worlds/aw-storage-mongodb';

export type DataDocumentType = unknown;

export type DataRawType = unknown;

export type NotifyWorldDeltaMongoModel = {
  _id?: MongoDB.ObjectId;
  block_number?: MongoDB.Long;
  code?: string;
  scope?: string;
  table?: string;
  data_hash?: string;
  data?: DataDocumentType;
  payer?: string;
  primary_key?: MongoDB.Long;
  present?: boolean;
  block_timestamp?: Date;
};

export type NotifyWorldDeltaRawModel = {
  block_timestamp: Date;
  block_number: string;
  code: string;
  scope: string;
  table: string;
  payer: string;
  primary_key: string;
  present: boolean;
  data: DataRawType;
};
