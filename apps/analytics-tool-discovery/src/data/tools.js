export const tools = [
    {
        name: "Google Analytics 4",
        logo: "📊",
        description: "The industry standard, offering powerful, comprehensive, and free analytics for businesses of all sizes.",
        pros: ["Extremely feature-rich", "Free for most users", "Integrates with Google's ecosystem"],
        cons: ["Steep learning curve", "Data privacy concerns", "Data sampling on high-traffic sites"],
        url: "https://marketingplatform.google.com/about/analytics/",
        tags: { 
            size: ["personal", "small", "medium", "enterprise"], 
            goal: ["general", "ecommerce"], 
            budget: ["free", "premium"], 
            expertise: ["beginner", "intermediate", "expert"], 
            privacy: ["low"] 
        }
    },
    {
        name: "Plausible Analytics",
        logo: "🕊️",
        description: "A simple, lightweight, and open-source analytics tool that prioritizes privacy and website speed.",
        pros: ["Privacy-first (GDPR/CCPA compliant)", "Very lightweight script", "Simple, clean interface"],
        cons: ["Fewer advanced features", "No free tier (paid only)"],
        url: "https://plausible.io/",
        tags: { 
            size: ["personal", "small", "medium"], 
            goal: ["general", "privacy"], 
            budget: ["low-cost"], 
            expertise: ["beginner", "intermediate"], 
            privacy: ["high"] 
        }
    },
    {
        name: "Fathom Analytics",
        logo: "🌊",
        description: "A beautiful, easy-to-use, and privacy-focused alternative to Google Analytics with a simple, single-page dashboard.",
        pros: ["Excellent for privacy", "Incredibly simple to use", "No cookie banner needed"],
        cons: ["Limited features", "No free tier (paid only)"],
        url: "https://usefathom.com/",
        tags: { 
            size: ["personal", "small"], 
            goal: ["general", "privacy"], 
            budget: ["low-cost"], 
            expertise: ["beginner"], 
            privacy: ["high"] 
        }
    },
    {
        name: "Matomo",
        logo: "📈",
        description: "A powerful, privacy-focused platform that gives you 100% data ownership with self-hosting or cloud options.",
        pros: ["Complete data ownership & control", "No data sampling", "Feature-rich (heatmaps, A/B testing)"],
        cons: ["Self-hosting requires technical skill", "Cloud version can be pricey"],
        url: "https://matomo.org/",
        tags: { 
            size: ["small", "medium", "enterprise"], 
            goal: ["general", "ecommerce", "privacy"], 
            budget: ["free", "low-cost", "premium"], 
            expertise: ["intermediate", "expert"], 
            privacy: ["high"] 
        }
    },
    {
        name: "Hotjar",
        logo: "🔥",
        description: "Visualizes user behavior with heatmaps and session recordings to help you understand the 'why' behind their actions.",
        pros: ["Excellent for UX insights", "Provides heatmaps & session recordings", "Gathers qualitative feedback"],
        cons: ["Not a full quantitative analytics suite", "Can impact site performance"],
        url: "https://www.hotjar.com/",
        tags: { 
            size: ["small", "medium", "enterprise"], 
            goal: ["ux"], 
            budget: ["free", "low-cost", "premium"], 
            expertise: ["beginner", "intermediate"], 
            privacy: ["medium"] 
        }
    },
    {
        name: "Mixpanel",
        logo: "🎛️",
        description: "A powerful product analytics tool for tracking user interactions, funnels, and retention in web and mobile apps.",
        pros: ["Superior event-based tracking", "Advanced funnel & retention analysis", "Great for product teams"],
        cons: ["Can be expensive", "Steeper learning curve for non-product folks"],
        url: "https://mixpanel.com/",
        tags: { 
            size: ["small", "medium", "enterprise"], 
            goal: ["product", "ecommerce"], 
            budget: ["free", "premium"], 
            expertise: ["intermediate", "expert"], 
            privacy: ["low"] 
        }
    },
    {
        name: "Heap",
        logo: "🤖",
        description: "Automatically captures every user interaction, allowing for retroactive analysis without manual event setup.",
        pros: ["Automatic event tracking", "Analyze historical data from day one", "Powerful for product discovery"],
        cons: ["High cost", "Can generate overwhelming data", "Learning curve"],
        url: "https://heap.io/",
        tags: { 
            size: ["medium", "enterprise"], 
            goal: ["product", "ux"], 
            budget: ["premium"], 
            expertise: ["intermediate", "expert"], 
            privacy: ["low"] 
        }
    },
    {
        name: "Adobe Analytics",
        logo: "🅰️",
        description: "An enterprise-grade solution for large-scale, omnichannel data analysis and deep customer journey insights.",
        pros: ["Extremely powerful and customizable", "Omnichannel data collection", "Great for enterprise teams"],
        cons: ["Very high cost", "Highly complex setup and use", "Locks you into Adobe ecosystem"],
        url: "https://business.adobe.com/products/analytics/adobe-analytics.html",
        tags: { 
            size: ["enterprise"], 
            goal: ["general", "ecommerce", "product"], 
            budget: ["premium"], 
            expertise: ["expert"], 
            privacy: ["medium"] 
        }
    }
]; 