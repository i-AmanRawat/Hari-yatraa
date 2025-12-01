import MaxWidthWrapper from "@/components/max-width-wrapper";

export default function MapWrapper() {
  return (
    <section className="">
      <MaxWidthWrapper className="py-16 md:py-20">
        <div className="grid w-full grid-cols-1 gap-10 lg:grid-cols-2">
          <MapImage />
          <MapInfo />
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

function MapInfo() {
  return (
    <div className="flex content-center items-center rounded-3xl px-3">
      <div className="">
        <div className="">
          <h4 className="scroll-m-20 text-xl font-normal capitalize tracking-tight">
            our location
          </h4>
          <h3 className="mt-2 scroll-m-20 text-3xl font-semibold capitalize tracking-tight md:text-4xl">
            connecting near and future
          </h3>
        </div>
        <div className="mt-7">
          <h3 className="mb-2 scroll-m-20 text-2xl font-semibold tracking-tight">
            Headquaters
          </h3>
          <p className="text-muted-foreground">
            <span className="block">Snappy Inc.</span>
            <span className="block">San Francisco, USA</span>
            <span className="block">123 Tech Boulevard, Suite 456</span>
            <span className="block">San Francisco, CA 12345</span>
            <span className="block">United States</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function MapImage() {
  return (
    <div className="max-h-xl col-span-1">
      <img
        src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className=" rounded-3xl"
      />
    </div>
  );
}
