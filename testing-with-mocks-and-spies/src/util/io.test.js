import { it, expect, vi } from 'vitest';
import { promises as fs } from 'fs';  // imports the empty module with empty methods

import writeData from './io';


// // Allow side effects (not a good practice)
// it('should execute the writeFile method1', () => {
//   const testData = 'Test';
//   const testFilename = 'test.txt';
  
//   // PASSES
//     // NOTE: if the promise were to reject for some reason, this test would fail
//       // For example, try removing the data folder and running this test again; now the test fails
//   return expect(writeData(testData, testFilename)).resolves.toBeUndefined();  // because fs.writeFile returns undefined
// });

// Mock the 3rd party dependency fs
  // pass the name of the module to mock
  // if you pass no other arguments, then Vitest's auto-mocking algorithm will be triggered.
    // the auto-mocking algorithm will replace all methods on fs with empty spy functions.
    vi.mock('fs');  
    it('should return a promise that resolves to no value if called correctly', () => {
      const testData = 'Test';
      const testFilename = 'test.txt';
      
      // NOTE: the writeData fcn is being mocked and should no longer write test.txt

      // NOTE: Passes now, but the following test WAS failing until I added the new writeFile mock implementation in the fs.js file of the __mocks__ folder
      // FAILS with TypeError: Cannot read properties of undefined (reading 'then')
        // now that writeData is being mocked, we are no longer returning a promise here
      return expect(writeData(testData, testFilename)).resolves.toBeUndefined();
    });

    it('should execute the writeFile method3', () => {
      const testData = 'Test';
      const testFilename = 'test.txt';
      
      writeData(testData, testFilename);
    
      // PASSES
      return expect(fs.writeFile).toBeCalled();
    });


vi.mock('path', () => {
  return {
    default: {
      join: (...args) => {
        return args[args.length - 1];  // this will be the filename
      }
    }
  };
});

it('should execute the writeFile method4', () => {
  const testData = 'Test';
  const testFilename = 'test.txt';
  
  writeData(testData, testFilename);

  // PASSES
  return expect(fs.writeFile).toBeCalledWith(testFilename, testData);
});