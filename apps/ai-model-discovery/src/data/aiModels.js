// src/data/aiModels.js

export const aiModels = [
  {
    id: 'gemini-2-5-pro',
    name: 'Gemini 2.5 Pro',
    provider: 'Google',
    description: 'Googles flagship model, excelling in complex reasoning, coding, and creative generation with a very large context window.',
    tokenLimits: {
      contextWindow: 1000000,
      outputTokenLimit: '8,192 tokens',
      notes: "Google's Gemini 2.5 Pro leads in long-context handling with a 1 million token window, with pricing tiers for smaller contexts."
    },
    pricing: {
      inputCost: 2.50, // For >200k tokens
      outputCost: 15.00, // For >200k tokens
      notes: 'Pricing is $1.25/M for input and $10.00/M for output on prompts <=200K tokens, and $2.50/M input and $15.00/M output for prompts >200K tokens.'
    },
    tags: {
      task: ['long_document', 'text_generation', 'reasoning', 'coding', 'multimodal'],
      quality: 'premium',
      priority: ['large-context', 'top-quality']
    },
    useCases: ['In-depth analysis of extensive documents (e.g., financial reports, research papers)', 'Advanced and agentic coding workflows', 'High-quality content creation and summarization', 'Complex, multi-turn conversational AI']
  },
  {
    id: 'gemini-1-5-flash',
    name: 'Gemini 1.5 Flash',
    provider: 'Google',
    description: 'A lightweight and fast model optimized for speed and cost-efficiency, ideal for high-volume and low-latency tasks.',
    tokenLimits: {
      contextWindow: 1048576,
      outputTokenLimit: '8,192 tokens',
      notes: "Google's Gemini 1.5 Flash offers a massive 1M token context window at a lower price point, optimized for speed."
    },
    pricing: {
      inputCost: 0.35,
      outputCost: 1.05,
      notes: 'Gemini 1.5 Flash offers a very low price for its large context window, making it ideal for high-volume, cost-sensitive tasks.'
    },
    tags: {
      task: ['summarization', 'data_extraction', 'text_generation', 'conversational_ai'],
      quality: 'balanced',
      priority: ['speed-latency', 'cost-efficiency', 'large-context'],
      special: ['high-volume']
    },
    useCases: ['Real-time summarization of long documents or transcripts', 'High-volume data extraction and classification', 'General text generation for chatbots and content farms', 'Cost-sensitive conversational AI applications']
  },
  {
    id: 'mistral-7b-mixtral-8x7b',
    name: 'Mixtral 8x7B',
    provider: 'Mistral',
    description: 'A high-quality sparse mixture-of-experts (SMoE) model known for its performance, efficiency, and open-source flexibility.',
    tokenLimits: {
      contextWindow: 32768,
      outputTokenLimit: '32,768 tokens',
      notes: "Mixtral offers a solid 32K token context window and is a powerful open-source option that can be self-hosted."
    },
    pricing: {
      inputCost: 0.70,
      outputCost: 0.70,
      notes: 'Mixtral 8x7B provides a cost-effective solution, especially for those who prefer to self-host and manage their infrastructure.'
    },
    tags: {
      task: ['text_generation', 'summarization', 'code_generation'],
      quality: 'balanced',
      priority: ['cost-efficiency'],
      features: ['open-source', 'self-hosting']
    },
    useCases: ['Medium-scale text generation and summarization', 'Code generation and development assistance', 'Applications requiring data privacy through self-hosting', 'Cost-effective analysis and data extraction']
  },
  {
    id: 'mistral-large',
    name: 'Mistral Large',
    provider: 'Mistral',
    description: 'Mistral\'s top-tier proprietary model with advanced reasoning capabilities, strong multilingual support, and high performance.',
    tokenLimits: {
      contextWindow: 32768,
      outputTokenLimit: '32,768 tokens',
      notes: 'Mistral Large provides top-tier performance with a 32K context window, suitable for complex enterprise tasks.'
    },
    pricing: {
      inputCost: 4.00,
      outputCost: 12.00,
      notes: 'Mistral Large is priced as a premium model, competing with other high-performance models for complex tasks.'
    },
    tags: {
      task: ['text_generation', 'reasoning', 'multilingual', 'coding'],
      quality: 'premium',
      priority: ['top-quality']
    },
    useCases: ['Complex multilingual text generation and translation', 'Advanced reasoning for financial or legal analysis', 'Enterprise-grade RAG (Retrieval-Augmented Generation) systems', 'High-quality code generation and explanation']
  },
  {
    id: 'mistral-small-3-1',
    name: 'Mistral Small 3.1',
    provider: 'Mistral',
    description: 'A cutting-edge, open-source model optimized for low-latency, multilingual tasks, and cost-effective conversational AI.',
    tokenLimits: {
      contextWindow: 128000,
      outputTokenLimit: 'N/A (check latest Mistral docs)',
      notes: 'Mistral Small 3.1 features a large 128K context window for an open-source model, ideal for real-time applications.'
    },
    pricing: {
      inputCost: 0.10,
      outputCost: 0.30,
      notes: 'Extremely competitive pricing makes this model attractive for high-volume, cost-sensitive, and low-latency applications.'
    },
    tags: {
      task: ['multilingual', 'conversational_ai', 'text_generation', 'classification'],
      quality: 'balanced',
      priority: ['cost-efficiency', 'speed-latency'],
      features: ['open-source', 'self-hosting']
    },
    useCases: ['Low-latency multilingual customer support chatbots', 'Real-time content moderation and classification', 'Cost-effective text generation for web and mobile apps', 'Data privacy-focused applications via self-hosting']
  },
  {
    id: 'deepseek-r1-v3',
    name: 'DeepSeek R1/V3',
    provider: 'DeepSeek',
    description: 'A large model with a unique pricing structure, optimized for both general-purpose tasks (V3) and complex reasoning (R1).',
    tokenLimits: {
      contextWindow: 128000,
      outputTokenLimit: '8,000 tokens',
      notes: 'DeepSeek models offer a substantial 128K context window. The "R1" variant is specifically tuned for reasoning tasks.'
    },
    pricing: {
      inputCost: (0.14 + 0.55) / 2, // Average of R1 cache hit/miss
      outputCost: 2.19,
      notes: 'Unique pricing with cache hits/misses. R1 (reasoning) Input: $0.14/M (hit), $0.55/M (miss). Output: $2.19/M. V3 (general) is cheaper.'
    },
    tags: {
      task: ['conversational_ai', 'reasoning', 'content_creation', 'translation', 'coding'],
      quality: 'premium',
      priority: ['cost-efficiency', 'top-quality'],
      special: ['high-volume']
    },
    useCases: ['Complex problem-solving and mathematical reasoning (R1)', 'High-quality code generation and debugging (R1)', 'Cost-effective content creation and translation (V3)', 'Conversational AI for handling repetitive queries (V3 cache-hit)']
  },
  {
    id: 'gpt-4o',
    name: 'GPT-4o',
    provider: 'OpenAI',
    description: 'OpenAI\'s flagship multimodal model, capable of processing and generating text, audio, and images with high performance.',
    tokenLimits: {
      contextWindow: 128000,
      outputTokenLimit: '4,096 tokens',
      notes: 'GPT-4o has a 128K context window and is designed for seamless multimodal interactions.'
    },
    pricing: {
      inputCost: 5.00,
      outputCost: 15.00,
      notes: 'Pricing is for text. Audio and image inputs have different pricing structures. A more affordable version, GPT-4o mini, is also available.'
    },
    tags: {
      task: ['multimodal', 'text_generation', 'translation', 'vision', 'audio'],
      quality: 'premium',
      priority: ['top-quality']
    },
    useCases: ['Real-time voice and video analysis', 'Advanced conversational assistants that can see and hear', 'Interactive customer support with visual aids', 'High-quality content generation that integrates text and images']
  },
  {
    id: 'gpt-4-1',
    name: 'GPT-4.1 (Pro variants)',
    provider: 'OpenAI',
    description: 'A high-capacity model with a massive context window, offering robust capabilities for coding, instruction following, and long-document analysis.',
    tokenLimits: {
      contextWindow: 1000000,
      outputTokenLimit: '32,768 tokens',
      notes: "OpenAI's GPT-4.1 series features a 1 million token context window, enabling deep analysis of large datasets."
    },
    pricing: {
      inputCost: 2.00,
      outputCost: 8.00,
      notes: 'GPT-4.1 is priced for high-capability tasks, offering significant power for complex coding and long-context applications.'
    },
    tags: {
      task: ['coding', 'reasoning', 'text_generation', 'translation', 'long_document'],
      quality: 'premium',
      priority: ['large-context', 'top-quality']
    },
    useCases: ['Comprehensive analysis of entire codebases', 'In-depth reasoning over long legal or financial documents', 'Complex software development and debugging workflows', 'High-quality translation of extensive texts']
  },
  {
    id: 'gpt-4-1-mini',
    name: 'GPT-4.1 Mini',
    provider: 'OpenAI',
    description: 'A balanced model offering a large context window with strong performance at a lower cost, exceeding GPT-4o in many benchmarks.',
    tokenLimits: {
      contextWindow: 1000000,
      outputTokenLimit: '32,768 tokens',
      notes: 'GPT-4.1 Mini provides a full 1 million token context window, making it a cost-effective choice for large-context needs.'
    },
    pricing: {
      inputCost: 0.40,
      outputCost: 1.60,
      notes: 'GPT-4.1 Mini offers a strong balance of performance and cost, making it suitable for a wide range of medium-scale tasks.'
    },
    tags: {
      task: ['text_generation', 'translation', 'summarization', 'coding'],
      quality: 'balanced',
      priority: ['cost-efficiency', 'large-context']
    },
    useCases: ['Medium-scale text generation and summarization', 'Cost-effective RAG applications with large document sets', 'General-purpose coding and application development', 'High-quality, affordable translation services']
  },
  {
    id: 'gpt-4-1-nano',
    name: 'GPT-4.1 Nano',
    provider: 'OpenAI',
    description: 'The most affordable and fastest model in the GPT-4.1 family, optimized for speed, cost-effectiveness, and simple tasks.',
    tokenLimits: {
      contextWindow: 1000000,
      outputTokenLimit: '32,768 tokens',
      notes: 'GPT-4.1 Nano maintains the large 1 million token context window, offering significant context for its low price point.'
    },
    pricing: {
      inputCost: 0.10,
      outputCost: 0.40,
      notes: "OpenAI's GPT-4.1 Nano is the most affordable option for tasks that are not overly complex but may require large context."
    },
    tags: {
      task: ['classification', 'extraction', 'text_generation', 'translation'],
      quality: 'economy',
      priority: ['cost-efficiency', 'speed-latency', 'large-context']
    },
    useCases: ['High-volume, cost-sensitive classification and data extraction', 'Simple and fast text generation for web content or product descriptions', 'Automated email and document routing', 'Basic, low-cost translation for non-critical applications']
  }
];