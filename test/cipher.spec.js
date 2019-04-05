describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 8');
     assert.equal(cipher.encode(8,"ABCDEFGHIJKLMNOPQRSTUVWXYZ"),"IJKLMNOPQRSTUVWXYZABCDEFGH"); )
  });




  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 8');
    assert.equal(cipher.encode(8,"ABCDEFGHIJKLMNOPQRSTUVWXYZ"),"IJKLMNOPQRSTUVWXYZABCDEFGH");  
  });

});
