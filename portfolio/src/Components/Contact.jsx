import React from "react";

function Contact() {
  return (
    <div>
      <section class="text-gray-600 body-font relative">
        <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              class="absolute inset-0"
              frameborder="0"
              title="map"
              marginheight="0"
              marginwidth="0"
              scrolling="no"
              src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
            ></iframe>
            <div class="bg-white relative flex flex-wrap py-6 rounded shadow-md">
              <div class="lg:w-1/2 px-6">
                <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p class="mt-1">
                  Photo booth tattooed prism, portland taiyaki hoodie neutra
                  typewriter
                </p>
              </div>
              <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  EMAIL
                </h2>
                <a class="text-yellow-500 leading-relaxed">example@email.com</a>
                <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p class="leading-relaxed">123-456-7890</p>
              </div>
            </div>
          </div>
          <div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
              Feedback
            </h2>
            <p class="leading-relaxed mb-5 text-gray-600">
              Post-ironic portland shabby chic echo park, banjo fashion axe
            </p>
            <div class="relative mb-4">
              <label for="name" class="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                class="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                autofill-information="overall type: UNKNOWN_TYPE
html type: HTML_TYPE_UNSPECIFIED
server type: NO_SERVER_DATA
heuristic type: UNKNOWN_TYPE
label: Name
parseable name: name
section: -default
field signature: 3489289364
form signature: 4371988963098691354
form signature in host form: 2748885565166093976
alternative form signature: 7066530143904048751
field frame token: 592A9DD62A9287309832E2AF263CE391
form renderer id: 0
field renderer id: 197
visible: false
focusable: false
field rank: 1
field rank in signature group: 0
field rank in host form: 1
field rank in host form signature group: 0"
                title="overall type: UNKNOWN_TYPE
html type: HTML_TYPE_UNSPECIFIED
server type: NO_SERVER_DATA
heuristic type: UNKNOWN_TYPE
label: Name
parseable name: name
section: -default
field signature: 3489289364
form signature: 4371988963098691354
form signature in host form: 2748885565166093976
alternative form signature: 7066530143904048751
field frame token: 592A9DD62A9287309832E2AF263CE391
form renderer id: 0
field renderer id: 197
visible: false
focusable: false
field rank: 1
field rank in signature group: 0
field rank in host form: 1
field rank in host form signature group: 0"
                autofill-prediction="UNKNOWN_TYPE"
              />
            </div>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                class="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                autofill-information="overall type: UNKNOWN_TYPE
html type: HTML_TYPE_UNSPECIFIED
server type: NO_SERVER_DATA
heuristic type: UNKNOWN_TYPE
label: Email
parseable name: email
section: -default
field signature: 1029417091
form signature: 4371988963098691354
form signature in host form: 2748885565166093976
alternative form signature: 7066530143904048751
field frame token: 592A9DD62A9287309832E2AF263CE391
form renderer id: 0
field renderer id: 198
visible: false
focusable: false
field rank: 2
field rank in signature group: 0
field rank in host form: 2
field rank in host form signature group: 0"
                title="overall type: UNKNOWN_TYPE
html type: HTML_TYPE_UNSPECIFIED
server type: NO_SERVER_DATA
heuristic type: UNKNOWN_TYPE
label: Email
parseable name: email
section: -default
field signature: 1029417091
form signature: 4371988963098691354
form signature in host form: 2748885565166093976
alternative form signature: 7066530143904048751
field frame token: 592A9DD62A9287309832E2AF263CE391
form renderer id: 0
field renderer id: 198
visible: false
focusable: false
field rank: 2
field rank in signature group: 0
field rank in host form: 2
field rank in host form signature group: 0"
                autofill-prediction="UNKNOWN_TYPE"
              />
            </div>
            <div class="relative mb-4">
              <label for="message" class="leading-7 text-sm text-gray-600">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                class="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                autofill-information="overall type: UNKNOWN_TYPE
html type: HTML_TYPE_UNSPECIFIED
server type: NO_SERVER_DATA
heuristic type: UNKNOWN_TYPE
label: Message
parseable name: message
section: -default
field signature: 4239419590
form signature: 4371988963098691354
form signature in host form: 2748885565166093976
alternative form signature: 7066530143904048751
field frame token: 592A9DD62A9287309832E2AF263CE391
form renderer id: 0
field renderer id: 199
visible: false
focusable: false
field rank: 3
field rank in signature group: 0
field rank in host form: 3
field rank in host form signature group: 0"
                title="overall type: UNKNOWN_TYPE
html type: HTML_TYPE_UNSPECIFIED
server type: NO_SERVER_DATA
heuristic type: UNKNOWN_TYPE
label: Message
parseable name: message
section: -default
field signature: 4239419590
form signature: 4371988963098691354
form signature in host form: 2748885565166093976
alternative form signature: 7066530143904048751
field frame token: 592A9DD62A9287309832E2AF263CE391
form renderer id: 0
field renderer id: 199
visible: false
focusable: false
field rank: 3
field rank in signature group: 0
field rank in host form: 3
field rank in host form signature group: 0"
                autofill-prediction="UNKNOWN_TYPE"
                data-gramm="false"
                wt-ignore-input="true"
              ></textarea>
            </div>
            <button class="text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">
              Button
            </button>
            <p class="text-xs text-gray-500 mt-3">
              Chicharrones blog helvetica normcore iceland tousled brook viral
              artisan.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;