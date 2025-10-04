import React from 'react';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { ArrowRight, Target, Users, Globe, Award } from 'lucide-react';

const OurStoryPage = () => {
  const milestones = [
    {
      year: "2003",
      title: "Foundation",
      description: "EMC was founded with a mission to help organizations achieve their business objectives through exceptional talent and strategic advisory services."
    },
    {
      year: "2010",
      title: "Global Expansion",
      description: "Extended operations across India, USA, and Middle East, establishing a truly global presence in executive management consulting."
    },
    {
      year: "2018",
      title: "Digital Innovation",
      description: "Pioneered digital transformation consulting, helping clients navigate the evolving technological landscape."
    },
    {
      year: "2024",
      title: "Industry Leadership",
      description: "Recognized as a leading executive management consultant with over 250 successful transformations across multiple industries."
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We are committed to delivering exceptional results that exceed client expectations and drive measurable business impact."
    },
    {
      icon: Users,
      title: "Partnership",
      description: "We build lasting relationships with our clients, working as trusted partners to achieve their strategic objectives."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Our international presence enables us to serve clients across India, USA, and Middle East with local expertise."
    },
    {
      icon: Award,
      title: "Integrity",
      description: "We maintain the highest standards of professionalism, ethics, and transparency in all our client engagements."
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
                Our Story
              </span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Two decades of excellence in executive management consulting, 
              driving transformation and success across global markets.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-xl rounded-3xl bg-gradient-to-br from-purple-50 to-pink-50">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed text-center">
                  Executive Management Consultant (EMC) was founded with a clear mission: to help organizations 
                  achieve their business objectives by providing exceptional talent and strategic advisory services. 
                  With over 20 years of experience in global recruitment and consulting, EMC specializes in connecting 
                  leading companies with highly skilled professionals in technology, healthcare, finance, and more. 
                  We combine industry expertise with a deep understanding of client needs, delivering solutions that 
                  drive measurable results and long-term success.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Journey
              </h2>
              <p className="text-lg text-gray-600">
                Key milestones in our growth and evolution
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {milestones.map((milestone, index) => (
                <Card key={index} className="border-0 bg-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                        {milestone.year}
                      </div>
                      <h3 className="font-bold text-xl mb-3 text-gray-900">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {milestone.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Values
              </h2>
              <p className="text-lg text-gray-600">
                The principles that guide everything we do
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl text-center">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="font-bold text-xl mb-3 text-gray-900">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Partner with EMC?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Discover how our experience and expertise can help transform your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full"
              >
                Contact Us
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 text-lg font-semibold rounded-full"
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurStoryPage;