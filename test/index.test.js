import { expect } from 'chai';
import { decode } from '../src';
import { encode } from '../src';

describe('decode', () => {
  it('should translate a string of morse code, into text', () => {
    expect(decode('- . ... -   -.-. --- -.. .')).to.equal('TEST CODE');
    expect(decode(' ... ---  ')).to.equal('SO');
    expect(decode('.---- ----- -----')).to.equal('100');
  });
});

describe('encode', () => {
  it('should translate a string of test, into morse code', () => {
    expect(encode('Banter')).to.equal('-... .- -. - . .-.');
    expect(encode('myName is, jeff100')).to.equal('-- -.-- -. .- -- .   .. ... --..--   .--- . ..-. ..-. .---- ----- -----');
  });
});
