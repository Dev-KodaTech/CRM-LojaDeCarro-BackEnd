import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class Users extends BaseSchema {
  protected tableName = "users";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id").primary();
      table.string("name");

      table.string("email").unique().notNullable();
      table.string("password").notNullable();
      table.timestamps(true);
      table.boolean("deleted").defaultTo(false).comment(
        "nenhum registro é apagado, apenas marcado como tal",
      );
      table.uuid("uuid");

      /*
       Nome
 - Número da carteira de habilitação
 - Nacionalidade
 - Telefone
 - E-mail
 - Endereço
 - Cidade
 - Estado
 - Código Postal
      */
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
