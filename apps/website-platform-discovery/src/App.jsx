import React, { useState } from 'react';
import { CheckCircle, XCircle } from './components/Icons';
import { resultDetails } from './data/resultDetails';
import { finalRecommendationDetails } from './data/finalRecommendationDetails';
import { comparisonData } from './data/comparisonData';
import { Button } from '@embed-tools/components';

const App = () => {
  // State for user's choices, results, and UI visibility
  const [designChoice, setDesignChoice] = useState(null);
  const [platformChoice, setPlatformChoice] = useState(null);
  const [projectGoal, setProjectGoal] = useState(null);
  const [finalRecommendation, setFinalRecommendation] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [error, setError] = useState('');
  const isEmbedded = window.self !== window.top;

  // Questions for the user
  const questions = {
    goal: {
      question: "What is the primary goal of your project?",
      options: [
        { id: 'Standard', text: "To create a marketing website to promote my business, generate leads, or sell products online." },
        { id: 'WebApp', text: "To build a unique web application with complex, interactive features (like a social network, a booking platform, or a SaaS product)." }
      ]
    },
    design: {
      question: "Which statement best describes your design needs?",
      options: [
        { id: 'Template', text: "I need a professional site quickly and on a tight budget. A pre-designed template is fine." },
        { id: 'Bespoke', text: "I need a unique, tailor-made design for my brand, and I have the budget and time to invest." },
        { id: 'Hybrid (Template + Customization)', text: "I want a cost-effective start from a template, but need flexibility to customize it for a unique look." }
      ]
    },
    platform: {
      question: "How do you want to manage your website's technology?",
      options: [
        { id: 'Custom Code', text: "I need absolute control and my team will handle all technical aspects (hosting, security, maintenance)." },
        { id: 'Website Builder', text: "I want an easy-to-use platform where hosting, security, and support are managed for me." },
        { id: 'Hybrid (Builder with Custom Code)', text: "I want the convenience of a builder, but also the power to add custom code for specific features." }
      ]
    }
  };

  // State to hold the answers
  const [answers, setAnswers] = useState({ goal: null, design: null, platform: null });

  // Function to handle answer changes
  const handleAnswerChange = (type, value) => {
    setAnswers(prev => ({ ...prev, [type]: value }));
    setError(''); // Clear error on new selection
  };

  // Logic to determine the recommendation
  const calculateResult = () => {
    if (!answers.design || !answers.platform || !answers.goal) {
      setError('Please answer all three questions to get your recommendation.');
      return;
    }
    const { design, platform, goal } = answers;
    setDesignChoice(design);
    setPlatformChoice(platform);
    setProjectGoal(goal);
    // Determine the final, specific recommendation
    if (goal === 'WebApp') {
      setFinalRecommendation('Custom');
    } else if (platform === 'Website Builder' || platform === 'Hybrid (Builder with Custom Code)') {
      setFinalRecommendation('Nilead');
    } else if (design === 'Bespoke' && platform === 'Custom Code') {
      setFinalRecommendation('Custom');
    } else {
      setFinalRecommendation('WordPress');
    }
    setShowResult(true);
    // Scroll to the results smoothly
    setTimeout(() => {
      document.getElementById('result-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const allAnswered = answers.goal && answers.design && answers.platform;

  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
      <div className="container mx-auto p-4 md:p-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">Find Your Perfect Website Solution</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">Answer 3 simple questions to get a personalized recommendation for your next project.</p>
        </header>

        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 max-w-4xl mx-auto">
          <div className="space-y-12">
            {/* Project Goal Question */}
            <div id="goal-section">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">1. Project Goal</h2>
              <p className="mb-6 text-gray-600">{questions.goal.question}</p>
              <div className="space-y-4">
                {questions.goal.options.map(option => (
                  <label key={option.id} className={`flex items-start p-5 rounded-lg border-2 cursor-pointer transition-all ${answers.goal === option.id ? 'border-teal-500 bg-teal-50 shadow-md' : 'border-gray-200 hover:border-teal-300'}`}>
                    <input type="radio" name="goal" value={option.id} className="form-radio h-5 w-5 text-teal-600 mt-1 flex-shrink-0" onChange={(e) => handleAnswerChange('goal', e.target.value)} />
                    <span className="ml-4 text-gray-700">{option.text}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Design Question */}
            <div id="design-section">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">2. Design Philosophy</h2>
              <p className="mb-6 text-gray-600">{questions.design.question}</p>
              <div className="space-y-4">
                {questions.design.options.map(option => (
                  <label key={option.id} className={`flex items-start p-5 rounded-lg border-2 cursor-pointer transition-all ${answers.design === option.id ? 'border-indigo-500 bg-indigo-50 shadow-md' : 'border-gray-200 hover:border-indigo-300'}`}>
                    <input type="radio" name="design" value={option.id} className="form-radio h-5 w-5 text-indigo-600 mt-1 flex-shrink-0" onChange={(e) => handleAnswerChange('design', e.target.value)} />
                    <span className="ml-4 text-gray-700">{option.text}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Platform Question */}
            <div id="platform-section">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">3. Technology Management</h2>
              <p className="mb-6 text-gray-600">{questions.platform.question}</p>
              <div className="space-y-4">
                {questions.platform.options.map(option => (
                  <label key={option.id} className={`flex items-start p-5 rounded-lg border-2 cursor-pointer transition-all ${answers.platform === option.id ? 'border-pink-500 bg-pink-50 shadow-md' : 'border-gray-200 hover:border-pink-300'}`}>
                    <input type="radio" name="platform" value={option.id} className="form-radio h-5 w-5 text-pink-600 mt-1 flex-shrink-0" onChange={(e) => handleAnswerChange('platform', e.target.value)} />
                    <span className="ml-4 text-gray-700">{option.text}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            {error && <p className="text-red-500 mb-4 font-semibold">{error}</p>}
            <Button
              onClick={calculateResult}
              size="lg"
              className="cursor-pointer bg-gradient-to-r from-indigo-600 to-pink-600 text-white font-bold py-5 px-10 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all text-xl min-h-[56px] disabled:opacity-60 disabled:cursor-not-allowed"
              disabled={!allAnswered}
            >
              Get My Recommendation
            </Button>
          </div>
        </div>

        {showResult && (
          <div id="result-section" className="mt-16 p-8 bg-white rounded-2xl shadow-lg border border-gray-100 animate-fade-in max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Your Results</h2>
            {/* Final Recommendation */}
            {finalRecommendation && 
              <div className="text-center p-8 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg mb-12">
                <h3 className="text-3xl font-bold text-white mb-4">{finalRecommendationDetails[finalRecommendation].title}</h3>
                <p className="text-gray-300 mb-6 max-w-3xl mx-auto">{finalRecommendationDetails[finalRecommendation].description}</p>
                <a
                  href="#"
                  className="bg-white text-gray-900 font-bold py-5 px-8 rounded-full shadow-md hover:bg-gray-200 transition-colors min-h-[56px] text-lg inline-block"
                  style={{ minHeight: 56 }}
                >
                  {finalRecommendationDetails[finalRecommendation].cta}
                </a>
              </div>
            }
            <h3 className="text-2xl font-bold text-center mb-6 text-gray-700">Here's a breakdown of your choices:</h3>
            <div className="grid md:grid-cols-3 gap-8 items-start">
              <div className="bg-teal-50 p-6 rounded-lg border border-teal-200">
                <h3 className="text-2xl font-bold text-teal-800 mb-3">{resultDetails[projectGoal]?.title}</h3>
                <p className="mb-4 text-gray-700">{resultDetails[projectGoal]?.description}</p>
              </div>
              <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-200">
                <h3 className="text-2xl font-bold text-indigo-800 mb-3">{resultDetails[designChoice]?.title}</h3>
                <p className="mb-4 text-gray-700">{resultDetails[designChoice]?.description}</p>
              </div>
              <div className="bg-pink-50 p-6 rounded-lg border border-pink-200">
                <h3 className="text-2xl font-bold text-pink-800 mb-3">{resultDetails[platformChoice]?.title}</h3>
                <p className="mb-4 text-gray-700">{resultDetails[platformChoice]?.description}</p>
              </div>
            </div>
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-center mb-6">How It Compares: Nilead vs. WordPress</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-gray-100">
                    <tr>
                      {comparisonData.header.map(h => <th key={h} className="p-4 font-bold border-b-2 border-gray-200">{h}</th>)}
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.rows.map(row => (
                      <tr key={row[0]} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="p-4 font-semibold">{row[0]}</td>
                        <td className="p-4 text-gray-700">{row[1]}</td>
                        <td className="p-4 text-gray-700">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
        {/* Standardized Footer (hidden in iframe) */}
        {!isEmbedded && (
          <footer className="text-center mt-12 text-muted-foreground text-sm">
            <p>&copy; {new Date().getFullYear()} Website Platform Discovery</p>
            <p className="mt-1">Fully managed One-Stop Digital Marketing Platform</p>
            <p className="mt-2">
              Powered by{' '}
              <a
                href="https://nilead.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline transition-colors"
              >
                Nilead
              </a>
            </p>
          </footer>
        )}
      </div>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        body {
          font-family: 'Inter', sans-serif;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default App;