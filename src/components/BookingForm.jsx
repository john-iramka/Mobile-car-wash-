import { useState, useEffect } from "react";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    carType: "",
    serviceType: "",
    date: "",
    notes: "",
  });

  const [timeSlots, setTimeSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [queue, setQueue] = useState([]);

  // Generate demo time slots
  useEffect(() => {
    const startHour = 8;
    const endHour = 17;
    let slots = [];
    for (let hour = startHour; hour <= endHour; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const timeString = `${hour.toString().padStart(2, "0")}:${minute
          .toString()
          .padStart(2, "0")}`;
        slots.push({
          time: timeString,
          booked: Math.random() > 0.7, // random demo availability
        });
      }
    }
    setTimeSlots(slots);
  }, []);

  const estimatedWait = queue.length * 15; // 15 mins per car

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBooking = (e) => {
    e.preventDefault();

    if (!formData.carType || !formData.serviceType || !formData.date || !selectedSlot) {
      alert("Please complete all required fields and select a time slot.");
      return;
    }

    const newBooking = {
      ...formData,
      time: selectedSlot,
    };
    setQueue([...queue, newBooking]);

    // mark slot as booked
    setTimeSlots((prev) =>
      prev.map((slot) =>
        slot.time === selectedSlot ? { ...slot, booked: true } : slot
      )
    );

    alert(`Booking confirmed for ${formData.date} at ${selectedSlot}!`);

    // reset form
    setFormData({
      carType: "",
      serviceType: "",
      date: "",
      notes: "",
    });
    setSelectedSlot(null);
  };

  return (
    <section id="book" className="bg-[#1e1e1e] py-16 px-4 text-white">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="w-full lg:w-4/5">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Book Your Car Wash
              </h2>
              <p className="text-xl">
                Select your service, choose an available slot, and join the queue
              </p>
            </div>

            <form
              onSubmit={handleBooking}
              className="glass-effect-gold rounded-xl p-6 md:p-8 mb-12"
            >
              {/* Car Type + Service */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="carType" className="block mb-2">
                    Car Type
                  </label>
                  <select
                    id="carType"
                    name="carType"
                    value={formData.carType}
                    onChange={handleChange}
                    className="w-full p-3 rounded bg-[#1e1e1e] border border-[#444] focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] outline-none"
                    required
                  >
                    <option value="">Select car type</option>
                    <option value="Toyota">Toyota</option>
                    <option value="Honda">Honda</option>
                    <option value="Ford">Ford</option>
                    <option value="BMW">BMW</option>
                    <option value="Mercedes">Mercedes</option>
                    <option value="Audi">Audi</option>
                    <option value="Tesla">Tesla</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="serviceType" className="block mb-2">
                    Service Type
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full p-3 rounded bg-[#1e1e1e] border border-[#444] focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] outline-none"
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="Basic Wash">Basic Wash (KES 1,200)</option>
                    <option value="Interior Cleaning">
                      Interior Cleaning (KES 2,500)
                    </option>
                    <option value="Full Detailing">Full Detailing (KES 5,000)</option>
                    <option value="Silver Package">
                      Silver Package (KES 4,500/mo)
                    </option>
                    <option value="Gold Package">
                      Gold Package (KES 7,500/mo)
                    </option>
                    <option value="Platinum Package">
                      Platinum Package (KES 12,000/mo)
                    </option>
                  </select>
                </div>
              </div>

              {/* Date */}
              <div className="mb-6">
                <label htmlFor="date" className="block mb-2">
                  Preferred Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  min={new Date().toISOString().split("T")[0]}
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full p-3 rounded bg-[#1e1e1e] border border-[#444] focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] outline-none"
                  required
                />
              </div>

              {/* Time Slots */}
              <div className="mb-6">
                <label className="block mb-2">Select Time Slot</label>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot.time}
                      type="button"
                      disabled={slot.booked}
                      onClick={() => setSelectedSlot(slot.time)}
                      className={`p-2 rounded text-sm ${
                        slot.booked
                          ? "bg-gray-700 cursor-not-allowed"
                          : selectedSlot === slot.time
                          ? "bg-[#d4af37] text-black"
                          : "bg-[#2a2a2a] hover:bg-[#444]"
                      }`}
                    >
                      {slot.time}
                    </button>
                  ))}
                </div>
              </div>

              {/* Notes */}
              <div className="mb-8">
                <label htmlFor="notes" className="block mb-2">
                  Special Instructions
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows="3"
                  className="w-full p-3 rounded bg-[#1e1e1e] border border-[#444] focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] outline-none"
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors"
                >
                  Confirm Booking
                </button>
              </div>
            </form>

            {/* Queue Section */}
            <div className="glass-effect-gold rounded-xl p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-6">Vehicles in Queue</h3>
              {queue.length === 0 ? (
                <p className="text-gray-400">No vehicles in queue yet.</p>
              ) : (
                <div className="space-y-4">
                  {queue.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between items-center bg-[#2a2a2a] p-4 rounded"
                    >
                      <div>
                        <p className="font-semibold">{item.carType}</p>
                        <p className="text-sm text-gray-400">
                          {item.serviceType}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm">{item.date}</p>
                        <p className="font-semibold">{item.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              <div className="mt-6 text-center">
                <h4 className="text-lg font-semibold">
                  Estimated Wait: ~ {estimatedWait} minutes
                </h4>
              </div>
            </div>

            {/* WhatsApp Option */}
            <div className="text-center mt-6">
              <p>
                Prefer to chat?{" "}
                <a
                  href="https://wa.me/254712345678"
                  className="text-[#d4af37] font-bold"
                >
                  Message us on WhatsApp
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
