import {
    NavigationMenu,
    //NavigationMenuContent,
    //NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    //NavigationMenuTrigger,
    //NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"

  import { Link } from "react-router-dom";

function Navbar() {
    return (
        <NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
        <NavigationMenuLink><Link to="/">Home</Link></NavigationMenuLink>
    </NavigationMenuItem>
    <NavigationMenuItem>
        <NavigationMenuLink><Link to="createpage">Create Post</Link></NavigationMenuLink>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>

    );
}

export default Navbar;