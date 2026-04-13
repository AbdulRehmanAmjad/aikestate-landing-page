import { NextRequest, NextResponse } from 'next/server';

const SYSTEM_PROMPT = `You are Aik, a friendly and professional AI real estate virtual assistant. You help clients with:
- Finding their dream home or investment property
- Answering questions about property listings, pricing, neighborhoods
- Scheduling property visits and consultations
- Providing information about mortgage rates and financing options
- Explaining the home buying/selling process

Be warm, helpful, and knowledgeable. Keep responses concise (2-3 sentences max unless asked for details). Use a professional yet approachable tone. If asked about specific prices or availability, encourage them to schedule a visit for the most accurate information.

Always respond in the same language the user uses. If they write in Urdu/Hindi, respond in Urdu/Hindi. If they write in English, respond in English.`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Messages array is required' },
        { status: 400 }
      );
    }

    const ZAI = (await import('z-ai-web-dev-sdk')).default;
    const zai = await ZAI.create();

    const completion = await zai.chat.completions.create({
      messages: [
        { role: 'assistant', content: SYSTEM_PROMPT },
        ...messages
      ],
      thinking: { type: 'disabled' }
    });

    const response = completion.choices[0]?.message?.content;

    if (!response) {
      return NextResponse.json(
        { error: 'No response from AI' },
        { status: 500 }
      );
    }

    return NextResponse.json({ response });
  } catch (error) {
    console.error('Chat API Error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to get AI response' },
      { status: 500 }
    );
  }
}
