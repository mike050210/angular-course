import {TimeConverterPipe} from './time-converter.pipe';

describe('TimeConverterPipe', () => {

  let pipe: TimeConverterPipe;

  beforeEach(() => {
    pipe = new TimeConverterPipe();
  });

  it('creates an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transforms minutes to hh h mm m format', () => {
    expect(pipe.transform(120)).toEqual('02h 00min');
    expect(pipe.transform(91)).toEqual('01h 31min');
  });
});
