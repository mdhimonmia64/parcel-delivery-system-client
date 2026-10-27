import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  ArrowRight,
  Building2,
  MapPin,
  PackageCheck,
  Wallet,
} from "lucide-react";

const services = [
  {
    id: "01",
    title: "Booking Pick & Drop",
    description:
      "Schedule a pickup from your doorstep and let us deliver your parcels safely to the right destination.",
    icon: PackageCheck,
    color: "text-primary",
    bg: "bg-primary/10",
    delay: 0,
    tag: "Easy Booking",
  },
  {
    id: "02",
    title: "Cash on Delivery",
    description:
      "Give your customers more confidence with convenient cash collection when their parcels arrive.",
    icon: Wallet,
    color: "text-success",
    bg: "bg-success/10",
    delay: 100,
    tag: "Secure Payment",
  },
  {
    id: "03",
    title: "Delivery Hub",
    description:
      "Enjoy efficient parcel sorting, organized distribution, and reliable delivery across our network.",
    icon: MapPin,
    color: "text-secondary",
    bg: "bg-secondary/10",
    delay: 200,
    tag: "Wide Coverage",
  },
  {
    id: "04",
    title: "SME & Corporate",
    description:
      "Simplify business logistics with scalable delivery solutions designed for growing companies.",
    icon: Building2,
    color: "text-warning",
    bg: "bg-warning/10",
    delay: 300,
    tag: "Business Solutions",
  },
];

const WorksCart = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });

    AOS.refresh();
  }, []);

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-base-200/40 px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-primary/10 blur-[100px]" />

      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-secondary/10 blur-[110px]" />

      <div className="relative mx-auto max-w-7xl">
        <div data-aos="fade-up" className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="mt-5 text-3xl leading-tight font-extrabold tracking-tight text-base-content sm:text-4xl lg:text-5xl">
            How It <span className="text-primary">Works</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-base-content/65 sm:text-lg">
            From booking to doorstep delivery, we make every step simple,
            secure, and hassle-free.
          </p>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-primary to-secondary" />
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
                <div key={service.id} className="aura text-indigo-500 bg-lime-400">
              <article
                key={service.id}
                data-aos={index % 2 === 0 ? "fade-up" : "fade-down"}
                data-aos-delay={service.delay}
                className="service-card group relative flex h-full flex-col overflow-hidden rounded-3xl border border-base-300/70 bg-base-100 p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 sm:p-7 "
              >
                <div className="absolute left-0 top-0 h-1 w-0 bg-gradient-to-r from-primary to-secondary transition-all duration-500 group-hover:w-full" />

                <div className="flex items-start justify-between">
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-2xl ${service.bg} ${service.color} transition-all duration-500 group-hover:rotate-[-6deg] group-hover:scale-110`}
                  >
                    <Icon size={30} strokeWidth={1.8} />
                  </div>

                  <span className="text-3xl font-black tracking-tight text-base-content/10 transition-colors duration-300 group-hover:text-primary/30">
                    {service.id}
                  </span>
                </div>

                <div className="mt-7 flex flex-1 flex-col">
                  <span className="mb-3 w-fit rounded-full bg-base-200 px-3 py-1 text-xs font-semibold text-base-content/60">
                    {service.tag}
                  </span>

                  <h3 className="text-xl font-bold tracking-tight text-base-content transition-colors duration-300 group-hover:text-primary">
                    {service.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-7 text-base-content/65">
                    {service.description}
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-base-300/70 pt-5">
                    <span className="text-sm font-semibold text-base-content/70 transition-colors group-hover:text-primary">
                      Learn more
                    </span>

                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-base-200 text-base-content/70 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-primary group-hover:text-primary-content">
                      <ArrowRight size={17} />
                    </span>
                  </div>
                </div>
              </article>
              </div>
            );
          })}
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="mt-12 flex flex-col items-center justify-between gap-5 rounded-3xl border border-base-300/60 bg-base-100 p-7 shadow-sm sm:flex-row sm:p-9"
        >
          <div>
            <h3 className="text-xl font-bold text-base-content sm:text-2xl">
              Ready to send your first parcel?
            </h3>

            <p className="mt-2 text-sm leading-6 text-base-content/60">
              Book your delivery in just a few simple steps.
            </p>
          </div>

          <a
            href="/send-parcel"
            className="btn btn-primary rounded-xl px-6 shadow-lg shadow-primary/20 transition duration-300 hover:-translate-y-1"
          >
            Book a Delivery
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default WorksCart;
