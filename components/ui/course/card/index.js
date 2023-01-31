import Image from "next/image"
import Link from "next/link"

export default function Card({course, disabled, Footer}) {
  return (
    <div
      className="bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl ml-10">
        {/* <Image
            className={`object-cover rounded-sm ${disabled && "filter grayscale"}`}
            src={course.coverImage}
            width="250"
            height="250"
            alt={course.title}
          /> */}
      <div className="h-full">
        <div className="p-8 pb-4 flex-2 tracking-wider">
          <div
            className="text-xs text-indigo-900 uppercase font-bold tracking-wider">
            {course.type}
          </div>
          <Link href={`/courses/${course.slug}`}
              className="h-12 block mt-1 text-sm sm:text-lg leading-tight font-medium text-black hover:underline">
              {course.title}
          </Link>
          <p
            className="mt-2 text-sm sm:text-base text-slate-600">
            {course.description}
          </p>
          { Footer &&
          <div className="mt-4">
            <Footer />
          </div>
          }
        </div>
      </div>
    </div>
  )
}