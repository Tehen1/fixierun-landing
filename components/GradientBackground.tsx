export function GradientBackground({ children, className = '' }: { children: React.ReactNode; className?: string }) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute inset-0 opacity-40"
            style={{
              background: `
                radial-gradient(ellipse at top left, rgba(255, 0, 182, 0.2) 0%, transparent 50%),
                radial-gradient(ellipse at bottom right, rgba(255, 45, 115, 0.1) 0%, transparent 50%)
              `,
            }}
          />
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
        </div>
        {children}
      </div>
    )
  }