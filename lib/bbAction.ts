'use server';

import { getReadingRequest } from './dbRequest';

export async function handleStartReading(formData: FormData) {
  console.log('handleStartReading called');
  const book = formData.get('book') as unknown as number;
  const chapter = formData.get('chapter') as unknown as number;
  const lang = formData.get('lang') as string;

  console.log({ book, chapter, lang }); // This runs on the server

  const res = await getReadingRequest(book, chapter, lang);
  return res;
}



export async function submitDevotion(formData: FormData) {
  // Extract data using the 'name' attribute of the inputs
  const data = {
    verset: formData.get('verset'),
    explication: formData.get('explication'),
    interpretation: formData.get('interpretation'),
    action: formData.get('action'),
    priere: formData.get('priere'),
  };

  // Logic: Save to database (Prisma, Drizzle, etc.)
  console.log('Form submitted to server:', data);

  // Optional: Return a response or revalidate a path
  return { success: true };
}
