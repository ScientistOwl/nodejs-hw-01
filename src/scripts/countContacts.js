import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const contacts = await readContacts();
    console.log(`Загальна кількість контактів: ${contacts.length}`);
  } catch (error) {
    console.error('Помилка підрахунку контактів:', error);
  }
};

countContacts();
