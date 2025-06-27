'use client';
import { SearchForm } from '@/components/search-form';
import { Collapsible } from '@/components/ui/collapsible';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from '@/components/ui/sidebar';
import { FlaskConical } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as React from 'react';
import { ThemeToggle } from './theme-toggle';

const data = {
  navMain: [
    {
      title: 'Lobby',
      url: '/',
    },
    {
      title: 'About Me',
      url: '/about',
    },
    {
      title: 'CV Lab Report',
      url: '/resume',
    },

    {
      title: 'Notebook',
      url: '/blog',
    },
    {
      title: 'Lab Exhibits',
      url: '/portfolio',
    },
    {
      title: 'Collaboration Station',
      url: '/contact',
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <FlaskConical className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-medium">Largo Labs</span>
                  <span className="">v1.0.0</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <ThemeToggle />
        </SidebarGroup>
        <SidebarGroup>
          <SidebarMenu>
            {data.navMain.map((item, index) => (
              <Collapsible
                key={item.title}
                defaultOpen={index === 1}
                className="group/collapsible"
              >
                <SidebarMenuItem>
                  <Link href={item.url}>
                    <SidebarMenuButton isActive={item.url == pathname}>
                      {item.title}
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
              </Collapsible>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
