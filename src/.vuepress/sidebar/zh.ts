import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/HostOnly/": [
    {
      text: "H系模组",
      link: "/HostOnly/",
      activeMatch: "^/HostOnly/$",
      children: [
        { text: 'TownOfHost', link: '/HostOnly/TownOfHost' },
        { text: 'TownOfNewEpic_Xtreme', link: '/HostOnly/TownOfNewEpic_Xtreme'},
        { text: 'TownOfHostEdited', link: '/HostOnly/TownOfHostEdited'},
        { text: 'TownOfHostPlus', link: '/HostOnly/TownOfHostPlus'},
        { text: 'TownOfNext', link: '/HostOnly/TownOfNext'},
        { text: 'TownOfHostEnhanced', link: '/HostOnly/TownOfHostEnhanced'},
        { text: 'EndlessHostRoles', link: '/HostOnly/EndlessHostRoles'},
        { text: 'TownOfPlus', link: '/HostOnly/TownOfPlus'},
        { text: 'TownOfHost_Y', link: '/HostOnly/TownOfHost_Y'},
        { text: 'TownOfChaos', link: '/HostOnly/TownOfChaos' },
        { text: 'TheOtherHostRoles', link: '/HostOnly/TheOtherHostRoles' }
      ]
    }
  ],
  "/AllClient/": [
    {
      text: "全客户端模组",
      link: "/AllClient/",
      activeMatch: "^/AllClient/$",
      children: [
        { text: 'TownOfUs', link: '/AllClient/TownOfUs' },
        { text: 'TheOtherRoles', link: '/AllClient/TheOtherRoles' },
        { text: 'SuperNewRoles', link: '/AllClient/SuperNewRoles' },
        { text: 'LasMonjas', link: '/AllClient/LasMonjas' },
        { text: 'StellarRoles', link: '/AllClient/StellarRoles' },
        { text: 'Nebula on the Ship', link: '/AllClient/NebulaOnTheShip' },
        { text: 'TownOfUsR', link: '/AllClient/TownOfUsR' },
        { text: 'StellarRoles', link: '/AllClient/StellarRoles' },
        { text: 'AllTheRoles', link: '/AllClient/AllTheRoles' }
      ]
    }
  ]
});
