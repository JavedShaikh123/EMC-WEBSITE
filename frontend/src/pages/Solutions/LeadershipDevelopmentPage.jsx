import React from 'react';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { ArrowRight, Users, Target, TrendingUp, Award, Lightbulb, Heart } from 'lucide-react';

const LeadershipDevelopmentPage = () => {
  const services = [
    {
      icon: Users,
      title: "Executive Coaching",
      description: "One-on-one coaching programs designed to enhance leadership effectiveness and strategic thinking."
    },
    {
      icon: Target,
      title: "Leadership Assessment",
      description: "Comprehensive evaluation of leadership capabilities and identification of development opportunities."
    },
    {
      icon: TrendingUp,
      title: "Succession Planning",
      description: "Strategic programs to identify, develop, and retain high-potential leaders for future roles."
    },
    {
      icon: Award,
      title: "Performance Management",
      description: "Systems and processes to drive leadership accountability and continuous improvement."
    },
    {
      icon: Lightbulb,
      title: "Innovation Leadership",
      description: "Develop leaders who can drive innovation and navigate change in dynamic environments."
    },
    {
      icon: Heart,
      title: "Emotional Intelligence",
      description: "Enhance self-awareness, empathy, and interpersonal skills for effective leadership."
    }
  ];

  const benefits = [
    "Enhanced leadership effectiveness and decision-making",
    "Improved employee engagement and retention",
    "Stronger organizational culture and values alignment",
    "Better succession planning and talent pipeline",
    "Increased innovation and adaptability",
    "Higher team performance and productivity"
  ];

  const methodology = [
    {
      step: "Assessment",
      title: "Leadership Evaluation",
      description: "Comprehensive assessment of current leadership capabilities, strengths, and development areas."
    },
    {
      step: "Design",
      title: "Development Planning",
      description: "Create customized development programs aligned with individual and organizational goals."
    },
    {
      step: "Implementation",
      title: "Program Execution",
      description: "Deliver coaching, training, and development initiatives with ongoing support and guidance."
    },
    {
      step: "Measurement",
      title: "Progress Tracking",
      description: "Monitor development progress and measure impact on leadership effectiveness and business results."
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
                Leadership Development
              </span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              EMC designs programs that identify, nurture, and retain top talent. Our leadership solutions 
              empower professionals to lead effectively, drive change, and achieve organizational objectives.
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
                  Building Tomorrow's Leaders Today
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed text-center">
                  Our leadership development programs are designed to unlock human potential and create 
                  leaders who can navigate complexity, inspire teams, and drive organizational success. 
                  We combine proven methodologies with personalized approaches to develop authentic, 
                  effective leaders at every level.
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
                Leadership Development Services
              </h2>
              <p className="text-lg text-gray-600">
                Comprehensive programs to develop exceptional leaders
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
                Our Development Methodology
              </h2>
              <p className="text-lg text-gray-600">
                A proven approach to leadership development
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
                      {phase.step}
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
                Leadership Development Benefits
              </h2>
              <p className="text-lg text-gray-600">
                The impact of investing in leadership development
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
              Ready to Develop Your Leaders?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Partner with EMC to unlock leadership potential and drive organizational success.
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

export default LeadershipDevelopmentPage;