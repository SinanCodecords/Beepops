import { SidebarAuthor } from "./sidebar-author";
import { SidebarCategories } from "./sidebar-categories";
import { SidebarSearch } from "./sidebar-search";

export function BlogSidebar() {
  return (
    <aside className="space-y-8 max-lg:order-last lg:border-r lg:border-[#e5e5e5] lg:pr-6">
      <SidebarAuthor />
      <hr className="border-[#e5e5e5]" />
      <SidebarSearch />
      <SidebarCategories />
    </aside>
  );
}
