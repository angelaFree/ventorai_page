"use client";
import Image from "next/image";
import { StarIcon } from "./icons";

interface Testimonial {
  text: string;
  author: string;
  role: string;
  rating: number;
  avatar: string;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
  current: number;
  setCurrent: (val: number) => void;
}

export default function TestimonialsSection({ testimonials, current, setCurrent }: TestimonialsSectionProps) {
  return (
    <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-12">Lo Que Dicen Nuestros Usuarios</h2>
          <div className="relative">
            <div className="bg-white/10 border-0 backdrop-blur-sm rounded-lg shadow-sm">
              <div className="p-12">
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <StarIcon key={i} filled />
                  ))}
                </div>
                <blockquote className="text-2xl md:text-3xl font-medium mb-8 leading-relaxed">
                  &quot;{testimonials[current].text}&quot;
                </blockquote>
                <div className="flex items-center justify-center">
                  <Image
                    width={64}
                    height={64}
                    src={testimonials[current].avatar}
                    alt={testimonials[current].author}
                    className="w-16 h-16 rounded-full mr-4 object-cover"
                  />
                  <div className="text-left">
                    <div className="font-bold text-lg">{testimonials[current].author}</div>
                    <div className="text-gray-300">{testimonials[current].role}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === current ? "bg-orange-400" : "bg-white/30"}`}
                  onClick={() => setCurrent(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
