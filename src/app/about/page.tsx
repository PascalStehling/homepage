import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="max-w-3xl mx-auto space-y-12">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">About</h1>
        <p className="text-lg text-foreground leading-relaxed">
          Hi there! I'm Pascal Stehling, a Data Engineer and Data Architect based in Potsdam, near Berlin. I'm currently a Senior Data Architect at <Link href="https://catenion.com/" className="underline text-emerald-900 dark:text-emerald-400 hover:text-foreground">Catenion</Link>, where I also unofficially serve as the go-to IT person for everything from cloud infrastructure and data pipelines to internal web application development.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
        <div className="text-center space-y-4">
          <div className="relative w-[350px] h-[250px] -rotate-6 rounded-xl overflow-hidden shadow-lg transition-transform hover:rotate-0">
            <Image
              src="/me-in-potsdam.jpeg"
              alt="Me in front of a castle in Potsdam"
              fill
              className="object-cover"
            />
          </div>
          <p className="text-sm text-muted-foreground">Me in front of a castle in Potsdam.</p>
        </div>
        
        <div className="text-center space-y-4">
          <div className="relative w-[204px] h-[212px] rotate-6 rounded-xl overflow-hidden shadow-lg transition-transform hover:rotate-0">
            <Image
              src="/penguin-with-keyboard.jpg"
              alt="Happy Pepe with Keyboard"
              fill
              className="object-cover"
            />
          </div>
          <p className="text-sm text-muted-foreground">This is how I picture myself when I'm coding.</p>
        </div>
      </div>

      <div className="prose prose-stone dark:prose-invert max-w-none prose-p:text-foreground prose-headings:text-foreground prose-li:text-foreground prose-strong:text-foreground prose-a:text-emerald-900 dark:prose-a:text-emerald-400">
        <p>
          My journey into tech began after high school in Thuringia, a region on the former border between East and West Germany. In 2016, I moved to Berlin for a dual bachelor's program at the Hochschule für Wirtschaft und Recht (HWR), combined with an internship at the Helmholtz-Zentrum Berlin (HZB). This mix of theory and practice was perfect for me. I found I missed the hands-on work when I was studying, and the academic environment when I was working on projects—a feeling that still drives me today. During my bachelor's, the rapid rise of AI caught my attention, sparking an interest that would shape my future. I graduated on schedule in 2019.
        </p>
        <p>
          Eager to learn more, I enrolled in a Master's in Data Science at the Berlin University of Technology (BHT). I balanced my studies with a working student position, first at Sopra Steria and then at Catenion, where I still work today. My master's studies revealed a key insight: while data science is interesting, my true passion lies in data engineering—the backbone of it all. I graduated with distinction in 2021.
        </p>
        <p>
          In early 2022, I transitioned to a full-time role at Catenion, which gave me the opportunity to transform many of our prototypes into robust applications. After about six months, my curiosity led me back to academia, and I began a distance-learning master's program in IT Security and Digital Forensics in the fall of 2022. This program taught me that GDPR is more interesting than it sounds, that much of cybersecurity involves paperwork (at least in Germany), and it rekindled my love for linear algebra. This inspired my master's thesis on <Link href="/publications">Homomorphic Encryption with Module-Learning with Errors (M-LWE)</Link>, a topic I'm incredibly proud of, even though, like any good researcher, I now see the flaws I made, but this is the first step toward progress! I completed my second master's in 2024 with a final grade of 1.3.
        </p>
        <p>
          With two master's degrees under my belt, I decided it was time for new challenges and hobbies. I've always wanted to create my own website, and this is the result! I've also taken up swing dancing (Lindy Hop and Charleston) and started sewing classic menswear. It's surprisingly difficult to find well-made, affordable classic clothing, and I love the challenge of learning a completely new skill. Like any programmer, I initially underestimated the complexity, but I'm enjoying the process.
        </p>
        <p>
          Let's see what the future holds! If you find anything I'm working on interesting, feel free to reach out at <Link href="mailto:web@stehl.ing" className="text-emerald-900 dark:text-emerald-400 hover:text-foreground">web@stehl.ing</Link>.
        </p>
      </div>
    </div>
  );
}
