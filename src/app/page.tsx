export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-8">
          Welcome to My Portfolio
        </h1>
        <p className="text-center text-lg mb-4">
          I'm a developer passionate about creating amazing web experiences.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <div className="p-6 border rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">About Me</h2>
            <p>I specialize in building modern web applications using React and Node.js.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Skills</h2>
            <ul className="list-disc list-inside">
              <li>React</li>
              <li>Node.js</li>
              <li>TypeScript</li>
              <li>Next.js</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
} 