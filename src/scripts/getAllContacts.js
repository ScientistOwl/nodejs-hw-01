import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const contacts = await readContacts();
    console.log('Всі контакти:', contacts);
  } catch (error) {
    console.error('Помилка отримання контактів:', error);
  }
};

getAllContacts();
