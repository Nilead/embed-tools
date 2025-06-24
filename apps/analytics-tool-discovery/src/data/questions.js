export const questions = [
    { 
        key: "size", 
        text: "What's the size of your business or project?", 
        options: [
            { value: "personal", text: "Personal / Hobby" }, 
            { value: "small", text: "Small Business (1-50)" }, 
            { value: "medium", text: "Medium Business (51-500)" }, 
            { value: "enterprise", text: "Enterprise (500+)" } 
        ] 
    },
    { 
        key: "goal", 
        text: "What is your primary goal?", 
        options: [
            { value: "general", text: "General Traffic Analysis" }, 
            { value: "ux", text: "Understanding User Behavior" }, 
            { value: "product", text: "Analyzing Product/App Usage" }, 
            { value: "ecommerce", text: "E-commerce & Conversions" }, 
            { value: "privacy", text: "Privacy & Data Ownership" } 
        ] 
    },
    { 
        key: "budget", 
        text: "What is your monthly budget?", 
        options: [
            { value: "free", text: "Free" }, 
            { value: "low-cost", text: "Low-cost (<$50/mo)" }, 
            { value: "premium", text: "Premium / Flexible" } 
        ] 
    },
    { 
        key: "expertise", 
        text: "What is your technical comfort level?", 
        options: [
            { value: "beginner", text: "Beginner (Simple)" }, 
            { value: "intermediate", text: "Intermediate (Can handle setup)" }, 
            { value: "expert", text: "Expert (Comfortable with code)" } 
        ] 
    },
    { 
        key: "privacy", 
        text: "How important is user privacy?", 
        options: [
            { value: "high", text: "Very Important (Top priority)" }, 
            { value: "medium", text: "Somewhat Important" }, 
            { value: "low", text: "Not a primary concern" } 
        ] 
    }
]; 