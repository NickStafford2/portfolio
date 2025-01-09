import { Hero } from "./Hero";
// import HeroBackground from './HeroBackground'
import { BeyondCode } from "./template/BeyondCode";
import { ProgrammingPhilosophy } from "./template/ProgrammingPhilosophy";
import { Projects } from "./template/Projects";
// import { QuoteBox } from "./template/QuoteBox";
// import { RandomIdeas } from "./template/RandomIdeas";
import SelfAdd from "./template/SelfAdd";
import { Skills } from "./template/Skills";
// import Three from './Three'
import WarpingOrbScene from "./three/MyLoop/threeWithShaders.tsx";

function App() {
	return (
		<div className=" text-foreground w-svw max-w-[100vw]" style={{}}>
			{/* <HeroBackground></HeroBackground> */}
			{/* <Three></Three> */}
			<WarpingOrbScene></WarpingOrbScene>
			<div className="flex flex-col gap-6 px-20">
				<Hero></Hero>
				<SelfAdd></SelfAdd>
				<Skills></Skills>

				<Projects></Projects>
				<ProgrammingPhilosophy></ProgrammingPhilosophy>
				<BeyondCode></BeyondCode>
				{/* <QuoteBox></QuoteBox> */}
			</div>
		</div>
	);
}

export default App;
