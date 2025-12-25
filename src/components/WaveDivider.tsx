const WaveDivider = () => {
  return (
    <div className="relative w-full overflow-hidden leading-none">
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="w-full h-20"
      >
        <path
          d="M0,0V46.29c47.79,22,103.59,29,158,17C230,49,284,8,339,0s112,18,172,32,121,22,182,10,121-43,182-58,123-6,182,8V0Z"
          fill="url(#grad)"
        />
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2563eb" stopOpacity="0.35" />
            <stop offset="50%" stopColor="#22d3ee" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0.35" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default WaveDivider;
