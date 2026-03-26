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
