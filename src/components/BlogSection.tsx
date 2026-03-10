import { motion } from "framer-motion";
import { DribbbleIcon } from "lucide-react";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

const blogs = [
  {
    img: blog1,
    title: "How designers and developers can actually collaborate.",
    date: "Mar 6, 2025",
    excerpt:
      "Discover proven strategies to bridge the designer-developer gap. Learn how top teams eliminate handoff friction and ship better products faster.",
    link: "https://medium.com/@sakaethram.ma04",
    featured: true,
  },
  {
    img: blog2,
    title: "Why faster isn't always better.",
    date: "Apr 22, 2025",
    excerpt:
      "Color drives 90% of snap judgments online. Master digital color psychology, accessibility, and systems that influence user behavior and boost conversions.",
    link: "https://medium.com/@sakaethram.ma04",
    featured: true,
  },
  {
    img: blog3,
    title: "Designing for human connection.",
    date: "Apr 1, 2025",
    excerpt:
      "Users judge websites in 50 milliseconds. Understand the neuroscience behind snap judgments and engineer better first impressions that convert visitors into customers.",
    link: "https://medium.com/@sakaethram.ma04",
    featured: true,
  },
];

const BlogSection = () => {
  return (
    <section
      id="blog"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 border-t border-border/30 flex justify-center"
    >
      <div className="max-w-5xl w-full mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-lg"
          >
            <span className="text-muted-foreground">From our blog,</span>
            <br />
            design insights.
          </motion.h2>

          <a
            href="https://dribbble.com/crew-gunmetal"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-1 text-sm font-medium"
          >
            <DribbbleIcon className="w-4 h-4" />
            <span className="relative">
              Design With Us
              <span className="absolute left-0 -bottom-1 h-[1px] w-full origin-left scale-x-0 bg-current transition-transform duration-300 group-hover:scale-x-100"></span>
            </span>
          </a>
        </div>

        {/* Featured Post */}
        <a
          href={blogs[0].link}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group grid md:grid-cols-2 rounded-2xl overflow-hidden bg-card border border-border mb-6 cursor-pointer hover:border-primary/20 transition"
          >
            <div className="overflow-hidden">
              <img
                src={blogs[0].img}
                alt={blogs[0].title}
                className="w-full h-52 sm:h-64 md:h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              />
            </div>

            <div className="p-5 sm:p-6 lg:p-8 flex flex-col justify-center">
              <h3 className="text-lg sm:text-xl font-bold mb-2">
                {blogs[0].title}
              </h3>

              <p className="text-xs text-muted-foreground mb-3">
                {blogs[0].date} · By ZREX Archives
              </p>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {blogs[0].excerpt}
              </p>
            </div>
          </motion.div>
        </a>

        {/* Other Posts */}
        <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
          {blogs.slice(1).map((blog, i) => (
            <a
              key={blog.title}
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group rounded-2xl overflow-hidden bg-card border border-border cursor-pointer hover:border-primary/20 transition"
              >
                <div className="overflow-hidden">
                  <img
                    src={blog.img}
                    alt={blog.title}
                    className="w-full h-40 sm:h-44 md:h-48 object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                </div>

                <div className="p-4 sm:p-5">
                  <h3 className="font-semibold text-sm sm:text-base mb-1">
                    {blog.title}
                  </h3>

                  <p className="text-xs text-muted-foreground">
                    {blog.date} · By ZREX Archives
                  </p>
                </div>
              </motion.div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;