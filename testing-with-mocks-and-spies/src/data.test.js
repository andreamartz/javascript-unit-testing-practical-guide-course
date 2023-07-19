import { describe, it, expect, vi } from 'vitest';
import { generateReportData } from './data';

describe('generateReportData', () => {
  it('should execute logFn if provided', () => {

    // NOTE: vi.fn() (and jest.fn()) is a spy
      // it keeps track of calls to the function and the arguments it was called with
    const logger = vi.fn();  // vi.fn() is like jest.fn
    generateReportData(logger);

    expect(logger).toBeCalled();
  });

  it('should execute logFn if provided', () => {
    const logger = vi.fn();  // vi.fn() is like jest.fn
    
    logger.mockImplementationOnce(() => {});  // could use this if didn't want to have the default empty mock implementation in the spy. Of course, you would have to fill in the mock implementation
    generateReportData(logger);

    expect(logger).toBeCalled();
  });
});