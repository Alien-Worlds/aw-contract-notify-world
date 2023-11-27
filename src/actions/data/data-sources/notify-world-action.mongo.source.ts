/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Mon, 27 Nov 2023 09:54:53 GMT
 */

import { MongoSource, MongoCollectionSource } from '@alien-worlds/aw-storage-mongodb';
import { NotifyWorldActionMongoModel } from '../dtos';

/**
 * @class
 */
export class NotifyWorldActionMongoSource extends MongoCollectionSource<NotifyWorldActionMongoModel> {
  /**
   * @constructor
   * @param {MongoSource} mongoSource
   */
  constructor(mongoSource: MongoSource) {
    super(mongoSource, 'notify.world_actions', {
      indexes: [
        { key: { block_num: 1 }, background: true },
        { key: { 'action.name': 1 }, background: true },
        { key: { 'action.account': 1, 'action.name': 1 }, background: true },
        {
          key: {
            action_hash: 1,
            block_num: 1,
            block_timestamp: 1,
            global_sequence: 1,
            recv_sequence: 1,
            trx_id: 1,
          },
          unique: true,
          background: true,
        },
      ],
    });
  }
}
