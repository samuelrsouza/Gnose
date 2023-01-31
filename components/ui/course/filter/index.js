






export default function CourseFilter({onFilterSelect}) {


  const OPTIONS = [
    "todos", "comprado", "ativo"
  ]

  return (
    <div className="flex justify-end flex-col md:flex-row items-center mr-10 my-4">
      <div className="relative text-gray-700 normal-case justify-center align-middle">
        <select 
          onChange={({target: {value}}) => onFilterSelect(value)}
          className="w-72 h-10 pl-3 capitalize pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline" placeholder="Regular input">
          { OPTIONS.map(option => <option key={option} value={option} >{option}</option>)}
          
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
        </div>
      </div>
    </div>
  )
}