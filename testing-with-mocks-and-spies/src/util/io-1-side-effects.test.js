import { it, expect } from 'vitest';
import writeData from './io';

//^ Test that the writeData fcn does the main thing it should do, which is to execute the writeFile method on fs (i.e., fs.writeFile), which saves given data to a file.
//^ NOTE: This test PASSES, but if the promise were to reject for some reason, this test would fail
    //! For example, try removing the data folder and running this test again; now the test fails

it('should execute the writeFile method1', async () => {
  const testData = 'Test';
  const testFilename = 'test.txt';
  // if writeData returns a promise that resolves, then we know that the fs.writeFile method was successfully called
  // we know that fs.writeFile resolves to undefined (if it resolves, of course)
  // remember to use 'return' so that Vitest / Jest will wait until the promise resolves or rejects
  return expect(writeData(testData, testFilename)).resolves.toBeUndefined();  // because fs.writeFile returns undefined
});

//* Testing it this way allows side effects (NOT a good practice)
  //* The side effect is that every time this test is run, data is written to a file. We probably don't want that.
    //* Other examples of side effects could be deleting a file, writing to a production database, etc.
  //* We don't need to write a file to the system to test if writeData is calling the writeFile method. Remember:
    //* ...we aren't trying to test the 3rd party fs.writeFile method,
    //* ...we want to test if OUR code does its job by calling the writeFile method and/or by passing the data argument correctly