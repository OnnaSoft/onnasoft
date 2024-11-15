import { Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-foreground mb-12">
          What Our Clients Say
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-background p-8 rounded-lg shadow-md">
            <Quote className="h-8 w-8 text-orange-500 dark:text-orange-400 mb-4" />
            <p className="text-xl leading-relaxed mb-6 break-words text-rendering-optimizelegibility isolate break-word antialiased text-foreground">
              OnnaSoft has been instrumental in implementing cloud
              infrastructure for our services. Their expertise in cloud
              migration and management has significantly improved our operations
              and scalability.
            </p>
            <p className="text-lg font-semibold text-foreground">
              Carlos Alberto Navarrete Arias & Nubia Yolanda Muñoz Diaz
            </p>
            <p className="text-base text-muted-foreground">
              Founders of EclosionIT
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
