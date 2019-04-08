describe('cipher.encode', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33');
     assert.equal(cipher.encode(33,"ABCDEFGHIJKLMNOPQRSTUVWXYZ"),"IJKLMNOPQRSTUVWXYZABCDEFGH"); 
  });

    it('debería retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" con offset 33',() => {
    assert.equal(window.cipher.encode("hijklmnopqrstuvwxyzabcdefg",33),"abcdefghijklmnopqrstuvwxyz");
  });

    it('debería retornar "QFGTWFYTWNF" para "LABORATORIA" con offset 5',() => {
    assert.equal(window.cipher.encode("LABORATORIA",5),"QFGTWFYTWNF");
  })


 describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33');
    assert.equal(cipher.encode(33,"ABCDEFGHIJKLMNOPQRSTUVWXYZ"),"IJKLMNOPQRSTUVWXYZABCDEFGH");  
  });

    it('debería retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" con offset 33',() => {
    assert.equal(window.cipher.decode("hijklmnopqrstuvwxyzabcdefg",33),"abcdefghijklmnopqrstuvwxyz");
  });

    it('debería retornar "qfgtwfytwnf" para "LABORATORIA" con offset 5',() => {
    assert.equal(window.cipher.encode("laboratoria",5),"qfgtwfytwnf");
  })
});
