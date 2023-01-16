







export default function List({courses, children}) {
  return (
    <section className="grid md:grid-cols-2 lg:grid-cols-2 gap-2 mb-5">
      { courses.map(course =>
        children(course)
      )}
    </section>
  )
}