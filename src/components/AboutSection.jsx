import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Data Scientist with a Focus on Machine Learning & AI
            </h3>

            <p className="text-muted-foreground">
              I’m a Data Scientist specializing in machine learning and AI. I work across the full ML lifecycle. From data
              exploration and feature engineering to model development, evaluation, and
              deployment with an emphasis on robustness, interpretability, and real-world
              impact.
            </p>

            <p className="text-muted-foreground">
              My work also includes large language models (LLMs), where I focus on prompt
              engineering, fine-tuning, evaluation, and integrating LLMs into end-to-end AI
              applications. I’m particularly interested in combining LLMs with traditional
              machine learning approaches to build practical, scalable, and reliable AI
              systems.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="https://www.overleaf.com/read/rwpdfmxgjypt#73fcc0"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Machine Learning</h4>
                  <p className="text-muted-foreground">
                    Building, training and evaluating predictive models using supervised 
                    and unsupervised learning techniques for real-world applications.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Data Science</h4>
                  <p className="text-muted-foreground">
                    Extracting insights from data through exploration, statistical 
                    analysis, and feature engineering to drive informed decisions.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">LLM Systems</h4>
                  <p className="text-muted-foreground">
                    Working with large language models for prompt engineering, fine-tuning, 
                    evaluation, and building LLM-powered applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};