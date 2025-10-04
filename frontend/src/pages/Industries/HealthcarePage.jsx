import React from 'react';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { ArrowRight, Heart, Users, Shield, TrendingUp, Stethoscope, Activity } from 'lucide-react';

const HealthcarePage = () => {
  const challenges = [
    {
      icon: Heart,
      title: "Patient Experience",
      description: "Enhance patient satisfaction and care quality across all touchpoints"
    },
    {
      icon: Users,
      title: "Workforce Optimization",
      description: "Address staffing challenges and improve healthcare professional retention"
    },
    {
      icon: Shield,
      title: "Regulatory Compliance",
      description: "Navigate complex healthcare regulations and maintain compliance"
    },
    {
      icon: TrendingUp,
      title: "Cost Management",
      description: "Optimize operations while maintaining high-quality patient care"
    },
    {
      icon: Stethoscope,
      title: "Clinical Excellence",
      description: "Implement evidence-based practices and quality improvement initiatives"
    },
    {
      icon: Activity,
      title: "Digital Health",
      description: "Leverage technology to improve care delivery and operational efficiency"
    }
  ];

  const solutions = [
    {
      title: "Healthcare Strategy & Planning",
      description: "Develop comprehensive healthcare strategies that improve patient outcomes and operational efficiency.",
      features: ["Strategic planning", "Market analysis", "Service line development", "Quality metrics"]
    },
    {
      title: "Operational Excellence",
      description: "Streamline healthcare operations to reduce costs while maintaining exceptional patient care.",
      features: ["Process optimization", "Workflow redesign", "Performance improvement", "Resource allocation"]
    },
    {
      title: "Digital Health Transformation",
      description: "Implement digital solutions that enhance patient care and streamline healthcare delivery.",
      features: ["EHR optimization", "Telemedicine", "Digital workflows", "Data analytics"]
    }
  ];

  const caseStudies = [
    {
      title: "Regional Hospital Network Optimization",
      industry: "Healthcare",
      challenge: "Reduce patient wait times and improve satisfaction",
      result: "50% reduction in wait times, 85% patient satisfaction",
      image: "https://images.unsplash.com/photo-1551135049-8a33b5883817?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBtYW5hZ2VtZW50JTIwY29uc3VsdGluZ3xlbnwwfHx8fDE3NTk1NjMyODd8MA&ixlib=rb-4.1.0&q=85"
    },
    {
      title: "Telehealth Implementation Strategy",
      industry: "Healthcare",
      challenge: "Rapid deployment of remote care capabilities",
      result: "300% increase in virtual visits, 95% provider adoption",
      image: "https://images.unsplash.com/photo-1750768145390-f0ad18d3e65b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwzfHxleGVjdXRpdmUlMjBtYW5hZ2VtZW50JTIwY29uc3VsdGluZ3xlbnwwfHx8fDE3NTk1NjMyODd8MA&ixlib=rb-4.1.0&q=85"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Healthcare
              </span>{" "}
              Consulting
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Transform healthcare delivery with strategic consulting that improves patient outcomes, 
              optimizes operations, and drives sustainable growth across the healthcare continuum.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold rounded-full"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Healthcare Industry Challenges
              </h2>
              <p className="text-lg text-gray-600">
                Addressing critical healthcare challenges with strategic solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {challenges.map((challenge, index) => {
                const Icon = challenge.icon;
                return (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-bold text-xl mb-3 text-gray-900">
                        {challenge.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {challenge.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Healthcare Solutions
              </h2>
              <p className="text-lg text-gray-600">
                Comprehensive consulting services for healthcare organizations
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <Card key={index} className="border-0 bg-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl">
                  <CardContent className="p-8">
                    <h3 className="font-bold text-xl mb-4 text-gray-900">
                      {solution.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {solution.description}
                    </p>
                    <ul className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-700">
                          <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Success Stories
              </h2>
              <p className="text-lg text-gray-600">
                Transforming healthcare delivery and outcomes
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden">
                  <div className="relative h-48">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 bg-white/90 text-gray-800 rounded-full text-sm font-semibold">
                        {study.industry}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl mb-3 text-gray-900">
                      {study.title}
                    </h3>
                    <p className="text-gray-600 mb-2">
                      <strong>Challenge:</strong> {study.challenge}
                    </p>
                    <p className="text-gray-600 mb-4">
                      <strong>Result:</strong> {study.result}
                    </p>
                    <Button 
                      variant="outline" 
                      className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
                    >
                      Read Case Study
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
              Ready to Transform Healthcare Delivery?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Connect with our healthcare consulting experts to improve patient outcomes and operational efficiency.
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
                Download Brochure
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HealthcarePage;