import React from 'react';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { ArrowRight, Users, TrendingUp, Award, Heart, Lightbulb, Globe } from 'lucide-react';

const CareersPage = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Professional Growth",
      description: "Continuous learning opportunities and exposure to global projects that accelerate your career development."
    },
    {
      icon: Users,
      title: "Collaborative Culture",
      description: "Work with a dynamic team that values talent, creativity, and results-driven performance."
    },
    {
      icon: Award,
      title: "Recognition & Rewards",
      description: "Performance-based incentives and recognition programs that celebrate your achievements."
    },
    {
      icon: Globe,
      title: "Global Exposure",
      description: "Opportunities to work on international projects across India, USA, and Middle East markets."
    },
    {
      icon: Heart,
      title: "Work-Life Balance",
      description: "Flexible working arrangements and comprehensive benefits that support your well-being."
    },
    {
      icon: Lightbulb,
      title: "Innovation Focus",
      description: "Environment that encourages creative thinking and innovative approaches to solving client challenges."
    }
  ];

  const openPositions = [
    {
      title: "Senior Management Consultant",
      location: "Mumbai, India / Remote",
      type: "Full-time",
      department: "Consulting",
      description: "Lead strategic consulting engagements and drive transformation initiatives for Fortune 500 clients."
    },
    {
      title: "Executive Search Specialist",
      location: "New Jersey, USA / Hybrid",
      type: "Full-time",
      department: "Recruitment",
      description: "Identify and place senior executive talent across technology and healthcare industries."
    },
    {
      title: "Business Development Manager",
      location: "Dubai, UAE / On-site",
      type: "Full-time",
      department: "Sales",
      description: "Expand our Middle East operations and build relationships with key enterprise clients."
    },
    {
      title: "Digital Marketing Specialist",
      location: "Remote (Global)",
      type: "Full-time",
      department: "Marketing",
      description: "Drive digital marketing initiatives and enhance EMC's global brand presence across digital channels."
    }
  ];

  const values = [
    "Innovation and continuous learning",
    "Professional development and mentorship",
    "Global collaboration and diversity",
    "Client-focused excellence",
    "Entrepreneurial mindset",
    "Ethical business practices"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Careers
              </span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Join EMC and be part of a dynamic team that values talent, creativity, and results-driven performance. 
              Make a real impact while growing your career on a global stage.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold rounded-full"
            >
              View Open Positions
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Culture Statement */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-xl rounded-3xl bg-gradient-to-br from-purple-50 to-pink-50">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                  Our Culture
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed text-center">
                  At EMC, we foster a culture of innovation, growth, and continuous learning. Our employees thrive 
                  in an environment that encourages professional development, exposure to global projects, and 
                  opportunities to make a real impact. Join EMC to be part of a dynamic team that values talent, 
                  creativity, and results-driven performance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose EMC?
              </h2>
              <p className="text-lg text-gray-600">
                Benefits and opportunities that set us apart
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card key={index} className="border-0 bg-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-bold text-xl mb-3 text-gray-900">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Open Positions
              </h2>
              <p className="text-lg text-gray-600">
                Current opportunities to join our growing team
              </p>
            </div>
            
            <div className="space-y-6">
              {openPositions.map((position, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl">
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      <div className="flex-1">
                        <h3 className="font-bold text-2xl mb-2 text-gray-900">
                          {position.title}
                        </h3>
                        <div className="flex flex-wrap gap-4 mb-4">
                          <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
                            {position.department}
                          </span>
                          <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-semibold">
                            {position.type}
                          </span>
                          <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold">
                            {position.location}
                          </span>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                          {position.description}
                        </p>
                      </div>
                      <div className="mt-6 lg:mt-0 lg:ml-8">
                        <Button 
                          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-full font-semibold"
                        >
                          Apply Now
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What We Value
              </h2>
              <p className="text-lg text-gray-600">
                The principles that guide our workplace culture
              </p>
            </div>
            
            <Card className="border-0 shadow-xl rounded-3xl">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {values.map((value, index) => (
                    <div key={index} className="flex items-center text-gray-700">
                      <div className="w-3 h-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mr-4"></div>
                      <span className="text-lg">{value}</span>
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
              Ready to Join Our Team?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Take the next step in your career and make a real impact with EMC.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full"
              >
                Apply Now
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 text-lg font-semibold rounded-full"
              >
                Contact HR
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;