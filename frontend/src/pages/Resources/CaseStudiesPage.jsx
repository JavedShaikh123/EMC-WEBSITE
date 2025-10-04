import React from 'react';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { ArrowRight, FileText, TrendingUp, Users, Clock } from 'lucide-react';

const CaseStudiesPage = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Fortune 500 Technology Company Digital Transformation",
      industry: "Technology",
      challenge: "Legacy system modernization and digital customer experience enhancement",
      solution: "Comprehensive digital transformation strategy with cloud migration and customer portal redesign",
      results: [
        "40% reduction in system maintenance costs",
        "60% improvement in customer satisfaction scores",
        "25% increase in operational efficiency",
        "Complete migration to cloud infrastructure in 8 months"
      ],
      image: "https://images.unsplash.com/photo-1573164574511-73c773193279?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbHN8ZW58MHx8fHwxNzU5NTYzMjkzfDA&ixlib=rb-4.1.0&q=85",
      duration: "12 months",
      featured: true
    },
    {
      id: 2,
      title: "Regional Hospital Network Operational Excellence Initiative",
      industry: "Healthcare",
      challenge: "Reduce patient wait times and improve operational efficiency across 15 hospitals",
      solution: "Lean Six Sigma implementation with workflow optimization and staff training programs",
      results: [
        "50% reduction in average patient wait times",
        "85% improvement in patient satisfaction scores",
        "30% increase in staff productivity",
        "$2.5M annual cost savings achieved"
      ],
      image: "https://images.unsplash.com/photo-1551135049-8a33b5883817?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBtYW5hZ2VtZW50JTIwY29uc3VsdGluZ3xlbnwwfHx8fDE3NTk1NjMyODd8MA&ixlib=rb-4.1.0&q=85",
      duration: "18 months",
      featured: true
    },
    {
      id: 3,
      title: "Global Manufacturing Company Supply Chain Optimization",
      industry: "Manufacturing",
      challenge: "Complex supply chain inefficiencies and high inventory costs",
      solution: "End-to-end supply chain redesign with AI-powered demand forecasting",
      results: [
        "35% reduction in inventory holding costs",
        "45% improvement in on-time delivery rates",
        "20% reduction in supply chain operational costs",
        "Established resilient multi-region supply network"
      ],
      image: "https://images.pexels.com/photos/5990271/pexels-photo-5990271.jpeg",
      duration: "15 months",
      featured: false
    },
    {
      id: 4,
      title: "Financial Services Digital Banking Platform Launch",
      industry: "Financial Services",
      challenge: "Launch competitive digital banking platform in highly regulated environment",
      solution: "Agile development approach with regulatory compliance and customer experience focus",
      results: [
        "300% increase in digital customer acquisition",
        "75% reduction in customer onboarding time",
        "95% customer satisfaction rating",
        "Full regulatory compliance achieved"
      ],
      image: "https://images.pexels.com/photos/8353821/pexels-photo-8353821.jpeg",
      duration: "10 months",
      featured: false
    },
    {
      id: 5,
      title: "Retail Chain Omnichannel Transformation",
      industry: "Retail",
      challenge: "Integrate online and offline customer experiences across 200+ stores",
      solution: "Comprehensive omnichannel strategy with unified inventory and customer data systems",
      results: [
        "65% increase in customer lifetime value",
        "40% growth in online sales",
        "Unified customer experience across all channels",
        "50% improvement in inventory turnover"
      ],
      image: "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwzfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbHN8ZW58MHx8fHwxNzU5NTYzMjkzfDA&ixlib=rb-4.1.0&q=85",
      duration: "14 months",
      featured: false
    },
    {
      id: 6,
      title: "Energy Company Renewable Transition Strategy",
      industry: "Energy",
      challenge: "Transition from traditional energy sources to 60% renewable portfolio",
      solution: "Strategic roadmap for renewable energy integration with grid modernization",
      results: [
        "70% renewable energy integration achieved",
        "35% reduction in operational costs",
        "Carbon footprint reduced by 55%",
        "Enhanced grid reliability and efficiency"
      ],
      image: "https://images.unsplash.com/photo-1562935345-5080389daccd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHw0fHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbHN8ZW58MHx8fHwxNzU5NTYzMjkzfDA&ixlib=rb-4.1.0&q=85",
      duration: "24 months",
      featured: false
    }
  ];

  const industries = ["All", "Technology", "Healthcare", "Manufacturing", "Financial Services", "Retail", "Energy"];
  const [selectedIndustry, setSelectedIndustry] = React.useState("All");

  const filteredCaseStudies = selectedIndustry === "All" 
    ? caseStudies 
    : caseStudies.filter(study => study.industry === selectedIndustry);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Case Studies
              </span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Explore real-world examples of how EMC has successfully solved complex recruitment 
              and consulting challenges across industries. Each case study demonstrates measurable 
              client impact and best practices.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-3">
              {industries.map((industry) => (
                <button
                  key={industry}
                  onClick={() => setSelectedIndustry(industry)}
                  className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                    selectedIndustry === industry
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {industry}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Featured Success Stories
              </h2>
              <p className="text-lg text-gray-600">
                In-depth case studies showcasing transformational results
              </p>
            </div>
            
            <div className="space-y-12">
              {filteredCaseStudies.filter(study => study.featured).map((study) => (
                <Card key={study.id} className="border-0 shadow-xl rounded-3xl overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="relative h-64 lg:h-auto">
                      <img 
                        src={study.image} 
                        alt={study.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-white/90 text-gray-800">
                          {study.industry}
                        </Badge>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center text-white text-sm">
                          <Clock className="h-4 w-4 mr-2" />
                          {study.duration}
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-8 lg:p-12">
                      <h3 className="font-bold text-2xl mb-4 text-gray-900">
                        {study.title}
                      </h3>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                        <p className="text-gray-600">{study.challenge}</p>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                        <p className="text-gray-600">{study.solution}</p>
                      </div>
                      
                      <div className="mb-8">
                        <h4 className="font-semibold text-gray-900 mb-3">Results:</h4>
                        <ul className="space-y-2">
                          {study.results.map((result, index) => (
                            <li key={index} className="flex items-start text-gray-700">
                              <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span>{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Button 
                        className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-full font-semibold"
                      >
                        Read Full Case Study
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Other Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Additional Case Studies
              </h2>
              <p className="text-lg text-gray-600">
                More success stories across industries
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredCaseStudies.filter(study => !study.featured).map((study) => (
                <Card key={study.id} className="border-0 bg-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden">
                  <div className="relative h-48">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white/90 text-gray-800">
                        {study.industry}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center text-white text-sm">
                        <Clock className="h-4 w-4 mr-2" />
                        {study.duration}
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl mb-3 text-gray-900">
                      {study.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm">
                      {study.challenge}
                    </p>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Results:</h4>
                      <ul className="space-y-1">
                        {study.results.slice(0, 2).map((result, index) => (
                          <li key={index} className="flex items-start text-gray-700 text-sm">
                            <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button 
                      variant="outline"
                      size="sm"
                      className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white w-full"
                    >
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Partner with EMC to achieve transformational results for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full"
              >
                Schedule Consultation
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 text-lg font-semibold rounded-full"
              >
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;