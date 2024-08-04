"use strict";
/* 
Створіть об'єкт, який матиме одну властивість з масивом об'єктів.
Які представляють контакти у вашій контактній книзі.
Кожен об'єкт має містити ім'я, номер телефону та адресу електронної пошти.
Додайте метод для пошуку контакту за ім'ям та метод для додавання нових контактів.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

const contactsBoock = {
  contacts: [
    {
      name: "Lolita",
      phone: "07553837396",
      email: "Lolita@gmail.com",
    },
    {
      name: "Alex",
      phone: "07464782829",
      email: "Alex@gmail.com",
    },
    {
      name: "Felix",
      phone: "07297577513",
      email: "Felix@gmail.com",
    },
  ],
};

function findByName(contactsBoock, name) {
  const user = contactsBoock.contacts.find(
    (item) => item.name.toUpperCase() === name.toUpperCase()
  );

  return typeof user === "undefined"
    ? `User with name "${name}" not found`
    : user;
}

function AddContact(contactsBoock) {
  const name = prompt("Enter name");

  if (!name?.trim()) {
    alert("Name cann't be empty. Bye!");
    return;
  }

  const phone = prompt("Enter phone number (11 numbers)");

  if (
    !phone?.trim() ||
    !Number.isInteger(+phone) ||
    phone.length < 11 ||
    phone.length > 11
  ) {
    alert("Incorrect phone number. Bye!");
    return;
  }

  let email = prompt("Enter email");

  if (!email?.trim()) {
    alert("Empty email will be saved");
    email = "";
  }

  if (
    email?.trim() &&
    email.length > 2 &&
    (!email.includes("@") || !email.includes("."))
  ) {
    alert("Incorrect email. Bye!");
    return;
  }

  contactsBoock.contacts.push({
    name: name,
    phone: phone,
    email: email,
  });
}

AddContact(contactsBoock);
console.log(contactsBoock);

const user = findByName(contactsBoock, 'felix');
console.log(user);
