import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const writeContacts = async (updatedContacts) => {
  try {
    await fs.writeFile(
      PATH_DB,
      JSON.stringify(updatedContacts, null, 2),
      'utf-8',
    );
    console.log('Контакти успішно оновлені.');
  } catch (error) {
    console.error('Помилка запису контактів:', error);
  }
};
