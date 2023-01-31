



const Item = ({title, value, className}) => {

    return (
      <div className={`${className} px-4 py-5 sm:px-6`}>
        <div className="text-sm font-medium text-gray-500">
          {title}
        </div>
        <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          {value}
        </div>
      </div>
    )
  }
  
  export default function ManagedCourseCard({children, course}) {
  
    return (
      <div className="bg-white justify-items-center mt-5 mr-12  ml-11 items-center border shadow overflow-hidden sm:rounded-lg mb-3">
        <div className="border-gray-200 py-2">
            <Item
                title="ID da Compra"
                value={course.ownedCourseId}
            />
            <div className=" px-4 py-5 sm:grid bg-gray-100 sm:grid-cols-9 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                ID do Curso
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {course.id}
              </dd>
            </div>
            <Item
                title="Hash da Compra"
                value={course.hash}
            />
            <Item
                className="bg-gray-100"
                title="Dono"
                value={course.owned}
            />
            <Item
                title="Status"
                value={course.state}
            />
                <div className="bg-white px-4 py-5 sm:px-6">
                    {children}
                </div>
            </div>
      </div>
    )
  }