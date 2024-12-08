import Link from "next/link";
import HeroSection from "../../components/sections/HeroSection";
import TeamMembers from "../../components/TeamMembers";
import teams2021_22 from "../../../data/teams/2021-22.csv";
import teams2022_23 from "../../../data/teams/2022-23.csv";
import teams2023_24 from "../../../data/teams/2023-24.csv";
import teams2024_25 from "../../../data/teams/2024-25.csv";

const teamsData = {
  "2021-22": teams2021_22,
  "2022-23": teams2022_23,
  "2023-24": teams2023_24,
  "2024-25": teams2024_25,
};

export const metadata = {
  title: "Team by Year - Student Conscious Club",
  description: "Discover the dedicated teams of SCC over the years. Learn about the people who have contributed to our success.",
  keywords: ["SCC Teams", "Yearly Teams", "Contributors", "Success Stories"],
  openGraph: {
    title: "Team by Year - Student Conscious Club",
    description: "Discover the dedicated teams of SCC over the years. Learn about the people who have contributed to our success.",
  },
};

export function generateStaticParams() {
  return Object.keys(teamsData).map((year) => ({
    year: year,
  }));
}

export default async function Page({ params }) {
  const { year } = await params;
  const csvData = teamsData[year];

  if (!csvData) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] text-center p-8">
        <div className="text-3xl font-bold text-gray-800 mb-4">Coming Soon!</div>
        <div className="text-lg text-gray-600">We are working hard to bring you this amazing team. Stay tuned for updates!</div>
      </div>
    );
  }

  return (
    <main className="min-h-screen">
      <HeroSection
        title="Team of"
        highlightedText={year}
        description={
          <Link href="/teams" className="inline-block text-primary-500 hover:text-primary-600">
            ← Back to Timeline
          </Link>
        }
      />

      <section className="py-32 bg-warm-50">
        <div className="container mx-auto px-6">
          <TeamMembers csvData={csvData} />
        </div>
      </section>
    </main>
  );
}
