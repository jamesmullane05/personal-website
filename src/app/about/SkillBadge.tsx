import { IconType } from "react-icons";

type SkillBadgeProps = {
  name: string;
  Icon?: IconType;
};

export default function SkillBadge({ name, Icon }: SkillBadgeProps) {
  return (
    <span className="flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-medium transition-transform hover:scale-105">
      {Icon && <Icon className="text-lg" />}
      {name}
    </span>
  );
}
