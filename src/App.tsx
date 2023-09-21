import {
  Footer,
  DownloadOurApp,
  Hero,
  HomeDelivery,
  Nav,
  WhatWeServe,
  WhyChoseUs,
} from "@src/features";

function App() {
  return (
    <>
      <div className="py-4">
        <header className="pb-24">
          <Nav />
          <Hero />
        </header>
        <WhatWeServe />
        <WhyChoseUs />
        <HomeDelivery />
        <DownloadOurApp />
        <Footer />
      </div>
    </>
  );
}

export default App;
