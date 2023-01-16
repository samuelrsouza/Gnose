import Image from "next/image"


  
  export default function PortfolioCard({course, badge}) {

  
    return (
      <div className="max-w-xs py-4 px-12 bg-white shadow-lg flex-col align-middle justify-center rounded-lg my-10">
          <div>
            {/* <h2 className="text-gray-800 text-lg font-semibold">
              Habilidade:
            </h2> */}
            <Image
              className="justify-center bg-white overflow-hidden md:max-w-2xl mx-auto"
              src={badge}
              alt="Badge"
              width={150} 
              height={150}
            />
          </div>
        <div className="mt-4">
          <a className="text-xl flex font-medium justify-center text-indigo-500">
            {course.skill}
          </a>
        </div>
    </div>
    )
  }