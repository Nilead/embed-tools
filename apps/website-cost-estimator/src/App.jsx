// apps/website-cost-estimator/src/App.jsx
import React, { useState, useEffect } from 'react'
import { Button } from "@embed-tools/components";
import { Slider } from "@embed-tools/components";
import { RadioGroup, RadioGroupItem } from "@embed-tools/components"
import { Label } from "@embed-tools/components"
import { Card, CardContent, CardHeader, CardTitle } from "@embed-tools/components";
import { Separator } from "@embed-tools/components";
import { Input } from "@embed-tools/components";

function App() {
  const [formData, setFormData] = useState({
    platform: 'nilead',
    goal: 'brochure',
    pages: 5,
    design: 'template',
    features: {
      blog: 'none',
      ecommerce: 'none',
      booking: 'none',
      multilingual: 'none',
      contact: 'none',
      social: 'none',
      newsletter: 'none'
    },
    content: 'client'
  })
  
  const [hourlyRate, setHourlyRate] = useState(75)
  const [totalCost, setTotalCost] = useState(0)
  const [totalHours, setTotalHours] = useState(0)
  const [costBreakdown, setCostBreakdown] = useState([])
  const [isSaaS, setIsSaaS] = useState(false)

  const platformOptions = [
    {
      value: 'nilead',
      label: 'NILEAD',
      pros: [
        'All-in-One Platform (No Plugins Needed)',
        'AI-Powered Features',
        'Fully Managed SaaS',
        'Quick Start & Instant Site Generation',
        'Transparent Pricing',
        'Optimized for SMBs & Solopreneurs',
      ],
      cons: [
        'Less Flexibility for Custom Functionality',
        'Platform Lock-In (Without Self-Hosting)',
        'Smaller Ecosystem',
      ]
    },
    {
      value: 'wordpress',
      label: 'WORDPRESS',
      pros: [
        'Highly Flexible and Open Source',
        'Vast Community & Support Resources',
        'Self-Hosted or Hosted Options',
        'Ideal for Custom Projects',
        'Cost Control for DIY',
      ],
      cons: [
        'Plugin Dependency & Compatibility Risks',
        'Maintenance Burden',
        'No Native Integration Between Tools',
        'Scattered User Experience',
        'Longer Setup Time',
      ]
    }
  ]

  const goalOptions = [
    { value: 'brochure', label: 'Simple Brochure / Lead Generation', description: 'Inform visitors and capture leads.', hours: 20 },
    { value: 'ecommerce', label: 'E-commerce / Online Store', description: 'Sell products or services directly online.', hours: 60 },
    { value: 'blog', label: 'Blog / Content Platform', description: 'Publish articles and build an audience.', hours: 30 },
    { value: 'saas', label: 'Web Application / SaaS', description: 'Requires custom quote. Contact us!', hours: 0 }
  ]

  const designOptions = [
    { value: 'template', label: 'Template-Based Design', description: 'Cost-effective, professional, and quick to launch.', hours: 15 },
    { value: 'custom', label: 'Bespoke / Custom UI/UX Design', description: 'Unique, pixel-perfect design tailored to your brand.', hours: 60 }
  ]

  const contentOptions = [
    { value: 'client', label: 'I will provide all content', description: 'Text, images, and other media are ready.', hours: 0 },
    { value: 'assistance', label: 'I need help with content creation', description: 'Copywriting, stock photos, etc.', hours: 20 }
  ]

  const featureOptions = [
    {
      key: 'blog',
      name: 'Blog / News Section',
      options: [
        { value: 'none', label: 'None', hours: 0 },
        { value: 'standard', label: 'Standard (8-16 hrs)', hours: 12 },
        { value: 'custom', label: 'Custom (20-40 hrs)', hours: 30 }
      ]
    },
    {
      key: 'ecommerce',
      name: 'E-commerce',
      options: [
        { value: 'none', label: 'None', hours: 0 },
        { value: 'standard', label: 'Standard Plugin (40-80 hrs)', hours: 60 },
        { value: 'custom', label: 'Bespoke Solution (120-300+ hrs)', hours: 200 }
      ]
    },
    {
      key: 'booking',
      name: 'Booking System',
      options: [
        { value: 'none', label: 'None', hours: 0 },
        { value: 'standard', label: 'Standard (3rd Party Int.)', hours: 12 },
        { value: 'custom', label: 'Custom Built', hours: 75 }
      ]
    },
    {
      key: 'multilingual',
      name: 'Multiple Languages',
      options: [
        { value: 'none', label: 'None', hours: 0 },
        { value: 'standard', label: 'Similar Languages (EN/ES/FR) (8-16 hrs)', hours: 12 },
        { value: 'custom', label: 'Complex Languages (EN/CN/AR/JP) (20-40 hrs)', hours: 30 }
      ]
    },
    {
      key: 'contact',
      name: 'Contact Forms',
      options: [
        { value: 'none', label: 'None', hours: 0 },
        { value: 'standard', label: 'Basic Contact Form (2-4 hrs)', hours: 3 },
        { value: 'custom', label: 'Advanced Forms (8-16 hrs)', hours: 12 }
      ]
    },
    {
      key: 'social',
      name: 'Social Media Integration',
      options: [
        { value: 'none', label: 'None', hours: 0 },
        { value: 'standard', label: 'Social Feeds & Sharing (4-8 hrs)', hours: 6 },
        { value: 'custom', label: 'Advanced Social Features (12-24 hrs)', hours: 18 }
      ]
    },
    {
      key: 'newsletter',
      name: 'Newsletter Signup',
      options: [
        { value: 'none', label: 'None', hours: 0 },
        { value: 'standard', label: 'Basic Signup (2-4 hrs)', hours: 3 },
        { value: 'custom', label: 'Advanced Email Marketing (8-16 hrs)', hours: 12 }
      ]
    }
  ]

  const pluginCosts = [
    { category: 'SEO', plugin: 'Rank Math / Yoast', free: '✅', paid: '~69–$99' },
    { category: 'Security', plugin: 'Wordfence / iThemes', free: '✅', paid: '~$99–$119' },
    { category: 'Backups', plugin: 'UpdraftPlus', free: '✅', paid: '~70' },
    { category: 'Caching', plugin: 'WP Rocket', free: '❌', paid: '~59' },
    { category: 'Forms', plugin: 'WPForms', free: '✅', paid: '~49' },
    { category: 'Ecommerce', plugin: 'WooCommerce + Exts', free: 'Partly', paid: '$0–$500+' },
    { category: 'Email', plugin: 'MailPoet / FluentCRM', free: '✅', paid: '$129–$149' },
    { category: 'Analytics', plugin: 'MonsterInsights', free: '✅', paid: '~99' },
    { category: 'Builder', plugin: 'Elementor / Beaver', free: '✅', paid: '~59–$99' },
    { category: 'Multilingual', plugin: 'WPML (CMS Plan)', free: '❌', paid: '$99' },
    { category: 'Custom Fields', plugin: 'ACF Pro', free: '❌', paid: '$49' },
    { category: 'Search', plugin: 'SearchWP', free: '❌', paid: '$99' },
  ]

  const calculateCost = () => {
    let totalHours = 0
    const breakdown = []

    // Check if SaaS (special case)
    if (formData.goal === 'saas') {
      setIsSaaS(true)
      setTotalCost(0)
      setTotalHours(0)
      setCostBreakdown([])
      return
    } else {
      setIsSaaS(false)
    }

    // 1. Project Goal
    const goalOption = goalOptions.find(opt => opt.value === formData.goal)
    if (goalOption && goalOption.hours > 0) {
      totalHours += goalOption.hours
      breakdown.push({ item: `Base: ${goalOption.label}`, hours: goalOption.hours })
    }

    // 2. Number of Pages
    const pageHours = formData.pages * 1.5
    totalHours += pageHours
    breakdown.push({ item: `${formData.pages} Unique Page Templates`, hours: pageHours })

    // 3. Design Quality
    const designOption = designOptions.find(opt => opt.value === formData.design)
    if (designOption && designOption.hours > 0) {
      totalHours += designOption.hours
      breakdown.push({ item: `Design: ${designOption.label}`, hours: designOption.hours })
    }

    // 4. Features
    Object.entries(formData.features).forEach(([featureKey, featureValue]) => {
      if (featureValue !== 'none') {
        const feature = featureOptions.find(f => f.key === featureKey)
        const option = feature.options.find(opt => opt.value === featureValue)
        if (option && option.hours > 0) {
          totalHours += option.hours
          breakdown.push({ item: `Feature: ${feature.name} (${option.label})`, hours: option.hours })
        }
      }
    })

    // 5. Content
    const contentOption = contentOptions.find(opt => opt.value === formData.content)
    if (contentOption && contentOption.hours > 0) {
      totalHours += contentOption.hours
      breakdown.push({ item: 'Content Assistance', hours: contentOption.hours })
    }

    if (formData.platform === 'wordpress') {
      totalHours *= 1.25; // Add a 25% complexity increase for WordPress
    }

    const finalCost = totalHours * hourlyRate
    setTotalCost(finalCost)
    setTotalHours(totalHours)
    setCostBreakdown(breakdown)
  }

  useEffect(() => {
    calculateCost()
  }, [formData, hourlyRate])

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleFeatureChange = (featureKey, value) => {
    setFormData(prev => ({
      ...prev,
      features: {
        ...prev.features,
        [featureKey]: value
      }
    }))
  }

  return (
    <div className="bg-muted/40 text-foreground min-h-screen">
      <div className="container mx-auto max-w-6xl p-4 md:p-8">
        <header className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Website Cost Calculator</h1>
          <p className="mt-4 text-lg text-muted-foreground">Get a real-time estimate for your new website. Adjust options to see how they affect the price.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Left Side: Questions */}
          <div className="lg:col-span-3 space-y-6">
              {/* Step 1: Project Goal */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-foreground">1. What is the main goal of your website?</CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={formData.goal} onValueChange={(value) => handleInputChange('goal', value)} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {goalOptions.map((option) => (
                      <Label key={option.value} htmlFor={option.value} className={`flex flex-col items-start p-4 border-2 rounded-lg cursor-pointer transition-all hover:bg-accent hover:border-primary ${formData.goal === option.value ? 'bg-accent border-primary' : 'border-border'}`}>
                        <RadioGroupItem value={option.value} id={option.value} className="sr-only" />
                        <h3 className="font-semibold">{option.label}</h3>
                        <p className="text-muted-foreground text-sm font-normal">{option.description}</p>
                      </Label>
                    ))}
                  </RadioGroup>
                </CardContent>
              </Card>

              {/* Step 2: Number of Pages */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-foreground">2. How many unique page <span className="font-bold">templates</span> will you need?</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-4 h-10 w-full">
                    <Slider
                      value={[formData.pages]}
                      min={1}
                      max={50}
                      step={1}
                      onValueChange={(value) => handleInputChange('pages', value[0])}
                      className="w-full h-full"
                    />
                    <span className="font-semibold text-foreground text-lg w-16 text-center p-2 border rounded-md">
                      {formData.pages}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm mt-2">
                    Count each unique page layout. For example, the page design for all 5,000 of your products counts as just <span className="font-semibold">one template</span>.
                  </p>
                </CardContent>
              </Card>

              {/* Step 3: Design Quality */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-foreground">3. What level of design do you require?</CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={formData.design} onValueChange={(value) => handleInputChange('design', value)} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {designOptions.map((option) => (
                       <Label key={option.value} htmlFor={option.value} className={`flex flex-col items-start p-4 border-2 rounded-lg cursor-pointer transition-all hover:bg-accent hover:border-primary ${formData.design === option.value ? 'bg-accent border-primary' : 'border-border'}`}>
                        <RadioGroupItem value={option.value} id={option.value} className="sr-only" />
                        <h3 className="font-semibold">{option.label}</h3>
                        <p className="text-muted-foreground text-sm font-normal">{option.description}</p>
                      </Label>
                    ))}
                  </RadioGroup>
                </CardContent>
              </Card>

              {/* Step 4: Features */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-foreground">4. Select your required features</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {featureOptions.map((feature) => (
                    <div key={feature.key}>
                      <h3 className="font-semibold text-foreground mb-2">{feature.name}</h3>
                      <RadioGroup value={formData.features[feature.key]} onValueChange={(value) => handleFeatureChange(feature.key, value)} className="flex items-center space-x-4">
                        {feature.options.map((option) => (
                          <div key={option.value} className="flex items-center space-x-2">
                            <RadioGroupItem value={option.value} id={`${feature.key}-${option.value}`} />
                            <Label htmlFor={`${feature.key}-${option.value}`} className="cursor-pointer">{option.label}</Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Step 5: Content */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-foreground">5. Who will provide the content?</CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={formData.content} onValueChange={(value) => handleInputChange('content', value)} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {contentOptions.map((option) => (
                      <Label key={option.value} htmlFor={option.value} className={`flex flex-col items-start p-4 border-2 rounded-lg cursor-pointer transition-all hover:bg-accent hover:border-primary ${formData.content === option.value ? 'bg-accent border-primary' : 'border-border'}`}>
                        <RadioGroupItem value={option.value} id={option.value} className="sr-only" />
                        <h3 className="font-semibold">{option.label}</h3>
                        <p className="text-muted-foreground text-sm font-normal">{option.description}</p>
                      </Label>
                    ))}
                  </RadioGroup>
                </CardContent>
              </Card>

              {/* Step 6: Platform Choice */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-foreground">6. Choose Your Platform</CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={formData.platform} onValueChange={(value) => handleInputChange('platform', value)} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {platformOptions.map((option) => (
                      <Label key={option.value} htmlFor={option.value} className={`flex flex-col items-start p-4 border-2 rounded-lg cursor-pointer transition-all hover:bg-accent hover:border-primary ${formData.platform === option.value ? 'bg-accent border-primary' : 'border-border'}`}>
                        <RadioGroupItem value={option.value} id={option.value} className="sr-only" />
                        <h3 className="font-semibold text-lg mb-4">{option.label}</h3>
                        <div className="space-y-2 text-sm">
                          <h4 className="font-semibold text-green-600">✅ Pros</h4>
                          <ul className="list-disc list-inside space-y-1">
                            {option.pros.map((pro, i) => <li key={i}>{pro}</li>)}
                          </ul>
                          <h4 className="font-semibold text-red-600 mt-4">❌ Cons</h4>
                          <ul className="list-disc list-inside space-y-1">
                            {option.cons.map((con, i) => <li key={i}>{con}</li>)}
                          </ul>
                        </div>
                      </Label>
                    ))}
                  </RadioGroup>
                </CardContent>
              </Card>
          </div>

          {/* Right Side: Cost Summary */}
          <div className="sticky top-8 lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Your Estimated Cost</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="hourlyRate" className="font-medium">Your Hourly Rate ($)</Label>
                  <Input
                    id="hourlyRate"
                    type="number"
                    value={hourlyRate}
                    onChange={(e) => setHourlyRate(Number(e.target.value))}
                    className="mt-2 text-xl font-semibold"
                    placeholder="75"
                  />
                </div>

                <Separator />

                <div className="text-center">
                  <p className="text-muted-foreground">One-Time Project Cost</p>
                  {isSaaS ? (
                    <div className="text-center p-8 bg-blue-100 rounded-lg">
                      <h3 className="font-bold text-xl text-blue-800">Custom Quote Required</h3>
                      <p className="text-blue-600 mt-2">SaaS and web application projects are highly variable. Please contact us for a detailed quote.</p>
                      <Button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white">Contact Us</Button>
                    </div>
                  ) : (
                    <>
                      <p className="text-5xl font-extrabold text-gray-800 tracking-tight">${totalCost.toLocaleString()}</p>
                      <p className="text-muted-foreground text-sm">{totalHours.toFixed(1)} estimated hours @ ${hourlyRate}/hr</p>
                    </>
                  )}
                </div>

                {!isSaaS && (
                  <>
                    <Separator />
                    <div>
                      <h3 className="font-semibold text-lg">Cost Breakdown</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        {costBreakdown.map((item, index) => (
                          <li key={index} className="flex justify-between">
                            <span>{item.item}</span>
                            <span>${(item.hours * hourlyRate).toLocaleString()}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-lg">Estimated Recurring Costs</h3>
                      <ul className="space-y-1 text-muted-foreground list-disc list-inside mt-2">
                        <li>Hosting: $20 - $50 / mo</li>
                        <li>Domain: ~$15 / yr</li>
                        {formData.platform === 'nilead' ? (
                          <li>Maintenance: Included in hosting</li>
                        ) : (
                          <li>Maintenance: $50 - $200 / mo</li>
                        )}
                      </ul>
                    </div>

                    {formData.platform === 'wordpress' && (
                      <div>
                        <Separator />
                        <h3 className="font-semibold text-lg mt-4">Potential Annual Plugin Costs</h3>
                        <div className="text-sm text-muted-foreground mt-2 overflow-x-auto">
                          <table className="w-full text-left">
                            <thead>
                              <tr className="border-b">
                                <th className="py-2 pr-2 font-semibold">Category</th>
                                <th className="py-2 px-2 font-semibold">Plugin</th>
                                <th className="py-2 px-2 font-semibold text-center">Free?</th>
                                <th className="py-2 pl-2 font-semibold text-right">Paid (Annual)</th>
                              </tr>
                            </thead>
                            <tbody>
                              {pluginCosts.map((plugin, i) => (
                                <tr key={i} className="border-b">
                                  <td className="py-2 pr-2">{plugin.category}</td>
                                  <td className="py-2 px-2">{plugin.plugin}</td>
                                  <td className="py-2 px-2 text-center">{plugin.free}</td>
                                  <td className="py-2 pl-2 text-right">{plugin.paid}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                        <div className="mt-4 text-center bg-gray-50 p-3 rounded-lg">
                          <p className="font-bold text-gray-800">👉 Potential plugin costs:</p>
                          <p className="font-semibold text-primary">🔸 $300–$700/year typical</p>
                          <p className="text-xs text-gray-600">(excluding custom dev or theme costs)</p>
                        </div>
                      </div>
                    )}

                    <Separator />

                    {/* <Button size="lg" className="w-full">Get a Formal Quote</Button> */}

                    <p className="text-xs text-muted-foreground text-center">This is a preliminary estimate for budgeting purposes.</p>
                  </>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
        
        <footer className="text-center mt-12 text-muted-foreground text-sm">
            <p>&copy; {new Date().getFullYear()} Website Cost Estimator</p>
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
      </div>
    </div>
  )
}

export default App