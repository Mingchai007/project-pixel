import GlitchText from './GlitchText';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="text-center">
          <GlitchText
            speed={1}
            enableShadows={true}
            enableOnHover={false}
            className="custom-class"
          >
            Coming Soon
          </GlitchText>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-4">
            Something amazing is on the way...
          </p>
        </div>
      </main>
    </div>
  );
}
