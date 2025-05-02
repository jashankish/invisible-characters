'use client';

import React, { useState, useEffect } from 'react';
import { invisibleCharacters, processText } from '@/lib/invisibleCharacters';

export default function InvisibleCharacterViewer() {
  const [inputText, setInputText] = useState('');
  const [highlightedText, setHighlightedText] = useState<React.ReactNode[]>([]);
  const [detectedChars, setDetectedChars] = useState<Map<string, { character: any; count: number }>>(
    new Map()
  );
  
  // Process text whenever input changes
  useEffect(() => {
    const { highlightedText, detectedCharacters } = processText(inputText);
    setHighlightedText(highlightedText);
    setDetectedChars(detectedCharacters);
  }, [inputText]);
  
  return (
    <div className="container">
      <h1>Invisible Character Viewer</h1>
      <p className="description">
        Paste text in the box below to detect and highlight invisible characters.
      </p>
      
      <div className="input-section">
        <h2>Input Text</h2>
        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Paste your text here..."
          rows={8}
          className="text-input"
        />
      </div>
      
      <div className="output-section">
        <h2>Detected Characters</h2>
        <div className="highlighted-box">
          {highlightedText.length > 0 ? highlightedText : <span className="placeholder">Characters will appear here...</span>}
        </div>
      </div>
      
      {detectedChars.size > 0 && (
        <div className="stats-section">
          <h2>Character Statistics</h2>
          <table className="stats-table">
            <thead>
              <tr>
                <th>Display</th>
                <th>Name</th>
                <th>Unicode</th>
                <th>Count</th>
              </tr>
            </thead>
            <tbody>
              {Array.from(detectedChars.entries()).map(([key, { character, count }]) => (
                <tr key={character.code}>
                  <td>{character.displayName}</td>
                  <td>{character.name}</td>
                  <td>U+{character.code.toString(16).toUpperCase().padStart(4, '0')}</td>
                  <td>{count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      
      <div className="legend-section">
        <h2>Invisible Character Legend</h2>
        <p>The following invisible characters are detected by the app:</p>
        <ul className="character-grid">
          {invisibleCharacters.map((char) => (
            <li key={char.code} className="character-item">
              <span className="character-display">{char.displayName}</span> - {char.name}
            </li>
          ))}
        </ul>
      </div>
      
      <style jsx>{`
        .description {
          margin-bottom: 2rem;
        }
        
        .input-section, .output-section, .stats-section, .legend-section {
          margin-bottom: 2rem;
        }
        
        .text-input {
          width: 100%;
          background-color: var(--secondary-bg);
          color: var(--text-color);
          border: 1px solid var(--border-color);
          padding: 1rem;
          border-radius: 4px;
          font-family: monospace;
          font-size: 1rem;
        }
        
        .highlighted-box {
          background-color: var(--secondary-bg);
          padding: 1rem;
          border-radius: 4px;
          border: 1px solid var(--border-color);
          min-height: 100px;
          font-family: monospace;
          white-space: pre-wrap;
          word-break: break-word;
        }
        
        .placeholder {
          color: #666;
          font-style: italic;
        }
        
        .stats-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
        }
        
        .stats-table th, .stats-table td {
          padding: 0.5rem 1rem;
          border-bottom: 1px solid var(--border-color);
        }
        
        .stats-table th {
          background-color: var(--secondary-bg);
          color: var(--accent-color);
        }
        
        .character-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 0.5rem;
          list-style: none;
          padding: 0;
        }
        
        .character-item {
          padding: 0.25rem 0;
        }
        
        .character-display {
          display: inline-block;
          background-color: var(--accent-color);
          color: black;
          padding: 0 4px;
          margin-right: 4px;
          border-radius: 2px;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
}