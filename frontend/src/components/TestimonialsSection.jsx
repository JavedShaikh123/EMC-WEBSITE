import React from 'react';
import { Card, CardContent } from './ui/card';
import { Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "True partnerships are made during the challenging times. EMC-US's investment in making connections, fostering relationships and collaborating with us has had a tremendous impact on our business.",
      author: "Michael Rodriguez, CEO",
      company: "Global Tech Solutions",
      image: "https://images.unsplash.com/photo-1573164574511-73c773193279?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbHN8ZW58MHx8fHwxNzU5NTYzMjkzfDA&ixlib=rb-4.1.0&q=85",
      category: "True partnerships"
    },
    {
      quote: "In addition to offering deep management consulting expertise and evolving strategies, EMC-US is a true partner in helping our organization achieve the right transformation to fuel our success...while reducing our project timeline by 60%.",
      author: "Sarah McKenzie, Chief Strategy Officer",
      company: "Fortune Industries",
      image: "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwzfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbHN8ZW58MHx8fHwxNTk1NjMyOTMfDA&ixlib=rb-4.1.0&q=85",
      category: "We're transformation experts"
    },
    {
      quote: "The consulting team are the known domain experts in management strategy, best practices, and implementation methodology.",
      author: "David Reed, Senior Director – Operations & Strategy",
      company: "Meridian Corporation",
      image: "https://images.unsplash.com/photo-1562935345-5080389daccd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHw0fHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbHN8ZW58MHx8fHwxNzU5NTYzMjkzfDA&ixlib=rb-4.1.0&q=85",
      category: "The known experts"
    },
    {
      quote: "All of their consultants bring real-world, big-company, and global experience, combined with leading practice project management, consulting methodology, and strategic know-how.",
      author: "Jennifer Chen, Global Head of Strategy",
      company: "Innovation Labs",
      image: "https://images.pexels.com/photos/5990271/pexels-photo-5990271.jpeg",
      category: "Management consulting expertise"
    },
    {
      quote: "It's important for us that our partners understand our industry, appreciate the nuances of our culture and are flexible, responsive and accessible.",
      author: "Group Strategic Director",
      company: "Manufacturing Excellence Corp",
      image: "https://images.pexels.com/photos/8353821/pexels-photo-8353821.jpeg",
      category: "We're true consulting partners"
    },
    {
      quote: "Strategy is more than just a plan to execute, and EMC-US is more than a consulting firm.",
      author: "Robert Thompson, Chief Executive Officer",
      company: "Healthcare Innovation Group",
      image: "https://images.pexels.com/photos/34086091/pexels-photo-34086091.jpeg",
      category: "More than consulting"
    },
    {
      quote: "We wanted a partner that could help us think differently – beyond just reducing cost and time to execute. Someone who could give us the competitive edge that will bring us breakthrough results. EMC-US has done just that and we now see them as an extension of our business.",
      author: "Strategic Leadership Team",
      company: "Global Enterprises",
      image: "https://images.unsplash.com/photo-1751135049-8a33b5883817?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBtYW5hZ2VtZW50JTIwY29uc3VsdGluZ3xlbnwwfHx8fDE3NTk1NjMyODd8MA&ixlib=rb-4.1.0&q=85",
      category: "Thinking differently"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What our clients say
            </h2>
            <p className="text-lg text-gray-600">
              Trusted by industry leaders worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 bg-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full overflow-hidden">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.author}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="mb-4">
                        <Quote className="h-8 w-8 text-orange-500 mb-2" />
                        <h3 className="font-bold text-lg text-gray-900 mb-2">
                          {testimonial.category}
                        </h3>
                      </div>
                      
                      <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                        "{testimonial.quote}"
                      </blockquote>
                      
                      <div className="border-t pt-4">
                        <p className="font-semibold text-gray-900">
                          {testimonial.author}
                        </p>
                        <p className="text-orange-600 font-medium">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
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

export default TestimonialsSection;