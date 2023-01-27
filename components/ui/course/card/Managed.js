import { useManagedCourses } from "@components/hooks/web3"







const Item = ({title, value, className}) => {

    return (
      <div className={`${className} px-4 py-5  sm:px-6`}>
        <div className="text-sm font-medium text-gray-500">
          {title}
        </div>
        <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          {value}
        </div>
      </div>
    )
  }
  
  
  export default function ManagedCourseCard({children, course, isSearched = false}) {
  
    return (
      <div className="bg-white border shadow overflow-hidden sm:rounded-lg mb-3">
        <div className="border-t border-gray-200 py-2">
            <Item
                className="bg-gray-100"
                title="ID da Compra"
                value={course.ownedCourseId}
            />
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
                className="bg-gray-100"
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