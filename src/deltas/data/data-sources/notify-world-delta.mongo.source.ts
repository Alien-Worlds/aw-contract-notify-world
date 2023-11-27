/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Mon, 27 Nov 2023 09:54:53 GMT
 */

import { MongoSource, MongoCollectionSource } from '@alien-worlds/aw-storage-mongodb';
import { NotifyWorldDeltaMongoModel } from '../dtos';

/**
 * @class
 */
export class NotifyWorldDeltaMongoSource extends MongoCollectionSource<NotifyWorldDeltaMongoModel> {
  /**
   * @constructor
   * @param {MongoSource} mongoSource
   */
  constructor(mongoSource: MongoSource) {
    super(mongoSource, 'notify.world_deltas', {
      indexes: [
        { key: { block_num: 1 }, background: true },
        { key: { code: 1, table: 1 }, background: true },
        { key: { code: 1, scope: 1, table: 1 }, background: true },
        {
          key: {
            block_num: 1,
            data_hash: 1,
            code: 1,
            scope: 1,
            table: 1,
            primary_key: 1,
            payer: 1,
            present: 1,
          },
          unique: true,
          background: true,
        },
      ],
    });
  }
}
