import { useState, useEffect } from 'react';
import { setVerified } from '../utils/auth';

const randInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export default function VerifyModal({ open, onClose }) {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    if (open) {
      const na = randInt(1, 9);
      const nb = randInt(1, 9);
      setA(na); setB(nb); setAnswer(''); setError(null);
    }
  }, [open]);

  const check = () => {
    if (parseInt(answer, 10) === a + b) {
      setVerified();
      onClose(true);
    } else {
      setError('Incorrect — try again');
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="bg-primary p-6 rounded-lg max-w-sm w-full">
        <h3 className="text-lg font-semibold">Human verification</h3>
        <p className="mt-2 text-neutral-300">Please solve the puzzle to continue: what is {a} + {b} ?</p>
        <input value={answer} onChange={(e) => setAnswer(e.target.value)} className="mt-4 w-full p-2 rounded bg-neutral-900" />
        {error && <p className="text-sm text-red-400 mt-2">{error}</p>}
        <div className="mt-4 flex gap-2 justify-end">
          <button onClick={() => onClose(false)} className="px-3 py-2 rounded border">Cancel</button>
          <button onClick={check} className="px-3 py-2 rounded bg-royal text-white">Verify</button>
        </div>
      </div>
    </div>
  );
}
