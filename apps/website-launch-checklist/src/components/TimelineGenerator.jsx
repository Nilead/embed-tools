import React, { useState, useMemo } from 'react';
import { Calendar, Milestone, HardDrive, TestTube2, PartyPopper } from 'lucide-react';
import { Card, CardContent } from '@embed-tools/components';

// Helper function to format dates
const formatDate = (date, includeDay = false) => {
    if (!date) return '';
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    if (includeDay) {
        options.weekday = 'long';
    }
    return new Date(date.getTime() - date.getTimezoneOffset() * 60000).toLocaleDateString('en-US', options);
};

const formatDateForInput = (date) => {
     if (!date) return '';
    return new Date(date.getTime() - date.getTimezoneOffset() * 60000).toISOString().split('T')[0];
}

// Helper function to add days to a date
const addDays = (date, days) => {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
};

const TimelineGenerator = () => {
    const [startDate, setStartDate] = useState(formatDateForInput(new Date()));
    const [durations, setDurations] = useState({
        planning: 2,
        development: 6,
        testing: 2,
    });

    const handleDurationChange = (phase, value) => {
        const newDurations = { ...durations, [phase]: parseInt(value, 10) || 0 };
        setDurations(newDurations);
    };

    const timeline = useMemo(() => {
        if (!startDate) return { phases: [], launchDate: null };
        
        const start = new Date(startDate + 'T00:00:00');
        let currentDate = new Date(start);

        const planningEndDate = addDays(currentDate, durations.planning * 7);
        const developmentEndDate = addDays(planningEndDate, durations.development * 7);
        const testingEndDate = addDays(developmentEndDate, durations.testing * 7);
        const finalLaunchDate = addDays(testingEndDate, 1);

        const phases = [
            {
                phase: "Planning Phase",
                duration: `${durations.planning} week${durations.planning === 1 ? '' : 's'}`,
                dateRange: `${formatDate(currentDate)} to ${formatDate(planningEndDate)}`,
                icon: Milestone,
                color: "text-purple-600",
                bgColor: "bg-purple-100",
                tasks: [
                    "Define website goals and target audience",
                    "Plan website structure and sitemap",
                    "Research competitors and market",
                    "Set budget and resource allocation",
                ],
            },
            {
                phase: "Design & Development Phase",
                duration: `${durations.development} week${durations.development === 1 ? '' : 's'}`,
                dateRange: `${formatDate(addDays(planningEndDate, 1))} to ${formatDate(developmentEndDate)}`,
                icon: HardDrive,
                color: "text-sky-600",
                bgColor: "bg-sky-100",
                tasks: [
                    "Finalize all website content (text, images, videos)",
                    "Complete website design, branding, and development",
                    "Create and set up social media business profiles",
                    "Implement core features and functionality",
                ],
            },
            {
                phase: "Final Testing Phase",
                duration: `${durations.testing} week${durations.testing === 1 ? '' : 's'}`,
                dateRange: `${formatDate(addDays(developmentEndDate, 1))} to ${formatDate(testingEndDate)}`,
                icon: TestTube2,
                color: "text-amber-600",
                bgColor: "bg-amber-100",
                tasks: [
                    "Conduct thorough cross-browser and device testing",
                    "Test all forms, links, and check submissions",
                    "Verify website performance and security (SSL)",
                    "Proofread all content one last time",
                ],
            },
        ];
        
        return { phases, launchDate: finalLaunchDate };

    }, [startDate, durations]);

    return (
        <Card>
            <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <Calendar className="mr-3 text-primary" />
                    Interactive Launch Timeline
                </h2>
                <p className="text-muted-foreground mb-6">
                    Set your start date and phase durations to build a realistic project timeline and forecast your launch date.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 p-4 bg-muted/50 rounded-lg border">
                    <div>
                        <label htmlFor="startDate" className="font-semibold text-foreground block mb-2">
                            Project Start Date:
                        </label>
                        <input
                            type="date"
                            id="startDate"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            className="w-full px-4 py-2 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition"
                        />
                    </div>
                    <div className="grid grid-cols-3 gap-x-4">
                        <div>
                             <label htmlFor="planning" className="font-semibold text-foreground block mb-2 text-sm">
                                 Planning
                             </label>
                             <input 
                                 type="number" 
                                 id="planning" 
                                 value={durations.planning} 
                                 onChange={e => handleDurationChange('planning', e.target.value)} 
                                 className="w-full text-center px-2 py-2 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition" 
                                 min="1" 
                             />
                             <span className="text-xs text-muted-foreground text-center block mt-1">weeks</span>
                        </div>
                        <div>
                             <label htmlFor="development" className="font-semibold text-foreground block mb-2 text-sm">
                                 Dev & Design
                             </label>
                             <input 
                                 type="number" 
                                 id="development" 
                                 value={durations.development} 
                                 onChange={e => handleDurationChange('development', e.target.value)} 
                                 className="w-full text-center px-2 py-2 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition" 
                                 min="1" 
                             />
                            <span className="text-xs text-muted-foreground text-center block mt-1">weeks</span>
                        </div>
                        <div>
                             <label htmlFor="testing" className="font-semibold text-foreground block mb-2 text-sm">
                                 Testing
                             </label>
                             <input 
                                 type="number" 
                                 id="testing" 
                                 value={durations.testing} 
                                 onChange={e => handleDurationChange('testing', e.target.value)} 
                                 className="w-full text-center px-2 py-2 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition" 
                                 min="1" 
                             />
                            <span className="text-xs text-muted-foreground text-center block mt-1">weeks</span>
                        </div>
                    </div>
                </div>
                
                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-border before:content-['']">
                    {timeline.phases.map((item, index) => (
                        <div key={index} className="relative pl-12">
                            <div className={`absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-full ${item.bgColor}`}>
                                <item.icon className={`h-5 w-5 ${item.color}`} />
                            </div>
                            <div className="bg-muted/50 p-4 rounded-lg border border-border">
                                <h3 className="font-bold text-lg text-foreground">{item.phase}</h3>
                                <p className={`font-semibold text-sm ${item.color}`}>{item.duration}</p>
                                <p className="text-sm text-muted-foreground mb-3">{item.dateRange}</p>
                                <ul className="list-disc list-inside space-y-1 text-foreground text-sm">
                                    {item.tasks.map((task, i) => <li key={i}>{task}</li>)}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                {timeline.launchDate && (
                     <div className="relative pl-12 mt-8">
                        <div className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                            <PartyPopper className="h-5 w-5 text-green-600" />
                        </div>
                        <div className="bg-green-100 p-4 rounded-lg border border-green-200">
                            <h3 className="font-bold text-lg text-green-800">Estimated Launch Day!</h3>
                            <p className="font-semibold text-xl text-green-700">{formatDate(timeline.launchDate, true)}</p>
                        </div>
                    </div>
                )}
            </CardContent>
        </Card>
    );
};

export default TimelineGenerator; 