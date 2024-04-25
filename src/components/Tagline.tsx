export type TaglineProps = {
  className?: string;
  children: React.ReactNode;
};

export const Tagline = ({ className, children }: TaglineProps) => {
  return (
    <div className={`tagline flex items-center ${className || ""}`}>
      {children}
    </div>
  );
};
