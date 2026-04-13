import {
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

type ElementTag = "article" | "section" | "div";

type InteractiveCardProps = {
  as?: ElementTag;
  className?: string;
  children: ReactNode;
};

type TiltState = {
  rotateX: number;
  rotateY: number;
  glowX: string;
  glowY: string;
};

type Ripple = {
  id: number;
  x: string;
  y: string;
};

const defaultTilt: TiltState = {
  rotateX: 0,
  rotateY: 0,
  glowX: "50%",
  glowY: "50%",
};

export const InteractiveCard = ({
  as = "article",
  className = "",
  children,
}: InteractiveCardProps) => {
  const [tilt, setTilt] = useState<TiltState>(defaultTilt);
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const touchLockRef = useRef(0);

  const { disableTilt, disableRipples } = useMemo(() => {
    if (typeof window === "undefined") {
      return { disableTilt: false, disableRipples: false };
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const coarsePointer = window.matchMedia("(pointer: coarse)").matches;

    return {
      disableTilt: prefersReducedMotion || coarsePointer,
      disableRipples: prefersReducedMotion,
    };
  }, []);

  const onMove = (event: React.MouseEvent<HTMLElement>) => {
    if (disableTilt) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;

    setTilt({
      rotateX: (0.5 - py) * 8,
      rotateY: (px - 0.5) * 10,
      glowX: `${px * 100}%`,
      glowY: `${py * 100}%`,
    });
  };

  const onLeave = () => setTilt(defaultTilt);

  const addRipple = (
    clientX: number,
    clientY: number,
    element: HTMLElement,
  ) => {
    if (disableRipples) {
      return;
    }

    const rect = element.getBoundingClientRect();
    const x = `${((clientX - rect.left) / rect.width) * 100}%`;
    const y = `${((clientY - rect.top) / rect.height) * 100}%`;
    const id = Date.now() + Math.floor(Math.random() * 1000);

    setRipples((prev) => [...prev, { id, x, y }]);
    window.setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== id));
    }, 1350);
  };

  const onCardClick = (event: React.MouseEvent<HTMLElement>) => {
    if (Date.now() - touchLockRef.current < 450) {
      return;
    }
    addRipple(event.clientX, event.clientY, event.currentTarget);
  };

  const onCardTouchStart = (event: React.TouchEvent<HTMLElement>) => {
    const touch = event.changedTouches[0];
    if (!touch) {
      return;
    }
    touchLockRef.current = Date.now();
    addRipple(touch.clientX, touch.clientY, event.currentTarget);
  };

  const style = {
    "--card-rx": `${tilt.rotateX}deg`,
    "--card-ry": `${tilt.rotateY}deg`,
    "--glow-x": tilt.glowX,
    "--glow-y": tilt.glowY,
  } as CSSProperties;

  const baseClass = `glass-panel interactive-card ${className}`.trim();

  if (as === "section") {
    return (
      <section
        className={baseClass}
        style={style}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        onClick={onCardClick}
        onTouchStart={onCardTouchStart}
      >
        <div className="ripple-layer">
          {ripples.map((ripple) => (
            <span
              key={ripple.id}
              className="interactive-ripple"
              style={
                {
                  "--ripple-x": ripple.x,
                  "--ripple-y": ripple.y,
                } as CSSProperties
              }
            />
          ))}
        </div>
        {children}
      </section>
    );
  }

  if (as === "div") {
    return (
      <div
        className={baseClass}
        style={style}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        onClick={onCardClick}
        onTouchStart={onCardTouchStart}
      >
        <div className="ripple-layer">
          {ripples.map((ripple) => (
            <span
              key={ripple.id}
              className="interactive-ripple"
              style={
                {
                  "--ripple-x": ripple.x,
                  "--ripple-y": ripple.y,
                } as CSSProperties
              }
            />
          ))}
        </div>
        {children}
      </div>
    );
  }

  return (
    <article
      className={baseClass}
      style={style}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={onCardClick}
      onTouchStart={onCardTouchStart}
    >
      <div className="ripple-layer">
        {ripples.map((ripple) => (
          <span
            key={ripple.id}
            className="interactive-ripple"
            style={
              {
                "--ripple-x": ripple.x,
                "--ripple-y": ripple.y,
              } as CSSProperties
            }
          />
        ))}
      </div>
      {children}
    </article>
  );
};
