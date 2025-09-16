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
		texto: 'Después de mi cirugía de rodilla, Pablo me ayudó a recuperar completamente la movilidad. Su profesionalismo y calidez humana son excepcionales.',
		rating: 5,
		fecha: 'Nov 2024',
		fuente: 'Google',
		avatar: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1753711317/photo-1544005313-94ddf0286df2_qicg9u.webp',
	},
	{
		nombre: 'Carlos R.',
		texto: 'Llegué con una lesión deportiva y gracias al tratamiento de Pablo pude volver a jugar fútbol sin dolor. Muy recomendable.',
		rating: 5,
		fecha: 'Oct 2024',
		fuente: 'Google',
		avatar: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1753711316/photo-1500648767791-00dcc994a43e_alwlur.webp',
	},
	{
		nombre: 'Elena M.',
		texto: 'La evaluación muscular que me realizó fue excelente. Noté mejoras desde la primera sesión. Un gran profesional.',
		rating: 5,
		fecha: 'Sep 2024',
		fuente: 'Doctoralia',
		avatar: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1755631766/photo-1502685104226-ee32379fefbe_dc6oxf.webp',
	},
	{
		nombre: 'Roberto J.',
		texto: 'Después de mi ACV, el tratamiento de biokinesiología de Pablo fue fundamental para mi recuperación. Excelente atención.',
		rating: 5,
		fecha: 'Ago 2024',
		fuente: 'Google',
		avatar: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1753711316/photo-1500648767791-00dcc994a43e_alwlur.webp',
	},
	{
		nombre: 'Lucía P.',
		texto: 'Mi problema de movilidad mejoró mucho con las sesiones. Pablo es muy dedicado y explica todo el proceso claramente.',
		rating: 5,
		fecha: 'Jul 2024',
		fuente: 'Doctoralia',
		avatar: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1753711317/photo-1544005313-94ddf0286df2_qicg9u.webp',
	},
	{
		nombre: 'Diego F.',
		texto: 'Excelente profesional. Me trató una contractura cervical y el alivio fue inmediato. Muy recomendable en Mendoza.',
		rating: 5,
		fecha: 'Jun 2024',
		fuente: 'Google',
		avatar: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1755631766/photo-1502685104226-ee32379fefbe_dc6oxf.webp',
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
        <p className="mt-1 text-sm text-orange-600 font-medium">Reemplazar por los reales</p>
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

        <div className="mt-8 text-center">
          <a href="#contacto" className="inline-block text-blue-600 font-medium hover:underline">Ver más testimonios</a>
        </div>
      </div>
    </section>
  )
}




