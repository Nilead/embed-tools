import React, { useState } from 'react';
import { Calendar, ClipboardList, Rocket } from 'lucide-react';
import TimelineGenerator from './components/TimelineGenerator';
import ChecklistGenerator from './components/ChecklistGenerator';
import LaunchDayTracker from './components/LaunchDayTracker';

// Main Application Component
export default function App() {
    const [activeTab, setActiveTab] = useState('timeline');
    const isEmbedded = window.self !== window.top;

    const renderContent = () => {
        switch (activeTab) {
            case 'timeline':
                return <TimelineGenerator />;
            case 'checklist':
                return <ChecklistGenerator />;
            case 'launchDay':
                return <LaunchDayTracker />;
            default:
                return <TimelineGenerator />;
        }
    };

    const navItems = [
        { id: 'timeline', label: 'Launch Timeline', icon: Calendar },
        { id: 'checklist', label: 'Pre-Launch Checklist', icon: ClipboardList },
        { id: 'launchDay', label: 'Launch Day Tracker', icon: Rocket },
    ];

    return (
        <div className="min-h-screen bg-background text-foreground">
            <div className="container mx-auto p-4 md:p-8">
                {!isEmbedded && (
                    <header className="text-center mb-8 md:mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Website Launch Action Plan</h1>
                        <p className="text-lg text-muted-foreground mt-2">Your interactive guide to a successful website launch.</p>
                    </header>
                )}

                <div className="max-w-4xl mx-auto">
                    <nav className="flex flex-wrap justify-center border-b-2 border-border mb-8">
                        {navItems.map(item => (
                            <button
                                key={item.id}
                                onClick={() => setActiveTab(item.id)}
                                className={`cursor-pointer flex items-center justify-center font-semibold px-4 py-3 md:px-6 md:py-4 -mb-px border-b-2 transition-all duration-300 ease-in-out ${activeTab === item.id
                                        ? 'border-primary text-primary'
                                        : 'border-transparent text-muted-foreground hover:text-primary hover:border-primary/30'
                                    }`}
                            >
                                <item.icon className="w-5 h-5 mr-2" />
                                <span>{item.label}</span>
                            </button>
                        ))}
                    </nav>

                    <main>
                        {renderContent()}
                    </main>
                </div>

                {!isEmbedded && (
                    <footer className="text-center mt-12 text-muted-foreground text-sm">
                        <p>&copy; {new Date().getFullYear()} Built to help you launch with confidence.</p>
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
        </div>
    );
}
