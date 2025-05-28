import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const contacts = await readContacts();
    const newContact = createFakeContact();
    await writeContacts([...contacts, newContact]);
    console.log('Успішно додано новий контакт:', newContact);
  } catch (error) {
    console.error('Помилка додавання контакту:', error);
  }
};

addOneContact();
