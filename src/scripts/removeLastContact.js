import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();
    if (contacts.length > 0) {
      const removedContact = contacts.pop();
      await writeContacts(contacts);
      console.log('Видалено останній контакт:', removedContact);
    } else {
      console.log('Немає контактів для видалення.');
    }
  } catch (error) {
    console.error('Помилка видалення контакту:', error);
  }
};

removeLastContact();
