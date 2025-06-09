"use client";
import { cva } from "class-variance-authority";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import React, { useRef } from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

const DEFAULT_SIZE = 40;
const DEFAULT_MAGNIFICATION = 50;
const DEFAULT_DISTANCE = 140;

const dockVariants = cva(
  "supports-backdrop-blur:bg-white/10 supports-backdrop-blur:dark:bg-black/10 mx-auto flex h-[58px] w-max items-center justify-center gap-2 rounded-2xl border p-2 backdrop-blur-md"
);

const Dock = React.forwardRef((
  {
    className,
    children,
    iconSize = DEFAULT_SIZE,
    iconMagnification = DEFAULT_MAGNIFICATION,
    iconDistance = DEFAULT_DISTANCE,
    direction = "middle",
    ...props
  },
  ref,
) => {
  const mouseX = useMotionValue(Infinity);

  const renderChildren = () => {
    return React.Children.map(children, (child) => {
      if (
        React.isValidElement(child) &&
        (child.type === DockIcon || child.type === DockLink)
      ) {
        return React.cloneElement(child, {
          ...child.props,
          mouseX: mouseX,
          size: iconSize,
          magnification: iconMagnification,
          distance: iconDistance,
        });
      }
      return child;
    });
  };

  return (
    (<motion.div
      ref={ref}
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      {...props}
      className={cn(dockVariants({ className }), {
        "items-start": direction === "top",
        "items-center": direction === "middle",
        "items-end": direction === "bottom",
      })}>
      {renderChildren()}
    </motion.div>)
  );
});

Dock.displayName = "Dock";

const DockIcon = ({
  size = DEFAULT_SIZE,
  magnification = DEFAULT_MAGNIFICATION,
  distance = DEFAULT_DISTANCE,
  mouseX,
  className,
  children,
  ...props
}) => {
  const ref = useRef(null);
  const padding = Math.max(6, size * 0.2);
  const defaultMouseX = useMotionValue(Infinity);

  const distanceCalc = useTransform(mouseX ?? defaultMouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const sizeTransform = useTransform(distanceCalc, [-distance, 0, distance], [size, magnification, size]);

  const scaleSize = useSpring(sizeTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    (<motion.div
      ref={ref}
      style={{ width: scaleSize, height: scaleSize, padding }}
      className={cn(
        "flex aspect-square cursor-pointer items-center justify-center rounded-full",
        className
      )}
      {...props}>
      {children}
    </motion.div>)
  );
};

DockIcon.displayName = "DockIcon";

const DockLink = ({
  href,
  size = DEFAULT_SIZE,
  magnification = DEFAULT_MAGNIFICATION,
  distance = DEFAULT_DISTANCE,
  mouseX,
  className,
  children,
  external = false,
  target,
  rel,
  ...props
}) => {
  const ref = useRef(null);
  const defaultMouseX = useMotionValue(Infinity);

  const distanceCalc = useTransform(mouseX ?? defaultMouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const scaleTransform = useTransform(
    distanceCalc,
    [-distance, 0, distance],
    [1, magnification / size, 1]
  );

  const scale = useSpring(scaleTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  // Determine if link is external
  const isExternal = external || (href && (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')));

  const linkProps = {
    ...props,
    ...(isExternal && {
      target: target || '_blank',
      rel: rel || 'noopener noreferrer'
    })
  };

  const content = (
    <motion.div
      ref={ref}
      style={{ scale }}
      className={cn(
        "cursor-pointer items-center justify-center rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-white/10 hover:text-primary",
        className
      )}>
      {children}
    </motion.div>
  );

  if (isExternal) {
    return (
      <a href={href} {...linkProps}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} {...linkProps}>
      {content}
    </Link>
  );
};

DockLink.displayName = "DockLink";

export { Dock, DockIcon, DockLink, dockVariants };