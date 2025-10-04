import React from 'react';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { ArrowRight, Lightbulb, Rocket, Target, Users, TrendingUp, Zap } from 'lucide-react';

const BusinessInnovationPage = () => {
  const services = [
    {
      icon: Lightbulb,
      title: "Innovation Strategy",
      description: "Develop comprehensive innovation strategies that align with business objectives and market opportunities."
    },
    {
      icon: Rocket,
      title: "Product & Service Innovation",
      description: "Create breakthrough products and services that differentiate your organization in the marketplace."
    },
    {
      icon: Target,
      title: "Business Model Innovation",
      description: "Redesign business models to create new value propositions and revenue streams."
    },
    {
      icon: Users,
      title: "Innovation Culture",
      description: "Foster an organizational culture that encourages creativity, experimentation, and innovation."
    },
    {
      icon: TrendingUp,
      title: "Growth Innovation",
      description: "Identify and develop new growth opportunities through innovative approaches and solutions."
    },
    {
      icon: Zap,
      title: "Digital Innovation",
      description: "Leverage emerging technologies to create innovative digital solutions and experiences."
    }
  ];

  const benefits = [
    "Sustainable competitive advantage through innovation",
    "New revenue streams and market opportunities",
    "Enhanced customer value and satisfaction",
    "Improved organizational agility and adaptability",
    "Stronger innovation capabilities and culture",
    "Accelerated growth and market leadership"
  ];

  const methodology = [
    {
      phase: "Discover",
      title: "Innovation Assessment",
      description: "Evaluate current innovation capabilities, market trends, and emerging opportunities."
    },
    {
      phase: "Ideate",
      title: "Concept Development",
      description: "Generate and refine innovative ideas through structured ideation and evaluation processes."
    },
    {
      phase: "Prototype",
      title: "Solution Testing",
      description: "Develop and test prototypes to validate concepts and refine innovative solutions."
    },
    {
      phase: "Scale",
      title: "Innovation Implementation",
      description: "Deploy successful innovations at scale with proper execution and performance monitoring."
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
                Business Innovation
              </span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              We foster a culture of innovation by connecting organizations with visionary professionals 
              and strategies that enable creativity, growth, and competitive advantage.
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
                  Driving Growth Through Innovation
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed text-center">
                  Our business innovation services help organizations unlock their creative potential 
                  and develop breakthrough solutions that drive growth. We combine proven innovation 
                  methodologies with strategic thinking to create sustainable competitive advantages 
                  and new market opportunities.
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
                Business Innovation Services
              </h2>
              <p className="text-lg text-gray-600">
                Comprehensive innovation solutions for competitive advantage
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

      {/* Methodology */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Innovation Methodology
              </h2>
              <p className="text-lg text-gray-600">
                A structured approach to business innovation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {methodology.map((phase, index) => (
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
                Business Innovation Benefits
              </h2>
              <p className="text-lg text-gray-600">
                The value of investing in innovation
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
              Ready to Innovate Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Partner with EMC to unlock innovation potential and create breakthrough competitive advantages.
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

export default BusinessInnovationPage;