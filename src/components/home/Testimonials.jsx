import { FaQuoteRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

const Testimonials = () => {
  return (
    <div className="container mx-auto">
      <div className="text-center space-y-3">
        <p className="font-bold text-primary">TESTIMONIALS</p>
        <h1 className="text-4xl font-bold">
          Loved by <span className="text-primary">families everywhere</span>
        </h1>
        <p className="text-gray-500 text-xl">
          See what our happy families have to say about their experience with
          Care Nest
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 my-8">
        <div className="bg-base-300 p-5 rounded-xl space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 text-yellow-500">
              <FaStar size={20} />
              <FaStar size={20} />
              <FaStar size={20} />
              <FaStar size={20} />
              <FaStar size={20} />
            </div>
            <FaQuoteRight size={32} className="opacity-30 text-primary" />
          </div>

          <p className="text-lg text-gray-700">
            &quot;Care.xyz has been a lifesaver for our family. The babysitters
            are professional, caring, and my kids absolutely love them!&quot;
          </p>

          <div className="flex items-center gap-3">
            <div className="text-xl font-bold rounded-full bg-primary/10 p-3 text-primary">
              FR
            </div>
            <div>
              <p className="text-xl font-bold">Fatima Rahman</p>
              <span className="text-gray-500">Mother of 2</span>
            </div>
          </div>
        </div>

        <div className="bg-base-300 p-5 rounded-xl space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 text-yellow-500">
              <FaStar size={20} />
              <FaStar size={20} />
              <FaStar size={20} />
              <FaStar size={20} />
              <FaStar size={20} />
            </div>
            <FaQuoteRight size={32} className="opacity-30 text-primary" />
          </div>

          <p className="text-lg text-gray-700">
            &quot;Care.xyz has been a lifesaver for our family. The babysitters
            are professional, caring, and my kids absolutely love them!&quot;
          </p>

          <div className="flex items-center gap-3">
            <div className="text-xl font-bold rounded-full bg-primary/10 p-3 text-primary">
              MH
            </div>
            <div>
              <p className="text-xl font-bold">Mohammad Hassan</p>
              <span className="text-gray-500">Son of elderly parents</span>
            </div>
          </div>
        </div>

        <div className="bg-base-300 p-5 rounded-xl space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 text-yellow-500">
              <FaStar size={20} />
              <FaStar size={20} />
              <FaStar size={20} />
              <FaStar size={20} />
              <FaStar size={20} />
            </div>
            <FaQuoteRight size={32} className="opacity-30 text-primary" />
          </div>

          <p className="text-lg text-gray-700">
            &quot;The booking process is so easy, and the caregivers always
            arrive on time. I can focus on work knowing my family is in good
            hands.&quot;
          </p>

          <div className="flex items-center gap-3">
            <div className="text-xl font-bold rounded-full bg-primary/10 p-3 text-primary">
              AB
            </div>
            <div>
              <p className="text-xl font-bold">Ayesha Begum</p>
              <span className="text-gray-500">Working Professional</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
