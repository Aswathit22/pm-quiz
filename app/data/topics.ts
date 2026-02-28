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
          correct:
            "Software that learns patterns from data to make predictions or generate outputs",
          wrong: [
            "Software that always produces the same output for the same input",
            "A database that stores knowledge",
            "A system that only works with internet access",
          ],
          explanation:
            "AI learns patterns; deterministic rules are traditional software.",
        },
        {
          q: "Machine Learning is best described as:",
          correct: "Learning patterns from data to perform a task",
          wrong: [
            "Writing a large number of rules by hand",
            "Compressing data to save storage",
            "A UI design technique",
          ],
          explanation: "ML is the “learn from data” approach within AI.",
        },
        {
          q: "Deep Learning differs from classic ML mainly because it:",
          correct: "Learns features automatically using neural networks",
          wrong: [
            "Avoids using data",
            "Only works for text",
            "Cannot generalize to new examples",
          ],
          explanation:
            "Deep learning reduces dependence on hand-crafted features.",
        },
        {
          q: "Generative AI is primarily about:",
          correct: "Generating new content like text, images, or code",
          wrong: [
            "Sorting data faster",
            "Encrypting user data",
            "Storing prompts in a database",
          ],
          explanation: "Generative AI creates content, not just predictions.",
        },
        {
          q: "“Prompt” in an LLM system means:",
          correct: "The user’s instruction/input to the model",
          wrong: [
            "The model’s training dataset",
            "The database schema",
            "The model’s accuracy score",
          ],
          explanation:
            "Prompt is the instruction/context you give at inference time.",
        },
        {
          q: "Rule-based AI systems are most limited because:",
          correct: "They require explicit rules and don’t scale well with complexity",
          wrong: [
            "They are too random",
            "They need GPUs to run",
            "They can’t be tested",
          ],
          explanation: "Rule explosion and edge cases kill scalability.",
        },
        {
          q: "In classic ML (pre-deep learning), performance often depended heavily on:",
          correct: "Hand-crafted features",
          wrong: ["Token prediction", "User interface animations", "Blockchain"],
          explanation: "Feature engineering was a major driver of results.",
        },
        {
          q: "Transformers were a big turning point mainly because they:",
          correct: "Made large-scale training on sequences (like text) more effective",
          wrong: [
            "Removed the need for any data",
            "Prevented hallucinations completely",
            "Only work for images",
          ],
          explanation: "Transformers improved learning from sequences and scaling.",
        },
        {
          q: "A “foundation model” is best described as:",
          correct: "A model pre-trained on broad data and adaptable to many tasks",
          wrong: [
            "A model trained for a single narrow task only",
            "A model that never needs updates",
            "A model that stores data like a database",
          ],
          explanation: "Pretrain broadly, adapt downstream.",
        },
        {
          q: "“Training” vs “Inference” — which is correct?",
          correct:
            "Training = learning from data; Inference = generating outputs using the trained model",
          wrong: [
            "Training = using the model; Inference = collecting data",
            "Training = UI design; Inference = backend development",
            "Training and inference are the same thing",
          ],
          explanation: "Training learns; inference uses.",
        },
        {
          q: "LLMs generate text primarily by:",
          correct: "Predicting the next token repeatedly based on context",
          wrong: [
            "Copying exact paragraphs from the internet",
            "Running SQL queries",
            "Using only fixed rules",
          ],
          explanation: "Next-token prediction is the core mechanism.",
        },
        {
          q: "Why do LLM outputs vary even for similar prompts?",
          correct: "Because outputs are probabilistic and sampling can differ",
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
            "Guaranteed correct financial accounting with zero errors",
            "Producing real-time news without any provided context",
            "Deterministically outputting the same answer always",
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
          correct:
            "The model may not know up-to-date information unless given context/tools",
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