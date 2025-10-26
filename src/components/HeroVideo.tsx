interface HeroVideoProps {
  videoUrl?: string;
  thumbnailUrl?: string;
}

const HeroVideo = ({ 
  videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ",
  thumbnailUrl = "/placeholder.svg"
}: HeroVideoProps) => {
  return (
    <div className="hero-video-container w-full max-w-4xl mx-auto my-12">
      <div className="relative rounded-xl overflow-hidden shadow-[var(--shadow-card)] border border-border">
        <div className="aspect-video bg-card">
          <iframe
            src={videoUrl}
            className="w-full h-full"
            title="DentaFlow AI Demo Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/80 to-transparent p-4">
          <p className="text-sm text-foreground font-medium">
            Watch DentaFlow in Action (30 seconds)
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroVideo;
