import Footer from "@/components/Footer"
import NavBar from "@/components/Navbar"
import "@/styles/globals.css"

export const metadata = {
  title:
    "Samuel Pokam - Software engineer, web developer, and JavaScript enthusiast",
  description: "Samuel Pokam - Portfolio website",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <div>
        <div className="flex h-full min-h-screen flex-col bg-zinc-50 dark:bg-black">
          <div className="fixed inset-0 flex justify-center sm:px-8">
            <div className="flex w-full max-w-7xl lg:px-8">
              <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20"></div>
            </div>
          </div>

          <div>
            <NavBar />
            {children}
            <Footer />
          </div>
        </div>
      </div>
    </html>
  )
}
