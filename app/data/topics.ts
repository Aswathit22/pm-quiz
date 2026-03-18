export type QuizQuestion = {
  q: string;
  options: string[];
  answerIndex: number;
  explanation: string;
};

export type Topic = {
  id: string;
  title: string;
  linkedinUrl: string; // empty => not live yet
  pdfUrl: string;
  questions: RawQuestion[];
};

export type RawQuestion = {
  q: string;
  correct: string;
  wrong: string[];
  explanation: string;
};

export const rawTopics: Topic[] = [
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
        correct: "Predicting the next token repeatedly from the given context",
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
  {
    id: "genai-101",
    title: "Generative AI Foundations",
    linkedinUrl:
      "https://www.linkedin.com/posts/aswathit_genai-foundations-activity-7437701448043327488-oi84?utm_source=share&utm_medium=member_desktop&rcm=ACoAACmHIFQBQEVFBIxBiJCYM8jdMz0bNb7AR_s",
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
        wrong: ["Make it creative", "Write a long answer", "Use more emojis"],
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
          "Correctness improves when answers are grounded and constrained.",
      },
      {
        q: "In an end-to-end GenAI flow, which layer typically contains product rules like “don’t discuss account-specific actions”?",
        correct: "Prompt builder / system instructions",
        wrong: ["UI only", "The user’s browser cache", "The database schema"],
        explanation:
          "System instructions/prompt builder is where boundaries and rules are enforced.",
      },
      {
        q: "A tool/API call fails while generating an answer. What should a good GenAI product do?",
        correct: "Show a fallback: ask a clarifying question or route to support",
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
          "Grounding uses a source of truth (docs/tools) instead of model memory.",
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
          "Deterministic UX comes from structure and predictable fallbacks.",
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
  {
    id: "rag-101",
    title: "RAG & Knowledge Systems",
    linkedinUrl: "https://www.linkedin.com/posts/aswathit_rag-and-knowledge-systems-ugcPost-7439877899870064641-ONUN?utm_source=share&utm_medium=member_desktop&rcm=ACoAACmHIFQBQEVFBIxBiJCYM8jdMz0bNb7AR_s",
    pdfUrl: "/pdfs/rag-101.pdf",
    questions: [
      {
        q: "A support bot gives vague answers because it does not know the company’s latest refund policy. What is the best reason to add RAG?",
        correct:
          "To help the bot use current company knowledge while answering",
        wrong: [
          "To make the UI more interactive",
          "To remove the need for prompts",
          "To make every answer shorter",
        ],
        explanation:
          "RAG is useful when answers need to come from current, trusted knowledge rather than only model memory.",
      },
      {
        q: "Which situation is the best fit for RAG?",
        correct: "Answering employee questions using internal policy documents",
        wrong: [
          "Writing a fictional bedtime story",
          "Generating random brand name ideas",
          "Creating a poem from scratch",
        ],
        explanation:
          "RAG is best when the system needs to answer from a source of truth such as internal documents or knowledge bases.",
      },
      {
        q: "A user asks, “Can I get a refund on my annual plan?” A RAG system answers by first searching policy documents and then responding. What makes this a RAG flow?",
        correct: "It retrieves relevant source content before answering",
        wrong: [
          "It generates text in a friendly tone",
          "It uses a larger model",
          "It asks the user a follow-up question",
        ],
        explanation:
          "The defining feature of RAG is retrieval before generation.",
      },
      {
        q: "A team splits documents into very tiny chunks. What problem is most likely to happen?",
        correct: "The system may lose important context",
        wrong: [
          "The system will stop retrieving results",
          "The model will become more creative",
          "The UI will fail to load",
        ],
        explanation:
          "If chunks are too small, connected information can get separated, which can lead to incomplete answers.",
      },
      {
        q: "A team sends very large chunks into the system. What is the most likely downside?",
        correct: "The system may retrieve too much irrelevant information",
        wrong: [
          "The system will no longer need embeddings",
          "The model will stop citing sources",
          "The documents will become easier to maintain",
        ],
        explanation:
          "Large chunks can introduce noise and reduce answer quality.",
      },
      {
        q: "Why are embeddings useful in RAG?",
        correct: "They help the system find text with similar meaning",
        wrong: [
          "They convert PDFs into websites",
          "They reduce the number of users",
          "They replace the source documents",
        ],
        explanation:
          "Embeddings help retrieve relevant content even when the user’s wording does not exactly match the source wording.",
      },
      {
        q: "A user searches for “password recovery,” but the document says “reset login credentials.” Why can vector search help here?",
        correct:
          "Because it finds similarity in meaning, not just exact wording",
        wrong: [
          "Because it only matches exact keywords",
          "Because it rewrites the document automatically",
          "Because it removes the need for chunking",
        ],
        explanation:
          "Vector search is useful when different phrases express similar intent.",
      },
      {
        q: "A product manager notices that the system often retrieves something related, but not the best section. Which improvement is most relevant?",
        correct: "Re-ranking the retrieved results",
        wrong: [
          "Making the logo larger",
          "Reducing the number of users",
          "Removing citations",
        ],
        explanation:
          "Re-ranking helps improve the order of retrieved content so the most relevant chunks come first.",
      },
      {
        q: "What is the main purpose of top-k retrieval?",
        correct:
          "To choose how many top relevant chunks should be passed to the model",
        wrong: [
          "To select how many users can access the system",
          "To decide how many prompts are stored",
          "To set the number of PDFs uploaded",
        ],
        explanation:
          "Top-k determines how many retrieved chunks are included as context for answer generation.",
      },
      {
        q: "Why can sending too many retrieved chunks to the model hurt answer quality?",
        correct: "Because the model may get distracted by extra noise",
        wrong: [
          "Because citations stop working automatically",
          "Because the source documents disappear",
          "Because embeddings cannot be created anymore",
        ],
        explanation:
          "Too much context can dilute relevance and make the answer less focused.",
      },
      {
        q: "A system gives a correct-looking answer, but users cannot tell where it came from. What is the most important feature missing?",
        correct: "Citations",
        wrong: [
          "More color in the UI",
          "Longer prompts",
          "Extra sample questions",
        ],
        explanation:
          "Citations improve trust and verification by showing the source behind the answer.",
      },
      {
        q: "A company updates its policy, but the AI assistant keeps answering from the old version. What issue does this show most clearly?",
        correct: "Freshness problem",
        wrong: [
          "Mobile responsiveness problem",
          "Prompt formatting problem",
          "Tone inconsistency problem",
        ],
        explanation:
          "If the knowledge base is not updated properly, the system may keep using stale information.",
      },
      {
        q: "Which statement best reflects a good PM understanding of RAG?",
        correct:
          "RAG quality depends on retrieval, content quality, and freshness",
        wrong: [
          "RAG quality depends only on the model",
          "RAG is useful only for chatbots",
          "RAG removes the need for evaluation",
        ],
        explanation:
          "A good RAG system depends on more than the model. Source quality, chunking, retrieval, and freshness all matter.",
      },
      {
        q: "When is RAG less useful?",
        correct:
          "When the task is mainly pure creativity without source grounding",
        wrong: [
          "When the task depends on trusted source documents",
          "When answers must be traceable",
          "When company-specific knowledge is required",
        ],
        explanation:
          "RAG is most valuable when answers need grounding in external knowledge. It is less necessary for purely creative tasks.",
      },
      {
        q: "A team says, “The model is bad.” But after investigation, the real issue is outdated docs and poor retrieval. What is the best PM takeaway?",
        correct:
          "Many AI answer problems are actually knowledge system problems",
        wrong: [
          "The only fix is a bigger model",
          "Prompts are the only thing that matter",
          "Citations should be removed",
        ],
        explanation:
          "Many RAG failures come from stale content, poor chunking, weak retrieval, or low-quality knowledge sources, not just the model.",
      },
    ],
  },
];