import React from 'react';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { ArrowRight, Users, Award, Globe, Target } from 'lucide-react';

const OurTeamPage = () => {
  const teamHighlights = [
    {
      icon: Users,
      title: "Seasoned Professionals",
      description: "Our team of seasoned consultants and recruitment specialists brings a wealth of experience across multiple industries and leadership domains."
    },
    {
      icon: Award,
      title: "Commitment to Excellence",
      description: "Each member is committed to excellence, professionalism, and client satisfaction, ensuring the highest quality of service delivery."
    },
    {
      icon: Globe,
      title: "Global Expertise",
      description: "With experience across India, USA, and Middle East, our team understands diverse markets and cultural nuances."
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "Our collaborative approach ensures we partner with clients to understand their unique challenges and deliver measurable results."
    }
  ];

  const expertise = [
    {
      area: "Executive Search & Recruitment",
      description: "Specialists in identifying and placing top-tier executive talent across industries",
      skills: ["C-Suite Recruitment", "Technical Leadership", "Board Advisory", "Succession Planning"]
    },
    {
      area: "Strategic Consulting",
      description: "Experts in organizational transformation and strategic business planning",
      skills: ["Business Strategy", "Digital Transformation", "Change Management", "Process Optimization"]
    },
    {
      area: "Industry Knowledge",
      description: "Deep expertise across technology, healthcare, finance, and manufacturing sectors",
      skills: ["Technology Innovation", "Healthcare Operations", "Financial Services", "Manufacturing Excellence"]
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
                Our Team
              </span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Meet the experienced professionals who drive excellence in executive management consulting 
              and deliver exceptional results for our clients worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Team Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-xl rounded-3xl bg-gradient-to-br from-purple-50 to-pink-50">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                  Excellence Through Expertise
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed text-center">
                  Our team of seasoned consultants and recruitment specialists brings a wealth of experience 
                  across multiple industries and leadership domains. Each member is committed to excellence, 
                  professionalism, and client satisfaction. With a collaborative approach, EMC's experts partner 
                  with clients to understand their unique challenges, identify talent gaps, and implement strategies 
                  that accelerate growth.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What Sets Our Team Apart
              </h2>
              <p className="text-lg text-gray-600">
                The qualities that make our team exceptional
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamHighlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <Card key={index} className="border-0 bg-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="font-bold text-lg mb-3 text-gray-900">
                        {highlight.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {highlight.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Areas of Expertise */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Areas of Expertise
              </h2>
              <p className="text-lg text-gray-600">
                Comprehensive capabilities across consulting and recruitment
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {expertise.map((area, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl">
                  <CardContent className="p-8">
                    <h3 className="font-bold text-xl mb-4 text-gray-900">
                      {area.area}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {area.description}
                    </p>
                    <div className="space-y-2">
                      {area.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="flex items-center text-gray-700">
                          <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mr-3"></div>
                          <span className="text-sm">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Message */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-xl rounded-3xl">
              <CardContent className="p-12">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                    MJS
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Mohammed Javed Shaikh
                  </h3>
                  <p className="text-purple-600 font-semibold mb-6">
                    Executive Management Consultant
                  </p>
                </div>
                <blockquote className="text-lg text-gray-700 leading-relaxed text-center italic">
                  "Our success is built on the foundation of exceptional people who bring passion, expertise, 
                  and dedication to every client engagement. Together, we create transformative solutions that 
                  drive lasting business impact across India, USA, and Middle East."
                </blockquote>
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
              Work with Our Expert Team
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Partner with experienced professionals who understand your challenges and deliver results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full"
              >
                Contact Our Team
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 text-lg font-semibold rounded-full"
              >
                View Careers
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurTeamPage;