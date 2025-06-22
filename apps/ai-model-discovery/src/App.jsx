import React, { useState, useEffect } from 'react';

// Main App component
const App = () => {
  // Hardcoded data for AI models
  const aiModels = [
    {
      id: 'gemini-2-5-pro',
      name: 'Gemini 2.5 Pro',
      provider: 'Google',
      description: 'Excels in extreme long-context handling.',
      tokenLimits: {
        contextWindow: '2,097,152 tokens',
        outputTokenLimit: '8,192 tokens',
        notes: 'Google’s Gemini Pro models lead in extreme long-context handling, up to ~2 million tokens, far exceeding others.'
      },
      pricing: {
        inputCost: '$2.50 (prompts >200 K tokens)',
        outputCost: '$15.00 (prompts >200 K)',
        notes: 'Google Gemini pricing varies by model and usage tier; Pro is premium.'
      },
      translationQuality: {
        benchmarks: 'Highest among tested LLMs vs. NMT',
        notes: 'Google’s dedicated “Translation LLM” fine-tuned from Gemini yields the best machine translation quality in Vertex AI tests, surpassing generic NMT.'
      },
      useCases: [
        'Long-Form Document Processing (for documents up to millions of tokens; high cost but unmatched context)',
        'Complex Text Generation', // Added for clarity in filtering
        'Advanced Reasoning'
      ]
    },
    {
      id: 'gemini-1-5-flash',
      name: 'Gemini 1.5 Flash',
      provider: 'Google',
      description: 'Cost-efficient for large contexts and fast performance.',
      tokenLimits: {
        contextWindow: '1,048,576 tokens',
        outputTokenLimit: '8,192 tokens',
        notes: 'Google’s Gemini Flash offers large context windows, optimized for speed and cost.'
      },
      pricing: {
        inputCost: '$0.30',
        outputCost: '$2.50',
        notes: 'Gemini Flash is cost-efficient for large contexts and high-volume tasks.'
      },
      translationQuality: {
        benchmarks: 'Competitive with GPT-4 Turbo on certain languages',
        notes: 'Third-party research shows Gemini Pro slightly outperforms GPT-4 Turbo in some languages but falls behind in low-resource settings; BLEU metrics vary by language.'
      },
      useCases: [
        'High-volume, cost-sensitive summarization or data extraction',
        'General Text Generation', // Added for clarity in filtering
        'Conversational AI (high volume)'
      ]
    },
    {
      id: 'mistral-7b-mixtral-8x7b',
      name: 'Mixtral 8×7B', // Simplified name for display
      provider: 'Mistral',
      description: 'Suitable for medium-length contexts, known for open-source flexibility.',
      tokenLimits: {
        contextWindow: '32,000 tokens',
        outputTokenLimit: '32,000 tokens',
        notes: 'Mistral’s frontier models cap around 32K tokens, suitable for medium-length contexts.'
      },
      pricing: {
        inputCost: '$0.70',
        outputCost: '$0.70',
        notes: 'Mixtral 8x7B is a relatively cost-effective open-source option.'
      },
      translationQuality: {
        benchmarks: 'Medium quality; few independent benchmarks',
        notes: 'Mistral’s translation prowess is unverified by published studies; anecdotal reports suggest adequate performance for non-critical tasks.'
      },
      useCases: [
        'Medium-scale text generation and tasks requiring moderate context',
        'Data Privacy / Prefer Self-Hosting (open-source)'
      ]
    },
    {
      id: 'mistral-large',
      name: 'Mistral Large',
      provider: 'Mistral',
      description: 'Higher capacity model from Mistral with top-tier reasoning.',
      tokenLimits: {
        contextWindow: '32,000 tokens',
        outputTokenLimit: '32,000 tokens',
        notes: 'Mistral Large shares similar context window with other Mistral frontier models.'
      },
      pricing: {
        inputCost: '$3.00',
        outputCost: '$9.00',
        notes: 'Mistral Large is higher cost but greater capacity for complex tasks.'
      },
      translationQuality: {
        benchmarks: 'Medium quality; few independent benchmarks',
        notes: 'No public large-scale BLEU reports; anecdotal parity with mid-tier LLMs. Excels in multilingual tasks and reasoning.'
      },
      useCases: [
        'Medium-Scale Text Generation (balanced cost and capability)',
        'Complex Multilingual Reasoning',
        'Code Generation'
      ]
    },
    {
      id: 'mistral-small-3-1',
      name: 'Mistral Small 3.1',
      provider: 'Mistral',
      description: 'Cutting-edge, open-source AI model optimized for multilingual tasks, accuracy, and low-latency conversational AI. Outperforms others in its class.',
      tokenLimits: {
        contextWindow: '128,000 tokens',
        outputTokenLimit: 'N/A (check latest Mistral docs)',
        notes: 'Mistral Small 3.1 features a larger context window, beneficial for complex tasks and real-time AI.'
      },
      pricing: {
        inputCost: '$0.10',
        outputCost: '$0.30',
        notes: 'Very competitive pricing, attractive for high-volume, cost-sensitive applications. Open-source availability allows for self-hosting.'
      },
      translationQuality: {
        benchmarks: 'Excels in multilingual tasks with exceptional accuracy',
        notes: 'Outperforms Google\'s Gemma 3-it 27B and OpenAI\'s GPT-4o Mini in textual, multimodal, and multilingual benchmarks.'
      },
      useCases: [
        'Multilingual tasks',
        'Low-latency, real-time conversational AI',
        'Cost-Sensitive Applications (low-volume, straightforward tasks)',
        'Medium-Scale Text Generation (balanced cost and capability)',
        'Data Privacy / Prefer Self-Hosting (open-source)',
        'General Text Generation'
      ]
    },
    {
      id: 'deepseek-r1-v3',
      name: 'DeepSeek R1/V3',
      provider: 'DeepSeek',
      description: 'Optimized for conversational and reasoning tasks with competitive rates and unique caching.',
      tokenLimits: {
        contextWindow: '128,000 tokens',
        outputTokenLimit: '8,000 tokens',
        notes: 'DeepSeek models offer a substantial context window for various content creation, writing, translation, and general conversational tasks.'
      },
      pricing: {
        inputCost: '$0.07 (V3 hit) / $0.27 (V3 miss) / $0.14 (R1 hit) / $0.55 (R1 miss)',
        outputCost: '$1.10 (V3) / $2.19 (R1)',
        notes: 'DeepSeek offers highly competitive rates for chat (V3) and reasoning (R1), with cache-hit discounts further reducing input costs. DeepSeek also offers off-peak pricing discounts from 16:30-00:30 UTC daily, which can be ideal for scheduled tasks.'
      },
      translationQuality: {
        benchmarks: 'Top-notch translation powerhouse racing nose-to-nose with the market leaders',
        notes: 'Community evaluations suggest DeepSeek is highly competitive in translation across languages and subject matters, though R1 might have practical deployment limitations.'
      },
      useCases: [
        'Conversational AI (DeepSeek-V3 for chatbots, balancing cost and responsiveness; switch to R1 for deeper reasoning)',
        'Reasoning / Analytical Tasks',
        'Content Creation',
        'Text Writing',
        'High-Quality Translation (requires operational stability assessment)'
      ]
    },
    {
      id: 'gpt-4o',
      name: 'GPT-4o',
      provider: 'OpenAI',
      description: 'Balanced performance, strong multimodal capabilities, and reasonable context window.',
      tokenLimits: {
        contextWindow: '128,000 tokens context',
        outputTokenLimit: '4,096 tokens',
        notes: 'GPT-4o retains a smaller 128K context window compared to the 4.1 series.'
      },
      pricing: {
        inputCost: '$2.50',
        outputCost: '$10.00',
        notes: 'Full GPT-4o incurs higher per-token fees but offers greater capability, especially for multimodal inputs.'
      },
      translationQuality: {
        benchmarks: 'Strong BLEU scores; excels in high-resource pairs',
        notes: 'OpenAI’s GPT-4 series maintains high overall translation quality, often used as a standard benchmark for LLM MT.'
      },
      useCases: [
        'General purpose applications requiring robust performance and reasonable context.',
        'Multimodal Content Creation (text, audio, image input)',
        'General Text Generation',
        'High-Quality Translation'
      ]
    },
    {
      id: 'gpt-4-1',
      name: 'GPT-4.1 (Pro variants)',
      provider: 'OpenAI',
      description: 'High capacity with robust capabilities, major gains in coding and instruction following.',
      tokenLimits: {
        contextWindow: '1,000,000 tokens context',
        outputTokenLimit: '32,768 tokens',
        notes: 'OpenAI’s newest 4.1 models share a 1 million-token window with 32K output.'
      },
      pricing: {
        inputCost: '$2.00',
        outputCost: '$8.00',
        notes: 'GPT-4.1 incurs higher per-token fees but offers greater capability, especially for complex coding and long-context tasks.'
      },
      translationQuality: {
        benchmarks: 'Strong BLEU scores; excels in high-resource pairs',
        notes: 'Tends toward literalness; consistent across pairs. Outperforms GPT-4o in instruction following.'
      },
      useCases: [
        'Comprehensive applications requiring large context and high output length.',
        'Complex Coding Workflows',
        'Long-Context Reasoning',
        'General Text Generation',
        'High-Quality Translation'
      ]
    },
    {
      id: 'gpt-4-1-mini',
      name: 'GPT-4.1 Mini',
      provider: 'OpenAI',
      description: 'Balanced cost and capability for medium-scale tasks, matching or exceeding GPT-4o performance.',
      tokenLimits: {
        contextWindow: '1,000,000 tokens context',
        outputTokenLimit: '32,768 tokens',
        notes: 'GPT-4.1-mini offers a large context window for its pricing tier.'
      },
      pricing: {
        inputCost: '$0.40',
        outputCost: '$1.60',
        notes: 'GPT-4.1-mini is more affordable for medium-scale tasks, offering a strong balance of performance and cost.'
      },
      translationQuality: {
        benchmarks: 'Strong BLEU scores; excels in high-resource pairs',
        notes: 'Similar quality to other GPT-4 series models, matching or exceeding GPT-4o in many benchmarks.'
      },
      useCases: [
        'Medium-Scale Text Generation (balanced cost and capability)',
        'General-Purpose Text Writing',
        'Cost-Efficient AI applications',
        'High-Quality Translation'
      ]
    },
    {
      id: 'gpt-4-1-nano',
      name: 'GPT-4.1 Nano',
      provider: 'OpenAI',
      description: 'Most affordable for small-scale tasks, optimized for speed and cost-effectiveness.',
      tokenLimits: {
        contextWindow: '1,000,000 tokens context',
        outputTokenLimit: '32,768 tokens',
        notes: 'GPT-4.1-nano maintains a significant context window for its cost efficiency.'
      },
      pricing: {
        inputCost: '$0.10',
        outputCost: '$0.40',
        notes: 'OpenAI’s GPT-4.1 nano is most affordable for small-scale tasks, built for speed.'
      },
      translationQuality: {
        benchmarks: 'Strong BLEU scores; excels in high-resource pairs',
        notes: 'Consistent quality across pairs for its tier, though designed for speed over raw reasoning.'
      },
      useCases: [
        'Cost-Sensitive Applications (for low-volume, straightforward tasks)',
        'Simple Text Generation',
        'Classification',
        'Information Extraction',
        'High-Quality Translation'
      ]
    }
  ];

  // State to manage the current step in the discovery process
  const [currentStep, setCurrentStep] = useState(0);
  // State to store user's answers for each step
  const [answers, setAnswers] = useState({});
  // State to store the filtered and recommended AI models
  const [recommendedModels, setRecommendedModels] = useState([]);
  // State to toggle the visibility of the "What are Tokens?" section
  const [showTokensInfo, setShowTokensInfo] = useState(false);
  // State to manage which model's details are visible when clicked
  const [expandedModelId, setExpandedModelId] = useState(null);

  // Helper function to parse cost strings (e.g., "$2.50 (prompts >200 K tokens)" or "N/A")
  const parseCost = (costString) => {
      if (!costString || costString.includes('N/A')) {
          return Infinity; // Treat N/A as very expensive for sorting
      }
      const match = costString.match(/\$?([0-9]+\.?[0-9]*)/);
      return match ? parseFloat(match[1]) : Infinity;
  };

  // Helper function to parse context window strings (e.g., "2,097,152 tokens")
  const parseContextWindow = (contextString) => {
      if (!contextString) return 0;
      return parseInt(contextString.replace(/,/g, '').replace(' tokens', '').replace(' context', '') || '0');
  };

  // Toggle function for expanding/collapsing model details
  const toggleExpand = (id) => {
    setExpandedModelId(expandedModelId === id ? null : id);
  };

  // Function to handle answer selection for each step
  const handleAnswer = (stepKey, value) => {
    setAnswers(prevAnswers => ({ ...prevAnswers, [stepKey]: value }));
  };

  // Functions to navigate between steps
  const nextStep = () => setCurrentStep(prev => prev + 1);
  const prevStep = () => setCurrentStep(prev => prev - 1);
  // Function to restart the discovery process
  const restartDiscovery = () => {
    setCurrentStep(0);
    setAnswers({});
    setRecommendedModels([]);
    setExpandedModelId(null);
  };

  // Effect hook to perform filtering when currentStep or answers change
  useEffect(() => {
    if (currentStep === 4) { // Filtering only occurs on the results step
      let filtered = [...aiModels];

      // Filter by Primary Task
      if (answers.primaryTask) {
        filtered = filtered.filter(model => {
          const useCases = model.useCases.map(uc => uc.toLowerCase());
          const translationNotes = model.translationQuality?.notes?.toLowerCase() || '';
          const descriptionLower = model.description.toLowerCase();
          const benchmarksLower = model.translationQuality?.benchmarks?.toLowerCase() || '';


          switch (answers.primaryTask) {
            case 'text-generation':
              return useCases.some(uc =>
                uc.includes('text generation') ||
                uc.includes('long-form document processing') ||
                uc.includes('medium-scale text generation') ||
                uc.includes('general-purpose text writing') ||
                uc.includes('simple text generation') ||
                uc.includes('content creation')
              );
            case 'translation':
              return useCases.some(uc => uc.includes('translation')) ||
                     translationNotes.includes('translation llm') ||
                     translationNotes.includes('highest quality') ||
                     benchmarksLower.includes('strong bleu') ||
                     benchmarksLower.includes('excels in multilingual tasks') ||
                     translationNotes.includes('competitive in translation');
            case 'conversational-ai':
              return useCases.some(uc => uc.includes('conversational ai') || uc.includes('chatbots')) || descriptionLower.includes('conversational');
            case 'reasoning-analysis':
              return useCases.some(uc => uc.includes('reasoning') || uc.includes('analytical tasks')) || descriptionLower.includes('reasoning') || descriptionLower.includes('complex coding') || useCases.some(uc => uc.includes('code generation'));
            case 'general-writing':
                return useCases.some(uc => uc.includes('general purpose applications') || uc.includes('general-purpose text writing') || uc.includes('general text generation')) || descriptionLower.includes('balanced performance');
            default:
              return true;
          }
        });
      }

      // Filter and Sort by Key Priority
      if (answers.keyPriority) {
        if (answers.keyPriority === 'cost-efficiency') {
            filtered.sort((a, b) => {
                const aEffectiveInputCost = Math.min(...a.pricing.inputCost.split('/').map(c => parseCost(c)));
                const aEffectiveOutputCost = Math.min(...a.pricing.outputCost.split('/').map(c => parseCost(c)));
                const bEffectiveInputCost = Math.min(...b.pricing.inputCost.split('/').map(c => parseCost(c)));
                const bEffectiveOutputCost = Math.min(...b.pricing.outputCost.split('/').map(c => parseCost(c)));


                const aTotalCost = aEffectiveInputCost + aEffectiveOutputCost;
                const bTotalCost = bEffectiveInputCost + bEffectiveOutputCost;
                return aTotalCost - bTotalCost;
            });
        } else if (answers.keyPriority === 'top-quality') {
            filtered.sort((a, b) => {
                let aScore = 0;
                let bScore = 0;

                if (a.description.toLowerCase().includes('state-of-the-art') || a.translationQuality.benchmarks?.toLowerCase().includes('highest') || a.description.toLowerCase().includes('top-tier reasoning')) aScore += 5;
                if (b.description.toLowerCase().includes('state-of-the-art') || b.translationQuality.benchmarks?.toLowerCase().includes('highest') || b.description.toLowerCase().includes('top-tier reasoning')) bScore += 5;

                if (a.description.toLowerCase().includes('robust capabilities') || a.description.toLowerCase().includes('high capacity') || a.description.toLowerCase().includes('competitive with popular models') || a.description.toLowerCase().includes('outperforms others in its class')) aScore += 4;
                if (b.description.toLowerCase().includes('robust capabilities') || b.description.toLowerCase().includes('high capacity') || b.description.toLowerCase().includes('competitive with popular models') || b.description.toLowerCase().includes('outperforms others in its class')) bScore += 4;

                if (a.description.toLowerCase().includes('balanced performance')) aScore += 2;
                if (b.description.toLowerCase().includes('balanced performance')) bScore += 2;

                if (a.useCases.some(uc => uc.includes('Long-Form Document Processing') || uc.includes('Comprehensive applications'))) aScore += 1;
                if (b.useCases.some(uc => uc.includes('Long-Form Document Processing') || uc.includes('Comprehensive applications'))) bScore += 1;

                return bScore - aScore;
            });
        } else if (answers.keyPriority === 'large-context') {
            filtered.sort((a, b) => {
                const aContext = parseContextWindow(a.tokenLimits.contextWindow);
                const bContext = parseContextWindow(b.tokenLimits.contextWindow);
                return bContext - aContext;
            });
        } else if (answers.keyPriority === 'speed-latency') {
            filtered.sort((a, b) => {
                let aSpeedScore = 0;
                let bSpeedScore = 0;

                if (a.description.toLowerCase().includes('cost-efficient') || a.description.toLowerCase().includes('optimized for speed') || a.description.toLowerCase().includes('low-latency')) aSpeedScore += 3;
                if (b.description.toLowerCase().includes('cost-efficient') || b.description.toLowerCase().includes('optimized for speed') || b.description.toLowerCase().includes('low-latency')) bSpeedScore += 3;

                if (a.name.includes('Flash') || a.name.includes('Nano') || a.name.includes('Mini')) aSpeedScore += 2;
                if (b.name.includes('Flash') || b.name.includes('Nano') || b.name.includes('Mini')) bSpeedScore += 2;

                return bSpeedScore - aSpeedScore;
            });
        }
      }

      // Filter by Volume & Data Control
      if (answers.volumeControl) {
        if (answers.volumeControl === 'high-repetitive') {
          filtered = filtered.filter(model =>
            model.provider === 'DeepSeek' || model.name.includes('Flash') || model.useCases.some(uc => uc.toLowerCase().includes('high-volume'))
          );
        } else if (answers.volumeControl === 'data-privacy-self-hosting') {
          filtered = filtered.filter(model =>
            model.provider === 'Mistral' &&
            (model.id === 'mistral-7b-mixtral-8x7b' || model.id === 'mistral-small-3-1')
          );
        }
      }

      setRecommendedModels(filtered);
    }
  }, [currentStep, answers]);

  // Renders the UI for the current step
  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="text-center">
            <h2 className="text-3xl font-bold text-blue-800 mb-6">Discover the Best AI Model for Your Business Needs</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
              Answer a few questions to find the AI model that aligns with your specific requirements for text writing and translation.
            </p>
            <button
              onClick={nextStep}
              className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
            >
              Start Discovery
            </button>
          </div>
        );
      case 1:
        return (
          <div className="text-center">
            <h2 className="text-3xl font-bold text-blue-800 mb-6">Step 1: What is your primary task or application?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              <button
                onClick={() => handleAnswer('primaryTask', 'text-generation')}
                className={`p-4 rounded-xl shadow-md transition duration-200 border-2 ${answers.primaryTask === 'text-generation' ? 'bg-blue-100 border-blue-600 text-blue-800' : 'bg-gray-50 border-gray-200 hover:bg-blue-50 hover:border-blue-300 text-gray-700'}`}
              >
                Long-Form Document Processing / Complex Text Generation
              </button>
              <button
                onClick={() => handleAnswer('primaryTask', 'translation')}
                className={`p-4 rounded-xl shadow-md transition duration-200 border-2 ${answers.primaryTask === 'translation' ? 'bg-blue-100 border-blue-600 text-blue-800' : 'bg-gray-50 border-gray-200 hover:bg-blue-50 hover:border-blue-300 text-gray-700'}`}
              >
                High-Quality Translation
              </button>
              <button
                onClick={() => handleAnswer('primaryTask', 'conversational-ai')}
                className={`p-4 rounded-xl shadow-md transition duration-200 border-2 ${answers.primaryTask === 'conversational-ai' ? 'bg-blue-100 border-blue-600 text-blue-800' : 'bg-gray-50 border-gray-200 hover:bg-blue-50 hover:border-blue-300 text-gray-700'}`}
              >
                Conversational AI / Chatbots
              </button>
              <button
                onClick={() => handleAnswer('primaryTask', 'reasoning-analysis')}
                className={`p-4 rounded-xl shadow-md transition duration-200 border-2 ${answers.primaryTask === 'reasoning-analysis' ? 'bg-blue-100 border-blue-600 text-blue-800' : 'bg-gray-50 border-gray-200 hover:bg-blue-50 hover:border-blue-300 text-gray-700'}`}
              >
                Reasoning / Analytical Tasks
              </button>
              <button
                onClick={() => handleAnswer('primaryTask', 'general-writing')}
                className={`p-4 rounded-xl shadow-md transition duration-200 border-2 ${answers.primaryTask === 'general-writing' ? 'bg-blue-100 border-blue-600 text-blue-800' : 'bg-gray-50 border-gray-200 hover:bg-blue-50 hover:border-blue-300 text-gray-700'}`}
              >
                General-Purpose Text Writing
              </button>
            </div>
            <div className="mt-10 flex justify-center space-x-4">
              <button
                onClick={prevStep}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-6 rounded-full transition duration-300 ease-in-out shadow-md"
              >
                Back
              </button>
              <button
                onClick={nextStep}
                disabled={!answers.primaryTask}
                className={`py-2 px-6 rounded-full font-bold transition duration-300 ease-in-out ${answers.primaryTask ? 'bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white shadow-lg transform hover:scale-105' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
              >
                Next
              </button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="text-center">
            <h2 className="text-3xl font-bold text-blue-800 mb-6">Step 2: What is your most important priority?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              <button
                onClick={() => handleAnswer('keyPriority', 'cost-efficiency')}
                className={`p-4 rounded-xl shadow-md transition duration-200 border-2 ${answers.keyPriority === 'cost-efficiency' ? 'bg-blue-100 border-blue-600 text-blue-800' : 'bg-gray-50 border-gray-200 hover:bg-blue-50 hover:border-blue-300 text-gray-700'}`}
              >
                Cost-Efficiency (Lowest Price)
              </button>
              <button
                onClick={() => handleAnswer('keyPriority', 'top-quality')}
                className={`p-4 rounded-xl shadow-md transition duration-200 border-2 ${answers.keyPriority === 'top-quality' ? 'bg-blue-100 border-blue-600 text-blue-800' : 'bg-gray-50 border-gray-200 hover:bg-blue-50 hover:border-blue-300 text-gray-700'}`}
              >
                Highest Quality / Accuracy
              </button>
              <button
                onClick={() => handleAnswer('keyPriority', 'large-context')}
                className={`p-4 rounded-xl shadow-md transition duration-200 border-2 ${answers.keyPriority === 'large-context' ? 'bg-blue-100 border-blue-600 text-blue-800' : 'bg-gray-50 border-gray-200 hover:bg-blue-50 hover:border-blue-300 text-gray-700'}`}
              >
                Largest Context Window (for long documents/memory)
              </button>
              <button
                onClick={() => handleAnswer('keyPriority', 'speed-latency')}
                className={`p-4 rounded-xl shadow-md transition duration-200 border-2 ${answers.keyPriority === 'speed-latency' ? 'bg-blue-100 border-blue-600 text-blue-800' : 'bg-gray-50 border-gray-200 hover:bg-blue-50 hover:border-blue-300 text-gray-700'}`}
              >
                Fastest Performance / Low Latency
              </button>
            </div>
            <div className="mt-10 flex justify-center space-x-4">
              <button
                onClick={prevStep}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-6 rounded-full transition duration-300 ease-in-out shadow-md"
              >
                Back
              </button>
              <button
                onClick={nextStep}
                disabled={!answers.keyPriority}
                className={`py-2 px-6 rounded-full font-bold transition duration-300 ease-in-out ${answers.keyPriority ? 'bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white shadow-lg transform hover:scale-105' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
              >
                Next
              </button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="text-center">
            <h2 className="text-3xl font-bold text-blue-800 mb-6">Step 3: What about volume and data control?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              <button
                onClick={() => handleAnswer('volumeControl', 'high-repetitive')}
                className={`p-4 rounded-xl shadow-md transition duration-200 border-2 ${answers.volumeControl === 'high-repetitive' ? 'bg-blue-100 border-blue-600 text-blue-800' : 'bg-gray-50 border-gray-200 hover:bg-blue-50 hover:border-blue-300 text-gray-700'}`}
              >
                High Volume / Repetitive Queries (e.g., chatbots)
              </button>
              <button
                onClick={() => handleAnswer('volumeControl', 'medium-low')}
                className={`p-4 rounded-xl shadow-md transition duration-200 border-2 ${answers.volumeControl === 'medium-low' ? 'bg-blue-100 border-blue-600 text-blue-800' : 'bg-gray-50 border-gray-200 hover:bg-blue-50 hover:border-blue-300 text-gray-700'}`}
              >
                Medium or Low Volume / Varied Queries
              </button>
              <button
                onClick={() => handleAnswer('volumeControl', 'data-privacy-self-hosting')}
                className={`p-4 rounded-xl shadow-md transition duration-200 border-2 ${answers.volumeControl === 'data-privacy-self-hosting' ? 'bg-blue-100 border-blue-600 text-blue-800' : 'bg-gray-50 border-gray-200 hover:bg-blue-50 hover:border-blue-300 text-gray-700'}`}
              >
                Data Privacy / Prefer Self-Hosting (open-source)
              </button>
            </div>
            <div className="mt-10 flex justify-center space-x-4">
              <button
                onClick={prevStep}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-6 rounded-full transition duration-300 ease-in-out shadow-md"
              >
                Back
              </button>
              <button
                onClick={nextStep}
                disabled={!answers.volumeControl}
                className={`py-2 px-6 rounded-full font-bold transition duration-300 ease-in-out ${answers.volumeControl ? 'bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white shadow-lg transform hover:scale-105' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
              >
                Next
              </button>
            </div>
          </div>
        );
      case 4:
        return (
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 mb-8 text-center">
              Recommended AI Models for You
            </h2>
            {recommendedModels.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recommendedModels.map((model) => (
                  <div
                    key={model.id}
                    className="bg-white p-6 rounded-2xl shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300 transform hover:scale-102 cursor-pointer flex flex-col"
                    onClick={() => toggleExpand(model.id)}
                  >
                    <h3 className="text-2xl font-semibold text-blue-700 mb-2">{model.name}</h3>
                    <p className="text-sm text-gray-500 mb-4">{model.provider}</p>
                    <p className="text-gray-600 mb-4 flex-grow text-base">{model.description}</p>

                    {expandedModelId === model.id && (
                      <div className="mt-4 pt-4 border-t border-gray-200 space-y-4">
                        <div>
                          <h4 className="font-medium text-gray-800 mb-1 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0014.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                            </svg>
                            Token Limits
                          </h4>
                          <ul className="text-gray-700 text-sm list-disc list-inside space-y-1">
                            <li>Context Window: {model.tokenLimits.contextWindow}</li>
                            <li>Output Token Limit: {model.tokenLimits.outputTokenLimit}</li>
                            <li className="text-gray-500 text-xs mt-1">{model.tokenLimits.notes}</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-medium text-gray-800 mb-1 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.592 1L21 12m-6-4h4.085M3 12h4.085mf6 0H12m-9 4h9.085M3 16h4.085m6 0H12" />
                            </svg>
                            Pricing (per 1M tokens)
                          </h4>
                          <ul className="text-gray-700 text-sm list-disc list-inside space-y-1">
                            <li>Input Cost: {model.pricing.inputCost}</li>
                            <li>Output Cost: {model.pricing.outputCost}</li>
                            <li className="text-gray-500 text-xs mt-1">{model.pricing.notes}</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-medium text-gray-800 mb-1 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                            Translation Quality
                          </h4>
                          <ul className="text-gray-700 text-sm list-disc list-inside space-y-1">
                            <li>Benchmarks: {model.translationQuality.benchmarks}</li>
                            <li className="text-gray-500 text-xs mt-1">{model.translationQuality.notes}</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-medium text-gray-800 mb-1 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1l-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            Recommended Use Cases
                          </h4>
                          <ul className="text-gray-700 text-sm list-disc list-inside space-y-1">
                            {model.useCases.map((useCase, idx) => (
                              <li key={idx}>{useCase}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-xl text-gray-600 mt-10">No models found matching your criteria. Try adjusting your selections.</p>
            )}
            <div className="mt-12 text-center">
              <button
                onClick={prevStep}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-8 rounded-full shadow-md transition duration-300 ease-in-out mr-4"
              >
                Back to Questions
              </button>
              <button
                onClick={restartDiscovery}
                className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
              >
                Restart Discovery
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="font-sans antialiased bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen text-gray-800 p-4 sm:p-6 lg:p-8">
      <header className="mb-10 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-800 mb-4 rounded-lg p-3 bg-white shadow-xl inline-block">
          AI Model Discovery
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
          Explore leading AI models for text writing and translation. Understand their capabilities, pricing, and optimal use cases.
        </p>
      </header>

      <section className="bg-white p-6 sm:p-8 rounded-2xl shadow-2xl mb-12 border border-blue-100">
        {renderStep()}
      </section>

      <section className="bg-white p-6 sm:p-8 rounded-2xl shadow-2xl mb-12 border border-blue-100">
        <h2
          className="text-3xl font-bold text-blue-700 mb-6 flex items-center justify-between cursor-pointer"
          onClick={() => setShowTokensInfo(!showTokensInfo)}
        >
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            What are "Tokens"?
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-7 w-7 text-blue-500 transform transition-transform duration-300 ${showTokensInfo ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </h2>
        {showTokensInfo && (
          <div className="text-gray-700 leading-relaxed grid md:grid-cols-2 gap-8 pt-4 border-t border-gray-100">
            <div>
              <p className="mb-4">
                In the world of AI models like those used for text writing and translation, a "token" is a fundamental unit of text that the model processes. It's how AI models "see" and understand language.
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>
                  <strong>Not just words:</strong> Tokens aren't always whole words. For example, the word "understanding" might be broken down into "under", "stand", and "ing" as separate tokens. Punctuation marks, spaces, and even parts of words can be tokens.
                </li>
                <li>
                  <strong>Model-specific:</strong> The exact way text is broken into tokens varies between different AI models.
                </li>
              </ul>
            </div>
            <div>
              <p className="mb-4">
                Understanding tokens is crucial for business owners because they directly impact:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>
                  <strong>Cost:</strong> AI models are often priced "per token" for both input (what you send to the model) and output (what the model generates). More tokens mean higher costs.
                </li>
                <li>
                  <strong>Context Window:</strong> This refers to the maximum number of tokens an AI model can "remember" or consider at one time. A larger context window allows the model to process longer documents, maintain conversation history, or understand complex instructions.
                </li>
                <li>
                  <strong>Performance:</strong> Efficient tokenization and effective use of the context window contribute to the model's ability to generate coherent, relevant, and high-quality text or translations.
                </li>
              </ul>
            </div>
          </div>
        )}
      </section>

      <footer className="mt-12 text-center text-gray-500 text-sm">
        <p>&copy; 2025 AI Model Discovery. All rights reserved.</p>
      </footer>
    </div>
  );
};