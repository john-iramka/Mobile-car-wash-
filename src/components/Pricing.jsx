import { FaCheck, FaTimes } from 'react-icons/fa'

const plans = [
  {
    name: "Silver",
    price: "KES 4,500",
    period: "/mo",
    features: [
      { text: "2 Basic Washes", included: true },
      { text: "1 Interior Cleaning", included: true },
      { text: "Free Car Perfume", included: true },
      { text: "Priority Scheduling", included: false }
    ],
    color: "silver"
  },
  {
    name: "Gold",
    price: "KES 7,500",
    period: "/mo",
    features: [
      { text: "4 Basic Washes", included: true },
      { text: "2 Interior Cleanings", included: true },
      { text: "Free Add-ons", included: true },
      { text: "Priority Scheduling", included: true }
    ],
    color: "gold"
  },
  {
    name: "Platinum",
    price: "KES 12,000",
    period: "/mo",
    features: [
      { text: "Unlimited Basic Washes", included: true },
      { text: "4 Interior Cleanings", included: true },
      { text: "1 Full Detailing", included: true },
      { text: "All Add-ons Included", included: true }
    ],
    color: "platinum"
  }
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 px-4 bg-black text-white">
      <div className="container mx-auto">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-4">Subscription Plans</h2>
        <p className="text-center text-xl mb-12">Save with our monthly packages</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => {
            // Define colors
            const colors = {
              silver: {
                bg: "bg-gray-700",
                header: "bg-gray-400 text-black",
                border: "border border-gray-400",
                button: "border border-gray-400 text-gray-400 hover:bg-gray-400 hover:text-black"
              },
              gold: {
                bg: "bg-[#2a2a2a]",
                header: "bg-[#d4af37] text-black",
                border: "border border-[#d4af37]",
                button: "bg-[#d4af37] text-black hover:bg-[#c9a22e]"
              },
              platinum: {
                bg: "bg-gray-200 text-black",
                header: "bg-gray-100 text-black",
                border: "border border-gray-300",
                button: "border border-gray-400 text-black hover:bg-gray-400"
              }
            }

            const theme = colors[plan.color]

            return (
              <div
                key={index}
                className={`rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:-translate-y-1 ${theme.border} ${theme.bg}`}
              >
                <div className={`py-4 text-center ${theme.header}`}>
                  <h3 className="text-xl font-bold">{plan.name}</h3>
                </div>
                <div className="p-6">
                  <h4 className="text-center text-3xl font-bold mb-2">
                    {plan.price}<span className="text-gray-400 text-lg">/mo</span>
                  </h4>
                  <ul className="space-y-3 my-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        {feature.included ? (
                          <FaCheck className="text-[#d4af37] mt-1 mr-2" />
                        ) : (
                          <FaTimes className="text-gray-500 mt-1 mr-2" />
                        )}
                        <span className={feature.included ? "" : "text-gray-500"}>{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${theme.button}`}>
                    Get Started
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
