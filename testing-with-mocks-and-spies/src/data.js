import writeData from './util/io.js';

export function generateReportData(logFn) {
  const data = 'Some dummy data for this demo app';  // this could be a call to an API to get some data
  if (logFn) {
    logFn(data);
  }

  return data;
}

export async function storeData(data) {
  if (!data) {
    throw new Error('No data received!');
  }
  await writeData(data, 'data.txt');
}
