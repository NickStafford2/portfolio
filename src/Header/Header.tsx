// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
//
// import HeaderLink from "./HeaderLink.tsx";
// import IceboxLogin from "@/icebox/IceboxLogin.tsx";
// // import ThemeSwitcher from './ThemeSwitcher.tsx'
// // import ThemeSwitch from '@/ThemeSwitch.tsx'
//
// export default function Header() {
//   return (
//     <div className="fixed z-30 flex h-[var(--header-height)] w-full items-stretch justify-between gap-3 border-b-[1px] border-b-border bg-gray-900 text-[var(--ns-primary)]">
//       {/* <Button onClick={() => sendDataToParent()}>Sidebar</Button> */}
//       <div>
//         <HeaderLink href="#">
//           <h1 className="text-2xl font-semibold px-4">Nicholas Stafford</h1>
//         </HeaderLink>
//       </div>
//       {/* <ThemeSwitcher></ThemeSwitcher> */}
//       <div className="flex flex-grow flex-row items-center justify-center gap-0 align-middle">
//         <HeaderLink href="#aboutme">About Me</HeaderLink>
//         <HeaderLink href="#skills">Skills</HeaderLink>
//         <HeaderLink href="#projects">Projects</HeaderLink>
//         <HeaderLink href="#thoughts">Thoughts</HeaderLink>
//       </div>
//       <div className="">
//         <Popover>
//           <PopoverTrigger asChild>
//             <HeaderLink className="text-accent">Icebox Login</HeaderLink>
//           </PopoverTrigger>
//           <PopoverContent className="w-80">
//             <IceboxLogin></IceboxLogin>
//           </PopoverContent>
//         </Popover>
//       </div>
//     </div>
//   );
// }
