import { motion } from "framer-motion";
import { Check, RefreshCw, MessageSquare, Zap } from "lucide-react";
import pricingImg from "@/assets/pricing-card.png";

const features = [
  "No contracts or commitments",
  "Pause or cancel anytime",
  "Multiple Brands",
  "Unlimited requests",
  "Avg 48 hour turnaround",
  "Framer development",
];

const singleFeatures = [
  "Clearly defined scope",
  "Fixed timeline",
  "3 revision rounds",
  "Milestone updates",
];

const PricingSection = () => {
  return (
    <section
      id="pricing"
      className="py-16 sm:py-20 lg:py-24 flex justify-center"
    >
      <div className="max-w-6xl mx-auto w-full px-4 sm:px-6">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 sm:mb-16 gap-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight"
          >
            <span className="text-muted-foreground">Simple pricing.</span>
            <br />
            Standout designs.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-sm"
          >
            <p className="font-semibold mb-1">Clear costs, no hidden fees.</p>
            <p className="text-sm text-muted-foreground">
              Select from monthly subscriptions or individual project rates.
            </p>
          </motion.div>
        </div>

        {/* How it works */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16"
        >
          {[
            {
              icon: RefreshCw,
              title: "Subscribe",
              desc: "Subscribe via Stripe & start requesting through our board.",
            },
            {
              icon: MessageSquare,
              title: "Request",
              desc: "Request any service we offer from branding to web design.",
            },
            {
              icon: Zap,
              title: "Receive",
              desc: "Receive your design within 48 hours on average.",
            },
          ].map((step) => (
            <div key={step.title} className="flex gap-3">
              <step.icon className="w-5 h-5 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-1">{step.title}</h4>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Pricing Grid */}
        <div className="grid lg:grid-cols-2 gap-6">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {/* Image Card */}
            <div className="rounded-2xl overflow-hidden shadow-md">
              <img
                src={pricingImg}
                alt="Pricing"
                className="w-full h-full object-cover min-h-[200px] sm:min-h-[240px]"
              />
            </div>

            {/* Hire Card */}
            <div className="bg-card border border-border rounded-2xl p-5 sm:p-6 flex flex-col justify-center shadow-sm">
              <div className="inline-flex items-center gap-2 mb-3 bg-muted px-3 py-1 rounded-xl w-fit">
                <div className="relative flex items-center justify-center w-2 h-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-black opacity-75 animate-ping"></span>
                <span className="relative inline-flex rounded-full h-1 w-1 bg-black"></span>
              </div>
                <span className="text-xs text-muted-foreground">
                  Slots available
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold mb-2">
                Hire me today
              </h3>

              <p className="text-sm text-muted-foreground">
                Skip the agency markup and work directly with an experienced
                designer.
              </p>
            </div>
          </motion.div>

          {/* RIGHT SIDE (Unlimited Plan) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-1">
              Unlimited Design
            </h3>

            <p className="text-sm text-muted-foreground mb-6">
              One flat monthly rate for unlimited design requests. Ideal for
              ongoing design requirements.
            </p>

            <div className="border-b border-border mb-6"></div>

            <p className="text-3xl sm:text-4xl font-bold mb-6">
              $8,000
              <span className="text-sm sm:text-base font-normal text-muted-foreground">
                {" "}
                / month
              </span>
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mb-6">
              {features.map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 flex-shrink-0" />
                  <span>{f}</span>
                </div>
              ))}
            </div>

            <a href="mailto:crew.gunmetal@gmail.com"><button className="w-full sm:w-auto px-6 py-2.5 bg-foreground text-primary-foreground rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
              Get Started
            </button></a>
          </motion.div>
        </div>

        {/* Bottom Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 rounded-2xl bg-black text-white p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6 shadow-lg"
        >
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-1">
              Single Project
            </h3>
            <p className="text-sm opacity-70">
              Comprehensive design services for any project scope.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            {singleFeatures.map((f) => (
              <div key={f} className="flex items-center gap-2 text-sm">
                <Check className="w-4 h-4 flex-shrink-0" />
                <span>{f}</span>
              </div>
            ))}
          </div>

          <a href="mailto:crew.gunmetal@gmail.com"><button className="w-full sm:w-auto px-6 py-2.5 bg-white text-black rounded-full text-sm font-medium hover:opacity-90 transition-opacity whitespace-nowrap">
            Get quote
          </button></a>
        </motion.div>

      </div>
    </section>
  );
};

export default PricingSection;