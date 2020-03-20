/* eslint-disable */
// 不支持es6的语法
describe("测试基本的函数API",function(){
  it("+1函数的应用",function(){
      expect(window.test(1)).toBe(1);
      expect(window.test(2)).toBe(3);
      expect(true).toBe(true);
      expect({ foo: 'foo'}).toEqual( {foo: 'foo'} );
  });
});

describe(' test some code ', function(){
  var foo = 'foo';

  it(' expect foo equal foo ', function(){
      expect(foo).toEqual('foo');
  });

})

describe("A suite is just a function", function() {
  var a;

  it("and so is a spec", function() {
    a = true;

    expect(a).toBe(true);
  });
});