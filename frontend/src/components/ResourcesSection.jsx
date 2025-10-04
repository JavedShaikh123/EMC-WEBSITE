import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ArrowRight, Clock, User } from 'lucide-react';

const ResourcesSection = () => {
  const resources = [
    {
      type: 'Article',
      tag: 'Recruitment',
      title: 'Global Recruitment: Navigating the Talent Crunch Across US, India, and the Middle East',
      image: 'https://images.unsplash.com/photo-1573164574511-73c773193279?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbHN8ZW58MHx8fHwxNzU5NTYzMjkzfDA&ixlib=rb-4.1.0&q=85',
      readTime: '6 min read'
    },
    {
      type: 'Article', 
      tag: 'Innovation',
      title: 'Turning resistance into readiness: A consultative approach to change management',
      image: 'https://images.unsplash.com/photo-1573164574572-cb89e39749b4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwzfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbHN8ZW58MHx8fHwxNzU5NTYzMjkzfDA&ixlib=rb-4.1.0&q=85',
      readTime: '7 min read'
    },
    {
      type: 'Article',
      tag: 'Leadership',
      title: '5 ways to prepare for the future of executive leadership',
      image: 'https://images.unsplash.com/photo-1562935345-5080389daccd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHw0fHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbHN8ZW58MHx8fHwxNzU5NTYzMjkzfDA&ixlib=rb-4.1.0&q=85',
      readTime: '6 min read'
    },
    {
      type: 'Case study',
      tag: 'Transformation',
      title: 'How Fortune 500 company achieved 40% efficiency gain through strategic consulting',
      image: 'https://images.pexels.com/photos/5990271/pexels-photo-5990271.jpeg',
      readTime: '10 min read'
    },
    {
      type: 'Case study',
      tag: 'Operations',
      title: 'Converting challenges to opportunities: Boosting operational excellence',
      image: 'https://images.pexels.com/photos/8353821/pexels-photo-8353821.jpeg',
      readTime: '8 min read'
    },
    {
      type: 'Press & media',
      tag: 'Recognition',
      title: 'EMC-US named a Leader in Management Consulting Excellence 2025',
      image: 'https://images.pexels.com/photos/34086091/pexels-photo-34086091.jpeg',
      readTime: '3 min read'
    },
    {
      type: 'Article',
      tag: 'Growth',
      title: '5 ways companies can stand out in competitive markets',
      image: 'https://images.unsplash.com/photo-1750768145390-f0ad18d3e65b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwzfHxleGVjdXRpdmUlMjBtYW5hZ2VtZW50JTIwY29uc3VsdGluZ3xlbnwwfHx8fDE3NTk1NjMyODd8MA&ixlib=rb-4.1.0&q=85',
      readTime: '6 min read'
    },
    {
      type: 'Article',
      tag: 'Leadership',
      title: 'Power & partnership: How top executives drive success',
      image: 'https://images.unsplash.com/photo-1573164574511-73c773193279?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbHN8ZW58MHx8fHwxNzU5NTYzMjkzfDA&ixlib=rb-4.1.0&q=85',
      readTime: '5 min read'
    },
    {
      type: 'Article',
      tag: 'Strategy',
      title: 'Future-ready or falling behind? Your guide to strategic transformation',
      image: 'https://images.unsplash.com/photo-1573164574572-cb89e39749b4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwzfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbHN8ZW58MHx8fHwxNzU5NTYzMjkzfDA&ixlib=rb-4.1.0&q=85',
      readTime: '9 min read'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Resources
            </h2>
            <p className="text-lg text-gray-600">
              Insights, strategies, and case studies to drive your business forward
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white rounded-2xl overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={resource.image} 
                    alt={resource.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-gray-800 hover:bg-white">
                      {resource.type}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="outline" className="bg-pink-600 text-white border-pink-600">
                      {resource.tag}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3 text-gray-900 line-clamp-2 group-hover:text-purple-600 transition-colors">
                    {resource.title}
                  </h3>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {resource.readTime}
                    </div>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;