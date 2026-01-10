import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Chess Engine",
    description: "A deep learning-powered chess engine that uses neural network model to predict the best moves in chess games.",
    image: "/projects/chess_game.gif",
    tags: ["Deep Learning", "PyTorch", "Python"],
    demoUrl: "#",
    githubUrl: "https://github.com/RustedSwords/chessengine",
  },
    {
    id: 2,
    title: "RAG-OnePieceWiki",
    description: "A Python-based Retrieval-Augmented Generation (RAG) application built with Ollama and Qdrant.",
    image: "/projects/rag.png",
    tags: ["RAG", "Ollama", "Qdrant", "LLM"],
    demoUrl: "#",
    githubUrl: "https://github.com/RustedSwords/RAG-OnePieceWiki",
    },
    {
    id: 3,
    title: "Atari Breakout",
    description: "A reinforcement learning project implementing a DQN agent that learns to play Atari Breakout.",
    image: "/projects/breakout.gif",
    tags: ["Python", "RL", "DQN", "PyTorch"],
    demoUrl: "#",
    githubUrl: "https://github.com/RustedSwords/Atari-Breakout",
    },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          A selection of projects showcasing my skills in data science, machine
          learning, and AI.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 flex items-center justify-center bg-secondary/5 p-3 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/RustedSwords"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};