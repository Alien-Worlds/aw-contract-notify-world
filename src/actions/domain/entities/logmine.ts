/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Mon, 27 Nov 2023 09:54:53 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/aw-core";
import { Asset, Pair } from '@alien-worlds/aw-antelope';

/**
 * Represents a `Logmine` object.
 *
 * @class
 */
export class Logmine implements Entity {
  /**
   * Constructs a new instance of the `Logmine` class.
   *
   * @public
   * @constructor
   * @param string miner
   * @param MiningData2 params
   * @param Asset bounty
   * @param number landId
   * @param string planetName
   * @param string landowner
   * @param number[] bagItems
   * @param number offset
   * @param Asset landownerShare
   * @param Pair[] poolAmounts
   * @param string [id]
   * @returns `Logmine` - An instance of the `Logmine` class.
   */
  public constructor(
    public miner: string,
    public params: MiningData2,
    public bounty: Asset,
    public landId: number,
    public planetName: string,
    public landowner: string,
    public bagItems: number[],
    public offset: number,
    public landownerShare: Asset,
    public poolAmounts: Pair[],
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Logmine` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      miner: this.miner,
      params: this.params,
      bounty: this.bounty,
      landId: this.landId,
      planetName: this.planetName,
      landowner: this.landowner,
      bagItems: this.bagItems,
      offset: this.offset,
      landownerShare: this.landownerShare,
      poolAmounts: this.poolAmounts,
    };
  }

  /**
   * Creates an instance of the `Logmine` class.
   *
   * @static
   * @public
   * @param string miner
   * @param MiningData2 params
   * @param Asset bounty
   * @param number landId
   * @param string planetName
   * @param string landowner
   * @param number[] bagItems
   * @param number offset
   * @param Asset landownerShare
   * @param Pair[] poolAmounts
   * @returns `Logmine` An instance of the `Logmine` class.
   */
  public static create(
    miner: string,
    params: MiningData2,
    bounty: Asset,
    landId: number,
    planetName: string,
    landowner: string,
    bagItems: number[],
    offset: number,
    landownerShare: Asset,
    poolAmounts: Pair[],
    id?: string,
    rest?: UnknownObject
  ): Logmine {
    const entity = new Logmine(
      miner,
      params,
      bounty,
      landId,
      planetName,
      landowner,
      bagItems,
      offset,
      landownerShare,
      poolAmounts,
      id,
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Logmine {
    return new Logmine(
      '',
      MiningData2.getDefault(),
      Asset.getDefault(),
      0,
      '',
      '',
      [],
      0,
      Asset.getDefault(),
        []
,
    );
  }
}

/**
 * Represents a `MiningData2` object.
 *
 * @class
 */
export class MiningData2 implements Entity {
  /**
   * Constructs a new instance of the `MiningData2` class.
   *
   * @public
   * @constructor
   * @param number invalid
   * @param string error
   * @param number delay
   * @param number difficulty
   * @param number ease
   * @param number luck
   * @param number commission
   * @param Pair[] eases
   * @param string [id]
   * @returns `MiningData2` - An instance of the `MiningData2` class.
   */
  public constructor(
    public invalid: number,
    public error: string,
    public delay: number,
    public difficulty: number,
    public ease: number,
    public luck: number,
    public commission: number,
    public eases: Pair[],
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `MiningData2` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      invalid: this.invalid,
      error: this.error,
      delay: this.delay,
      difficulty: this.difficulty,
      ease: this.ease,
      luck: this.luck,
      commission: this.commission,
      eases: this.eases,
    };
  }

  /**
   * Creates an instance of the `MiningData2` class.
   *
   * @static
   * @public
   * @param number invalid
   * @param string error
   * @param number delay
   * @param number difficulty
   * @param number ease
   * @param number luck
   * @param number commission
   * @param Pair[] eases
   * @returns `MiningData2` An instance of the `MiningData2` class.
   */
  public static create(
    invalid: number,
    error: string,
    delay: number,
    difficulty: number,
    ease: number,
    luck: number,
    commission: number,
    eases: Pair[],
    id?: string,
    rest?: UnknownObject
  ): MiningData2 {
    const entity = new MiningData2(
      invalid,
      error,
      delay,
      difficulty,
      ease,
      luck,
      commission,
      eases,
      id,
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): MiningData2 {
    return new MiningData2(
      0,
      '',
      0,
      0,
      0,
      0,
      0,
        []
,
    );
  }
}

