import { Plane, Mountain, Trophy, Swords, Crown, BookOpen, PawPrint } from "lucide-react";

const hobbies = [
  { label: "Traveling", icon: Plane },
  { label: "Hiking", icon: Mountain },
  { label: "Pets", icon: PawPrint },
  { label: "Taekwondo", icon: Swords },
  { label: "Chess", icon: Crown },
  { label: "Reading Books", icon: BookOpen },
];


const HobbiesSection = () => {
  return (
    <section id="hobbies" className="py-24 md:py-32 relative z-10">
      <div className="container px-6 md:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="section-title text-foreground mb-4">
            Beyond the Code
          </h2>
          <p className="text-muted-foreground text-lg">
            What keeps me balanced and inspired outside of tech.
          </p>
        </div>

        {/* Moving Train */}
        <div className="relative overflow-hidden w-full">
          <div className="marquee-track">
            {[...hobbies, ...hobbies].map((hobby, index) => {
              const Icon = hobby.icon;
              return (
                <div
                  key={index}
                  className="hobby-pill marquee-item flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-secondary"
                >
                  <Icon className="w-4 h-4 text-primary" />
                  <span className="text-foreground text-sm font-medium">
                    {hobby.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HobbiesSection;
