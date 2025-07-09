import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const dynamic = 'force-dynamic'; // Required for Vercel deployments

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const rollno = searchParams.get('rollno');
  const dob = searchParams.get('dob');

  if (!rollno || !dob) {
    return NextResponse.json(
      { error: 'Missing required parameters' },
      { status: 400 }
    );
  }

  try {
    // Initialize Google Sheets API client
    const auth = new JWT({
      email: process.env.GOOGLE_CLIENT_EMAIL!.trim(),
      key: process.env.GOOGLE_PRIVATE_KEY!.replace(/\\n/g, '\n'),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID!, auth);

    // Load document info
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0]; // First sheet
    const rows = await sheet.getRows();

    // Find matching student
    const student = rows.find(
      (row) => row.get('RollNo') === rollno && row.get('DOB') === dob
    );

    console.log('Input Rollno:', rollno);
    console.log('Input DOB:', dob);

    rows.forEach((row) => {
      console.log({
        roll: row.get('RollNo'),
        dob: row.get('DOB'),
      });
    });


    if (!student) {
      return NextResponse.json({ error: 'Result not found' }, { status: 404 });
    }

    // Construct response
    const result = {
      name: student.get('StudentName'),
      marks: student.get('Percentage'), // Changed from Marks to Percentage
      pdfUrl: `https://drive.google.com/uc?export=download&id=${student.get('PDFFileID')}`,
    };

    const response = NextResponse.json(result);
    response.headers.set(
      'Cache-Control',
      'public, s-maxage=3600, stale-while-revalidate=600'
    );
    return response;
  } catch (error: unknown) {
    console.error('API Error:', error);

    if (error instanceof Error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: 'An unexpected error occurred' },
      { status: 500 }
    );
  }
}
