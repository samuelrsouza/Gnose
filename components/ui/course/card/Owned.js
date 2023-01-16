




const STATE_COLORS = {
  comprado: "yellow",
  ativo: "green",
  desativado: "red"
} 

export default function OwnedCourseCard({children, course}) {
  const stateColor = STATE_COLORS[course.state]

  return (
    <div className="bg-white border shadow overflow-hidden sm:rounded-lg mb-3">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          <span className="mr-3"> {course.title}</span>
          <span className={`text-xs p-2 text-${stateColor}-700 bg-${stateColor}-200 rounded-full`}> {course.state}</span>
        </h3>
        <h4 className="text-sm py-3 leading-6 font-medium text-gray-900">
            <dt className="text-sm font-medium text-gray-500">
              <span className="font-bold"> Habilidade:&nbsp; {course.skill} </span>
            </dt>
        </h4>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          Preço: &nbsp; {course.price}
        </p>
      </div>

      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-9 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              ID da Compra
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {course.ownedCourseId}
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Confirmação
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {course.proof}
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:px-6">
            {children}
          </div>
        </dl>
      </div>
    </div>
  )
}