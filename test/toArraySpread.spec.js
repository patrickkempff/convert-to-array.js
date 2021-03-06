import {expect} from 'chai';
import sinon from 'sinon';
import {toArraySpread} from '../lib/toArraySpread';


describe('toArraySpread', () => {

  it('should convert undefined value to an empty array', () => {

    const value = toArraySpread(undefined);
    expect(value).to.be.a('array').and.to.have.lengthOf(0);

  }); 

  it('should convert null or void value to an empty array', () => {

    const value1 = toArraySpread(null);
    expect(value1).to.be.a('array').and.to.have.lengthOf(0);

    const value2 = toArraySpread(void 0);
    expect(value2).to.be.a('array').and.to.have.lengthOf(0);

  });   

  it('should convertarray value to an array', () => {

    const value1 = toArraySpread([1,2], [3,4]);
    expect(value1).to.be.a('array').and.to.have.lengthOf(4);
    
  });     
});