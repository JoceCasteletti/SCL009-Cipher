describe('cipher.encode', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof window.cipher, 'object');
  });


  it('debería ser una función', () => {
    assert.equal(typeof window.cipher.encode, 'function');
  });

  it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () => {
    assert.equal(window.cipher.encode(33, "ABCDEFGHIJKLMNOPQRSTUVWXYZ"), "HIJKLMNOPQRSTUVWXYZABCDEFG");
  });

  it('debería retornar "QFGTWFYTWNF" para "LABORATORIA" con offset 5', () => {
    assert.equal(window.cipher.encode(5, "LABORATORIA"), "QFGTWFYTWNF");
  })

  it('debería retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" con offset 33',() => {
    assert.equal(window.cipher.encode(33,"abcdefghijklmnopqrstuvwxyz"),"hijklmnopqrstuvwxyzabcdefg");
    });

  it('debería retornar "5678901234" para "0123456789" con offset 5',() => {
    assert.equal(window.cipher.encode(5,"5678901234"),"0123456789");
    });
  

});


describe('cipher.decode', () => {

  it('debería ser una función', () => {
    assert.equal(typeof window.cipher.decode, 'function');
  });

  it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33', () => {
    assert.equal(cipher.decode(33, "ABCDEFGHIJKLMNOPQRSTUVWXYZ"), "TUVWXYZABCDEFGHIJKLMNOPQRS");
  });

  it('debería retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" con offset 33',() => {
    assert.equal(window.cipher.decode(33,"hijklmnopqrstuvwxyzabcdefg"),"abcdefghijklmnopqrstuvwxyz");
  });
  
  it('debería retornar "LABORATORIA" para "qfgtwfytwnf" con offset 5',() => {
    assert.equal(window.cipher.decode(5,"laboratoria"),"gvwjmvojmdv");
  });

  it('debería retornar "0123456789" para "5678901234" con offset 5',() => {
    assert.equal(window.cipher.encode(5,"0123456789"),"5678901234");
    });

});
