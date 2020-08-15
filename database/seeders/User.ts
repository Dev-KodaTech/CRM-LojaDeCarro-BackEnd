import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import { UserFactory } from "Database/factories/UserFactory";
import { ContactFactory } from "Database/factories/ContactFactory";

export default class UserSeeder extends BaseSeeder {
  public async run() {
    await UserFactory.createMany(500);
    await ContactFactory.createMany(500);

    // await User.createMany([
    //   {
    //     email: "virk@adonisjs.com",
    //     name: "name",
    //     password: "secret",
    //   },
    //   {
    //     email: "romain@adonisjs.com",
    //     password: "supersecret",
    //   },
    // ]);
  }
}
