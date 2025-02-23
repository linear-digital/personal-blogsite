import fetchPublicationInfo from "@/lib/hasnode/publication";


export const dynamic = "force-dynamic"; // ✅ Ensure the route runs dynamically

export default async function Icon() {
  const publication = await fetchPublicationInfo();
  const favicon = publication?.favicon || "/default-favicon.ico";

  return new Response(null, {
    headers: { Location: favicon },
    status: 302, // Redirect to the favicon URL
  });
}