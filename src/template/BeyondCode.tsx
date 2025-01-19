import { NsCard } from "@/components/ns/nsCard";
import NsCollapse from "@/components/ns/NsCollapse";
import { Title1, Title2 } from "@/Title";

export function BeyondCode() {
	return (
		<>
			<Title1
				id="beyond-code"
				className="row-start-11 col-start-2 col-span-10 scroll-mt-48 pt-32 pb-16"
			>
				Beyond Code
			</Title1>
			<div className="row-start-12 col-start-2 col-span-10 flex flex-col gap-8">
				<NsCard>
					<NsCollapse
						title="Things I love"
						description="Physics, math, and nerd stuff."
					>
						I was majoring in physics before I switched to computer science. i
						plan to finish that degree once I complete my cs masters. I love
						physics. I have performed yongue's famous double slit experiment,
						and done the requisite calculations to witness the collapse of the
						wave function. I have used an atomic force microscope and have seen
						individual atoms. I took differential equations and lived to tell
						the tale. studying quantum mechanics is my happy place. there is
						<a href="">a fantastic youtube series</a> by Sean Carroll that I can
						not reccomend more highly.
					</NsCollapse>
				</NsCard>
				<NsCard>
					<NsCollapse title="Weight Loss" description="65 lbs and counting.">
						<p>
							I lost 70 lbs in 6 months. Firstly, I read some of the academic
							literature regarding weight loss adherence. Then I sought out the
							expertise of professional bodybuilders, whom I figured posess the
							greatest expertise in methodically manipulating their body weight.
							In my research, both the academic literature and the bodybuilding
							consensus aligned perfectly. Calorie and Macronutrient counting
							provided the best adherence.
						</p>
						<p>
							The next step was obvious. Develop spreadsheets to track daily
							macronutrient intake, body weight, and waist circumferance. I
							tracked my results daily for 6 months, and adjusted my caloric
							intake to achieve the desired 12 lbs a month.
						</p>
						<p>
							I weighed all my food. Made my weekly meals in bulk. Purchased
							some excellent borosilicate glass meal prep containers which I use
							every day. All my weeks food is prepared ahead of time. This means
							I save time cooking. I don't eat out. Meals are super easy to cook
							since I just pop them in the microwave for minutes. I never
							concern myself with what my next meal is. I just eat simple
							healthy meals every day.
						</p>
						<Title2 className="pt-4">Macronutrient equations</Title2>
						<ul>
							<li>
								Protein: 1g / lb body weight. Essential for building muscle and
								saitiety. (4 calories / gram)
							</li>
							<li>
								Fats: 1g / lb body weight. Essential for hormone balance. (9
								calories / gram)
							</li>
							<li>
								Carbohydrates: Fill the remaining calories in your daily limit
								with carbs. (4 calories / gram)
							</li>
						</ul>

						<Title2 className="pt-4">Adaptation</Title2>
						<p>
							Everything went exactly accoring to plan. My food preferences
							adapted to my new diet. My understanding of the gut microbiome is
							that your food cravings are largely a result of the desires of
							your gut bacteria. The bacteria you feed are the ones that
							reproduce and determine what food you desire. This worked
							perfectly for me. After a month of eating the same foods every
							day, I found myself craving my meal prep more than anything. Since
							I never cheated on the diet, I was able to successfully adjust my
							food preferences to align with my health goals. I love science.
						</p>
						<p>The best part is that I have so much data to analyze</p>
						<br />
						<p>Insert pictures here</p>
						<br />
						<Title2 className="pt-4">Some helpful things I learned.</Title2>
						<ul>
							<li>
								- It is very very difficult to gain weight eating only healthy
								foods. Sumo wrestlers and professional strongmen can't reach
								their size eating clean. Healthy food is too filling.
							</li>
							<li>
								- Plan for you at your worst. Make it as easy as possible to eat
								your healthy meals. Make it as difficult as possible to eat
								unhealthy. That way, you can use your own lazyness to your
								advantage. Ensure that when you are in a bad mood and you are
								hungry, the healthy option is the easy one. You
								<span>could</span> get into your car and drive to McDonalds and
								gorge on greesy food. Or you could throw your tasty prepared
								meals into the microwave and be satisfied in a few minutes.
								Because I planned ahead, I always found myself lazily eating
								healthy.
							</li>
							<li>- Don't drink alcohol. It doesn't help.</li>
							<li>
								- Cheat with conditions. Cheat meals absolutly ruin diets.
								However, willpower is limited and some days you will mess up. I
								cheated 4 times on my weight loss journey. But every time, I
								followed the following rule: You are allowed to cheat, but
								before you do, you MUST eat a whole frozen bag of broccali. Once
								you eat that whole plate of broccali, feel free to go nuts on
								those ores with no regrets. However, I find that once I eat the
								broccali, The oreos don't seem that appealing anymore.
							</li>
							<li>Find four meals to cook weekly, and stick to that.</li>
							<li>
								- Eat to Live, don't Live to Eat. I had to change my
								relationship with food. Food should not be your source of
								happyness. Think of it as fuel, and nothing else.
							</li>
							<li>
								- Lift heavy weights. Muscle burns calories. Cardio simply
								changes your non-exercise activity thermogenisis (neat). With
								cardio, the reduced movement after you exercise seems to
								completely negate the calories burned while exercising. The body
								adjusts your activity to keep calorie expenditure consistent.
							</li>
						</ul>
						<p>Add some pictures here. Before and after.</p>
						<p>
							One question irks me. Why did I use a spreadsheet instead of
							writing an app? I could have, but my spreadsheet does everything I
							need already. It does the job perfectly already and is incredibly
							simple as is. If I ever run out of pet projects, I may write
							something up. Until then, I will use what already works.
						</p>
					</NsCollapse>
				</NsCard>

				<NsCard>
					<NsCollapse
						title="Epistemology"
						description="
							Me and my friends have these sorts of conversations. It is
							incredible where they lead.
						"
					>
						I really nerd out about this. Epistemology is the most useful thing
						in philosophy. I find that how you learn is more important that what
						you know. I enjoy questioning the processes by which we learn. How
						would you know if you were wrong? What method did you use to come to
						this belief? Do you want this belief to be true? How do you avoid
						confermation bias?
					</NsCollapse>
				</NsCard>

				<NsCard>
					<NsCollapse title="Writing" description="">
						I am part of a group working meticiously to finish the "A Song of
						Ice and Fire" book series. I have written four chapters so far.
						Submissions require extensive peer review and editing. The author,
						George R. R. Martin is attempting to trick the audience on several
						levels, which makes decfiering his intentions is quite difficult.
						The project is specifically designed to best replicate the writing
						and philosophy of George R. R. Martin, and our own biases are
						discouraged. Everyone involved has extensive knowlege of George's
						complete writing corpus, and an encyclopedic knowlege of ASOIAF.
						This experience has taught me immensely.
						<p>add a picture of my writing here.</p>
					</NsCollapse>
				</NsCard>
				<NsCard>
					<NsCollapse title="Voice Acting" description="">
						I have made some amature voicovers and voiced a few characters. Just
						for fun.
					</NsCollapse>
				</NsCard>
			</div>
		</>
	);
}
