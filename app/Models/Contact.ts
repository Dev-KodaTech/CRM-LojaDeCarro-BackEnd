import { DateTime } from "luxon";
import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class Contact extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public isDefault: boolean;

  @column()
  public whatsapp: string;

  @column()
  public phone: string;

  @column()
  public email: string;
  @column()
  public cellphone: string;
  @column()
  public facebook: string;
  @column()
  public instagram: string;
  @column()
  public site: string;
  @column()
  public blog: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
