import { NextRequest, NextResponse } from 'next/server';

const SYSTEM_PROMPT = `You are Aik, a friendly and professional AI real estate virtual assistant for AikEstate. You help clients with:
- Finding their dream home or investment property
- Answering questions about property listings, pricing, neighborhoods
- Scheduling property visits and consultations
- Providing information about mortgage rates and financing options
- Explaining the home buying/selling process

Here are some property details you can reference:
- Modern Luxury Villa in Beverly Hills - $2,450,000 (5 bed, 4 bath, 4,200 sqft)
- Downtown Penthouse in Manhattan - $1,890,000 (3 bed, 2 bath, 2,800 sqft)
- Coastal Beach House in Malibu - $3,200,000 (4 bed, 3 bath, 3,500 sqft)
- Suburban Family Home in Austin - $875,000 (4 bed, 3 bath, 3,100 sqft)

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

    let ZAI;
    try {
      ZAI = (await import('z-ai-web-dev-sdk')).default;
    } catch {
      return NextResponse.json(
        { error: 'AI service is currently unavailable. Please try again later.' },
        { status: 503 }
      );
    }

    let zai;
    try {
      zai = await ZAI.create();
    } catch {
      return NextResponse.json(
        { error: 'AI service initialization failed. Please try again later.' },
        { status: 503 }
      );
    }

    let completion;
    try {
      completion = await zai.chat.completions.create({
        messages: [
          { role: 'assistant', content: SYSTEM_PROMPT },
          ...messages
        ],
        thinking: { type: 'disabled' }
      });
    } catch (apiError) {
      console.error('LLM API Error:', apiError);
      // Provide a fallback response if the LLM API fails
      const lastMsg = messages[messages.length - 1]?.content?.toLowerCase() || '';
      let fallbackResponse = "I'd love to help you with that! Our team is available to assist you. Would you like to schedule a visit or learn more about our properties?";

      if (lastMsg.includes('property') || lastMsg.includes('properties') || lastMsg.includes('home') || lastMsg.includes('house')) {
        fallbackResponse = "We have beautiful properties available! Our featured listings include a Modern Luxury Villa in Beverly Hills ($2.45M), a Downtown Penthouse in Manhattan ($1.89M), a Coastal Beach House in Malibu ($3.2M), and a Suburban Family Home in Austin ($875K). Would you like to schedule a visit to any of these?";
      } else if (lastMsg.includes('price') || lastMsg.includes('pricing') || lastMsg.includes('cost')) {
        fallbackResponse = "Our properties range from $875,000 to $3,200,000 depending on location and features. We also offer financing options with competitive mortgage rates. Would you like me to help you find something within your budget?";
      } else if (lastMsg.includes('schedule') || lastMsg.includes('visit') || lastMsg.includes('tour')) {
        fallbackResponse = "I'd be happy to help you schedule a visit! Our agents are available 7 days a week. You can reach us at +1 (555) 123-4567 or fill out the contact form below. Which property are you interested in?";
      } else if (lastMsg.includes('hello') || lastMsg.includes('hi') || lastMsg.includes('hey') || lastMsg.includes('salam') || lastMsg.includes('assalam')) {
        fallbackResponse = "Hello! Welcome to AikEstate! I'm your AI real estate assistant. How can I help you today? You can ask about our properties, pricing, or schedule a visit!";
      }

      return NextResponse.json({ response: fallbackResponse });
    }

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
