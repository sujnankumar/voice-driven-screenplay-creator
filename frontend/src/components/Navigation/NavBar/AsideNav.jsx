import {
    Home,
    BriefcaseBusiness,
    MessageSquareMore,
    Bell,
    Users,
    Building2,
    LifeBuoy,
    Settings,
    Clapperboard,
    FileVideo,
    Film,
    Videotape,
    Popcorn,
    CreditCard
} from "lucide-react";
import Sidebar, { SidebarItem } from "./Sidebar";

const AsideNav = () => {
    return (
        <>
            <div className="flex">
                <Sidebar>
                    <SidebarItem
                        icon={<Film size={20} />}
                        text="Scenes"
                        location="/"
                    />
                    <SidebarItem
                        icon={<Film size={20} />}
                        text="Scenes"
                        location="/jobs"
                    />
                    <SidebarItem
                        icon={<Film size={20} />}
                        text="Scenes"
                        location="/messaging"
                        active={true}
                    />
                    <SidebarItem
                        icon={<Film size={20} />}
                        text="Scenes"
                        location="/notifications"
                        batch
                    />
                    <SidebarItem
                        icon={<Film size={20} />}
                        text="Scenes"
                        location="/connections"
                    />
                    <SidebarItem
                        icon={<Film size={20} />}
                        text="Scenes"
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
