import accelyaSrc from "@/assets/Accelya.jpg";
import credibancoSrc from "@/assets/credibanco.jpg";
import idiSrc from "@/assets/Fundacion_IDI.jpg";

interface Company {
  name: string;
  logo: string;
}

const companies: Company[] = [
  { name: "Credibanco", logo: credibancoSrc },
  { name: "Accelya", logo: accelyaSrc },
  { name: "Fundación IDI", logo: idiSrc },
];

export default function CompaniesWorkedWith() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-foreground mb-8">
          Companies We've Worked With
        </h2>
        <p className="text-xl leading-relaxed mb-12 mx-auto text-center text-foreground max-w-3xl">
          Based on our team's professional experience, we have had the
          opportunity to collaborate with leading companies in the industry.
          These experiences shape the expertise and quality we bring to our
          clients through our current projects.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-8 items-center">
          {companies.map((company) => (
            <div
              key={company.name}
              className="flex justify-center items-center bg-white p-4 rounded shadow-md hover:shadow-lg transition-shadow"
            >
              <img
                src={company.logo}
                alt={`${company.name} logo`}
                className="h-16 md:h-24 max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
