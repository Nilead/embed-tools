// src/data/aiModels.js

export const aiModels = [
    {
      id: 'gemini-2-5-pro',
      name: 'Gemini 2.5 Pro',
      provider: 'Google',
      description: 'Excels in extreme long-context handling.',
      tokenLimits: {
        contextWindow: 2097152,
        outputTokenLimit: '8,192 tokens',
        notes: "Google's Gemini Pro models lead in extreme long-context handling, up to ~2 million tokens, far exceeding others."
      },
      pricing: {
        inputCost: 2.50,
        outputCost: 15.00,
        notes: 'Pricing is for prompts >200K tokens. Google Gemini pricing varies by model and usage tier; Pro is premium.'
      },
      tags: {
        task: ['long_document', 'text_generation', 'reasoning'],
        quality: 'premium',
        priority: ['large-context', 'top-quality']
      },
      useCases: ['Long-Form Document Processing (high cost but unmatched context)', 'Complex Text Generation', 'Advanced Reasoning']
    },
    {
      id: 'gemini-1-5-flash',
      name: 'Gemini 1.5 Flash',
      provider: 'Google',
      description: 'Cost-efficient for large contexts and fast performance.',
      tokenLimits: {
        contextWindow: 1048576,
        outputTokenLimit: '8,192 tokens',
        notes: "Google's Gemini Flash offers large context windows, optimized for speed and cost."
      },
      pricing: {
        inputCost: 0.30,
        outputCost: 2.50,
        notes: 'Gemini Flash is cost-efficient for large contexts and high-volume tasks.'
      },
      tags: {
        task: ['summarization', 'data_extraction', 'text_generation', 'conversational_ai'],
        quality: 'balanced',
        priority: ['speed-latency', 'cost-efficiency', 'large-context'],
        special: ['high-volume']
      },
      useCases: ['High-volume, cost-sensitive summarization or data extraction', 'General Text Generation', 'Conversational AI (high volume)']
    },
    {
      id: 'mistral-7b-mixtral-8x7b',
      name: 'Mixtral 8×7B',
      provider: 'Mistral',
      description: 'Suitable for medium-length contexts, known for open-source flexibility.',
      tokenLimits: {
        contextWindow: 32000,
        outputTokenLimit: '32,000 tokens',
        notes: "Mistral's frontier models cap around 32K tokens, suitable for medium-length contexts."
      },
      pricing: {
        inputCost: 0.70,
        outputCost: 0.70,
        notes: 'Mixtral 8x7B is a relatively cost-effective open-source option.'
      },
      tags: {
        task: ['text_generation'],
        quality: 'balanced',
        priority: ['cost-efficiency'],
        features: ['open-source', 'self-hosting']
      },
      useCases: ['Medium-scale text generation and tasks requiring moderate context', 'Data Privacy / Prefer Self-Hosting (open-source)']
    },
    {
      id: 'mistral-large',
      name: 'Mistral Large',
      provider: 'Mistral',
      description: 'Higher capacity model from Mistral with top-tier reasoning.',
      tokenLimits: {
        contextWindow: 32000,
        outputTokenLimit: '32,000 tokens',
        notes: 'Mistral Large shares similar context window with other Mistral frontier models.'
      },
      pricing: {
        inputCost: 3.00,
        outputCost: 9.00,
        notes: 'Mistral Large is higher cost but greater capacity for complex tasks.'
      },
      tags: {
        task: ['text_generation', 'reasoning', 'multilingual', 'coding'],
        quality: 'premium',
        priority: ['top-quality']
      },
      useCases: ['Medium-Scale Text Generation (balanced cost and capability)', 'Complex Multilingual Reasoning', 'Code Generation']
    },
    {
      id: 'mistral-small-3-1',
      name: 'Mistral Small 3.1',
      provider: 'Mistral',
      description: 'Cutting-edge, open-source AI model optimized for multilingual tasks, accuracy, and low-latency conversational AI.',
      tokenLimits: {
        contextWindow: 128000,
        outputTokenLimit: 'N/A (check latest Mistral docs)',
        notes: 'Mistral Small 3.1 features a larger context window, beneficial for complex tasks and real-time AI.'
      },
      pricing: {
        inputCost: 0.10,
        outputCost: 0.30,
        notes: 'Very competitive pricing, attractive for high-volume, cost-sensitive applications.'
      },
      tags: {
        task: ['multilingual', 'conversational_ai', 'text_generation'],
        quality: 'balanced',
        priority: ['cost-efficiency', 'speed-latency'],
        features: ['open-source', 'self-hosting']
      },
      useCases: ['Multilingual tasks', 'Low-latency, real-time conversational AI', 'Cost-Sensitive Applications', 'Data Privacy / Self-Hosting']
    },
    {
      id: 'deepseek-r1-v3',
      name: 'DeepSeek R1/V3',
      provider: 'DeepSeek',
      description: 'Optimized for conversational and reasoning tasks with competitive rates and unique caching.',
      tokenLimits: {
        contextWindow: 128000,
        outputTokenLimit: '8,000 tokens',
        notes: 'DeepSeek models offer a substantial context window for various tasks.'
      },
      pricing: {
        // Using an average for sorting, but notes retain full detail.
        inputCost: (0.07 + 0.27 + 0.14 + 0.55) / 4,
        outputCost: (1.10 + 2.19) / 2,
        notes: 'Highly competitive rates, with cache-hit/off-peak discounts. Prices shown are averages of hit/miss and model types.'
      },
      tags: {
        task: ['conversational_ai', 'reasoning', 'content_creation', 'translation'],
        quality: 'premium',
        priority: ['cost-efficiency', 'top-quality'],
        special: ['high-volume']
      },
      useCases: ['Conversational AI (balancing cost and responsiveness)', 'Reasoning / Analytical Tasks', 'Content Creation', 'High-Quality Translation']
    },
    {
      id: 'gpt-4o',
      name: 'GPT-4o',
      provider: 'OpenAI',
      description: 'Balanced performance, strong multimodal capabilities, and reasonable context window.',
      tokenLimits: {
        contextWindow: 128000,
        outputTokenLimit: '4,096 tokens',
        notes: 'GPT-4o retains a smaller 128K context window compared to the 4.1 series.'
      },
      pricing: {
        inputCost: 2.50,
        outputCost: 10.00,
        notes: 'Full GPT-4o incurs higher per-token fees but offers greater capability, especially for multimodal inputs.'
      },
      tags: {
        task: ['multimodal', 'text_generation', 'translation'],
        quality: 'premium',
        priority: ['top-quality']
      },
      useCases: ['General purpose applications requiring robust performance', 'Multimodal Content Creation (text, audio, image input)', 'High-Quality Translation']
    },
    {
      id: 'gpt-4-1',
      name: 'GPT-4.1 (Pro variants)',
      provider: 'OpenAI',
      description: 'High capacity with robust capabilities, major gains in coding and instruction following.',
      tokenLimits: {
        contextWindow: 1000000,
        outputTokenLimit: '32,768 tokens',
        notes: "OpenAI's newest 4.1 models share a 1 million-token window with 32K output."
      },
      pricing: {
        inputCost: 2.00,
        outputCost: 8.00,
        notes: 'GPT-4.1 incurs higher per-token fees but offers greater capability for complex coding and long-context tasks.'
      },
      tags: {
        task: ['coding', 'reasoning', 'text_generation', 'translation', 'long_document'],
        quality: 'premium',
        priority: ['large-context', 'top-quality']
      },
      useCases: ['Comprehensive applications requiring large context and high output length.', 'Complex Coding Workflows', 'Long-Context Reasoning', 'High-Quality Translation']
    },
    {
      id: 'gpt-4-1-mini',
      name: 'GPT-4.1 Mini',
      provider: 'OpenAI',
      description: 'Balanced cost and capability for medium-scale tasks, matching or exceeding GPT-4o performance.',
      tokenLimits: {
        contextWindow: 1000000,
        outputTokenLimit: '32,768 tokens',
        notes: 'GPT-4.1-mini offers a large context window for its pricing tier.'
      },
      pricing: {
        inputCost: 0.40,
        outputCost: 1.60,
        notes: 'GPT-4.1-mini is more affordable for medium-scale tasks, offering a strong balance of performance and cost.'
      },
      tags: {
        task: ['text_generation', 'translation'],
        quality: 'balanced',
        priority: ['cost-efficiency', 'large-context']
      },
      useCases: ['Medium-Scale Text Generation (balanced cost and capability)', 'General-Purpose Text Writing', 'Cost-Efficient AI applications', 'High-Quality Translation']
    },
    {
      id: 'gpt-4-1-nano',
      name: 'GPT-4.1 Nano',
      provider: 'OpenAI',
      description: 'Most affordable for small-scale tasks, optimized for speed and cost-effectiveness.',
      tokenLimits: {
        contextWindow: 1000000,
        outputTokenLimit: '32,768 tokens',
        notes: 'GPT-4.1-nano maintains a significant context window for its cost efficiency.'
      },
      pricing: {
        inputCost: 0.10,
        outputCost: 0.40,
        notes: "OpenAI's GPT-4.1 nano is most affordable for small-scale tasks, built for speed."
      },
      tags: {
        task: ['classification', 'extraction', 'text_generation', 'translation'],
        quality: 'economy',
        priority: ['cost-efficiency', 'speed-latency', 'large-context']
      },
      useCases: ['Cost-Sensitive Applications (for straightforward tasks)', 'Simple Text Generation', 'Classification', 'Information Extraction', 'High-Quality Translation']
    }
  ];