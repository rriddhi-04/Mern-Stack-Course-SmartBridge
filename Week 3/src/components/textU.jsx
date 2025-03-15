import { useState } from 'react';

export function TextUpdater() {
  const [text, setText] = useState('');

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border border-gray-300 p-2 rounded-md w-full"
        placeholder="Type something..."
      />
      <p className="mt-2 text-gray-700">You typed: {text}</p>
    </div>
  );
}
