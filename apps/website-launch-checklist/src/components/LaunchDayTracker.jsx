import React, { useState } from 'react';
import { Rocket } from 'lucide-react';
import { Card, CardContent } from '@embed-tools/components';

const LaunchDayTracker = () => {
    const [tasks, setTasks] = useState({
        launchDay: [
            { id: 'ld1', text: "Confirm with developer that the final backup is complete", checked: false },
            { id: 'ld2', text: "Give the final 'Go' to point the domain to the live site", checked: false },
            { id: 'ld3', text: "Verify the 'Under Construction' page is gone and the site is live", checked: false },
            { id: 'ld4', text: "Do a final, quick walkthrough of the live site's key pages and functions", checked: false },
            { id: 'ld5', text: "Publish 'We are live!' announcements on social media and to email list", checked: false },
        ],
        postLaunch: [
            { id: 'pl1', text: "Confirm sitemap has been submitted to Google Search Console", checked: false },
            { id: 'pl2', text: "Log in to Google Analytics and watch the 'Realtime' report for visitors", checked: false },
            { id: 'pl3', text: "Engage with comments and messages on launch announcements", checked: false },
            { id: 'pl4', text: "Monitor for any user-reported issues or errors", checked: false },
            { id: 'pl5', text: "Take a moment to celebrate the launch!", checked: false },
        ]
    });
    
    const handleToggle = (category, taskId) => {
        setTasks(prevTasks => ({
            ...prevTasks,
            [category]: prevTasks[category].map(task => 
                task.id === taskId ? { ...task, checked: !task.checked } : task
            )
        }));
    };
    
    return (
        <Card>
            <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <Rocket className="mr-3 text-primary" />
                    Launch Day Action Tracker
                </h2>
                <p className="text-muted-foreground mb-6">
                    Follow these steps on launch day and immediately after to ensure a smooth transition.
                </p>

                <div className="space-y-8">
                    <div>
                        <h3 className="font-bold text-xl mb-4 text-foreground">Launch Day Critical Tasks</h3>
                        <div className="space-y-3">
                            {tasks.launchDay.map((task) => (
                                 <label 
                                     key={task.id} 
                                     className={`flex items-center p-3 rounded-lg cursor-pointer transition-colors duration-200 ${
                                         task.checked ? 'bg-green-50 text-muted-foreground' : 'bg-muted/50 hover:bg-muted'
                                     }`}
                                 >
                                    <input 
                                        type="checkbox" 
                                        checked={task.checked} 
                                        onChange={() => handleToggle('launchDay', task.id)} 
                                        className="h-5 w-5 rounded border-input text-primary focus:ring-primary mr-4" 
                                    />
                                    <span className={task.checked ? 'line-through' : ''}>{task.text}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold text-xl mb-4 text-foreground">Immediate Post-Launch Actions</h3>
                        <div className="space-y-3">
                            {tasks.postLaunch.map((task) => (
                                 <label 
                                     key={task.id} 
                                     className={`flex items-center p-3 rounded-lg cursor-pointer transition-colors duration-200 ${
                                         task.checked ? 'bg-green-50 text-muted-foreground' : 'bg-muted/50 hover:bg-muted'
                                     }`}
                                 >
                                    <input 
                                        type="checkbox" 
                                        checked={task.checked} 
                                        onChange={() => handleToggle('postLaunch', task.id)} 
                                        className="h-5 w-5 rounded border-input text-primary focus:ring-primary mr-4" 
                                    />
                                    <span className={task.checked ? 'line-through' : ''}>{task.text}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default LaunchDayTracker; 