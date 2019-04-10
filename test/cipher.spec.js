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

  it('debería retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" con offset 33',() => {
    assert.equal(window.cipher.encode(33,"hijklmnopqrstuvwxyzabcdefg"),"abcdefghijklmnopqrstuvwxyz");
    });

});


describe('cipher.decode', () => {

  it('debería ser una función', () => {
    assert.equal(typeof window.cipher.decode, 'function');
  });

  it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () => {
    assert.equal(cipher.decode(33, "ABCDEFGHIJKLMNOPQRSTUVWXYZ"), "HIJKLMNOPQRSTUVWXYZABCDEFG");
  });

  it('debería retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" con offset 33',() => {
    assert.equal(window.cipher.decode(33,"hijklmnopqrstuvwxyzabcdefg"),"abcdefghijklmnopqrstuvwxyz");
  });
    
  it('debería retornar "LABORATORIA" para "qfgtwfytwnf" con offset 5',() => {
    assert.equal(window.cipher.decode(5,"laboratoria"),"qfgtwfytwnf");
  });

});
