import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class Contacts extends BaseSchema {
  protected tableName = "contacts";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id").primary();
      table.string("isDefault");
      table.string("whatsapp");
      table.string("phone");
      table.string("email");
      table.string("cellphone");
      table.string("facebook");
      table.string("instagram");
      table.string("site");
      table.string("blog");
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
