export default function App()
{
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(247,188,120,0.65),transparent_35%),linear-gradient(160deg,#f5e8d7_0%,#f0caa6_45%,#d97941_100%)] px-4 py-8 text-stone-950 sm:px-6">
      <section className="mx-auto grid min-h-[calc(100vh-4rem)] w-full max-w-5xl place-items-center">
        <div className="w-full rounded-[28px] bg-[rgba(255,248,240,0.78)] p-8 shadow-[0_24px_80px_rgba(84,39,15,0.18)] backdrop-blur-md sm:p-12">
          <p className="mb-3 text-xs uppercase tracking-[0.12em] text-purple-600">
            SweatBuddies
          </p>
          <h1 className="max-w-3xl text-5xl leading-none font-semibold sm:text-7xl">
            Find your people. Keep your momentum.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-700">
            Your React app is ready to build into a workout partner finder,
            training planner, or community hub.
          </p>
          <button
            type="button"
            className="mt-8 rounded-full bg-stone-950 px-6 py-4 text-sm font-medium text-stone-50 transition hover:bg-stone-800"
          >
            Start building
          </button>
        </div>
      </section>
    </main>
  )
}
