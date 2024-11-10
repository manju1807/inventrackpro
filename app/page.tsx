import { ModeToggle } from "@/components/theme-toggle";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-evenly font-sans p-24">
			<h1>hello world</h1>
			<ModeToggle />
		</main>
	);
}
