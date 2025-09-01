describe('Pruebas básicas de Jest', () => {
	beforeEach(() => {
		console.log('Antes de cada test');
	});

	afterEach(() => {
		console.log('Después de cada test');
	});

	test('toBe compara valores primitivos', () => {
		expect(1 + 1).toBe(2);
	});

	test('toEqual compara objetos o arrays', () => {
		const obj = { a: 1, b: 2 };
		expect(obj).toEqual({ a: 1, b: 2 });
	});

	test('toBeTruthy y toBeFalsy', () => {
		expect(true).toBeTruthy();
		expect(false).toBeFalsy();
		expect(0).toBeFalsy();
		expect('hello').toBeTruthy();
	});

	test('toThrow captura errores', () => {
		const thrower = () => {
			throw new Error('¡Error!');
		};
		expect(thrower).toThrow();
		expect(thrower).toThrow('¡Error!');
	});

	test('matchers con strings y arrays', () => {
		expect('jest es genial').toMatch(/genial/);
		expect(['a', 'b', 'c']).toContain('b');
	});

	test('comparaciones numéricas', () => {
		expect(10).toBeGreaterThan(5);
		expect(5).toBeLessThanOrEqual(5);
	});
});
