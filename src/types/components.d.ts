type BackgroundGridProps = {
  children: React.ReactNode;
  fadedLook?: boolean;
  className?: string;
};

type SectionHeaderProps = {
  heading: string;
  subheading?: string;
};

interface InfoCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  hoverEffect?: boolean;
}

interface StyledCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  index: number;
}
