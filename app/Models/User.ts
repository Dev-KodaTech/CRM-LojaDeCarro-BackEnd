import { DateTime } from "luxon";
import Hash from "@ioc:Adonis/Core/Hash";
import {
  BaseModel,
  column,
  beforeSave,
  HasManyThrough,
  hasManyThrough,
} from "@ioc:Adonis/Lucid/Orm";
const uuidv4 = require("uuid/v4");

export default class User extends BaseModel { 

  @column({ isPrimary: true })
  public id: number;

  @column({})
  public email: string;

  @column({})
  public name: string;

  @column()
  public password: string;

  @column()
  public uuid: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.hash(user.password);
    }
  }

  @beforeSave()
  public static async setUuid(user: User) {
    // if (user.$dirty.uuid) {
    user.uuid = uuidv4();
    // }
  }
}
