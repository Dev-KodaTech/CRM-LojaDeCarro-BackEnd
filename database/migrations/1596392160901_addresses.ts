import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class Addresses extends BaseSchema {
  protected tableName = "addresses";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id");
      table.string("isDefault");
      table.string("address");
      table.string("neighborhood");
      table.string("postalCode");
      table.string("county");
      table.string("city");
      table.string("state");
      table.string("country");
      table.decimal("latitude", 8, 8);
      table.decimal("longitude", 8, 8);
      table.timestamps(true);
      table.boolean("deleted").defaultTo(false).comment(
        "nenhum registro é apagado, apenas marcado como tal",
      );
      table.uuid("uuid");
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
