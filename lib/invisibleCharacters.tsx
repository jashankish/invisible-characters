export interface InvisibleCharacter {
    char: string;
    name: string;
    code: number;
    displayName: string;
  }
  
  // Create a comprehensive mapping of invisible characters
  export const invisibleCharacters: InvisibleCharacter[] = [
    { char: '\u0000', name: 'Null', code: 0x0000, displayName: '␀' },
    { char: '\t', name: 'Tab', code: 0x0009, displayName: '→' },
    { char: '\n', name: 'Line Feed', code: 0x000A, displayName: '↵' },
    { char: '\r', name: 'Carriage Return', code: 0x000D, displayName: '⏎' },
    { char: ' ', name: 'Space', code: 0x0020, displayName: '•' },
    { char: '\u00A0', name: 'Non-Breaking Space', code: 0x00A0, displayName: '⍽' },
    { char: '\u200B', name: 'Zero-Width Space', code: 0x200B, displayName: '⟨ZWSP⟩' },
    { char: '\u00AD', name: 'Soft Hyphen', code: 0x00AD, displayName: '⟨SHY⟩' },
    { char: '\u200C', name: 'Zero-Width Non-Joiner', code: 0x200C, displayName: '⟨ZWNJ⟩' },
    { char: '\u200D', name: 'Zero-Width Joiner', code: 0x200D, displayName: '⟨ZWJ⟩' },
    { char: '\u200E', name: 'Left-to-Right Mark', code: 0x200E, displayName: '⟨LRM⟩' },
    { char: '\u200F', name: 'Right-to-Left Mark', code: 0x200F, displayName: '⟨RLM⟩' },
    { char: '\uFEFF', name: 'Byte Order Mark', code: 0xFEFF, displayName: '⟨BOM⟩' },
    { char: '\u2000', name: 'En Quad', code: 0x2000, displayName: '⟨NQSP⟩' },
    { char: '\u2001', name: 'Em Quad', code: 0x2001, displayName: '⟨MQSP⟩' },
    { char: '\u2002', name: 'En Space', code: 0x2002, displayName: '⟨ENSP⟩' },
    { char: '\u2003', name: 'Em Space', code: 0x2003, displayName: '⟨EMSP⟩' },
    { char: '\u2004', name: 'Three-Per-Em Space', code: 0x2004, displayName: '⟨3/MSP⟩' },
    { char: '\u2005', name: 'Four-Per-Em Space', code: 0x2005, displayName: '⟨4/MSP⟩' },
    { char: '\u2006', name: 'Six-Per-Em Space', code: 0x2006, displayName: '⟨6/MSP⟩' },
    { char: '\u2007', name: 'Figure Space', code: 0x2007, displayName: '⟨FSP⟩' },
    { char: '\u2008', name: 'Punctuation Space', code: 0x2008, displayName: '⟨PSP⟩' },
    { char: '\u2009', name: 'Thin Space', code: 0x2009, displayName: '⟨THSP⟩' },
    { char: '\u200A', name: 'Hair Space', code: 0x200A, displayName: '⟨HSP⟩' },
    { char: '\u2028', name: 'Line Separator', code: 0x2028, displayName: '⟨LS⟩' },
    { char: '\u2029', name: 'Paragraph Separator', code: 0x2029, displayName: '¶' },
    { char: '\u202A', name: 'Left-to-Right Embedding', code: 0x202A, displayName: '⟨LRE⟩' },
    { char: '\u202B', name: 'Right-to-Left Embedding', code: 0x202B, displayName: '⟨RLE⟩' },
    { char: '\u202C', name: 'Pop Directional Formatting', code: 0x202C, displayName: '⟨PDF⟩' },
    { char: '\u202D', name: 'Left-to-Right Override', code: 0x202D, displayName: '⟨LRO⟩' },
    { char: '\u202E', name: 'Right-to-Left Override', code: 0x202E, displayName: '⟨RLO⟩' },
    { char: '\u202F', name: 'Narrow No-Break Space', code: 0x202F, displayName: '⟨NNBSP⟩' },
    { char: '\u205F', name: 'Medium Mathematical Space', code: 0x205F, displayName: '⟨MMSP⟩' },
    { char: '\u2060', name: 'Word Joiner', code: 0x2060, displayName: '⟨WJ⟩' },
    { char: '\u2061', name: 'Function Application', code: 0x2061, displayName: '⟨FA⟩' },
    { char: '\u2062', name: 'Invisible Times', code: 0x2062, displayName: '⟨IT⟩' },
    { char: '\u2063', name: 'Invisible Separator', code: 0x2063, displayName: '⟨IS⟩' },
    { char: '\u2064', name: 'Invisible Plus', code: 0x2064, displayName: '⟨IP⟩' },
    { char: '\u2066', name: 'Left-to-Right Isolate', code: 0x2066, displayName: '⟨LRI⟩' },
    { char: '\u2067', name: 'Right-to-Left Isolate', code: 0x2067, displayName: '⟨RLI⟩' },
    { char: '\u2068', name: 'First Strong Isolate', code: 0x2068, displayName: '⟨FSI⟩' },
    { char: '\u2069', name: 'Pop Directional Isolate', code: 0x2069, displayName: '⟨PDI⟩' },
    { char: '\u206A', name: 'Inhibit Symmetric Swapping (Deprecated)', code: 0x206A, displayName: '⟨ISS⟩' },
    { char: '\u206B', name: 'Activate Symmetric Swapping (Deprecated)', code: 0x206B, displayName: '⟨ASS⟩' },
    { char: '\u206C', name: 'Inhibit Arabic Form Shaping (Deprecated)', code: 0x206C, displayName: '⟨IAFS⟩' },
    { char: '\u206D', name: 'Activate Arabic Form Shaping (Deprecated)', code: 0x206D, displayName: '⟨AAFS⟩' },
    { char: '\u206E', name: 'National Digit Shapes (Deprecated)', code: 0x206E, displayName: '⟨NDS⟩' },
    { char: '\u206F', name: 'Nominal Digit Shapes (Deprecated)', code: 0x206F, displayName: '⟨NODS⟩' },
    { char: '\u3000', name: 'Ideographic Space', code: 0x3000, displayName: '⟨IDSP⟩' },
  ];
  
  // Create a map for quick lookup
  export const invisibleCharactersMap = new Map<string, InvisibleCharacter>();
  invisibleCharacters.forEach(char => {
    invisibleCharactersMap.set(char.char, char);
  });
  
  // Function to detect and process invisible characters
  export function processText(text: string): {
    highlightedText: React.ReactNode[];
    detectedCharacters: Map<string, { character: InvisibleCharacter; count: number }>;
  } {
    const detectedCharacters = new Map<string, { character: InvisibleCharacter; count: number }>();
    const highlightedText: React.ReactNode[] = [];
    
    // Process each character in the text
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      const invisibleChar = invisibleCharactersMap.get(char);
      
      if (invisibleChar) {
        // Increment counter for this character
        if (detectedCharacters.has(char)) {
          const currentData = detectedCharacters.get(char)!;
          currentData.count++;
          detectedCharacters.set(char, currentData);
        } else {
          detectedCharacters.set(char, { character: invisibleChar, count: 1 });
        }
        
        // Add highlighted character to output
        highlightedText.push(
          <span key={`char-${i}`} className="highlighted-char" title={`${invisibleChar.name} (U+${invisibleChar.code.toString(16).toUpperCase().padStart(4, '0')})`}>
            {invisibleChar.displayName}
          </span>
        );
      } else {
        // Check if this is some other control or invisible character
        if (char.charCodeAt(0) < 32 || (char.charCodeAt(0) >= 127 && char.charCodeAt(0) <= 159)) {
          const code = char.charCodeAt(0);
          const otherInvisible = {
            char,
            name: `Control character`,
            code,
            displayName: `U+${code.toString(16).toUpperCase().padStart(4, '0')}`
          };
          
          if (detectedCharacters.has(char)) {
            const currentData = detectedCharacters.get(char)!;
            currentData.count++;
            detectedCharacters.set(char, currentData);
          } else {
            detectedCharacters.set(char, { character: otherInvisible, count: 1 });
          }
          
          highlightedText.push(
            <span key={`char-${i}`} className="highlighted-char" title={`Control character (U+${code.toString(16).toUpperCase().padStart(4, '0')})`}>
              {otherInvisible.displayName}
            </span>
          );
        } else {
          // If it's a regular character, add it as is
          // Check if previous was also a regular character, so we can join them
          const lastItem = highlightedText[highlightedText.length - 1];
          if (typeof lastItem === 'string') {
            highlightedText[highlightedText.length - 1] = lastItem + char;
          } else {
            highlightedText.push(char);
          }
        }
      }
    }
    
    return { highlightedText, detectedCharacters };
  }