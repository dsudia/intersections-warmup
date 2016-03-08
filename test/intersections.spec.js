var chai = require('chai');
var expect = chai.expect;
var intersections = require('../intersections');

describe('Intersections', function() {
 it('should return an array with intersecting elements of two given arrays', function() {
   expect(intersections([1,2,3], [1,3,5])).to.deep.equal([1,3]);
 });
});
