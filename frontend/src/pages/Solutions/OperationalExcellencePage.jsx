import React from 'react';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { ArrowRight, Cog, TrendingUp, BarChart3, CheckCircle, Zap, Target } from 'lucide-react';

const OperationalExcellencePage = () => {
  const services = [
    {
      icon: Cog,
      title: "Process Optimization",
      description: "Streamline operations and eliminate inefficiencies to maximize productivity and reduce costs."
    },
    {
      icon: BarChart3,
      title: "Performance Management",
      description: "Implement robust metrics and KPIs to monitor, measure, and improve operational performance."
    },
    {
      icon: CheckCircle,
      title: "Quality Management",
      description: "Establish quality control systems and continuous improvement frameworks for excellence."
    },
    {
      icon: Target,
      title: "Lean Six Sigma",
      description: "Apply proven methodologies to reduce waste, improve quality, and optimize business processes."
    },
    {
      icon: Zap,
      title: "Automation & Technology",
      description: "Leverage technology and automation to enhance operational efficiency and scalability."
    },
    {
      icon: TrendingUp,
      title: "Continuous Improvement",
      description: "Build a culture of continuous improvement that drives ongoing operational excellence."
    }
  ];

  const benefits = [
    "Increased operational efficiency and productivity",
    "Reduced operational costs and waste elimination",
    "Improved quality and customer satisfaction",
    "Enhanced process standardization and consistency",
    "Better resource utilization and capacity management",
    "Sustainable competitive advantage through excellence"
  ];

  const framework = [
    {
      phase: "Analyze",
      title: "Current State Assessment",
      description: "Comprehensive analysis of existing processes, performance metrics, and operational challenges."
    },
    {
      phase: "Design",
      title: "Optimization Strategy",
      description: "Develop targeted improvement strategies and redesigned processes for maximum efficiency."
    },
    {
      phase: "Implement",
      title: "Change Execution",
      description: "Deploy optimized processes with proper change management and stakeholder engagement."
    },
    {
      phase: "Sustain",
      title: "Performance Monitoring",
      description: "Establish monitoring systems and continuous improvement mechanisms for lasting results."
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
                Operational Excellence
              </span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              We optimize processes, reduce inefficiencies, and implement best practices to enhance productivity. 
              EMC ensures organizations operate at peak performance while maintaining quality and compliance standards.
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
                  Excellence Through Optimization
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed text-center">
                  Our operational excellence services help organizations achieve superior performance through 
                  systematic process improvement, waste elimination, and the implementation of best practices. 
                  We create sustainable improvements that drive efficiency, quality, and customer satisfaction.
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
                Operational Excellence Services
              </h2>
              <p className="text-lg text-gray-600">
                Comprehensive solutions for operational optimization
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

      {/* Framework */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Excellence Framework
              </h2>
              <p className="text-lg text-gray-600">
                A systematic approach to operational excellence
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {framework.map((phase, index) => (
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
                Operational Excellence Benefits
              </h2>
              <p className="text-lg text-gray-600">
                The value of optimizing your operations
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
              Ready to Achieve Operational Excellence?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Partner with EMC to optimize your operations and achieve sustainable performance improvements.
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

export default OperationalExcellencePage;