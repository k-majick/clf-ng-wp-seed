export const GENDERS = ['Man', 'Woman'];

class Message {
  id: number;
  text: string;
}

export const MESSAGES: Message[] = [
  { id: 0, text: 'Please enter at least 3 characters.' },
  { id: 1, text: 'Please select at least one option.' },
  { id: 2, text: 'Please enter correct e-mail address.' },
  { id: 3, text: 'Please enter at least 10 characters.' },
];
