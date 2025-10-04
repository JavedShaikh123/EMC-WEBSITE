import React from 'react';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { ArrowRight, Target, TrendingUp, Users, Lightbulb, BarChart3, CheckCircle } from 'lucide-react';

const StrategicPlanningPage = () => {
  const services = [
    {
      icon: Target,
      title: "Vision & Mission Development",
      description: "Define clear organizational purpose and strategic direction that aligns with market opportunities."
    },
    {
      icon: TrendingUp,
      title: "Growth Strategy",
      description: "Identify and evaluate growth opportunities across markets, products, and operational capabilities."
    },
    {
      icon: BarChart3,
      title: "Performance Metrics",
      description: "Establish KPIs and measurement frameworks to track progress and ensure accountability."
    },
    {
      icon: Users,
      title: "Stakeholder Alignment",
      description: "Build consensus among leadership and key stakeholders around strategic priorities and initiatives."
    },
    {
      icon: Lightbulb,
      title: "Innovation Planning",
      description: "Integrate innovation strategies that drive competitive advantage and long-term sustainability."
    },
    {
      icon: CheckCircle,
      title: "Implementation Roadmap",
      description: "Create detailed execution plans with timelines, resources, and milestone tracking."
    }
  ];

  const benefits = [
    "Clear strategic direction and organizational alignment",
    "Improved decision-making frameworks",
    "Enhanced competitive positioning",
    "Optimized resource allocation",
    "Measurable business outcomes",
    "Sustainable long-term growth"
  ];

  const process = [
    {
      step: "01",
      title: "Strategic Assessment",
      description: "Comprehensive analysis of current state, market position, and competitive landscape."
    },
    {
      step: "02",
      title: "Vision & Goal Setting",
      description: "Define long-term vision, strategic objectives, and success metrics with leadership team."
    },
    {
      step: "03",
      title: "Strategy Development",
      description: "Develop comprehensive strategies and initiatives to achieve defined objectives."
    },
    {
      step: "04",
      title: "Implementation Planning",
      description: "Create detailed roadmaps with timelines, resources, and accountability frameworks."
    },
    {
      step: "05",
      title: "Execution Support",
      description: "Provide ongoing guidance and monitoring to ensure successful strategy implementation."
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
                Strategic Planning
              </span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              EMC works with organizations to define long-term goals, identify growth opportunities, 
              and implement actionable strategies. Our approach ensures that every plan aligns with 
              business objectives and drives measurable results.
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
                  Strategic Excellence Through Planning
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed text-center">
                  Our strategic planning services help organizations navigate complex business environments 
                  and achieve sustainable growth. We combine industry expertise with proven methodologies 
                  to develop strategies that create competitive advantage and drive long-term success.
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
                Our Strategic Planning Services
              </h2>
              <p className="text-lg text-gray-600">
                Comprehensive strategic planning capabilities
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

      {/* Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Strategic Planning Process
              </h2>
              <p className="text-lg text-gray-600">
                A proven methodology for strategic success
              </p>
            </div>
            
            <div className="space-y-8">
              {process.map((step, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl">
                  <CardContent className="p-8">
                    <div className="flex items-start">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-6 flex-shrink-0">
                        {step.step}
                      </div>
                      <div>
                        <h3 className="font-bold text-2xl mb-3 text-gray-900">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-lg">
                          {step.description}
                        </p>
                      </div>
                    </div>
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
                Strategic Planning Benefits
              </h2>
              <p className="text-lg text-gray-600">
                The value our strategic planning services deliver
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
              Ready to Develop Your Strategic Plan?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Partner with EMC to create a strategic plan that drives sustainable growth and competitive advantage.
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

export default StrategicPlanningPage;