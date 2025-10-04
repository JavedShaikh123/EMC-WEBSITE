import React from 'react';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { ArrowRight, Calendar, ExternalLink, Award, Newspaper, Users, TrendingUp } from 'lucide-react';

const NewsPressPage = () => {
  const newsItems = [
    {
      type: "Award",
      date: "March 2024",
      title: "EMC Named Leader in Management Consulting Excellence 2024",
      excerpt: "Executive Management Consultant (EMC) has been recognized as a leading provider of strategic consulting services by the International Business Excellence Awards.",
      source: "Business Excellence Magazine",
      image: "https://images.pexels.com/photos/5990271/pexels-photo-5990271.jpeg",
      featured: true
    },
    {
      type: "Press Release",
      date: "February 2024",
      title: "EMC Expands Digital Transformation Services Across Middle East",
      excerpt: "Following successful client engagements in India and USA, EMC announces enhanced digital transformation consulting capabilities in the Middle East region.",
      source: "EMC Press Release",
      image: "https://images.pexels.com/photos/8353821/pexels-photo-8353821.jpeg",
      featured: true
    },
    {
      type: "Media Coverage",
      date: "January 2024",
      title: "The Future of Executive Leadership: Insights from EMC",
      excerpt: "Mohammed Javed Shaikh shares insights on emerging leadership trends and the evolving role of executive management in today's business landscape.",
      source: "Executive Leadership Today",
      image: "https://images.pexels.com/photos/34086091/pexels-photo-34086091.jpeg",
      featured: false
    },
    {
      type: "Industry Recognition",
      date: "December 2023",
      title: "EMC's Innovation in Healthcare Consulting Recognized",
      excerpt: "Healthcare Technology Review highlights EMC's successful implementation of digital health transformation initiatives for major hospital networks.",
      source: "Healthcare Technology Review",
      image: "https://images.unsplash.com/photo-1573164574511-73c773193279?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbHN8ZW58MHx8fHwxNzU5NTYzMjkzfDA&ixlib=rb-4.1.0&q=85",
      featured: false
    },
    {
      type: "Press Release",
      date: "November 2023",
      title: "EMC Achieves 250+ Successful Client Transformations Milestone",
      excerpt: "Reaching a significant milestone in our journey, EMC celebrates successful completion of over 250 strategic consulting engagements worldwide.",
      source: "EMC Press Release",
      image: "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwzfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbHN8ZW58MHx8fHwxNzU5NTYzMjkzfDA&ixlib=rb-4.1.0&q=85",
      featured: false
    },
    {
      type: "Media Coverage",
      date: "October 2023",
      title: "Technology Transformation: EMC's Approach to Digital Strategy",
      excerpt: "Tech Innovation Weekly features EMC's methodology for helping technology companies navigate digital transformation challenges.",
      source: "Tech Innovation Weekly",
      image: "https://images.unsplash.com/photo-1562935345-5080389daccd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHw0fHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbHN8ZW58MHx8fHwxNzU5NTYzMjkzfDA&ixlib=rb-4.1.0&q=85",
      featured: false
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Consistently recognized for excellence in management consulting and strategic advisory services"
    },
    {
      icon: Users,
      title: "Client Success",
      description: "250+ successful transformations across technology, healthcare, finance, and manufacturing sectors"
    },
    {
      icon: TrendingUp,
      title: "Innovation Leadership",
      description: "Pioneering innovative approaches to digital transformation and organizational change management"
    },
    {
      icon: Newspaper,
      title: "Media Presence",
      description: "Featured insights and thought leadership in leading business and technology publications"
    }
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case 'Award': return 'bg-yellow-100 text-yellow-800';
      case 'Press Release': return 'bg-blue-100 text-blue-800';
      case 'Media Coverage': return 'bg-green-100 text-green-800';
      case 'Industry Recognition': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                News & Press
              </span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Stay updated with EMC's latest achievements, industry insights, and recognition 
              from leading business and technology publications worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Recognition Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-xl rounded-3xl bg-gradient-to-br from-purple-50 to-pink-50">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                  Industry Recognition
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed text-center">
                  EMC has been recognized for excellence in talent acquisition and strategic consulting by industry 
                  publications and professional organizations. Our recent initiatives, successful placements, and 
                  innovative approaches have been featured in leading business and technology media, showcasing our 
                  commitment to delivering value to clients worldwide.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Achievements
              </h2>
              <p className="text-lg text-gray-600">
                Key milestones and recognition highlights
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <Card key={index} className="border-0 bg-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl text-center">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="font-bold text-lg mb-3 text-gray-900">
                        {achievement.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {achievement.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Latest News
              </h2>
              <p className="text-lg text-gray-600">
                Recent press coverage and company announcements
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {newsItems.map((item, index) => (
                <Card key={index} className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden ${
                  item.featured ? 'lg:col-span-2' : ''
                }`}>
                  <div className={`relative ${
                    item.featured ? 'h-64' : 'h-48'
                  }`}>
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <Badge className={`${getTypeColor(item.type)} border-0`}>
                        {item.type}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center text-white/80 text-sm mb-2">
                        <Calendar className="h-4 w-4 mr-2" />
                        {item.date}
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className={`font-bold mb-3 text-gray-900 ${
                      item.featured ? 'text-2xl' : 'text-xl'
                    }`}>
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {item.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500 font-medium">
                        {item.source}
                      </span>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-purple-600 hover:text-purple-700 hover:bg-purple-50"
                      >
                        Read More
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Media Contact */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-xl rounded-3xl">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Media Inquiries
                </h2>
                <p className="text-lg text-gray-700 mb-8">
                  For press inquiries, interview requests, or additional information about EMC, 
                  please contact our media relations team.
                </p>
                <div className="space-y-4 mb-8">
                  <p className="text-gray-600">
                    <strong>Email:</strong> media@emcindia.in
                  </p>
                  <p className="text-gray-600">
                    <strong>Phone:</strong> +91 9223308247 (India) | +1 856 762 0564 (USA)
                  </p>
                </div>
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold rounded-full"
                >
                  Contact Media Team
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
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
              Stay Updated with EMC
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Subscribe to our newsletter for the latest news, insights, and industry updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full"
              >
                Subscribe Newsletter
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 text-lg font-semibold rounded-full"
              >
                Follow Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsPressPage;