import { Toaster } from "sonner";

// Developed by Stiner.dev | Professional Web Developer
// Designed for Rubin Williams who I admire and greatly respect and honor - a Black Power activist with the Black Panther Party during the 1960's Black Power movement

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white p-3 sm:p-4 md:p-8">
      <main className="max-w-4xl mx-auto">
        <article className="bg-white shadow-[0_0_40px_rgba(0,0,0,0.03)] rounded-lg p-4 sm:p-8 md:p-16 prose max-w-none relative overflow-hidden">
          {/* Elegant corner decorations - hidden on smallest screens */}
          <div className="hidden sm:block absolute top-6 left-6 w-12 sm:w-16 md:w-24 h-12 sm:h-16 md:h-24 border-l-2 border-t-2 border-gray-100"></div>
          <div className="hidden sm:block absolute top-6 right-6 w-12 sm:w-16 md:w-24 h-12 sm:h-16 md:h-24 border-r-2 border-t-2 border-gray-100"></div>
          <div className="hidden sm:block absolute bottom-6 left-6 w-12 sm:w-16 md:w-24 h-12 sm:h-16 md:h-24 border-l-2 border-b-2 border-gray-100"></div>
          <div className="hidden sm:block absolute bottom-6 right-6 w-12 sm:w-16 md:w-24 h-12 sm:h-16 md:h-24 border-r-2 border-b-2 border-gray-100"></div>

          <div className="relative">
            <p className="text-center text-gray-400 text-lg sm:text-xl mb-2 sm:mb-4 font-['Cormorant_Garamond'] tracking-[0.1em] sm:tracking-[0.15em]">Leadership Insights</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-['Playfair_Display'] font-light mb-10 sm:mb-16 md:mb-20 text-gray-800 text-center tracking-[0.1em] sm:tracking-[0.2em] leading-relaxed">
              What is Leadership?
              <div className="h-1 w-32 sm:w-40 md:w-48 bg-blue-600 mx-auto mt-4 md:mt-6"></div>
            </h1>

            <div className="text-gray-700 leading-loose whitespace-pre-wrap font-['Cormorant_Garamond'] text-xl sm:text-2xl tracking-wide">
              {`True leadership isn't a crown worn for show, nor a whip cracked for control. It's a quiet strength, a steady hand guiding not from above, but from within the pool that's available.

It's not about the loudest voice, but the clearest vision, articulated with humility and conviction.

A true leader doesn't hoard power—they distribute it, understanding that a collective of empowered individuals achieves far more than a single figurehead. They see the potential in others, even when those individuals might not see it themselves, and they cultivate that potential with patient mentorship and unwavering belief. They are architects of growth, not just for the company, but for the people within it.

Empathy is their compass. They listen not just to respond, but to understand the fears, the aspirations, and the unique perspectives that each person brings. They recognize that behind every task lies a human being with their own challenges and triumphs. This understanding fuels their decisions, ensuring that progress isn't achieved at the cost of individual well-being.

Integrity is the bedrock of their influence. Their actions align with their words, building trust that runs deeper than any title. They are transparent and honest even when the truth is difficult, fostering an environment of open communication and mutual respect. They understand that true authority is earned, not demanded.

True leaders are not immune to mistakes. In fact, they embrace them as opportunities for learning and growth, both for themselves and for their team. They take responsibility for failures and share the credit for successes, understanding that leadership is about collective achievements.`}
              <div className="pl-4 sm:pl-6 pr-3 sm:pr-4 py-3 sm:py-4 mt-4 mb-6 border-l-4 border-blue-600 bg-white rounded-r-lg shadow-sm text-gray-900 font-medium italic">
                {`Ultimately, true leadership is about service. It's about putting the needs of the team and the shared vision above personal ambition. It's about inspiring others to become the best versions of themselves, and to work together toward a common goal. It's a journey of continuous learning, adaptation, and unwavering commitment to the well-being and progress of those they lead. It's a quiet force that shapes not just outcomes, but the very character of the collective it guides.`}
              </div>
              {`This piece written to describe true leadership (from my perspective) is composed of my own words and phrasing. While the concepts discussed (empathy, integrity, vision etc.) are common themes in discussions about leadership, the specific way I've articulated them, the metaphors and imagery used, and the overall flow of the piece are unique to my generation.`}
            </div>

            <footer className="mt-16 sm:mt-20 md:mt-24 pt-8 sm:pt-10 md:pt-12 border-t border-gray-100">
              <div className="text-center">
                <p className="text-2xl sm:text-3xl md:text-4xl font-['Playfair_Display'] font-light text-gray-800 tracking-[0.1em] sm:tracking-[0.15em]">Rubin Williams</p>
                <p className="text-xl sm:text-2xl text-gray-600 mt-2 sm:mt-3 tracking-[0.1em] sm:tracking-[0.2em] font-['Cormorant_Garamond']">THE SERVICE COMPANY</p>
                <p className="text-gray-500 mt-1 sm:mt-2 tracking-[0.08em] sm:tracking-[0.1em] font-['Cormorant_Garamond']">Employee 3yrs</p>
              </div>
            </footer>
          </div>
        </article>
      </main>
      <Toaster />
    </div>
  );
}
