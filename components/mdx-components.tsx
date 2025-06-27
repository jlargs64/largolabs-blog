import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import Image from "next/image";

export const MDXComponents = {
  h1: ({ className, ...props }: { className?: string; children: ReactNode }) => (
    <h1
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-6",
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: { className?: string; children: ReactNode }) => (
    <h2
      className={cn(
        "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mt-10 mb-4",
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: { className?: string; children: ReactNode }) => (
    <h3
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight mt-8 mb-4",
        className
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }: { className?: string; children: ReactNode }) => (
    <h4
      className={cn(
        "scroll-m-20 text-xl font-semibold tracking-tight mt-6 mb-3",
        className
      )}
      {...props}
    />
  ),
  h5: ({ className, ...props }: { className?: string; children: ReactNode }) => (
    <h5
      className={cn(
        "scroll-m-20 text-lg font-semibold tracking-tight mt-4 mb-2",
        className
      )}
      {...props}
    />
  ),
  h6: ({ className, ...props }: { className?: string; children: ReactNode }) => (
    <h6
      className={cn(
        "scroll-m-20 text-base font-semibold tracking-tight mt-4 mb-2",
        className
      )}
      {...props}
    />
  ),
  p: ({ className, ...props }: { className?: string; children: ReactNode }) => (
    <p
      className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
      {...props}
    />
  ),
  ul: ({ className, ...props }: { className?: string; children: ReactNode }) => (
    <ul className={cn("my-6 ml-6 list-disc", className)} {...props} />
  ),
  ol: ({ className, ...props }: { className?: string; children: ReactNode }) => (
    <ol className={cn("my-6 ml-6 list-decimal", className)} {...props} />
  ),
  li: ({ className, ...props }: { className?: string; children: ReactNode }) => (
    <li className={cn("mt-2", className)} {...props} />
  ),
  blockquote: ({ className, ...props }: { className?: string; children: ReactNode }) => (
    <blockquote
      className={cn(
        "mt-6 border-l-2 pl-6 italic text-muted-foreground",
        className
      )}
      {...props}
    />
  ),
  img: ({
    className,
    alt,
    src,
    ...props
  }: {
    className?: string;
    alt?: string;
    src?: string;
    width?: number;
    height?: number;
  }) => (
    <Image
      className={cn("rounded-md border", className)}
      alt={alt || ""}
      src={src || ""}
      width={props.width || 800}
      height={props.height || 400}
      {...props}
    />
  ),
  hr: ({ ...props }) => <hr className="my-4 md:my-8" {...props} />,
  table: ({ className, ...props }: { className?: string; children: ReactNode }) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className={cn("w-full", className)} {...props} />
    </div>
  ),
  tr: ({ className, ...props }: { className?: string; children: ReactNode }) => (
    <tr
      className={cn("m-0 border-t p-0 even:bg-muted", className)}
      {...props}
    />
  ),
  th: ({ className, ...props }: { className?: string; children: ReactNode }) => (
    <th
      className={cn(
        "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: { className?: string; children: ReactNode }) => (
    <td
      className={cn(
        "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  pre: ({ className, ...props }: { className?: string; children: ReactNode }) => (
    <pre
      className={cn(
        "mb-4 mt-6 overflow-x-auto rounded-lg border bg-muted px-4 py-4",
        className
      )}
      {...props}
    />
  ),
  code: ({ className, ...props }: { className?: string; children: ReactNode }) => (
    <code
      className={cn(
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-medium",
        className
      )}
      {...props}
    />
  ),
  a: ({ className, ...props }: { className?: string; children: ReactNode }) => (
    <a
      className={cn(
        "font-medium text-primary underline underline-offset-4 hover:no-underline",
        className
      )}
      {...props}
    />
  ),
  strong: ({ className, ...props }: { className?: string; children: ReactNode }) => (
    <strong className={cn("font-semibold", className)} {...props} />
  ),
  em: ({ className, ...props }: { className?: string; children: ReactNode }) => (
    <em className={cn("italic", className)} {...props} />
  ),
};