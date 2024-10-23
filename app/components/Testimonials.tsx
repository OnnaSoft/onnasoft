export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-16">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 gap-10">
          <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              "OnnaSoft has been instrumental in implementing cloud
              infrastructure for our services. Their expertise in cloud
              migration and management has significantly improved our operations
              and scalability."
            </p>
            <p className="text-xl font-semibold text-gray-900 dark:text-white">
              Carlos Alberto Navarrete Arias & Nubia Yolanda Muñoz Diaz -
              Founders of EclosionIT
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
