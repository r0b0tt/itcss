const  { index } = require('./index');

test('should be defined', () => {
    expect(index).toBeDefined();
});

test('Print out  \'@r0b0t/itcss\'', () => {
   expect(index()).toBe('@r0b0t/itcss');
});