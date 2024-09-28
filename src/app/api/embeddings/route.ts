import OpenAI from "openai";
import { NextRequest, NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const formInputEmbeddingHandler = async (
  req: NextRequest,
  res: NextResponse,
) => {
  if (req.method === "POST") {
    try {
      const { formInput } = await req.json();

      const embedding = await openai.embeddings.create({
        model: "text-embedding-3-small",
        input: formInput,
        encoding_format: "float",
      });

      return NextResponse.json({ embedding }, { status: 200 });
    } catch (error) {
      console.error("Error creating embedding:", error);
      return NextResponse.json(
        { error: "Internal Server Error" },
        { status: 500 },
      );
    }
  } else {
    return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
  }
};
