
export default function SobreMi() {
  return (
    <section id="sobre-mi" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <img className="w-full rounded-xl shadow-md ring-1 ring-gray-200 object-cover aspect-[4/3]" src="https://res.cloudinary.com/dzoupwn0e/image/upload/v1758054424/foto_sobremi_1_zd1e7k.webp" alt="Pablo Pérez en su consultorio de biokinesiología" />
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">Sobre mí</h2>
          <p className="mt-3 text-gray-600 leading-relaxed">Soy el Lic. Pablo Pérez, kinesiólogo especializado en Biokinesiología. Con experiencia en tratamientos de salud y bienestar, me dedico a ayudar a mis pacientes a mejorar su calidad de vida a través de técnicas especializadas y tratamientos personalizados.</p>
          <p className="mt-3 text-gray-600 leading-relaxed">Mi enfoque se basa en la evaluación integral de cada paciente, combinando técnicas manuales especializadas con equipamiento moderno para lograr los mejores resultados de salud y bienestar en el menor tiempo posible.</p>
          
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-blue-600">8+</div>
              <div className="text-sm text-gray-600">Años de experiencia</div>
            </div>
            <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-blue-600">500+</div>
              <div className="text-sm text-gray-600">Pacientes tratados</div>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold text-gray-900 mb-3">Formación académica:</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                Licenciatura en Kinesiología - Universidad Nacional de Cuyo
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                Especialización en Biokinesiología
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                Curso de Técnicas Manuales en Biokinesiología
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}



