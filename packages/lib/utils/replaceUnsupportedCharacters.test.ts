import replaceUnsupportedCharacters from './replaceUnsupportedCharacters';

describe('replaceUnsupportedCharacters', () => {
	test('should replace NULL characters', () => {
		expect(replaceUnsupportedCharacters('Test\x00...')).toBe('Test�...');
		expect(replaceUnsupportedCharacters('\x00Test\x00...')).toBe('�Test�...');
	});
});
