import React, { useState, useEffect } from 'react';
import { ClipboardList, HardDrive, Megaphone, TestTube2, CheckSquare } from 'lucide-react';
import { Card, CardContent } from '@embed-tools/components';

const ChecklistGenerator = () => {
    const [websiteType, setWebsiteType] = useState('business');
    const [complexity, setComplexity] = useState('simple');
    const [checklist, setChecklist] = useState([]);

    const baseChecklist = {
        technical: [
            { id: 't1', text: "Confirm domain and hosting are connected", checked: false },
            { id: 't2', text: "Verify SSL Certificate is active (shows padlock/https)", checked: false },
            { id: 't3', text: "Check that a custom 404 error page exists", checked: false },
            { id: 't4', text: "Confirm a final website backup has been made", checked: false },
            { id: 't5', text: "Test website loading speed (e.g., using Google PageSpeed Insights)", checked: false },
            { id: 't6', text: "Test business email sending and receiving (e.g. info@yourdomain.com)", checked: false },
        ],
        content: [
            { id: 'c1', text: "Proofread all text for typos and grammar", checked: false },
            { id: 'c2', text: "Check for broken links (404s)", checked: false },
            { id: 'c3', text: "Confirm all images are optimized for web", checked: false },
            { id: 'c4', text: "Ensure all contact information is correct", checked: false },
            { id: 'c5', text: "Check that favicon and site icons are displaying correctly", checked: false },
        ],
        functionality: [
            { id: 'f1', text: "Test all forms (contact, signup, etc.) and check where submissions go", checked: false },
            { id: 'f2', text: "Check mobile, tablet, and desktop responsiveness", checked: false },
            { id: 'f3', text: "Verify social media sharing buttons work as expected", checked: false },
            { id: 'f4', text: "Test key user paths (e.g., finding a product, contacting support)", checked: false },
        ],
        marketing: [
            { id: 'm1', text: "Set up Google Business Profile", checked: false },
            { id: 'm2', text: "Create/update Facebook Business Page", checked: false },
            { id: 'm3', text: "Create/update LinkedIn Company Page", checked: false },
            { id: 'm4', text: "Create/update Instagram Business Profile", checked: false },
            { id: 'm5', text: "Ensure consistent branding across all social profiles", checked: false },
            { id: 'm6', text: "Plan initial launch announcement posts/emails", checked: false },
        ],
        seo: [
            { id: 's1', text: "Check that page titles and meta descriptions are optimized", checked: false },
            { id: 's2', text: "Verify Google Analytics tracking code is installed", checked: false },
            { id: 's3', text: "Set up property in Google Search Console", checked: false },
            { id: 's4', text: "Confirm an XML sitemap has been generated", checked: false },
            { id: 's5', text: "Check that alt text has been added to important images", checked: false },
        ]
    };
    
    const additionalTasks = {
        ecommerce: [
            { id: 'e1', category: 'functionality', text: "Test entire checkout process with a real transaction", checked: false },
            { id: 'e2', category: 'functionality', text: "Verify payment gateway is working correctly", checked: false },
            { id: 'e3', category: 'content', text: "Double-check all product descriptions, images, and prices", checked: false },
            { id: 'e4', category: 'functionality', text: "Test automated emails (order confirmation, shipping)", checked: false },
        ],
        blog: [
            { id: 'b1', category: 'content', text: "Verify RSS feed is working", checked: false },
            { id: 'b2', category: 'functionality', text: "Test comment submission and moderation flow", checked: false },
        ],
        complex: [
            { id: 'cx1', category: 'technical', text: "Confirm Content Delivery Network (CDN) is serving assets", checked: false },
            { id: 'cx2', category: 'functionality', text: "Test user account creation, login, and profile management", checked: false },
        ]
    };

    const generateChecklist = () => {
        let generated = JSON.parse(JSON.stringify(baseChecklist)); // Deep copy
        
        if (websiteType === 'ecommerce') {
            additionalTasks.ecommerce.forEach(task => generated[task.category].push(task));
        }
        if (websiteType === 'blog') {
            additionalTasks.blog.forEach(task => generated[task.category].push(task));
        }
        if (complexity === 'complex') {
            additionalTasks.complex.forEach(task => generated[task.category].push(task));
        }
        
        const checklistArray = [
            { title: 'Technical Verification', icon: HardDrive, tasks: generated.technical },
            { title: 'Marketing & Social Profiles', icon: Megaphone, tasks: generated.marketing },
            { title: 'Content Finalization', icon: ClipboardList, tasks: generated.content },
            { title: 'Functionality Testing', icon: TestTube2, tasks: generated.functionality },
            { title: 'SEO & Analytics', icon: CheckSquare, tasks: generated.seo },
        ];

        setChecklist(checklistArray);
    };

    useEffect(() => {
        generateChecklist();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [websiteType, complexity]);

    const handleToggle = (categoryIndex, taskIndex) => {
        const newChecklist = [...checklist];
        newChecklist[categoryIndex].tasks[taskIndex].checked = !newChecklist[categoryIndex].tasks[taskIndex].checked;
        setChecklist(newChecklist);
    };

    const totalTasks = checklist.reduce((sum, cat) => sum + cat.tasks.length, 0);
    const completedTasks = checklist.reduce((sum, cat) => sum + cat.tasks.filter(t => t.checked).length, 0);
    const progress = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

    return (
        <Card>
            <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <ClipboardList className="mr-3 text-primary" />
                    Pre-Launch Checklist
                </h2>
                <p className="text-muted-foreground mb-6">
                    Select your website type and complexity to generate a tailored checklist. Check off items as you complete them.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 bg-muted/50 p-4 rounded-lg border">
                    <div>
                        <label htmlFor="websiteType" className="font-semibold text-foreground block mb-2">
                            Website Type:
                        </label>
                        <select 
                            id="websiteType" 
                            value={websiteType} 
                            onChange={e => setWebsiteType(e.target.value)} 
                            className="w-full px-4 py-2 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition"
                        >
                            <option value="business">Business / Portfolio</option>
                            <option value="ecommerce">E-commerce Store</option>
                            <option value="blog">Blog / News</option>
                        </select>
                    </div>
                     <div>
                        <label htmlFor="complexity" className="font-semibold text-foreground block mb-2">
                            Complexity Level:
                        </label>
                        <select 
                            id="complexity" 
                            value={complexity} 
                            onChange={e => setComplexity(e.target.value)} 
                            className="w-full px-4 py-2 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition"
                        >
                            <option value="simple">Simple</option>
                            <option value="moderate">Moderate</option>
                            <option value="complex">Complex</option>
                        </select>
                    </div>
                </div>
                
                <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-foreground">Progress:</span>
                        <span className="font-bold text-primary">{progress}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2.5">
                        <div className="bg-primary h-2.5 rounded-full transition-all duration-500" style={{ width: `${progress}%` }}></div>
                    </div>
                </div>

                <div className="space-y-6">
                    {checklist.map((category, catIndex) => (
                        <div key={catIndex}>
                            <h3 className="font-bold text-lg mb-3 text-foreground border-b pb-2 flex items-center">
                               <category.icon className="w-5 h-5 mr-3 text-primary"/>
                               {category.title}
                            </h3>
                            <div className="space-y-2">
                                {category.tasks.map((task, taskIndex) => (
                                    <label 
                                        key={task.id} 
                                        className={`flex items-center p-3 rounded-lg cursor-pointer transition-colors duration-200 ${
                                            task.checked ? 'bg-green-50 text-muted-foreground' : 'bg-muted/50 hover:bg-muted'
                                        }`}
                                    >
                                        <input 
                                            type="checkbox" 
                                            checked={task.checked} 
                                            onChange={() => handleToggle(catIndex, taskIndex)} 
                                            className="h-5 w-5 rounded border-input text-primary focus:ring-primary mr-4" 
                                        />
                                        <span className={task.checked ? 'line-through' : ''}>{task.text}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};

export default ChecklistGenerator; 