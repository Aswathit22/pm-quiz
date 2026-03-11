export type QuizQuestion = {
  q: string;
  options: string[];
  answerIndex: number;
  explanation: string;
};

export type Topic = {
  id: string;
  title: string;
  linkedinUrl: string;
  pdfUrl: string;
  questions: QuizQuestion[];
};

// Raw question type (no indices)
export type RawQuestion = {
  q: string;
  correct: string;
  wrong: string[];
  explanation: string;
};

export const rawTopics: Array<{
  id: string;
  title: string;
  linkedinUrl: string;
  pdfUrl: string;
  questions: RawQuestion[];
}> = [
  // ---------------------------
  // Topic 1
  // ---------------------------
  {
    id: "ai-101",
    title: "AI Foundations",
    linkedinUrl:
      "https://www.linkedin.com/posts/aswathit_beyond-the-hype-from-fixed-rules-to-learning-activity-7434077609636057089-12ba?utm_source=share&utm_medium=member_desktop&rcm=ACoAACmHIFQBQEVFBIxBiJCYM8jdMz0bNb7AR_s",
    pdfUrl: "/pdfs/ai-101.pdf",
    questions: [
      {
        q: "What best describes AI (in product terms)?",
        correct:
          "Software that learns patterns from data to predict or generate outputs",
        wrong: [
          "Software that runs fixed rules and gives the same output for the same input",
          "A system that stores information and retrieves it like a database",
          "A tool that only works when connected to the internet",
        ],
        explanation:
          "AI learns patterns; deterministic rules are traditional software.",
      },
      {
        q: "Machine Learning is best described as:",
        correct: "Learning patterns from data to perform a task",
        wrong: [
          "Writing many hand-made rules to handle all cases",
          "Compressing data mainly to reduce storage size",
          "Designing user interfaces and screen flows",
        ],
        explanation: "ML is the “learn from data” approach within AI.",
      },
      {
        q: "Deep Learning differs from classic ML mainly because it:",
        correct: "Learns features automatically using neural networks",
        wrong: [
          "Avoids using data and relies on rules",
          "Works only for text-based problems",
          "Cannot generalize beyond training examples",
        ],
        explanation:
          "Deep learning reduces dependence on hand-crafted features.",
      },
      {
        q: "Generative AI is primarily about:",
        correct: "Generating new content like text, images, or code",
        wrong: [
          "Sorting and filtering data faster",
          "Encrypting user data for security",
          "Storing prompts in a database",
        ],
        explanation: "Generative AI creates content, not just predictions.",
      },
      {
        q: "“Prompt” in an LLM system means:",
        correct: "The instruction and context you give the model",
        wrong: [
          "The model’s training dataset",
          "The product’s database schema",
          "The model’s accuracy score",
        ],
        explanation:
          "Prompt is the instruction/context you give at inference time.",
      },
      {
        q: "Rule-based AI systems are most limited because:",
        correct:
          "They need explicit rules and don’t scale well as complexity grows",
        wrong: [
          "They behave too randomly to trust",
          "They require GPUs to run at all",
          "They cannot be tested reliably",
        ],
        explanation: "Rule explosion and edge cases kill scalability.",
      },
      {
        q: "In classic ML (pre-deep learning), performance often depended heavily on:",
        correct: "Hand-crafted features (feature engineering)",
        wrong: [
          "Token prediction as the main method",
          "UI animations and micro-interactions",
          "Blockchain-based validation",
        ],
        explanation: "Feature engineering was a major driver of results.",
      },
      {
        q: "Transformers were a big turning point mainly because they:",
        correct:
          "Enabled more effective large-scale learning on sequences like text",
        wrong: [
          "Removed the need for training data",
          "Eliminated hallucinations completely",
          "Worked only for image tasks",
        ],
        explanation: "Transformers improved learning from sequences and scaling.",
      },
      {
        q: "A “foundation model” is best described as:",
        correct: "A model trained broadly and adaptable to many tasks",
        wrong: [
          "A model trained for one narrow task only",
          "A model that never needs updates",
          "A model that stores data like a database",
        ],
        explanation: "Pretrain broadly, adapt downstream.",
      },
      {
        q: "“Training” vs “Inference” — which is correct?",
        correct:
          "Training learns from data; inference uses the trained model to generate outputs",
        wrong: [
          "Training is using the model; inference is collecting data",
          "Training is UI design; inference is backend development",
          "Training and inference are the same thing",
        ],
        explanation: "Training learns; inference uses.",
      },
      {
        q: "LLMs generate text primarily by:",
        correct:
          "Predicting the next token repeatedly from the given context",
        wrong: [
          "Copying exact paragraphs from the internet",
          "Running SQL queries on a database",
          "Applying fixed rules only",
        ],
        explanation: "Next-token prediction is the core mechanism.",
      },
      {
        q: "Why do LLM outputs vary even for similar prompts?",
        correct: "Because generation is probabilistic and sampling can differ",
        wrong: [
          "Because LLMs always hallucinate",
          "Because the model forgets every minute",
          "Because prompts are encrypted",
        ],
        explanation: "Sampling/probability introduces variability.",
      },
      {
        q: "Which task is typically a strong fit for LLMs?",
        correct: "Summarizing a long customer support conversation",
        wrong: [
          "Doing financial accounting with guaranteed zero errors",
          "Producing real-time news without any provided context",
          "Always outputting the same answer deterministically",
        ],
        explanation: "Summarization is a common strong use case.",
      },
      {
        q: "A key limitation of LLMs in products is:",
        correct: "They may produce confident but incorrect information",
        wrong: [
          "They cannot generate text",
          "They only work offline",
          "They require a user login",
        ],
        explanation: "Hallucination/confident wrongness is a known risk.",
      },
      {
        q: "“Freshness problem” in LLMs refers to:",
        correct: "The model may be outdated unless you provide context or tools",
        wrong: [
          "The model responds too quickly",
          "The model uses too much RAM",
          "The model always refuses answers",
        ],
        explanation: "Without retrieval/tools, it may be outdated.",
      },
    ],
  },

  // ---------------------------
  // Topic 2
  // ---------------------------
  {
    id: "genai-101",
    title: "Generative AI Foundations",
    linkedinUrl: "", // Post not yet live - will be added later
    pdfUrl: "/pdfs/genai-101.pdf",
    questions: [
      {
        q: "A PM wants a feature that turns long support chats into a 5-bullet summary. Which approach fits best?",
        correct: "Generative AI summarization",
        wrong: [
          "Predictive ML classification only",
          "Rule-based “IF/THEN” templates only",
          "A database query",
        ],
        explanation: "Summarization is a classic GenAI use case.",
      },
      {
        q: "Your team keeps building separate AI solutions for drafting, summarizing, and rewriting. What is the modern advantage of foundation models?",
        correct: "One base capability can be adapted for many tasks",
        wrong: [
          "They remove the need for prompts",
          "They always know internal company data",
          "They prevent hallucinations automatically",
        ],
        explanation:
          "A strong base model can be reused across tasks using prompts + context.",
      },
      {
        q: "A user asks a chatbot about a product policy updated yesterday. What is the biggest risk if you rely only on the model’s “memory”?",
        correct: "The model may respond with outdated info",
        wrong: [
          "The answer becomes too creative",
          "The UI won’t load",
          "The output will always be JSON",
        ],
        explanation:
          "Freshness is a common issue unless you ground answers in updated sources.",
      },
      {
        q: "Which product feature best demonstrates “GenAI generates content” rather than “predicts a score”?",
        correct: "Drafting a product announcement in your brand tone",
        wrong: [
          "Predicting if a user will churn",
          "Forecasting demand next month",
          "Ranking search results by relevance score",
        ],
        explanation: "Drafting is content generation.",
      },
      {
        q: "You paste a long document and the model ignores an important instruction written at the top. What’s a likely reason?",
        correct: "Context window was exceeded and earlier text got cut",
        wrong: [
          "Temperature is too low",
          "The model is offline",
          "Guardrails blocked it",
        ],
        explanation:
          "Long inputs can push early instructions out of the context window.",
      },
      {
        q: "Your GenAI feature must give consistent answers (support/policy). Which setting direction is usually safer?",
        correct: "Lower temperature",
        wrong: [
          "Higher temperature",
          "Random temperature each time",
          "Temperature doesn’t matter",
        ],
        explanation: "Lower temperature reduces variation and drift.",
      },
      {
        q: "Which prompt change most improves reliability for a “How-to steps” answer?",
        correct: "Use steps 1–5 and don’t add extra steps",
        wrong: [
          "Make it creative",
          "Write a long answer",
          "Use more emojis",
        ],
        explanation:
          "Clear format constraints reduce drift and make outputs more consistent.",
      },
      {
        q: "A PM says “prompting is just an engineering detail.” What’s the best counter?",
        correct:
          "Prompts shape behavior like UI copy and flow shapes user experience",
        wrong: [
          "Prompts are irrelevant once the model is chosen",
          "Prompts only affect speed",
          "Prompts guarantee correctness",
        ],
        explanation:
          "Prompting is a product lever: it shapes user outcomes and reliability.",
      },
      {
        q: "A chatbot answers confidently but incorrectly. What’s the most PM-appropriate fix?",
        correct:
          "Add grounding via trusted docs/tools and constrain the output",
        wrong: [
          "Ask the model to “be more accurate”",
          "Increase temperature for better reasoning",
          "Remove guardrails",
        ],
        explanation:
          "Correctness improves when answers are grounded in source-of-truth and constrained.",
      },
      {
        q: "In an end-to-end GenAI flow, which layer typically contains product rules like “don’t discuss account-specific actions”?",
        correct: "Prompt builder / system instructions",
        wrong: [
          "UI only",
          "The user’s browser cache",
          "The database schema",
        ],
        explanation:
          "System instructions/prompt builder is where boundaries and rules are enforced.",
      },
      {
        q: "A tool/API call fails while generating an answer. What should a good GenAI product do?",
        correct:
          "Show a fallback: ask a clarifying question or route to support",
        wrong: [
          "Make up an answer so the user isn’t blocked",
          "Retry forever silently",
          "Output nothing",
        ],
        explanation:
          "Stable fallback UX is part of trust—don’t guess when tools fail.",
      },
      {
        q: "Which option is the best example of “grounding”?",
        correct:
          "Retrieving a policy snippet from your knowledge base and using it in the answer",
        wrong: [
          "Asking the model to “think step by step”",
          "Increasing response length",
          "Adding emojis for clarity",
        ],
        explanation:
          "Grounding uses a source of truth (docs/tools) instead of relying on model memory.",
      },
      {
        q: "A model gives a believable answer with made-up details. What’s the most accurate label for this behavior?",
        correct: "Hallucination",
        wrong: ["Truncation", "Tokenization", "Caching"],
        explanation:
          "Hallucinations are confident outputs that can be incorrect or invented.",
      },
      {
        q: "You want users to get a predictable experience even if the wording varies. Which design choice supports that best?",
        correct: "Force a consistent output format + clear fallbacks",
        wrong: [
          "Always keep temperature high",
          "Let the model answer freely to feel natural",
          "Hide errors and never ask questions",
        ],
        explanation:
          "Deterministic UX comes from structure (format) and predictable fallbacks.",
      },
      {
        q: "A user asks something unclear (“help me fix this”). What is the most reliable product behavior?",
        correct: "Ask one clarifying question before answering",
        wrong: [
          "Guess what they mean",
          "Provide a random generic answer",
          "Refuse every time",
        ],
        explanation:
          "Clarifying reduces ambiguity and improves answer quality and safety.",
      },
    ],
  },
];