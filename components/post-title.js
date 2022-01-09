// The styles for the title of a blog post

export default function PostTitle({ children }) {
  return (
    <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight md:leading-none mb-16 text-center md:text-left py-0 font-argentum">
      {children}
    </h1>
  )
}
