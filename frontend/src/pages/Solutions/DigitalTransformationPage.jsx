import React from 'react';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { ArrowRight, Smartphone, Cloud, Database, Shield, Zap, Users } from 'lucide-react';

const DigitalTransformationPage = () => {
  const services = [
    {
      icon: Cloud,
      title: "Cloud Migration & Strategy",
      description: "Seamlessly transition to cloud infrastructure with optimized performance and cost efficiency."
    },
    {
      icon: Database,
      title: "Data & Analytics",
      description: "Leverage data-driven insights to make informed decisions and drive business intelligence."
    },
    {
      icon: Smartphone,
      title: "Digital Customer Experience",
      description: "Create engaging digital touchpoints that enhance customer satisfaction and loyalty."
    },
    {
      icon: Shield,
      title: "Cybersecurity & Compliance",
      description: "Implement robust security frameworks to protect digital assets and ensure compliance."
    },
    {
      icon: Zap,
      title: "Process Automation",
      description: "Automate repetitive tasks and workflows to improve efficiency and reduce operational costs."
    },
    {
      icon: Users,
      title: "Digital Workforce",
      description: "Upskill teams and create digital-first organizational capabilities and culture."
    }
  ];

  const benefits = [
    "Accelerated time-to-market for products and services",
    "Enhanced operational efficiency and cost reduction",
    "Improved customer experience and engagement",
    "Data-driven decision making capabilities",
    "Increased agility and market responsiveness",
    "Future-ready technology foundation"
  ];

  const approach = [
    {
      phase: "Assess",
      title: "Digital Maturity Assessment",
      description: "Evaluate current digital capabilities, infrastructure, and organizational readiness for transformation."
    },
    {
      phase: "Design",
      title: "Transformation Strategy",
      description: "Develop comprehensive digital strategy aligned with business objectives and market opportunities."
    },
    {
      phase: "Implement",
      title: "Technology Deployment",
      description: "Execute phased implementation of digital solutions with minimal business disruption."
    },
    {
      phase: "Optimize",
      title: "Continuous Improvement",
      description: "Monitor performance, gather insights, and continuously optimize digital capabilities."
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
                Digital Transformation
              </span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              We help companies leverage technology to streamline operations, enhance customer experiences, 
              and improve efficiency. From cloud adoption to AI integration, EMC provides the talent and 
              guidance necessary to succeed in a digital-first world.
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

      {/* Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-xl rounded-3xl bg-gradient-to-br from-purple-50 to-pink-50">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                  Transforming Business Through Technology
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed text-center">
                  Our digital transformation services enable organizations to harness the power of technology 
                  to drive innovation, improve operations, and create competitive advantages. We guide companies 
                  through every step of their digital journey, ensuring successful adoption and sustainable results.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Digital Transformation Services
              </h2>
              <p className="text-lg text-gray-600">
                Comprehensive digital solutions for modern businesses
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card key={index} className="border-0 bg-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-bold text-xl mb-3 text-gray-900">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Transformation Approach
              </h2>
              <p className="text-lg text-gray-600">
                A structured methodology for digital success
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {approach.map((phase, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                      {index + 1}
                    </div>
                    <h4 className="font-bold text-lg text-purple-600 mb-2">
                      {phase.phase}
                    </h4>
                    <h3 className="font-bold text-xl mb-3 text-gray-900">
                      {phase.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {phase.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Digital Transformation Benefits
              </h2>
              <p className="text-lg text-gray-600">
                The value digital transformation brings to your organization
              </p>
            </div>
            
            <Card className="border-0 shadow-xl rounded-3xl">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center text-gray-700">
                      <div className="w-3 h-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mr-4"></div>
                      <span className="text-lg">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Digitally?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Partner with EMC to accelerate your digital transformation journey and unlock new possibilities.
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
                Download Guide
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalTransformationPage;