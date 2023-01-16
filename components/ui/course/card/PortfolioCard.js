
  
  export default function PortfolioCard({course}) {
  
    return (
      <div class="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
          <div>
            <h2 class="text-gray-800 text-lg font-semibold">
              Habilidade:
            </h2>
            <p class="mt-2 text-gray-600"></p>
          </div>
        <div class="flex justify-end mt-4">
          <a class="text-xl font-medium text-indigo-500">{course.skill}</a>
        </div>
    </div>
    )
  }