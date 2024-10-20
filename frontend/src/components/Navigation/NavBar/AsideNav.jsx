import {
    Home,
    BriefcaseBusiness,
    MessageSquareMore,
    Bell,
    Users,
    Building2,
    LifeBuoy,
    Settings,
    Banana,
} from "lucide-react";
import Sidebar, { SidebarItem } from "./Sidebar";

const AsideNav = () => {
    return (
        <>
            <div className="flex">
                <Sidebar>
                    <SidebarItem
                        icon={<Banana size={20} />}
                        text="Home"
                        location="/"
                    />
                    <SidebarItem
                        icon={<BriefcaseBusiness size={20} />}
                        text="Jobs"
                        location="/jobs"
                    />
                    <SidebarItem
                        icon={<MessageSquareMore size={20} />}
                        text="Messaging"
                        location="/messaging"
                        active={true}
                    />
                    <SidebarItem
                        icon={<Bell size={20} />}
                        text="Notifications"
                        location="/notifications"
                        batch
                    />
                    <SidebarItem
                        icon={<Users size={20} />}
                        text="Connections"
                        location="/connections"
                    />
                    <SidebarItem
                        icon={<Building2 size={20} />}
                        text="Companies"
                        location="/companies"
                    />
                    <hr className="my-3" />
                    <SidebarItem
                        icon={<Settings size={20} />}
                        text="Settings"
                        location="/settings"
                    />
                    <SidebarItem
                        icon={<LifeBuoy size={20} />}
                        text="Help"
                        location="/help"
                    />
                </Sidebar>
            </div>
        </>
    );
};

export default AsideNav;
