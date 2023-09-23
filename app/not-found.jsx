import Link from "next/link"

function NotFound() {
return (
  <main className="text-center">
        <h1 className="text-3x1">
            There was a problem
        </h1>
        <p>There is not such page.</p>
        <p>Return to <Link href='/'>main</Link> page.</p>
    </main>
  )
}

export default NotFound