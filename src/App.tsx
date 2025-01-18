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

function App() {
	return (
		<div className="grid grid-cols-12 lg:grid-cols-[minmax(100px,_1fr),repeat(10,_1fr),minmax(100px,_1fr)] grid-rows-[minmax(100vh,_auto)] overflow-x-hidden py-[var(--header-height)]  w-svw text-xl">
			{/* <HeroBackground></HeroBackground> */}
			{/* <Three></Three> */}
			<Hero></Hero>
			<SelfAdd></SelfAdd>
			<Skills></Skills>
			<Projects></Projects>
			<ProgrammingPhilosophy></ProgrammingPhilosophy>
			<BeyondCode></BeyondCode>
		</div>
	);
}

export default App;
