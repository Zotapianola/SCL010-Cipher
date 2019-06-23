describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });
    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () => {
      assert.equal(cipher.encode(33, "ABCDEFGHIJKLMNOPQRSTUVWXYZ"), "HIJKLMNOPQRSTUVWXYZABCDEFG");
    });
    it('debería retornar "hijklmnopqrstuvwxyzabcdefg" para "abcefghijklmnopqrstuvwxyz" con offset 33', () => {
      assert.equal(cipher.encode(33, "abcdefghijklmnopqrstuvwxyz"), "hijklmnopqrstuvwxyzabcdefg");
    });
    it('debería retornar "BIBCO" para "ÑUÑOA" con offset 66', () => {
      assert.equal(cipher.encode(66, "ÑUÑOA"), "BIBCO");
    });
    it('debería retornar "bibco" para "ñuñoa" con offset 66', () => {
      assert.equal(cipher.encode(66, "ñuñoa"), "bibco");
    });
    it('debería retornar "23456789:12" para "12345678901" con offset de 33', () => {
      assert.equal(cipher.encode(33, "12345678901"), "23456789:12");
    });
    it('debería retornar "" para "  " con offset de 9 ', () => {
      assert.equal(cipher.encode(9,"  "), "");
    });
    it('debería retornar "RozbdFgnrsBnzrssnBnzrs4" para "Space Ghost Coast to Coast!" con offset de 467', () => {
      assert.equal(cipher.encode(467, "Space Ghost Coast to Coast!"), "RozbdFgnrsBnzrssnBnzrs4");
    });
    it('debería retornar "zabcdef" para "abcdefg" con offset de -1', () => {
      assert.equal(cipher.decode(1, "abcdefg"), "zabcdef");
    });
  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });
    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33', () => {
      assert.equal(cipher.decode(33, "HIJKLMNOPQRSTUVWXYZABCDEFG"), "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    });
    it('debería retornar "abcefghijklmnopqrstuvwxyz" para "hijklmnopqrstuvwxyzabcdefg" con offset 33', () => {
      assert.equal(cipher.decode(33, "hijklmnopqrstuvwxyzabcdefg"), "abcdefghijklmnopqrstuvwxyz");
    });
    it('debería retornar "12345678901" para "23456789:12" con offset de 33', () => {
      assert.equal(cipher.decode(33, "23456789:12"), "12345678901");
    });
    it('debería retornar "  " para "" con offset de 9 ', () => {
      assert.equal(cipher.decode(9, ""), "  ");
    });
    it('debería retornar "Space Ghost Coast to Coast!" para "RozbdFgnrsBnzrssnBnzrs4" con offset de 467', () => {
      assert.equal(cipher.decode(467, "RozbdFgnrsBnzrssnBnzrs4"), "Space Ghost Coast to Coast!");
    });
    it('debería retornar "abcdefg" para "zabcdef" con offset de -1', () => {
      assert.equal(cipher.encode(1, "zabcdef"), "abcdefg");
    });
  });

});
