import { createFileRoute } from '@tanstack/react-router';
import ContactsPage from '@/pages/Contacts';

export const Route = createFileRoute('/$studio/$lang/contacts/book')({
  component: ContactsPage,
});
