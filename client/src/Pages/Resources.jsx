import React from "react";
import pdf1 from "./pdf1.png";
import pdf2 from "./pdf2.png";
import audiobook1 from './wind__artic__cold-6195.mp3';

function Knowledge() {
  const pdfUrl1 = 'https://jnu.ac.in/Faculty/nilika/A%20READER%20ON%20DISABILITY%20STUDIES%20IN%20INDIA.pdf';
  const pdfUrl2 = 'https://files.eric.ed.gov/fulltext/ED496074.pdf';

  return (
    <div className="bg-gradient-to-r from-blue-200 to-blue-100">
      <div className="p-10 space-y-10">
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col md:flex-row space-y-4 md:space-x-4">
          <iframe
            src="https://www.youtube.com/embed/W3_RjJtd6Eo"
            className="w-full md:w-1/2 h-64 md:h-auto"
          ></iframe>
          <div className="flex-1">
            <h2 className="text-2xl font-bold mt-5">
              Disability vs the Workplace | Lesa Bradshaw | TEDxLytteltonWomen
            </h2>
            <p className="mt-5">
              This talk speaks about inclusivity of people with a disability in
              the workplace. Lesa talks about why we are struggling in this
              area, and what we need to do in order to open doors to the avenue
              of professionalism for People with a Disability. A local
              entrepreneur and HR consultant, Lesa Bradshaw, a partner at
              Bradshaw Le Roux Consulting, recruitment and assessment
              specialists and disability integration consultants, who was born
              with Spinal Muscular Atrophy, a condition that causes muscular
              weakness in all the voluntary muscles in the body.
            </p>
          </div>
        </div>
       
       
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col md:flex-row space-y-4 md:space-x-4">
          <iframe
            src="https://www.youtube.com/embed/i58Yw3p8ysw"
            className="w-full md:w-1/2 h-64 md:h-auto"
          ></iframe>
          <div className="flex-1">
            <h2 className="text-2xl font-bold mt-5">
              The Real Barrier to Inclusive Employment | Kim Morrison Noelle
              Alix | TEDxHartford
            </h2>
            <p className="mt-5">
              All businesses strive to have good employees. Individuals with
              intellectual and developmental disabilities (IDD) can be those
              good employees but are often not given an opportunity. See why
              these people can be a strong asset to a business. A restauranteur
              (Kim) and a finance attorney (Noelle) found the perfect
              partnership to advocate more an inclusive workforce. Inspired by
              their daughters who have Down Syndrome, they opened BeanZ & Co. as
              an inclusive coffee café employing individuals with and without
              intellectual and developmental disabilities (IDD).
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col md:flex-row space-y-4 md:space-x-4">
          <iframe
            src="https://www.youtube.com/embed/wbXxhuraJsE"
            className="w-full md:w-1/2 h-64 md:h-auto"
          ></iframe>
          <div className="flex-1">
            <h2 className="text-2xl font-bold mt-5">
              Creating Inclusive Workplaces for All | Catarina Rivera | TEDxRolandPark
            </h2>
            <p className="mt-5">
              Work isn’t working for all of us. In this powerful talk, Catarina Rivera tells us why employers and leaders have a lot of disabled employees they don’t know about, and shares how to make workplaces better for everyone by prioritizing disability inclusion. You’ll also learn 3 free and simple best practices for inclusion you can build into your culture right now. Catarina is a dynamic public speaker, DEI consultant, and content creator (@BlindishLatina). .
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col md:flex-row space-y-4 md:space-x-4">
          <iframe
            src="https://www.youtube.com/embed/twaKuhvYpss"
            className="w-full md:w-1/2 h-64 md:h-auto"
          ></iframe>
          <div className="flex-1">
            <h2 className="text-2xl font-bold mt-5">
              Disability and work: Let’s stop wasting talent | Hannah Barham-Brown | TEDxExeter
            </h2>
            <p className="mt-5">
              Disability is still a barrier to employment for millions of people – but it doesn’t have to be this way. Drawing on her own experience in the medical profession, Hannah Barham-Brown argues that people with disabilities are an asset more employers need to harness.
              Hannah Barham-Brown is a doctor, disability advocate and member of the British Medical Association Council. In 2018, she was named one of the UK’s 100 most influential disabled people on the Shaw Trust’s Disability Power 100 List for her work in medicine, politics and the media.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap ">
          <div className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
              <img
                className="w-full"
                src="https://sonstoriestesthome.files.wordpress.com/2021/01/disability-visibility.jpg?w=400"
                alt="Sunset in the mountains"
              />
              <div className="px-3 py-2">
                <div className="font-bold text-xl mb-2">
                  <h3>Audio 1</h3>
                </div>
                <audio controls className="w-full">
                  <source src={audiobook1} type="audio/mp3" />
                  Audio description or content goes here.
                </audio>
              </div>
            </div>
          </div>

          <div className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
              <img
                className="w-full"
                src="https://i.pinimg.com/originals/a6/a9/bf/a6a9bff5e23c9d9f545dddba8f70dabd.jpg"
                alt="Sunset in the mountains"
              />
              <div className="px-3 py-2">
                <div className="font-bold text-xl mb-2">
                  <h3>Audio 2</h3>
                </div>
                <audio controls className="w-full">
                  <source src={audiobook1} type="audio/mp3" />
                  Audio description or content goes here.
                </audio>
              </div>
            </div>
          </div>

          <div class="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
            <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
              <img
                class="w-full"
                src="https://fpg.unc.edu/sites/fpg.unc.edu/files/images/resources/Head%20Start%20Disabilities%20Services%20Newsletter%20from%20the%20National%20Center%20on%20Early%20Childhood%20Development%2C-1_2.jpg"
                alt="Sunset in the mountains"
              />
              <div class="px-3 py-2">
                <div class="font-bold text-xl mb-2">
                  <h3>The Benefits and Disadvantages of Inclusive Schooling: An Overview</h3>
                </div>
                <button
                  class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 mt-4"
                  onClick={() => window.open(pdfUrl2, '_blank')}
                >
                  View PDF 1
                </button>
              </div>
            </div>
          </div>

          <div class="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
            <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
              <img
                class="w-full"
                src="https://s3.studylib.net/store/data/006854872_1-6dc5d33dadfb10ef9aea27c3d1ac474f-768x994.png"
                alt="Sunset in the mountains"
              />
              <div class="px-3 py-2">
                <div class="font-bold text-xl mb-2">
                  <h3>A RESOURCE BOOK ON DISABILITY STUDIES IN INDIA</h3>
                </div>
                <button
                  class="bg-blue-500 hover.bg-blue-600 text-white font-semibold py-2 px-4 mt-4"
                  onClick={() => window.open(pdfUrl1, '_blank')}
                >
                  View PDF 2
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Knowledge;