"use client";

import { useState, FormEvent } from 'react';

interface ResultData {
  name: string;
  marks: string;
  pdfUrl: string;
}

export default function ResultChecker() {
  const [formData, setFormData] = useState({ rollno: '', dob: '' });
  const [result, setResult] = useState<ResultData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch(
        `/api/result?rollno=${formData.rollno}&dob=${formData.dob}`
      );

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('Result not found');
        } else {
          throw new Error('An unexpected error occurred');
        }
      }

      const data: ResultData = await response.json();
      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch result');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl bg-slate-100 mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Check Your Result</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 p-8 rounded-lg shadow-md"
      >
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Roll Number:
          </label>
          <input
            type="text"
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={formData.rollno}
            onChange={(e) => setFormData({ ...formData, rollno: e.target.value })}
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Date of Birth:
          </label>
          <input
            type="date"
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={formData.dob}
            onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {loading ? 'Checking...' : 'Check Result'}
        </button>
      </form>

      {error && (
        <p className="mt-4 text-red-600 text-center">{error}</p>
      )}

      {result && (
        <div className="mt-8 bg-blue-50 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">{result.name}&apos;s Result</h2>
          <p className="text-lg mb-4">Total Percentage: {result.marks}</p>
          <a
            href={result.pdfUrl}
            download={`${result.name}_result.pdf`}
            className="inline-block no-underline bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
          >
            Download Result PDF
          </a>
        </div>
      )}
    </div>
  );
}
