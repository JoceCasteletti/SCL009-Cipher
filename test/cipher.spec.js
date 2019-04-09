describe('cipher.encode', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof window.cipher, 'object');
  });


  it('debería ser una función', () => {
    assert.equal(typeof window.cipher.encode, 'function');
  });

  it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33');
  assert.equal(window.cipher.encode(33, "ABCDEFGHIJKLMNOPQRSTUVWXYZ"), "HIJKLMNOPQRSTUVWXYZABCDEFG");



  it('debería retornar "QFGTWFYTWNF" para "LABORATORIA" con offset 5', () => {
    assert.equal(window.cipher.encode(5, "LABORATORIA"), "QFGTWFYTWNF");
  })

});


describe('cipher.decode', () => {

  it('debería ser una función', () => {
    assert.equal(typeof window.cipher.decode, 'function');
  });

  it('debería retornar "TUVWXYZABCDEFGHIJKLMNOPQRS" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () => {
    assert.equal(cipher.decode(33, "ABCDEFGHIJKLMNOPQRSTUVWXYZ"), "TUVWXYZABCDEFGHIJKLMNOPQRS");
  });

});

















  //   it('debería retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" con offset 33',() => {
  //   assert.equal(window.cipher.encode("hijklmnopqrstuvwxyzabcdefg",33),"abcdefghijklmnopqrstuvwxyz");
  // });


//   it('debería retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" con offset 33',() => {
//   assert.equal(window.cipher.decode("hijklmnopqrstuvwxyzabcdefg",33),"abcdefghijklmnopqrstuvwxyz");
// });

//   it('debería retornar "qfgtwfytwnf" para "LABORATORIA" con offset 5',() => {
//   assert.equal(window.cipher.encode("laboratoria",5),"qfgtwfytwnf");
// })