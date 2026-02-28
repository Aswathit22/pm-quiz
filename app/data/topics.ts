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
    {
      id: "ai-101",
      title: "AI Foundations",
      linkedinUrl: "https://linkedin.com/", // <-- replace with your post URL
      pdfUrl: "/pdfs/ai-101.pdf", // <-- place PDF at public/pdfs/ai-101.pdf
      questions: [
        {
          q: "What best describes AI (in product terms)?",
          correct: "Software that learns patterns from data to predict or generate outputs",
          wrong: [
            "Software that runs fixed rules and gives the same output for the same input",
            "A system that stores information and retrieves it like a database",
            "A tool that only works when connected to the internet",
          ],
          explanation: "AI learns patterns; deterministic rules are traditional software.",
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
          explanation: "Deep learning reduces dependence on hand-crafted features.",
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
          explanation: "Prompt is the instruction/context you give at inference time.",
        },
        {
          q: "Rule-based AI systems are most limited because:",
          correct: "They need explicit rules and don’t scale well as complexity grows",
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
          correct: "Enabled more effective large-scale learning on sequences like text",
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
          correct: "Training learns from data; inference uses the trained model to generate outputs",
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
  ];