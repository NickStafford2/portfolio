// import { useState } from "react";
import { FaLinux } from 'react-icons/fa'
import { SiFlask } from 'react-icons/si'
// import reactLogo from "./assets/react.svg";
import { FaReact } from 'react-icons/fa'
import { LuBrainCircuit } from 'react-icons/lu'
import { RiAngularjsLine } from 'react-icons/ri'
import { SiNeovim, SiTypescript } from 'react-icons/si'
// import viteLogo from "/vite.svg";
import { FaAngular, FaGithub, FaRegSnowflake } from 'react-icons/fa'
import { FaPython } from 'react-icons/fa6'
import { SiJavascript } from 'react-icons/si'
import { TbBrandCpp } from 'react-icons/tb'
import './App.css'
import { Progress } from './components/ui/progress'
import { Hero } from './Hero'
import { SkillCard } from './template/SkillCard'
// import { motion } from "framer-motion";

const skills = [
  {
    title: 'Neovim',
    icon: <SiNeovim />,
    description:
      'Neovim has changed how I program. It has been years since I last used vi, and this time, I am not going back to the mouse. ',
  },
  {
    title: 'Github',
    icon: <FaGithub />,
    description: 'check out all my code here',
  },
  {
    title: 'Javascript',
    icon: <SiJavascript />,
    description: 'check out all my code here',
  },
  {
    title: 'Typescript',
    icon: <SiTypescript />,
    description: 'check out all my code here',
  },
  {
    title: 'C++',
    icon: <TbBrandCpp />,
    description: 'check out all my code here',
  },
  {
    title: 'Python',
    icon: <FaPython />,
    description: 'check out all my code here',
  },
  {
    title: 'AngularJs',
    icon: <RiAngularjsLine />,
    description: 'check out all my code here',
  },
  {
    title: 'Angular',
    icon: <FaAngular />,
    description: 'check out all my code here',
  },
]

// idea. Make a terminal looking thing. use react to change text over time like someone is typing.
function App() {
  return (
    <div className="content-wrapper flex flex-col gap-20 px-20">
      <Hero></Hero>

      <div className="section">
        <h1>Skills</h1>
        <div className="flex flex-row flex-wrap justify-between gap-10">
          {skills.map((skill) => (
            <div className="gap-10 p-4 w-96">
              <SkillCard data={skill}></SkillCard>
            </div>
          ))}
        </div>
        <h2>Languages</h2>
        <h2>Frameworks</h2>
        <ul>
          <li>
            AngularJS
            <RiAngularjsLine />
          </li>
          <li>
            Angular
            <FaAngular className="icon" />
          </li>
          <li>
            React
            <FaReact />
            <Progress value={33}></Progress>
          </li>
          <li>
            Flask
            <SiFlask />
          </li>
        </ul>
        <h2>Environment</h2>
        <SiNeovim className="icon" />
        <p>I am a big fan of Neovim.</p>
        <p>
          I primarily use Linux
          <FaLinux />
        </p>
      </div>

      <div className="section">
        <h1>Education</h1>
        <LuBrainCircuit />
        <h2>Masters of Computer Science - Kent State University</h2>
        <p>
          In progress. I am a graduate student at Kent State. Currently studying
          Cryptography and AI.
        </p>
        <ul>
          <li>Artificial Intelligence</li>
          <li>Secure Programming</li>
          <li>Cryptography</li>
          <li>Graph Algorithms</li>
          <li>iOS Programming</li>
        </ul>
        <h2>B.S Computer Science. GPA: 3.958 - Kent State University</h2>
        <p>You have no idea how much that A- in Latin class still urks me.</p>
      </div>
      <div className="section">
        <h1>Pet Projects</h1>
        <p>
          I love code. Below is a selection of some stuff I am working on in my
          spare time.
        </p>
        <h2>Visual NPM</h2>
        <p>
          Visualize the tools that power the web. See it change over time.
          Coming soon. . .
        </p>
        <h2>NBA Goat Calculator</h2>
        <p>
          Generations have argued. Is anyone right? Who you consider the
          greatest depends on your values. This app asks what you value, and
          with the power of advanced analytics, ranks players accordingly.
          Coming soon. . .
        </p>
        <p>
          I am returning to the church of vi after many years away. It is
          glorious. I don't want to use the mouse ever again. I have spent way
          too many hours configuring my neovim setup. I started with
          kickstarter, then I ruined that configuration. Now I switched to my
          own customized version of AstroVim. Week by week, I will morph this
          beast into my perfect IDE.
        </p>
        <div>
          Insert image of google search "vi: did you mean emacs?" and the
          reverse
        </div>
      </div>
      <div className="section">
        <h1>Keep in mind</h1>
        <p className="quote-box">
          If a programming language does not make you think. It isn't worth
          using.
        </p>
        <p className="quote-box">
          An eye for an eye makes the whole world blind.
        </p>
      </div>
      <div className="section">
        <h1>Beyond Code</h1>
        <div>
          <h2>Weight loss</h2>
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
            intake to achieve the desired 12 lbs a month.{' '}
          </p>
          <p>
            I weighed all my food. Made my weekly meals in bulk. Purchased some
            excellent borosilicate glass meal prep containers which I use every
            day. All my weeks food is prepared ahead of time. This means I save
            time cooking. I don't eat out. Meals are super easy to cook since I
            just pop them in the microwave for 4 minutes. I never concern myself
            with what my next meal is. I just eat simple healthy meals every
            day.{' '}
          </p>
          <p>Macronutrient equations</p>
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
          <p>
            Everything went exactly accoring to plan. My food preferences
            adapted to my new diet. My understanding of the gut microbiome is
            that your food cravings are largely a result of the desires of your
            gut bacteria. The bacteria you feed are the ones that reproduce and
            determine what food you desire. This worked perfectly for me. After
            a month of eating the same foods every day, I found myself craving
            my meal prep more than anything. Since I never cheated on the diet,
            I was able to successfully adjust my food preferences to align with
            my health goals. I love science.{' '}
          </p>
          <p>The best part is that I have so much data to analyze</p>
          <p>Insert pictures here</p>
          <p>Some helpful things I learned.</p>
          <ul>
            <li>
              It is very very difficult to gain weight eating only healthy
              foods. Sumo wrestlers and professional strongmen can't reach their
              size eating clean. Healthy food is too filling.
            </li>
            <li>
              Plan for you at your worst. Make it as easy as possible to eat
              your healthy meals. Make it as difficult as possible to eat
              unhealthy. That way, you can use your own lazyness to your
              advantage. Ensure that when you are in a bad mood and you are
              hungry, the healthy option is the easy one. You <span>could</span>{' '}
              get into your car and drive to McDonalds and gorge on greesy food.
              Or you could throw your tasty prepared meals into the microwave
              and be satisfied in a few minutes. Because I planned ahead, I
              always found myself lazily eating healthy.
            </li>
            <li>Don't drink alcohol. It doesn't help.</li>
            <li>
              Cheat with conditions. Cheat meals absolutly ruin diets. However,
              willpower is limited and some days you will mess up. I cheated 4
              times on my weight loss journey. But every time, I followed the
              following rule: You are allowed to cheat, but before you do, you
              MUST eat a whole frozen bag of broccali. Once you eat that whole
              plate of broccali, feel free to go nuts on those ores with no
              regrets. However, I find that once I eat the broccali, The oreos
              don't seem that appealing anymore.
            </li>
            <li>Find four meals to cook weekly, and stick to that.</li>
            <li>
              Eat to Live, don't Live to Eat. I had to change my relationship
              with food. Food should not be your source of happyness. Think of
              it as fuel, and nothing else.
            </li>
            <li>
              Lift heavy weights. Muscle burns calories. Cardio simply changes
              your non-exercise activity thermogenisis (neat). With cardio, the
              reduced movement after you exercise seems to completely negate the
              calories burned while exercising. The body adjusts your activity
              to keep calorie expenditure consistent.
            </li>
          </ul>
          <p>Add some pictures here. Before and after.</p>
          <p>
            One question irks me. Why did I use a spreadsheet instead of writing
            an app? I could have, but my spreadsheet does everything I need
            already. It does the job perfectly already and is incredibly simple
            as is. If I ever run out of pet projects, I may write something up.
            Until then, I will use what already works.
          </p>
        </div>
        <div>
          <h2>Writing</h2>
          <p>
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
          </p>
          <div>add a picture of my writing here.</div>
        </div>
        <div>
          <h2>Physics, Math, and Nerd stuff</h2>
          <p>
            I was majoring in physics before I switched to computer science. I
            plan to finish that degree once I complete my CS masters. I love
            physics. I have performed Yongue's famous double slit experiment,
            and done the requisite calculations to witness the collapse of the
            wave function. I have used an atomic force microscope and have seen
            individual atoms. I took differential equations and lived to tell
            the tale. Studying quantum mechanics is my happy place. There is{' '}
            <a href="">a fantastic youtube series</a> by Sean Carroll that I can
            not reccomend more highly.
          </p>
        </div>
        <div>
          <h2>Programming Philosophy</h2>
          <p>
            I prefer pragmatisim over theory. I aim to solve the problem as
            simplpy as I can. Once I do, I take plenty of time to refactor.
            Unless I have a very unique use case, I don't like to get too
            clever.{' '}
          </p>
          <p>
            Paradigms are not dogma. I like to use the one that best suits the
            job. I represent my data as objects. I represent processes as
            functions using procedural programming. Whenever I have simple input
            and output, I write pure virtual functions with no side effects.
            Keep it simple stupid (KISS). Make your code as simple as possible,
            and no simpler.
          </p>
          <p>
            I have come to dislike object oriented programming. It has its uses,
            but it ends up with so much boilerplate. I love the gang of four,
            but I can't avoid thinking that OOP overcomplicates so much. For
            example, if your program logic is best conceptualized as a series of
            steps, why ought it be in an object? Doesn't a function seem much
            more natural? Functions do things. Objects are things.{' '}
          </p>
          <p>
            Inheritance is my enemy. I don't often get hyper-opinionated, but
            this is my exception. I don't understand why we teach this in
            schools. Every time I have ever used it, it makes things
            unnecessarily complicated and fragile. Inheritance should not be a
            default feature in languages. I would rather it be imported via some
            obscure library if for some extraordinary reason you need it.
          </p>
          <p>
            Where ever I can, I try to separate my business logic from the
            libraries I am using. I put as much of my own code as possible into
            vanilla Typescript files without imports.
          </p>
        </div>
        <div>
          <h2>Too many Frameworks</h2>
          <p>
            One thing I regret is learning too many frameworks and tools. I
            became an expert at webpack and angularJS, and I seriously doubt I
            will use that knowledge again. I have started so many projects that
            fizzled out, and spent so many hours learning new frameworks that I
            never use again.
          </p>
          <p>
            Currently I am learning React. Angular has been far too slow and
            opinionated for me.{' '}
          </p>
        </div>
        <div>
          <h2>Epistemology</h2>
          <p>
            I really nerd out about this. Epistemology is the most useful thing
            in philosophy. I find that how you learn is more important that what
            you know. I enjoy questioning the processes by which we learn. How
            would you know if you were wrong? What method did you use to come to
            this belief? Do you want this belief to be true? How do you avoid
            confermation bias?
          </p>
          <p>
            Me and my friends have these sorts of conversations. It is
            incredible where they lead.{' '}
          </p>
        </div>
      </div>
      <div className="section">
        <h1>Random Ideas</h1>
        <h2>Neural Network code injection</h2>
        <p>
          Why ought neural network nodes be constrained to weights and biases?
          What if some nodes were stochastically assigned to be pointers to
          chunks of code?
        </p>
        <p>
          It would completely mess up the matrix multiplications used at the
          moment, but I keep thinking that I should test this out some time and
          see what happens.
        </p>
      </div>
    </div>
  )
}
/*
 *
        <motion.div
          className="banner"
          animate={{
            skew: [0, -20, 0],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 1, 2],
            repeat: Infinity,
            repeatDelay: 0
          }}
        >
          <motion.h1>
            Hello World
          </motion.h1>
        </motion.div>
 */
export default App
