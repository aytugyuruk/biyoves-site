interface MarqueeProps {
  items: string[];
  speed?: number;
  direction?: "left" | "right";
  className?: string;
}

const Marquee = ({ items, speed = 40, direction = "left", className = "" }: MarqueeProps) => {
  // Duplicate items multiple times for seamless infinite scroll
  // We need enough duplicates to ensure smooth looping
  const duplicatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="flex w-full">
        <div
          className="flex animate-scroll gap-12"
          style={{
            animationDirection: direction === "right" ? "reverse" : "normal",
            animationDuration: `${speed}s`,
            animationIterationCount: "infinite",
          }}
        >
          {duplicatedItems.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 whitespace-nowrap text-sm font-medium text-muted-foreground px-4"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;

