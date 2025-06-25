'use client';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { usePathname } from 'next/navigation';

export default function LayoutBreadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);
  segments.unshift('Largo Labs');

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {segments.map((segment, index) => {
          const href = '/' + segments.slice(1, index + 1).join('/');
          const isLast = index === segments.length - 1;
          return (
            <>
              <BreadcrumbItem
                key={href}
                className={isLast ? 'hidden md:block' : ''}
              >
                <BreadcrumbLink
                  href={isLast ? pathname : href}
                  className={isLast ? 'text-muted-foreground' : ''}
                >
                  {segment.charAt(0).toUpperCase() + segment.slice(1)}
                </BreadcrumbLink>
              </BreadcrumbItem>
              {!isLast && <BreadcrumbSeparator className="hidden md:block" />}
            </>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
