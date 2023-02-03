


















export default function Keypoints({points}){
  return (
      <section>
        {/* <div className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mt-10">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                { points.map((point, i) =>
                  <div key={point} className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-900 text-white">
                      </div>
                      <p className="ml-16 text-lg leading-6 font-bold text-gray-900">
                        Tópico {i+1}
                      </p>
                    </dt>
                    <dd className="mt-1 ml-16 text-lg font-semibold  text-gray-500">
                      {point}
                    </dd>
                  </div>
                  )
                }
              </dl>
            </div>
          </div>
        </div> */}
        <div className="max-w-7xl mx-auto px-4 mr-11 sm:px-6 lg:px-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 mb-6 md:gap-x-2 md:gap-y-2">
            { points.map((point, i) =>
              <div key={point} className="relative">
                <dl>
                <div className="p-8 border border-gray-200 rounded bg-white w-64 hover:bg-gray-50 hover:border-b-4 hover:border-b-blue-500 active:bg-gray-100">
                  <div className="grid justify-items-center text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <div className="text-center mt-4">
                      <p className="text-lg leading-6 font-bold text-gray-900">
                        Tópico {i+1}
                      </p>
                    <dd className="mt-1 text-lg font-semibold  text-gray-500">
                      {point}
                    </dd>
                  </div>
                  </div>
                </dl>
              </div>
              )
            }
            </dl>
          </div>
      </section>
      
  )
}