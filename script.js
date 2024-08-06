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
  findByName(name) {
    const user = this.contacts.find(
      (item) => item.name.toUpperCase() === name.toUpperCase()
    );
  
    return user || `User with name "${name}" not found`;
  },
  addContact(newContact) {  
    this.contacts.push(newContact);
  }
};

function getContactFromUser() {
  const name = prompt("Enter name");

  if (!name?.trim()) {
    alert("Name cann't be empty. Bye!");
    return;
  }

  const phone = prompt("Enter phone number (11 numbers)");

  if (
    !phone?.trim() ||
    !Number.isInteger(+phone) ||
    phone.trim().length < 11 ||
    phone.trim().length > 11 ||
    +phone < 0 ||
    !phone.startsWith('0')
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

  return {
    name: name,
    phone: phone,
    email: email,
  };
}

const newContact = getContactFromUser();
if (newContact) {
  contactsBoock.addContact(newContact);
}

console.log(contactsBoock);

const foundedUser = contactsBoock.findByName('lolita');
console.log(foundedUser);
