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
    setResult(null);

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
    <main className="min-h-screen bg-gray-100 py-10 px-4 flex items-center justify-center">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Check Your Result
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Roll Number
            </label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm text-gray-800"
              value={formData.rollno}
              onChange={(e) =>
                setFormData({ ...formData, rollno: e.target.value })
              }
              placeholder="Enter your Roll Number"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date of Birth
            </label>
            <input
              type="date"
              required
              className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm text-gray-800"
              value={formData.dob}
              onChange={(e) =>
                setFormData({ ...formData, dob: e.target.value })
              }
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition duration-300 disabled:bg-gray-400"
          >
            {loading ? 'Checking...' : 'Check Result'}
          </button>
        </form>

        {error && (
          <div className="mt-6 text-center text-red-600 font-medium">
            {error}
          </div>
        )}

        {result && (
          <div className="mt-10 bg-blue-50 border border-blue-200 rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
              {result.name}&apos;s Result
            </h2>
            <p className="text-lg text-center text-gray-700 mb-6">
              Total Percentage: <span className="font-semibold">{result.marks}</span>
            </p>
            <div className="text-center">
              <a
                href={result.pdfUrl}
                download={`${result.name}_result.pdf`}
                className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-md transition duration-300"
              >
                Download Result PDF
              </a>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
