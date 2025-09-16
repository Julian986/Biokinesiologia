import { SparklesIcon, HeartIcon, FireIcon, ShieldCheckIcon, UserIcon, CogIcon } from '@heroicons/react/24/outline'

const servicios = [
  {
    icon: SparklesIcon,
    titulo: 'Evaluación muscular',
    descripcion: 'Técnicas especializadas para evaluar la función muscular y detectar desequilibrios en el sistema musculoesquelético.',
  },
  {
    icon: FireIcon,
    titulo: 'Terapia manual',
    descripcion: 'Técnicas manuales para mejorar la movilidad articular y reducir tensiones musculares.',
  },
  {
    icon: HeartIcon,
    titulo: 'Rehabilitación funcional',
    descripcion: 'Programas de rehabilitación para recuperar la función y mejorar la calidad de vida.',
  },
  {
    icon: ShieldCheckIcon,
    titulo: 'Biokinesiología aplicada',
    descripcion: 'Tratamientos especializados basados en los principios de la biokinesiología.',
  },
  {
    icon: UserIcon,
    titulo: 'Prevención de lesiones',
    descripcion: 'Evaluación y programas preventivos para evitar lesiones y mantener la salud.',
  },
  {
    icon: CogIcon,
    titulo: 'Terapias combinadas',
    descripcion: 'Tratamientos integrales que combinan diferentes técnicas para resultados óptimos.',
  },
]

export default function Servicios() {
  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 text-center">Servicios de Biokinesiología</h2>
        <p className="mt-2 text-gray-600 text-center max-w-2xl mx-auto">Ofrezco tratamientos especializados en biokinesiología con técnicas modernas y un enfoque integral para tu salud y bienestar.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {servicios.map(({ icon: Icon, titulo, descripcion }) => (
            <div key={titulo} className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-white border border-blue-200 text-blue-600 flex items-center justify-center">
                <Icon className="w-7 h-7" />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{titulo}</h3>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">{descripcion}</p>
              <a href="#contacto" className="mt-4 inline-block text-blue-600 font-medium hover:underline">Más información</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}



