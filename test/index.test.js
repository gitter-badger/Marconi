import { expect } from 'chai';
import { decode } from '../src';

describe('decode', () => {
  it('should translate "- . ... -   -.-. --- -.. ." to "TEST CODE"', () => {
    expect(decode('- . ... -   -.-. --- -.. .')).to.equal('TEST CODE');
  });
});
