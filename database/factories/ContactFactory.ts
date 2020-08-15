import Factory from "@ioc:Adonis/Lucid/Factory";
import Contact from "App/Models/Contact";

export const ContactFactory = Factory
  .define(Contact, ({ faker }) => {
    return {
      // isDefault: faker.random.boolean(),
      whatsapp: faker.phone.phoneNumber(),
      phone: faker.phone.phoneNumber(),
      email: faker.internet.email(),
      cellphone: faker.phone.phoneNumber(),
      facebook: faker.internet.url(),
      instagram: faker.internet.url(),
      site: faker.internet.url(),
      blog: faker.internet.url(),
    };
  })
  .build();
