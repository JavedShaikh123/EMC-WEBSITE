import React from 'react';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { ArrowRight, Users, RefreshCw, MessageCircle, TrendingUp, Shield, Heart } from 'lucide-react';

const ChangeManagementPage = () => {
  const services = [
    {
      icon: RefreshCw,
      title: "Change Strategy & Planning",
      description: "Develop comprehensive change strategies that minimize disruption and maximize adoption success."
    },
    {
      icon: MessageCircle,
      title: "Communication & Engagement",
      description: "Create effective communication plans that keep stakeholders informed and engaged throughout change."
    },
    {
      icon: Users,
      title: "Stakeholder Management",
      description: "Identify and manage key stakeholders to ensure buy-in and support for change initiatives."
    },
    {
      icon: TrendingUp,
      title: "Training & Development",
      description: "Design and deliver training programs that build capabilities needed for successful change adoption."
    },
    {
      icon: Shield,
      title: "Resistance Management",
      description: "Proactively identify and address resistance to change through targeted intervention strategies."
    },
    {
      icon: Heart,
      title: "Culture Transformation",
      description: "Guide cultural shifts that support and sustain organizational change initiatives."
    }
  ];

  const benefits = [
    "Reduced change implementation time and costs",
    "Higher employee adoption and engagement rates",
    "Minimized business disruption and productivity loss",
    "Improved organizational agility and adaptability",
    "Enhanced change readiness for future initiatives",
    "Sustainable behavior change and culture transformation"
  ];

  const approach = [
    {
      stage: "Prepare",
      title: "Change Readiness",
      description: "Assess organizational readiness, identify stakeholders, and develop change strategy and roadmap."
    },
    {
      stage: "Plan",
      title: "Change Design",
      description: "Create detailed change plans including communication, training, and stakeholder engagement strategies."
    },
    {
      stage: "Execute",
      title: "Change Implementation",
      description: "Deploy change initiatives with active support, coaching, and resistance management."
    },
    {
      stage: "Sustain",
      title: "Change Reinforcement",
      description: "Monitor adoption, provide ongoing support, and reinforce new behaviors and processes."
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
                Change Management
              </span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              EMC helps businesses navigate transformation smoothly, minimizing disruption and maximizing adoption. 
              Our structured approach ensures employees are engaged, informed, and aligned with new initiatives.
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
                  Leading Change with Confidence
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed text-center">
                  Our change management services help organizations successfully navigate transformation 
                  by addressing the human side of change. We provide structured approaches that ensure 
                  smooth transitions, high adoption rates, and sustainable results.
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
                Change Management Services
              </h2>
              <p className="text-lg text-gray-600">
                Comprehensive solutions for successful organizational change
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
                Our Change Management Approach
              </h2>
              <p className="text-lg text-gray-600">
                A proven methodology for successful change implementation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {approach.map((stage, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                      {index + 1}
                    </div>
                    <h4 className="font-bold text-lg text-purple-600 mb-2">
                      {stage.stage}
                    </h4>
                    <h3 className="font-bold text-xl mb-3 text-gray-900">
                      {stage.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {stage.description}
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
                Change Management Benefits
              </h2>
              <p className="text-lg text-gray-600">
                The value of effective change management
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
              Ready to Lead Successful Change?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Partner with EMC to navigate transformation with confidence and achieve lasting results.
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

export default ChangeManagementPage;