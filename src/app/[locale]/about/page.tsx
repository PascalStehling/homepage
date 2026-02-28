import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isGerman = locale === "de";
  return {
    title: isGerman ? "Über mich" : "About Me",
    description: isGerman
      ? "Erfahre mehr über Pascal Stehling - Data Engineer und Data Architect aus Potsdam."
      : "Learn more about Pascal Stehling - Data Engineer and Data Architect based in Potsdam, Germany.",
    alternates: {
      canonical: `https://stehl.ing/${locale}/about`,
      languages: { en: "https://stehl.ing/en/about", de: "https://stehl.ing/de/about" },
    },
  };
}

export default async function About({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isGerman = locale === "de";

  return (
    <div className="max-w-3xl mx-auto space-y-12">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">
          {isGerman ? "Über mich" : "About Me"}
        </h1>
        <p className="text-lg text-foreground leading-relaxed">
          {isGerman ? (
            <>
              Hallo! Ich bin Pascal Stehling, Data Engineer und Data Architect aus Potsdam. Bei{" "}
              <Link href="https://catenion.com/" className="underline text-emerald-900 dark:text-emerald-400 hover:text-foreground">
                Catenion
              </Link>
              {" "}arbeite ich aktuell als Senior Data Architect und bin dort auch die inoffizielle Ansprechperson für fast alles - von Cloud-Infrastruktur über Datenpipelines bis zur Web-Entwicklung.
            </>
          ) : (
            <>
              Hi there! I&apos;m Pascal Stehling, a Data Engineer and Data Architect based in Potsdam, near Berlin. I&apos;m currently a Senior Data Architect at{" "}
              <Link href="https://catenion.com/" className="underline text-emerald-900 dark:text-emerald-400 hover:text-foreground">
                Catenion
              </Link>
              , where I also unofficially serve as the go-to IT person for everything from cloud infrastructure and data pipelines to internal web application development.
            </>
          )}
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
        <div className="text-center space-y-4">
          <div className="relative w-96 h-64 -rotate-6 rounded-xl overflow-hidden shadow-lg transition-transform hover:rotate-0">
            <Image
              src="/me-in-potsdam.jpeg"
              alt={isGerman ? "Ich vor einem Schloss in Potsdam." : "Me in front of a castle in Potsdam"}
              fill
              className="object-cover"
            />
          </div>
          <p className="text-sm text-muted-foreground">
            {isGerman ? "Ich vor einem Schloss in Potsdam." : "Me in front of a castle in Potsdam."}
          </p>
        </div>

        <div className="text-center space-y-4">
          <div className="relative w-52 h-52 rotate-6 rounded-xl overflow-hidden shadow-lg transition-transform hover:rotate-0">
            <Image
              src="/penguin-with-keyboard.png"
              alt={isGerman ? "So stelle ich mir selbst vor, wenn ich programmiere." : "This is how I picture myself when I&apos;m coding."}
              fill
              className="object-cover"
            />
          </div>
          <p className="text-sm text-muted-foreground">
            {isGerman ? "So stelle ich mir selbst vor, wenn ich programmiere." : "This is how I picture myself when I&apos;m coding."}
          </p>
        </div>
      </div>

      <div className="prose prose-stone dark:prose-invert max-w-none prose-p:text-foreground prose-headings:text-foreground prose-li:text-foreground prose-strong:text-foreground prose-a:text-emerald-900 dark:prose-a:text-emerald-400">
        {isGerman ? (
          <>
            <p>
              Mein Weg in die Informatik führte mich nach der Schule in Thüringen zunächst nach Berlin. 2016 startete ich dort ein duales Bachelorstudium an der Hochschule für Wirtschaft und Recht (HWR) - parallel dazu arbeitete ich praktisch am Helmholtz-Zentrum Berlin (HZB). Diese Mischung aus Theorie und Praxis hat mich gereizt: Beim reinen Studieren fehlte mir die praktische Arbeit, bei den Projekten vermisste ich den akademischen Austausch. Ein Gefühl, das mich bis heute treibt. Während meiner Studienzeit faszinierte mich der rasante Aufstieg der KI zunehmend - ein Interesse, das meine weitere Richtung prägen sollte. 2019 schloss ich mein Studium in Regelstudienzeit ab.
            </p>
            <p>
              Der Wissensdurst trieb mich weiter - ich begann einen Master in Data Science an der Berliner Hochschule für Technik (BHT). Nebenbei jobbte ich als studentische Hilfskraft, erst bei Sopra Steria, dann bei Catenion. Das Masterstudium brachte eine wichtige Erkenntnis: Während Data Science faszinierend ist, liegt meine eigentliche Leidenschaft beim Data Engineering - dem praktischen Infrastruktur Teil, auf dem alles aufbaut. 2021 schloss ich dieses Studium mit Auszeichnung ab.
            </p>
            <p>
              2022 startete ich bei Catenion in Vollzeit - endlich konnte ich Prototypen zu echten, stabilen Anwendungen entwickeln. Doch nach wenigen Monaten zog es mich zurück in die Forschung: Im Herbst 2022 startete ich ein berufsbegleitendes Masterstudium in IT-Sicherheit und digitaler Forensik. Dort lernte ich, dass DSGVO tatsächlich spannend ist, dass Cybersecurity viel mit Dokumentation zu tun hat (zumindest in Deutschland), und ich enteckte meine Liebe zur linearen Algebra wieder. Das führte zu meiner Masterarbeit über{" "}
              <Link href="/publications">Homomorphe Verschlüsselung mit Module-Learning with Errors (M-LWE)</Link> - ein Thema, auf das ich stolz bin, auch wenn ich wie jeder Forscher mittlerweile die Schwachstellen sehe. Aber genau das ist der erste Schritt beim lernen! 2024 schloss ich meinen zweiten Master mit einer Note von 1,3 ab.
            </p>
            <p>
              Mit zwei Masterabschlüssen im Gepäck beschloss ich, es war Zeit für neue Herausforderungen - auch privat. Eine eigene Website zu bauen stand schon lange auf meiner Liste, und voilà, hier ist sie! Gleichzeitig bin ich ins Swing-Tanzen (Lindy Hop und Charleston) eingestiegen und versuche ein bisschen zu Nähe (um etwas wirklich praktisches zu machen). Wie typisch für Programmierer unterschätzte ich anfangs die Komplexität, aber der Lernprozess macht mir großen Spaß.
            </p>
            <p>
              Mal schauen, wo der Weg mich noch hinführt! Falls dich etwas von dem, woran ich arbeite, neugierig macht, schreib mir gerne unter{" "}
              <Link href="mailto:web@stehl.ing" className="text-emerald-900 dark:text-emerald-400 hover:text-foreground">
                web@stehl.ing
              </Link>
              .
            </p>
          </>
        ) : (
          <>
            <p>
              My journey into tech began after high school in Thuringia, a region on the former border between East and West Germany. In 2016, I moved to Berlin for a dual bachelor&apos;s program at the Hochschule für Wirtschaft und Recht (HWR), combined with an internship at the Helmholtz-Zentrum Berlin (HZB). This mix of theory and practice was perfect for me. I found I missed the hands-on work when I was studying, and the academic environment when I was working on projects—a feeling that still drives me today. During my bachelor&apos;s, the rapid rise of AI caught my attention, sparking an interest that would shape my future. I graduated on schedule in 2019.
            </p>
            <p>
              Eager to learn more, I enrolled in a Master&apos;s in Data Science at the Berlin University of Technology (BHT). I balanced my studies with a working student position, first at Sopra Steria and then at Catenion, where I still work today. My master&apos;s studies revealed a key insight: while data science is interesting, my true passion lies in data engineering—the backbone of it all. I graduated with distinction in 2021.
            </p>
            <p>
              In early 2022, I transitioned to a full-time role at Catenion, which gave me the opportunity to transform many of our prototypes into robust applications. After about six months, my curiosity led me back to academia, and I began a distance-learning master&apos;s program in IT Security and Digital Forensics in the fall of 2022. This program taught me that GDPR is more interesting than it sounds, that much of cybersecurity involves paperwork (at least in Germany), and it rekindled my love for linear algebra. This inspired my master&apos;s thesis on{" "}
              <Link href="/publications">Homomorphic Encryption with Module-Learning with Errors (M-LWE)</Link>, a topic I&apos;m incredibly proud of, even though, like any good researcher, I now see the flaws I made, but this is the first step toward progress! I completed my second master&apos;s in 2024 with a final grade of 1.3.
            </p>
            <p>
              With two master&apos;s degrees under my belt, I decided it was time for new challenges and hobbies. I&apos;ve always wanted to create my own website, and this is the result! I&apos;ve also taken up swing dancing (Lindy Hop and Charleston) and started sewing classic menswear. It&apos;s surprisingly difficult to find well-made, affordable classic clothing, and I love the challenge of learning a completely new skill. Like any programmer, I initially underestimated the complexity, but I&apos;m enjoying the process.
            </p>
            <p>
              Let&apos;s see what the future holds! If you find anything I&apos;m working on interesting, feel free to reach out at{" "}
              <Link href="mailto:web@stehl.ing" className="text-emerald-900 dark:text-emerald-400 hover:text-foreground">
                web@stehl.ing
              </Link>
              .
            </p>
          </>
        )}
      </div>
    </div>
  );
}
