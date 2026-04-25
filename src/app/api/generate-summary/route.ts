import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { videoTitle, videoDescription } = await req.json();

    if (!process.env.NEXT_PUBLIC_GEMINI_API_KEY) {
      return NextResponse.json({ error: 'Gemini API Key is missing. Please add NEXT_PUBLIC_GEMINI_API_KEY to your .env.local file.' }, { status: 500 });
    }

    const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const prompt = `You are Vayana AI, a smart video assistant. 
    Please generate a concise, engaging summary and suggested timestamps/chapters for a video with the following details:
    Title: ${videoTitle || 'Unknown Title'}
    Description: ${videoDescription || 'No description provided.'}
    
    Format the response nicely in Markdown. Include a "Summary" section and a "Smart Chapters" section.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ summary: text });
  } catch (error: any) {
    console.error('Error generating summary:', error);
    return NextResponse.json({ error: error.message || 'Failed to generate summary' }, { status: 500 });
  }
}
