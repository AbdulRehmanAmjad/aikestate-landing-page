import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { text, voice = 'tongtong', speed = 1.0 } = await req.json();

    if (!text || text.trim().length === 0) {
      return NextResponse.json(
        { error: 'Text is required' },
        { status: 400 }
      );
    }

    if (text.length > 1024) {
      return NextResponse.json(
        { error: 'Text exceeds maximum length of 1024 characters' },
        { status: 400 }
      );
    }

    let ZAI;
    try {
      ZAI = (await import('z-ai-web-dev-sdk')).default;
    } catch {
      return NextResponse.json(
        { error: 'TTS service is currently unavailable' },
        { status: 503 }
      );
    }

    let zai;
    try {
      zai = await ZAI.create();
    } catch {
      return NextResponse.json(
        { error: 'TTS service initialization failed' },
        { status: 503 }
      );
    }

    let response;
    try {
      response = await zai.audio.tts.create({
        input: text.trim(),
        voice: voice,
        speed: speed,
        response_format: 'wav',
        stream: false,
      });
    } catch (ttsError) {
      console.error('TTS API Error:', ttsError);
      return NextResponse.json(
        { error: 'Speech generation failed. Please try again.' },
        { status: 503 }
      );
    }

    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(new Uint8Array(arrayBuffer));

    return new NextResponse(buffer, {
      status: 200,
      headers: {
        'Content-Type': 'audio/wav',
        'Content-Length': buffer.length.toString(),
        'Cache-Control': 'no-cache',
      },
    });
  } catch (error) {
    console.error('TTS API Error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to generate speech' },
      { status: 500 }
    );
  }
}
