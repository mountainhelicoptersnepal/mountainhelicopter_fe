const stats = [
  {
    value: '17+ Years',
    label: 'of Flying Beyond Expectations',
    sub: 'Est. Kathmandu, 2009 July 20th',
  },
  {
    value: '365 Days',
    label: 'Always Ready to Fly',
    sub: 'Prepared for every mission, every day.',
  },
  {
    value: 'Safety First',
    label: 'More than a promise, it is our foundation.',
    sub: 'Because every journey matters.',
  },
  {
    value: 'CAAN Certified',
    label: "Licensed to operate under Nepal's civil aviation regulations.",
    sub: 'Delivering every flight with safety, precision and professionalism.',
  },
  {
    value: 'Premium Fleet',
    label: 'Airbus AS350 | B3e Helicopters',
    sub: "Engineered to navigate Nepal's diverse terrain with confidence.",
  },
]

export default function StateSection() {
  return (
    <div className="py-10 px-[125px] border-t-[0.83px] border-white/10 flex flex-col w-full h-fit bg-[#001A33]">
      <section className="flex flex-row w-[1190px] h-fit justify-between items-center mx-auto">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className={`flex flex-col h-fit w-[205px] ${
              index < stats.length - 1 ? 'border-r border-white/25 pr-6' : ''
            }`}
          >
            {/* Value: 32px, Bold, Gold #F2B632 */}
            <h3 className="text-[#F2B632] font-serif text-[32px] font-bold leading-[32px] mb-2">
              {stat.value}
            </h3>
            
            {/* Label: 11px, SemiBold, Uppercase, White */}
            <p className="text-white text-[11px] font-semibold uppercase leading-[14px] mb-1">
              {stat.label}
            </p>
            
            {/* Sub text: 9px, Regular, Uppercase, White/Gray */}
            <p className="text-white/70 text-[9px] font-normal uppercase leading-[20px]">
              {stat.sub}
            </p>
          </div>
        ))}
      </section>
    </div>
  )
}