import { StarIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'

type Testimonio = {
	nombre: string
	texto: string
	rating: number
	fecha: string
	fuente: string
	avatar: string
}

const testimonios: Testimonio[] = [
	{
		nombre: 'María S.',
		texto: 'Me atendí con Pablo y además de sentirme muchísimo mejor a nivel físico, lo recomiendo porque se nota que ama lo que hace.',
		rating: 5,
		fecha: 'Nov 2024',
		fuente: 'Google',
		avatar: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1770779838/unnamed_43_s30a8r.webp',
	},
	{
		nombre: 'Elena.',
		texto: 'Excelente profesional, dedicado y con vocación.',
		rating: 5,
		fecha: 'Oct 2026',
		fuente: 'Google',
		avatar: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1770779838/unnamed_45_odssh3.webp',
	},
	{
		nombre: 'Carla',
		texto: 'Tiene una energía tan linda que lo que te enseña, lo aprendes al toque y te queda para toda la vida.',
		rating: 5,
		fecha: 'Sep 2024',
		fuente: 'Doctoralia',
		avatar: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1770779838/unnamed_40_xl5xir.webp',
	},
	{
		nombre: 'Jesica',
		texto: 'Tu dedicación a la kinesiología es verdaderamente admirable. Sos un modelo a seguir. Gracias por cuidar la salud y el bienestar de tus pacientes.',
		rating: 5,
		fecha: 'Ago 2023',
		fuente: 'Google',
		avatar: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1770779838/unnamed_44_zogn5h.webp',
	},
	{
		nombre: 'Lucía P.',
		texto: 'Excelente profesional, responsable, comprometido, muy eficiente, abierto a las demandas, una persona muy humana, realmente recomendable.',
		rating: 5,
		fecha: 'Jul 2024',
		fuente: 'Doctoralia',
		avatar: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1770779838/unnamed_42_qvw2ky.webp',
	},
	{
		nombre: 'Diego F.',
		texto: 'Excelente en todo aspecto.',
		rating: 5,
		fecha: 'Jun 2024',
		fuente: 'Google',
		avatar: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1770779838/unnamed_41_nwufyw.webp',
	},
]

// Eliminado: ya no usamos iniciales para el avatar

export default function Testimonios() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonio = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonios.length)
  }

  const prevTestimonio = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonios.length) % testimonios.length)
  }

  const goToTestimonio = (index: number) => {
    setCurrentIndex(index)
  }


  const currentTestimonio = testimonios[currentIndex]

  return (
    <section id="testimonios" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">Testimonios</h2>
      </div>
      <p className="mt-2 text-gray-600 text-center max-w-2xl mx-auto">Lo que dicen mis pacientes sobre los tratamientos de biokinesiología.</p>

        {/* Carrusel de testimonios */}
        <div className="mt-10 relative">
          <div className="flex items-center justify-center">
            {/* Flecha izquierda */}
            <button
              onClick={prevTestimonio}
              className="absolute left-0 z-10 p-2 rounded-full bg-white shadow-lg border border-gray-200 hover:bg-gray-50 transition-colors"
              aria-label="Testimonio anterior"
            >
              <ChevronLeftIcon className="h-6 w-6 text-gray-600" />
            </button>

            {/* Testimonio actual */}
            <div className="max-w-2xl mx-auto px-12">
              <blockquote className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={currentTestimonio.avatar} 
                    alt={`Foto de ${currentTestimonio.nombre}`} 
                    className="h-12 w-12 rounded-full object-cover ring-1 ring-gray-200" 
                  />
                  <div>
                    <div className="font-medium text-gray-900">{currentTestimonio.nombre}</div>
                    <div className="text-sm text-gray-500">{currentTestimonio.fuente} • {currentTestimonio.fecha}</div>
                  </div>
                </div>

                <div className="flex items-center gap-1 mb-4" aria-label={`${currentTestimonio.rating} de 5`}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} className={`h-5 w-5 ${i < currentTestimonio.rating ? 'text-orange-400' : 'text-gray-300'}`} />
                  ))}
                </div>

                <p className="text-gray-700 text-lg leading-relaxed">"{currentTestimonio.texto}"</p>
              </blockquote>
            </div>

            {/* Flecha derecha */}
            <button
              onClick={nextTestimonio}
              className="absolute right-0 z-10 p-2 rounded-full bg-white shadow-lg border border-gray-200 hover:bg-gray-50 transition-colors"
              aria-label="Siguiente testimonio"
            >
              <ChevronRightIcon className="h-6 w-6 text-gray-600" />
            </button>
          </div>

          {/* Indicadores de posición */}
          <div className="flex justify-center mt-6 gap-2">
            {testimonios.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonio(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex 
                    ? 'bg-blue-600' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Ir al testimonio ${index + 1}`}
              />
            ))}
          </div>

          {/* Contador de testimonios */}
          <div className="text-center mt-4">
            <span className="text-sm text-gray-500">
              {currentIndex + 1} de {testimonios.length}
            </span>
          </div>
        </div>

      </div>
    </section>
  )
}




